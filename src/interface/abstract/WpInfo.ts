/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/**
 * Every peace of income data composited as WpInfo blocks
 * this class contains very essential types.
 */

import {WpInfoType} from 'src/core/constants/WpInfo.const';
import {Entity} from './Entity';

export abstract class WpInfo extends Entity {
  // eslint-disable-next-line no-unused-vars
  constructor(protected type: WpInfoType) {
    super();
  }
}
