import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async signIn(accountId: number) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === accountId);
  }

  public async signUp(accountId: number) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === accountId);
  }

  public async signOut(accountId: number) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === accountId);
  }
}
