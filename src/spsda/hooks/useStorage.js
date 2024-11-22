const storageStr = `{"id": null, "firs_tname": null, "last_name": null, "token": null, "group_id": null, "role": null}`
const appKey = 'spsda'

const useStorage = () => {

  const get = () => {

    let storage = localStorage.getItem(appKey) || storageStr
    if (storage === 'undefined') {
      storage = storageStr
    }
    return JSON.parse(storage)

  }

  const set = (data) => {

    localStorage.setItem(appKey, JSON.stringify(data))

  }

  const reset = () => {

    const storage = JSON.parse(localStorage.getItem(appKey))
    const { email_verified } = storage
    const _storage = JSON.parse(storageStr)

    const resetStorage = { ..._storage, email_verified }

    localStorage.setItem(appKey, JSON.stringify(resetStorage))

    // localStorage.setItem(appKey, storageStr)

  }

  return {
    get,
    set,
    reset
  }

}

export default useStorage