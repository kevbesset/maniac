export default class PersistentStorage {
  static get(key: string) {
    const localItem = localStorage.getItem(key)

    if (!localItem) return null

    const item = JSON.parse(localItem)

    if (item.expiration) {
      const now = new Date()

      if (now.getTime() > item.expiration) {
        PersistentStorage.delete(key)
        return null
      }
    }

    return item.value
  }

  static set(key: string, value: unknown, expiration?: number) {
    const now = new Date()

    const item = {
      value,
      expiration: expiration && now.getTime() + expiration
    }

    localStorage.setItem(key, JSON.stringify(item))
  }

  static delete(key: string) {
    localStorage.removeItem(key)
  }
}
