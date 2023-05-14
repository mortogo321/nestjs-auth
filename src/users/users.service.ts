import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  // Demo User Data for test only
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Demo User',
      username: 'demo',
      password: bcrypt.hashSync(
        'demo',
        this.configService.get('app.bcrypt.saltRounds'),
      ),
    },
    {
      id: 1,
      name: 'Sub User',
      username: 'sub',
      password: bcrypt.hashSync(
        'sub',
        this.configService.get('app.bcrypt.saltRounds'),
      ),
    },
  ];
}
