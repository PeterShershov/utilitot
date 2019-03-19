import os from 'os';

export const isNode = !!(
  module &&
  module.exports &&
  process &&
  process.title === 'node'
);

export const platform = isNode ? os.platform() : navigator.platform;

export const isMac = !!(isNode
  ? platform === 'darwin'
  : platform.includes('Mac'));

export const isWindows = !!(isNode
  ? platform === 'win32'
  : platform.includes('Win'));

export const isLinux = !!(isNode
  ? platform === 'linux'
  : platform.includes('Linux'));
