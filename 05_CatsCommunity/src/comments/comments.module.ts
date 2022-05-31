import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsSchema } from './comments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comments.name,
        schema: CommentsSchema,
      },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
