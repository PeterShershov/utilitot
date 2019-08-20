import os from 'os';
import { isNode } from './is-node';

export const platform = isNode ? os.platform() : navigator.platform;
