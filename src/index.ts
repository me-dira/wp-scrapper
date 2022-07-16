/* eslint-disable no-unused-vars */

import 'reflect-metadata';
import {autoInjectable, injectable} from 'tsyringe';
import {HttpService} from './core/services/http/HttpService';

@autoInjectable()
export class WpScrapper {
  /**
   * @param {{data: any}} options options for wp scrapper.
   */
  constructor(private httpService?: HttpService) {}
}
