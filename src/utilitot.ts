import os from "os";

export const isNode = !!(
  module &&
  module.exports &&
  process &&
  process.title === "node"
);

const platform = isNode && os.platform();

export const isMac = !!(isNode
  ? platform === "darwin"
  : navigator.platform.indexOf("Mac") > -1);

export const isWindows = !!(isNode
  ? platform === "win32"
  : navigator.platform.indexOf("Win") > -1);

export const isLinux = !!(isNode
  ? platform === "linux"
  : navigator.platform.indexOf("Linux") > -1);
