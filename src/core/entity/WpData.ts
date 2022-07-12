import {Entity} from '@interface/abstract/Entity';
import {WpInfo} from '@interface/abstract/WpInfo';

/**
 * Wordpress income data should shape to this
 * class.
 */
export class WpData extends Entity {
  /**
   * Wordpress website name.
   */
  webName: string;

  /**
   * Wordpress website description.
   */
  description: string;

  /**
   * The index address of website.
   */
  address: string;

  /**
   * Info blocks are somehow complex
   * because we will have plenty of theme.
   */
  infoBlocks: WpInfo;
}
