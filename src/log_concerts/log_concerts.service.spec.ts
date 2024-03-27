import { Test, TestingModule } from '@nestjs/testing';
import { LogConcertsService } from './log_concerts.service';

describe('LogConcertsService', () => {
  let service: LogConcertsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogConcertsService],
    }).compile();

    service = module.get<LogConcertsService>(LogConcertsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
