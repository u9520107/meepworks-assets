export function fetch(load) {
  let ver = System.meepworks && System.meepworks.version || '';
  return Promise.resolve(`load.address${ver}`);
}
export function instantiate(load) {
  return load.address;
}
