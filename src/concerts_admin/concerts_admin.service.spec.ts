import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsAdminService } from './concerts_admin.service';

describe('ConcertsAdminService', () => {
  let service: ConcertsAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcertsAdminService],
    }).compile();

    service = module.get<ConcertsAdminService>(ConcertsAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
