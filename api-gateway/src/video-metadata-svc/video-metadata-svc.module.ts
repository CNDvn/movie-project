import { Module } from '@nestjs/common';
import { VideoMetadataSvcService } from './video-metadata-svc.service';
import { VideoMetadataSvcController } from './video-metadata-svc.controller';

@Module({
  imports: [],
  controllers: [VideoMetadataSvcController],
  providers: [VideoMetadataSvcService],
})
export class VideoMetadataSvcModule {}
