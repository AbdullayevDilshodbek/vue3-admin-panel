<script setup lang="ts">
interface Props {
  items: any[]
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <!-- component -->
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Fullname</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Username</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Phone</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Status</th>
              <th class="px-6 py-3 border-b-2 border-gray-300  text-blue-500 tracking-wider">Amallar</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr dense v-for="item in props.items" :key="item.id">
              <td class="px-6 py-1 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">{{item.id}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-1 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">{{ item.full_name }}</div>
              </td>
              <td class="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {{ item.username }}</td>
              <td class="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {{ item.phone }}</td>
              <td class="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden :class="item.status == 'Agent' ? 'status_success' : 'status_error'"></span>
                  <span class="relative text-xs">{{ item.status }}</span>
                </span>
              </td>
              <td class="px-6 py-1 text-right border-b border-gray-500 text-sm leading-1 flex justify-center">
                <v-btn icon dense class="mr-2">
                  <v-icon dense>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon :color="item.active ? 'green': 'error'">{{ item.active ? 'mdi-toggle-switch-outline' : 'mdi-toggle-switch-off-outline' }}</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
</template>
<style scoped>
    .status_success {
      @apply absolute inset-0 bg-green-200 opacity-50 rounded-full
    }
    .status_error {
      @apply absolute inset-0 bg-blue-200 opacity-50 rounded-full
    }
</style>
