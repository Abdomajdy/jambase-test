export interface User {
  id: string;
  name: string;
}

export function lookupUser(id: string): User {
  return { id, name: 'Ada' };
}
