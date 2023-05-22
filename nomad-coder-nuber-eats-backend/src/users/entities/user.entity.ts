import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';

type UserRole = 'client' | 'delivery' | 'owner';

@Entity()
export class User extends CoreEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}
