import { siteConfig } from "@/lib/site-config";

export interface GitHubProfile {
  login: string;
  name: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  htmlUrl: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  language: string | null;
}

export interface GitHubStats {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  /** False when live data couldn't be fetched (rate limit, network, etc.) —
   * callers should render a lighter-weight fallback UI in that case. */
  live: boolean;
}

/** Extracts the username from a github.com profile URL, e.g.
 * "https://github.com/naeem-noor" → "naeem-noor". */
function extractUsername(githubUrl: string): string | null {
  try {
    const { pathname } = new URL(githubUrl);
    const [username] = pathname.split("/").filter(Boolean);
    return username ?? null;
  } catch {
    return null;
  }
}

/**
 * Fetches real public GitHub profile + repository data server-side.
 *
 * The unauthenticated GitHub REST API allows only 60 requests/hour per IP —
 * genuinely easy to hit from a shared CI/sandbox network, confirmed while
 * building this. `GITHUB_TOKEN` (optional) raises that to 5,000/hour if
 * set. Either way, any failure here (rate limit, network, malformed
 * response) falls back to a minimal static shape rather than throwing —
 * an external API being briefly unavailable should never break the build
 * or the page.
 */
export async function getGitHubStats(): Promise<GitHubStats> {
  const username = extractUsername(siteConfig.links.github);

  const fallback: GitHubStats = {
    profile: {
      login: username ?? "",
      name: null,
      bio: null,
      publicRepos: 0,
      followers: 0,
      htmlUrl: siteConfig.links.github,
    },
    repos: [],
    live: false,
  };

  if (!username) return fallback;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {}),
  };

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
        { headers, next: { revalidate: 3600 } },
      ),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      throw new Error(
        `GitHub API responded ${profileRes.status}/${reposRes.status}`,
      );
    }

    const profileJson = await profileRes.json();
    const reposJson = await reposRes.json();

    if (!Array.isArray(reposJson)) {
      throw new Error("Unexpected GitHub repos response shape");
    }

    return {
      profile: {
        login: profileJson.login ?? username,
        name: profileJson.name ?? null,
        bio: profileJson.bio ?? null,
        publicRepos: profileJson.public_repos ?? 0,
        followers: profileJson.followers ?? 0,
        htmlUrl: profileJson.html_url ?? siteConfig.links.github,
      },
      repos: reposJson.slice(0, 6).map((repo) => ({
        name: repo.name as string,
        description: (repo.description as string | null) ?? null,
        htmlUrl: repo.html_url as string,
        stars: (repo.stargazers_count as number) ?? 0,
        language: (repo.language as string | null) ?? null,
      })),
      live: true,
    };
  } catch {
    return fallback;
  }
}
