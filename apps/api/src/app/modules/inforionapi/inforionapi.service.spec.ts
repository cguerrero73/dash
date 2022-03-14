import { Test, TestingModule } from '@nestjs/testing';
import { InforionapiService } from './inforionapi.service';

describe('InforionapiService', () => {
  let service: InforionapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InforionapiService],
    }).compile();

    service = module.get<InforionapiService>(InforionapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
