import type { Relation } from 'typeorm';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { UserEntity } from '../user/user.entity.ts';
import { PostDto } from './dtos/post.dto.ts';

@Entity({ name: 'posts' })
@UseDto(PostDto)
export class PostEntity extends AbstractEntity<PostDto> {
  @Column({ type: 'uuid' })
  userId!: Uuid;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: Relation<UserEntity>;
}
