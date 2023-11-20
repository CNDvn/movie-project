import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
@Injectable()
export class UserManagementSvcService implements OnModuleInit {
  private authService: any;
  constructor(
    @Inject('AUTH_PACKAGE') private client: ClientGrpc,
    private httpService: HttpService,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService('AuthService');
  }

  public async signIn() {
    const a = await firstValueFrom(
      this.httpService.get('google.com').pipe(map((res) => res.data)),
    );
    console.log(a);

    return this.authService.signIn({ id: 2 });
  }

  public async signUp() {
    return this.authService.signUp({ id: 1 });
  }

  async signOut() {
    return await this.authService.signOut();
  }
}
