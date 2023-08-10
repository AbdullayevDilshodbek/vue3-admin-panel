<script setup lang="ts">
// global
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import UserTable from './UserTable.vue'
import { useUserStore } from '@/store/modules/user/index'

// store
const userStore = useUserStore()

// lifeCycleHooks
onBeforeMount(() => {
  userStore.fetchUsers(params.value)
})
onMounted(() => {
  userStore.fetchUsers(params.value)
})

async function fetchUser() {
  userStore.fetchUsers(params.value)
}

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
      <div class="flex mb-3">
        <v-text-field append-inner-icon="mdi-magnify" v-model="params.search" class="max-w-sm" variant="outlined"
          label="Search..." @keyup.enter="fetchUser()" />
        <v-spacer />
        <v-btn height="48" variant="outlined" prepend-icon="mdi-plus">Kiritish</v-btn>
      </div>
    </div>
    <!-- Table -->
    <UserTable :items="userStore.users" @changedActive="fetchUser()" />
    <!-- paginate -->
    <v-pagination :length="userStore.lastPage" v-model="page" total-visible="8" />
  </div>
</template>
