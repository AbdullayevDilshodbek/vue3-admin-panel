import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  actions: {
    async login(user: any) {
      try {
        const { VITE_APP_API_URL } = import.meta.env;

        const api = axios.create({
          baseURL: VITE_APP_API_URL,
          headers: {
              "Accept": "application/json"
          }
      })

        const {data} = await api.post('login',
          {
            username: user.username,
            password: user.password
          }
        );

        localStorage.setItem("access_token_key", data);
        location.reload();
        return Promise.resolve(data);
      } catch (error: any) {
        console.log(error);
        return Promise.reject(error);
      }
    },
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
