<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/store/modules/user/auth'
import router from "@/router";

// store
const authStore = useAuthStore()

interface ILoginKeys {
  username: string,
  password: string
}
const keys = ref<ILoginKeys>({
  username: '',
  password: ''
})

const validate = ref({
  noUsername: false,
  noPassword: false
})

const isWrongLogin = ref<boolean>(false)

async function login() {
  try {
    if (!keys.value.username || !keys.value.password) {
      !keys.value.username ? validate.value.noUsername = true : validate.value.noUsername = false
      !keys.value.password ? validate.value.noPassword = true : validate.value.noPassword = false
    } else {
      validate.value.noUsername = false
      validate.value.noPassword = false
      const res = await authStore.login({
        username: keys.value.username,
        password: keys.value.password
      })
      router.push('/')
    }
  } catch (error) {
    isWrongLogin.value = true
    console.log(error);

  }
}
</script>
<template>
  <div>
    <span>
    </span>
    <!-- component -->
    <!-- This is an example component -->
    <div class='bg-white h-screen w-screen flex justify-center items-center'>
      <div class="px-6 py-3 rounded border w-64">
        <div class="flex flex-col items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2 class="text-2xl font-bold">Login</h2>
        </div>
        <div>
          <span v-if="isWrongLogin" class="text-red-500">{{ 'Login yoki parol xato' }}</span>
          <!-- username -->
          <div class="flex flex-col my-2">
            <label class="text-xs text-gray-400">Username *</label>
            <div v-if="validate.noUsername" class="text-xs text-red-400 flex justify-between items-center">
              <span>
                <b>Eslatma: </b>
                username kiritilishi shart
              </span>
            </div>
            <input class="border rounded px-3 py-1 mt-2" type="text" v-model="keys.username" />
          </div>
          <!-- password -->
          <div class="flex flex-col my-2">
            <label class="text-xs text-gray-400">Parol *</label>
            <div v-if="validate.noPassword" class="text-xs text-red-400 flex justify-between items-center">
              <span>
                <b>Eslatma: </b>
                parol kiritilishi shart
              </span>
            </div>
            <input class="border rounded px-3 py-1 mt-2" type="password" v-model="keys.password" />
          </div>
          <div class="flex flex-col items-center justify-center my-3">
            <button @click="login()" class="my-3 py-1 w-full rounded bg-blue-600 text-blue-200">
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
