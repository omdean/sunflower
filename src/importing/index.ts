import Loader from './loader';
import Transform from './transform';
import { SourceChannel } from '../models/enum_definition';

export class Index {
  loader: Loader;
  transform: Transform;

  constructor(channel: SourceChannel) {
    this.loader = new Loader(channel);
    this.transform = new Transform(channel);
  }

  start() {
    this.loader.excute();
    this.transform.excute();
  }
}
