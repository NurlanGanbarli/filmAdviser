import { Token } from './token';

export class User {
  id: number;
  login: string;
  username: string;
  email: string;
  token: Token;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
