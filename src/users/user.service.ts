import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UsersRepository } from './user.repository';
import { CreateUserDto } from './dtos/request/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne(id);
  }

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    return this.usersRepository.create(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.remove(id);
  }
}
