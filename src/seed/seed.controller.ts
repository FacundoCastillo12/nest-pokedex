import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }
}
