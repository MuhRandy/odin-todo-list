export default class LocalStorageService {
  static save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static clearAll() {
    localStorage.clear();
  }
}
