import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comments } from './comments.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comments.name) private readonly commtesModel: Model<Comments>,
  ) {}

  async findAll() {
    return await this.commtesModel.find();
  }

  async createComment(author, contents, info) {
    const newCat = new this.commtesModel({
      author,
      contents,
      info,
    });

    return await newCat.save();
  }

  async plusLike(id: string) {
    const comment = await this.commtesModel.findById(id);
    comment.likeCnt += 1;
    return await comment.save();
  }
}
