import { Controller, Get } from '@nestjs/common';
import { VideoMetadataSvcService } from './video-metadata-svc.service';

@Controller('video-metadata-svc')
export class VideoMetadataSvcController {
  constructor(
    private readonly videoMetadataSvcService: VideoMetadataSvcService,
  ) {}

  @Get()
  async test() {
    return await this.videoMetadataSvcService.test();
  }
}
