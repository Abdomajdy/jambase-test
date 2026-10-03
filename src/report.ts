import { findUser } from './users.js';

export function weeklyReport(id: string): string {
  return `Report for ${findUser(id).name}`;
}
