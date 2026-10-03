export interface User {
  id: string;
  name: string;
}

export function findUser(id: string): User {
  return { id, name: 'Ada' };
}
