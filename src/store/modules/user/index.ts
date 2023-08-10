import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import axios from '@/utils/axios'
import { ISearch } from '@/interfaces/user/index'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: ref([]),
    lastPage: 1
  }),

  actions: {
    async fetchUsers(params: ISearch) {
      try {
        const { data } = await axios.get('users', {
          params: {
            page: params.page,
            search: params.search
          }
        })
        this.users = data.data
        this.lastPage = data.meta.last_page
      } catch (error) {
        console.log(error);
      }
    },
   async changeActive(id:number) {
    try {
      const res = await axios.put(`user/change_active/${id}`)
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    }
   }
  }
})

if (import.meta.hot)
  import.meta.hot?.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
