import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsAdminController } from './concerts_admin.controller';
import { ConcertsAdminService } from './concerts_admin.service';

describe('ConcertsAdminController', () => {
  let controller: ConcertsAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcertsAdminController],
      providers: [ConcertsAdminService],
    }).compile();

    controller = module.get<ConcertsAdminController>(ConcertsAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
