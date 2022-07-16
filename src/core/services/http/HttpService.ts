import {Service} from '@interface/abstract/Service';
import axios from 'axios';
import {autoInjectable} from 'tsyringe';

@autoInjectable()
export class HttpService extends Service {
  constructor() {
    super();
    axios.get('');
  }
}
