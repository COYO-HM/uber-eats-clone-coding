import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      // check new user
      const exists = await this.users.findOne({ where: { email } });
      if (exists) {
        // make error
        return 'There is a user with that email already';
      }
      // create user & hash the password
      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      // make error
      return 'Could not create account';
    }
  }
}
