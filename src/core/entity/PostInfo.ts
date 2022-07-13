import {WpInfo} from '@interface/abstract/WpInfo';
import {WpInfoType} from '../constants/WpInfo.const';

export class PostInfo extends WpInfo {
  constructor() {
    super(WpInfoType.POST);
  }
}
