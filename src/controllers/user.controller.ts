import { Request, Response } from 'express';
import { UserService } from '@/services/user.service';

const userService = new UserService();

export class UserController {
  getAll = async (_req: Request, res: Response) => {
    const users = await userService.getAll();
    res.json(users);
  };

  getById = async (req: Request, res: Response) => {
    const user = await userService.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  };

  create = async (req: Request, res: Response) => {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  };

  update = async (req: Request, res: Response) => {
    const user = await userService.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  };

  delete = async (req: Request, res: Response) => {
    const user = await userService.delete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  };
}
