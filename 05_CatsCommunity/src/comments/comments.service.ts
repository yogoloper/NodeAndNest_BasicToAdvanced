import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { Comments } from './comments.schema';
import { CatsRepository } from '../cats/cats.repository';
import { Model } from 'mongoose';
import { CommentsRepository } from './commtens.repository';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository,
    private readonly catsRepository: CatsRepository,
  ) {}

  async getAllComments() {
    try {
      const comments = await this.commentsRepository.findAll();
      return comments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    try {
      const targetCat = await this.catsRepository.findCatByIdwithoutPassword(
        id,
      );
      const { contents, author } = comments;
      const validatedAuthor =
        await this.catsRepository.findCatByIdwithoutPassword(author);
      const newComment = await this.commentsRepository.createComment(
        validatedAuthor._id,
        contents,
        targetCat._id,
      );

      return newComment;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async plusLike(id: string) {
    try {
      const comment = await this.commentsRepository.plusLike(id);
      return comment;
    } catch (error) {}
  }
}
