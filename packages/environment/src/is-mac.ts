import { isNode } from './is-node';
import { platform } from './platform';

export const isMac = !!(isNode ? platform === 'darwin' : platform.includes('Mac'));
