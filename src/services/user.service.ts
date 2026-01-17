import { UserRepository } from '@/repositories/user.repository';
import { IUser } from '@/interfaces/user.interface';

const userRepository = new UserRepository();

export class UserService {
  async getAll() {
    return userRepository.findAll();
  }

  async getById(id: string) {
    return userRepository.findById(id);
  }

  async create(data: IUser) {
    return userRepository.create(data);
  }

  async update(id: string, data: Partial<IUser>) {
    return userRepository.update(id, data);
  }

  async delete(id: string) {
    return userRepository.delete(id);
  }
}
