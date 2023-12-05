import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';
import * as ums from 'ums-proto';
import { EClientName } from '../clients';
@Injectable()
export class UserManagementSvcService implements OnModuleInit {
  private authService: ums.AuthService;
  constructor(
    @Inject(EClientName.USER_MANAGEMENT_SVC) private client: ClientGrpc,
    private httpService: HttpService,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService(ums.AuthService.name);
  }

  public async signIn() {
    // const a = await firstValueFrom(
    //   this.httpService.get('google.com').pipe(map((res) => res.data)),
    // );
    // console.log(a);
    return this.authService.signIn({ username: 'duchieu', password: 'test' });
  }

  public async signUp() {
    return this.authService.signUp({
      username: 'duchieu',
      password: 'test',
      name: 'Hieu ne',
      birthDay: '11/08/2000',
    });
  }

  async signOut() {
    return await this.authService.signOut({ token: 'test' });
  }
}
