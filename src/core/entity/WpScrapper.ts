/**
 * The main entry point of our package
 * where user gets the package and injects it to
 * its dependency tree.
 */

import {Entity} from '@interface/abstract/Entity';
import {WpInfo} from '@interface/abstract/WpInfo';
import {IScrapeOptions} from '@interface/entity/IScrapeOption';
import {IScrapeProvider} from '@interface/entity/IScrapeProvider';

export class WpScrapper extends Entity implements IScrapeProvider {
  async read<T extends WpInfo>(readOptions: IScrapeOptions): Promise<T> {
    throw new Error('Method not implemented.' + readOptions.type);
  }
}
