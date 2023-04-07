import { openDB } from 'idb'

const initdb = async () =>
  openDB('txtly', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('txtly')) {
        console.log('txtly database already exists')
        return
      }
      db.createObjectStore('txtly', { keyPath: 'id', autoIncrement: true })
      console.log('txtly database created')
    }
  })

export const putDb = async (content) => {
  console.log('PUT to the database')
  const db = await openDB('txtly', 1)
  const tx = db.transaction('txtly', 'readwrite')
  const store = tx.objectStore('txtly')
  const request = store.put({ id: 1, txtly: content })
  const result = await request
  console.log('🚀 - data saved to the database', result)
}

export const getDb = async () => {
  console.log('GET all from the database')
  const db = await openDB('txtly', 1)
  const tx = db.transaction('txtly', 'readonly')
  const store = tx.objectStore('txtly')
  const request = store.getAll()
  const result = await request
  console.log('result', result)

  if (!result.length) return undefined
  return result[0].txtly
}

initdb()
