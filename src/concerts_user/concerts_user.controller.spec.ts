import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsUserController } from './concerts_user.controller';
import { ConcertsUserService } from './concerts_user.service';

describe('ConcertsUserController', () => {
  let controller: ConcertsUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcertsUserController],
      providers: [ConcertsUserService],
    }).compile();

    controller = module.get<ConcertsUserController>(ConcertsUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
