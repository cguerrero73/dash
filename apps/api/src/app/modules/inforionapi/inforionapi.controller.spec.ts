import { Test, TestingModule } from '@nestjs/testing';
import { InforionapiController } from './inforionapi.controller';

describe('InforionapiController', () => {
  let controller: InforionapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InforionapiController],
    }).compile();

    controller = module.get<InforionapiController>(InforionapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
