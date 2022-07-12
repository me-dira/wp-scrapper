import {WpInfo} from '@interface/abstract/WpInfo';
import {IScrapeOptions} from '@interface/entity/IScrapeOption';

export interface IScrapeProvider {
  // eslint-disable-next-line no-unused-vars
  read(readOptions: IScrapeOptions): Promise<WpInfo>;
}
