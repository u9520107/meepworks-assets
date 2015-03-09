export function fetch(load) {
  return Promise.resolve(load.address);
}

const httpReg = /https?:\/\/.*?\//i;

export function instantiate(load) {
  let ver = System.meepworks && System.meepworks.appVersion || '';
  //remove hostname to align with server side generated paths
  let address = load.address.replace(httpReg, '/');
  return address + ver;
}
