import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    // 실제로 DB에 접근하는 방식을 작성
    return this.restaurants.find();
  }
}
