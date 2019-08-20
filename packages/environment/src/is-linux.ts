import { isNode } from './is-node';
import { platform } from './platform';

export const isLinux = !!(isNode ? platform === 'linux' : platform.includes('Linux'));
