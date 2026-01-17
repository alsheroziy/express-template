import { User } from '@/models/user.model';
import { IUser } from '@/interfaces/user.interface';

export class UserRepository {
  async findAll() {
    return User.find();
  }

  async findById(id: string) {
    return User.findById(id);
  }

  async create(data: IUser) {
    return User.create(data);
  }

  async update(id: string, data: Partial<IUser>) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return User.findByIdAndDelete(id);
  }
}
