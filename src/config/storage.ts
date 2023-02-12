import _ from 'lodash';

async function get(key: any, toObject = false) {
  const value = localStorage.getItem(key);
  if (toObject) {
    //@ts-ignore
    return JSON.parse(value);
  }
  return value;
}

async function getItem(key: any, toObject = false) {
  return get(key, toObject);
}

async function set(key: any, value: any) {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }

  return localStorage.setItem(key, value);
}

async function setItem(key: any, value: any) {
  return set(key, value);
}

async function merge(key: any, newValue: any) {
  const oldValue = await get(key, true);
  if (_.isObject(oldValue)) {
    return set(key, { ...oldValue, ...newValue });
  }
  return set(key, newValue);
}

async function has(key: any) {
  return (await get(key)) !== null;
}

async function remove(key: any) {
  return localStorage.removeItem(key);
}

async function clear() {
  return localStorage.clear();
}

export default () => ({
  get,
  getItem,
  set,
  setItem,
  merge,
  has,
  remove,
  clear,
});
