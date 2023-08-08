import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    title: 'Say hi from auth store!'
  }),
  actions: {
    async login(user: any) {
      try {
        const { VITE_APP_BASE_URL, VITE_APP_CLIENT_SECRET } = import.meta.env;
        const { data } = await axios.post(
          `${VITE_APP_BASE_URL}/oauth/token`,
          {
            username: user.username,
            password: user.password,
            grant_type: 'password',
            client_id: 2,
            client_secret: VITE_APP_CLIENT_SECRET
          }
        );
        localStorage.setItem("access_token_key", data.token);
        location.reload();
        return Promise.resolve(data);
      } catch (error: any) {
        return Promise.reject(error);
      }
    },
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
