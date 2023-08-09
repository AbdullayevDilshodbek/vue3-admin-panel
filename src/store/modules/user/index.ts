import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import axios from '@/utils/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: ref([]),
    lastPage: 1
  }),

  actions: {
    async fetchUsers(params: any) {
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
    }
  }
})

if (import.meta.hot)
  import.meta.hot?.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
