import { getUser } from './users.js';

export function profileHeader(id: string): string {
  return `Hello, ${getUser(id).name}`;
}
