import { SourceChannel } from '../models/enum_definition';

export default class Transform {
  channel: SourceChannel;

  constructor(theChannel: SourceChannel) {
    this.channel = theChannel;
  }

  excute() {
    if (this.channel === SourceChannel.Local) {
      this.transformFromLocal();
    }
  }

  private transformFromLocal() {
    
  }
}