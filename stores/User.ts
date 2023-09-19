
import { defineStore } from 'pinia'
import { IUser } from '~/types'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({

    user: null as IUser | null

  }),
  getters: {
    getUser(): IUser | null {
      return this.user
    }
  },
  actions: {
    setUser(user: IUser | null) {
      this.user = user
    }
  },
})
