import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreatePostHandler } from './commands/create-post.handler.ts';
import { PostController } from './post.controller.ts';
import { PostEntity } from './post.entity.ts';
import { PostService } from './post.service.ts';
import { GetPostHandler } from './queries/get-post.handler.ts';

const handlers = [CreatePostHandler, GetPostHandler];

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService, ...handlers],
  controllers: [PostController],
})
export class PostModule { }
