import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsOverviewService } from './concerts_overview.service';

describe('ConcertsOverviewService', () => {
  let service: ConcertsOverviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcertsOverviewService],
    }).compile();

    service = module.get<ConcertsOverviewService>(ConcertsOverviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
