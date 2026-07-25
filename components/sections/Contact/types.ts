/** The contact form's own state machine — distinct from the submission
 * result's success/failure, since "submitting" is a state no submission
 * result represents. */
export type FormStatus = "idle" | "submitting" | "success" | "error";
