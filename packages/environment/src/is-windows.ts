import { isNode } from './is-node';
import { platform } from './platform';

export const isWindows = !!(isNode ? platform === 'win32' : platform.includes('Win'));
