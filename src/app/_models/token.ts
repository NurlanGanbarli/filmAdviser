export class Token {
  expires_in: number;
  access_token: string;
  refresh_token: string;

  constructor(init?: Partial<Token>) {
    Object.assign(this, init);
  }
}
