<template>
  <header>
    <router-link class="left-link" v-bind:to="{ name: 'conditions' }">Conditions</router-link>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup>
</script>

<style scoped>
nav{
  color: blue;
}
</style>
