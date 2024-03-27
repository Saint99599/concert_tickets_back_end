import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsUserService } from './concerts_user.service';

describe('ConcertsUserService', () => {
  let service: ConcertsUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcertsUserService],
    }).compile();

    service = module.get<ConcertsUserService>(ConcertsUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
