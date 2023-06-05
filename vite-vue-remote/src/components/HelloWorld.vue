<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const isLoadingComponent = ref(true)

const HelloWorld = defineAsyncComponent(() => import('vue_remote/HelloWorld.vue')
  .finally(() => {
    isLoadingComponent.value = false
  })
)
</script>

<template>
  <div class="home">
    <div v-if="isLoadingComponent">Loading HelloWorld.vue</div>
    <HelloWorld msg="Welcome to Vue.js" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
