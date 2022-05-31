import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CommentsCreateDto } from './dto/comments.create.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({
    summary: '모든 고양이 프로필에 적힌 댓글 조회',
  })
  @Get()
  async getAllComments() {
    return this.commentsService.getAllComments();
  }

  @ApiOperation({
    summary: '특정 고양이 프로필에 댓글 남기기',
  })
  @Post(':id')
  async createComment(
    @Param('id') id: string,
    @Body() comments: CommentsCreateDto,
  ) {
    return this.commentsService.createComment(id, comments);
  }

  @ApiOperation({
    summary: '좋아요 수 올리기',
  })
  @Post(':id')
  async PlusLike(@Param('id') id: string) {
    return this.commentsService.plusLike(id);
  }
}
