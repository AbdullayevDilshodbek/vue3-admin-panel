<script setup lang="ts">
// global
import { onBeforeMount, ref, watch } from 'vue'
import UserTable from './UserTable.vue'
import { useUserStore } from '@/store/modules/user/index'

// store
const userStore = useUserStore()

// lifeCycleHooks
onBeforeMount(() => {
  userStore.fetchUsers(params.value)
})

// interface
interface IUserParams {
  page: number,
  search: string
}

// vars
const page = ref<number>(1)
let params = ref<IUserParams>({
  page: 1,
  search: ''
})

// watch
watch(page, () => {
  params.value.page = page.value
  userStore.fetchUsers(params.value)
})
</script>

<template>
  <div>
    <!-- app bar -->
    <div
      class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
      <div class="flex justify-between">
        <div class="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
          <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div class="flex">
              <span
                class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                <svg width="18" height="18" class="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                    stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
            </div>
            <input type="text"
              v-model="params.search"
              @keyup.enter="userStore.fetchUsers(params)"
              class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
              placeholder="Search">
          </div>
        </div>
      </div>
    </div>
    <!-- Table -->
    <UserTable :items="userStore.users" />
    <!-- paginate -->
    <v-pagination :length="userStore.lastPage" v-model="page" total-visible="8" />
  </div>
</template>
