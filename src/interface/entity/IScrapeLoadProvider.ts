import {WpInfo} from '@interface/abstract/WpInfo';
import {IScrapeLoadOption} from './IScrapeLoadOption';

export interface IScrapeLoadProvider {
  // eslint-disable-next-line no-unused-vars
  load(loadOptions: IScrapeLoadOption): Promise<WpInfo>;
}
