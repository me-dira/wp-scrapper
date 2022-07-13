import {WpInfo} from '@interface/abstract/WpInfo';
import {Service} from '@interface/abstract/Service';
import {IScrapeProvider} from '@interface/entity/IScrapeProvider';
import {IScrapeLoadOption} from '@interface/entity/IScrapeLoadOption';

export class ScrapePostService extends Service implements IScrapeProvider {
  load(readOptions: IScrapeLoadOption): Promise<WpInfo> {
    throw new Error('Method not implemented.' + readOptions.type);
  }
}
