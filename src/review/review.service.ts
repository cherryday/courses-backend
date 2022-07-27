import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private reviewRepository: Repository<ReviewEntity>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    return this.reviewRepository.save(createReviewDto);
  }

  async delete(id: string): Promise<void> {
    this.reviewRepository.delete(id);
  }
}
