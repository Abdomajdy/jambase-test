import { getUser } from './users.js';

export function weeklyReport(id: string): string {
  return `Report for ${getUser(id).name}`;
}
