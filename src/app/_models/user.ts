export class User {
  id: number;
  login: string;
  username: string;
  email: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
