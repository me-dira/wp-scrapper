import {Service} from '@interface/abstract/Service';
import axios from 'axios';

export class HttpService extends Service {
  private readonly axios = axios;
}
