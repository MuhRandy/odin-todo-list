export default class LocalStorageService {
  static save(key, data) {
    // eslint-disable-next-line no-undef
    localStorage.setItem(key, JSON.stringify(data));
  }

  static load(key) {
    // eslint-disable-next-line no-undef
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static remove(key) {
    // eslint-disable-next-line no-undef
    localStorage.removeItem(key);
  }

  static clearAll() {
    // eslint-disable-next-line no-undef
    localStorage.clear();
  }
}
