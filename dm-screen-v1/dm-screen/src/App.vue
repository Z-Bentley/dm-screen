<template>
  <div id="reference-sheet">
    <nav>
      <router-link class="left-link" v-bind:to="{ name: 'home' }">Home</router-link>
      <router-link class="left-link" v-bind:to="{ name: 'conditions' }">Conditions</router-link>
      <router-link class="left-link" v-bind:to="{ name: 'ability-scores' }">Abiltiy Scores</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* #reference-sheet{
  width: 100%;
} */

nav{
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px;
  /* margin: 10px; */
  /* justify-content: space-between; */
  align-items: center;
  color: blue;
  background-color: black;
  width: 100%;
}

.left-link{
  padding-left: 10px;
}

/* main{
  display: flex;
  padding-top: 15px;
} */
</style>
