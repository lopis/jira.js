import { User } from '../models';

export interface AssignIssue extends Omit<User, 'accountId'> {
  /** The ID or key of the issue to be assigned. */
  issueIdOrKey: string;

  /**
   * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example,
   * *5b10ac8d82e05b22cc7d4ef5*. If passed `null` it will unassigned issue.
   */
  accountId: string | null;
}
