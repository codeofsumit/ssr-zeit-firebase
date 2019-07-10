import { db } from '@/helper/initFirebase'

export const strict = false

export const state = () => ({
  something: {}
})

export const actions = {
  async getSomething({ commit, getters }, name) {
    const collection = await db.collection(name).get()

    return collection
  }
}
