/** One stop on the professional journey timeline. */
export interface JourneyItem {
  id: string;
  place: string;
  period: string;
  description: string;
  /** Marks the current/active stop, styled distinctly on the timeline. */
  current?: boolean;
}
