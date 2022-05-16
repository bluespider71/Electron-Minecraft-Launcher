import {contextBridge} from 'electron';

const exposeInMainWorld = (key, api) => {
  return contextBridge.exposeInMainWorld(key, api);
}

export default exposeInMainWorld;