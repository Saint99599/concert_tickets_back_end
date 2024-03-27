import { Test, TestingModule } from '@nestjs/testing';
import { LogConcertsController } from './log_concerts.controller';
import { LogConcertsService } from './log_concerts.service';

describe('LogConcertsController', () => {
  let controller: LogConcertsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogConcertsController],
      providers: [LogConcertsService],
    }).compile();

    controller = module.get<LogConcertsController>(LogConcertsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
