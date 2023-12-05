import { Inject, Injectable } from '@nestjs/common';
import { EClientName } from '../clients';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class VideoMetadataSvcService {
  constructor(
    @Inject(EClientName.VIDEO_METADATA_SVC)
    private videoMetadataClient: ClientKafka,
  ) {}
  async test() {
    this.videoMetadataClient.subscribeToResponseOf('findAllProject');
    const videoSvc = await this.videoMetadataClient.connect();
    const res = await videoSvc.send({
      messages: [{ value: 'test message', key: 'key-hello' }],
      topic: 'topic-test',
    });
    console.log(res);

    return 'Hello';
  }
}
