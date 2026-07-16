import Link from "next/link";
import { Star, Users } from "lucide-react";

import { GitHubIcon } from "@/components/shared/brand-icons";
import { Button } from "@/components/ui/button";
import type { GitHubStats } from "@/lib/github";
import { siteConfig } from "@/lib/site-config";

export interface GitHubSectionProps {
  stats: GitHubStats;
}

/**
 * GitHub profile summary + recent repositories.
 *
 * Note: this shows *recently updated* repos, not truly "pinned" ones —
 * pinned-repo status is only exposed via GitHub's authenticated GraphQL
 * API, not the public REST API this uses. Labeled honestly as "Recent
 * Repositories" rather than claiming curation that isn't happening.
 *
 * Server Component: `stats` arrives as already-resolved plain data (no
 * functions), so no client boundary is needed here at all.
 */
export function GitHubSection({ stats }: GitHubSectionProps) {
  const { profile, live } = stats;

  return (
    <div className="flex flex-col gap-8">
      <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed text-pretty">
        Every project above is public on GitHub code, commit history, and all.
        Here&rsquo;s the profile behind it.
      </p>

      <div className="border-border bg-surface/60 flex flex-col gap-5 rounded-2xl border p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
            <GitHubIcon className="text-primary h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-foreground text-base font-semibold">
              @{profile.login || "github"}
            </h3>
            {live ? (
              <p className="text-muted-foreground flex items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  {profile.publicRepos} public repos
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" aria-hidden="true" />
                  {profile.followers} followers
                </span>
              </p>
            ) : (
              <p className="text-muted-foreground text-sm">
                Live stats unavailable right now — view the profile directly.
              </p>
            )}
          </div>
        </div>

        <Button asChild variant="outline" className="rounded-full">
          {live ? (
            <Link href={profile.htmlUrl} target="_blank" rel="noreferrer">
              <GitHubIcon className="h-4 w-4" />
              View Profile
            </Link>
          ) : (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              View Profile
            </Link>
          )}
        </Button>
      </div>
    </div>
  );
}
