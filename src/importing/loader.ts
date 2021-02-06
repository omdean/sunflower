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

  load() {
    if (this.channel === SourceChannel.Local) {
      this.loadFromLocalFile();
    }
  }

  private loadFromLocalFile() {

  }
}