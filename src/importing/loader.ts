import { SourceChannel } from '../models/enum_definition';


/**
 * Data reading related operation.
 */
export default class Loader {
  // The source data channel.
  channel: SourceChannel;

  constructor(theChannel: SourceChannel) {
    this.channel = theChannel;
  }

  excute(): any {
    if (this.channel === SourceChannel.Local) {
      return this.loadFromLocalFile();
    }
  }

  private loadFromLocalFile() : Object {
    return {};
  }
}