import {Monaliza} from '@interface/monaliza';

describe('Simple description', () => {
  test('simple test', async () => {
    if (Monaliza === '') return true;
    throw new Error('Ha ha');
  });
});
