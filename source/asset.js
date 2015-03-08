export function fetch(load) {
  return Promise.resolve(load.address);
}
export function instantiate(load) {
  let ver = System.meepworks && System.meepworks.appVersion || '';
  return load.address + ver;
}
