import { Module } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { FeedsController } from './feeds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedRepository } from './feeds.repository';
import { Feed } from './entities/feed.entity';
import { LikeRepository } from 'src/likes/likes.repository';
import { Likes } from 'src/likes/entities/like.entity';
import { LikesService } from 'src/likes/likes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedRepository]),
    TypeOrmModule.forFeature([Feed]),
  ],
  controllers: [FeedsController],
  providers: [FeedsService],
})
export class FeedsModule {}
