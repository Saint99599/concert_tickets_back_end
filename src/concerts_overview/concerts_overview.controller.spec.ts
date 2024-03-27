import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsOverviewController } from './concerts_overview.controller';
import { ConcertsOverviewService } from './concerts_overview.service';

describe('ConcertsOverviewController', () => {
  let controller: ConcertsOverviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcertsOverviewController],
      providers: [ConcertsOverviewService],
    }).compile();

    controller = module.get<ConcertsOverviewController>(ConcertsOverviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
