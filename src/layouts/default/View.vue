<script lang="ts" setup>
import { ref } from 'vue'

import router from "@/router";
import pages from '@/vars/pages'
const activePage = ref('/')
const drawer = ref(null)

function goPage(path: string) {
  if (window.location.pathname != path) {
    router.push(path)
    activePage.value = path
  }
}
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app
      class="flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <!-- Header -->
      <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div
          class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
          <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
          <span class="hidden md:block">ADMIN AKA</span>
        </div>
      </div>
      <div>
        <!-- Sidebar -->
        <div style="margin-right: 100px; border: 2px solid red"
          class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
              <li class="px-5 hidden md:block" v-for="page in pages" :key="page.id">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-400 uppercase">{{ page.title }}</div>
                </div>
                <ul>
                  <li v-for="item in page.items" :key="item.id">
                    <span @click="goPage(item.path)"
                      class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span class="inline-flex justify-center items-center ml-4">
                        <v-icon>{{ item.icon }}</v-icon>
                      </span>
                      <span class="ml-2 text-sm tracking-wide truncate">{{ item.title }}</span>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">
              <v-divider></v-divider>
              <span
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <v-icon>mdi-logout</v-icon>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Chiqish</span>
              </span>
            </p>
          </div>
        </div>
        <!-- ./Sidebar -->
      </div>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.dark .dark\:divide-gray-700> :not([hidden])~ :not([hidden]) {
  border-color: rgba(55, 65, 81);
}

.dark .dark\:bg-gray-50 {
  background-color: rgba(249, 250, 251);
}

.dark .dark\:bg-gray-100 {
  background-color: rgba(243, 244, 246);
}

.dark .dark\:bg-gray-600 {
  background-color: rgba(75, 85, 99);
}

.dark .dark\:bg-gray-700 {
  background-color: rgba(55, 65, 81);
}

.dark .dark\:bg-gray-800 {
  background-color: rgba(31, 41, 55);
}

.dark .dark\:bg-gray-900 {
  background-color: rgba(17, 24, 39);
}

.dark .dark\:bg-red-700 {
  background-color: rgba(185, 28, 28);
}

.dark .dark\:bg-green-700 {
  background-color: rgba(4, 120, 87);
}

.dark .dark\:hover\:bg-gray-200:hover {
  background-color: rgba(229, 231, 235);
}

.dark .dark\:hover\:bg-gray-600:hover {
  background-color: rgba(75, 85, 99);
}

.dark .dark\:hover\:bg-gray-700:hover {
  background-color: rgba(55, 65, 81);
}

.dark .dark\:hover\:bg-gray-900:hover {
  background-color: rgba(17, 24, 39);
}

.dark .dark\:border-gray-100 {
  border-color: rgba(243, 244, 246);
}

.dark .dark\:border-gray-400 {
  border-color: rgba(156, 163, 175);
}

.dark .dark\:border-gray-500 {
  border-color: rgba(107, 114, 128);
}

.dark .dark\:border-gray-600 {
  border-color: rgba(75, 85, 99);
}

.dark .dark\:border-gray-700 {
  border-color: rgba(55, 65, 81);
}

.dark .dark\:border-gray-900 {
  border-color: rgba(17, 24, 39);
}

.dark .dark\:hover\:border-gray-800:hover {
  border-color: rgba(31, 41, 55);
}

.dark .dark\:text-white {
  color: rgba(255, 255, 255);
}

.dark .dark\:text-gray-50 {
  color: rgba(249, 250, 251);
}

.dark .dark\:text-gray-100 {
  color: rgba(243, 244, 246);
}

.dark .dark\:text-gray-200 {
  color: rgba(229, 231, 235);
}

.dark .dark\:text-gray-400 {
  color: rgba(156, 163, 175);
}

.dark .dark\:text-gray-500 {
  color: rgba(107, 114, 128);
}

.dark .dark\:text-gray-700 {
  color: rgba(55, 65, 81);
}

.dark .dark\:text-gray-800 {
  color: rgba(31, 41, 55);
}

.dark .dark\:text-red-100 {
  color: rgba(254, 226, 226);
}

.dark .dark\:text-green-100 {
  color: rgba(209, 250, 229);
}

.dark .dark\:text-blue-400 {
  color: rgba(96, 165, 250);
}

.dark .group:hover .dark\:group-hover\:text-gray-500 {
  color: rgba(107, 114, 128);
}

.dark .group:focus .dark\:group-focus\:text-gray-700 {
  color: rgba(55, 65, 81);
}

.dark .dark\:hover\:text-gray-100:hover {
  color: rgba(243, 244, 246);
}

.dark .dark\:hover\:text-blue-500:hover {
  color: rgba(59, 130, 246);
}

/* Custom style */
.header-right {
  width: calc(100% - 3.5rem);
}

.sidebar:hover {
  width: 16rem;
}

@media only screen and (min-width: 768px) {
  .header-right {
    width: calc(100% - 16rem);
  }
}
</style>

