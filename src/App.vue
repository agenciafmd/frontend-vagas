<template>
  <HomeView />
</template>
<script>
import HomeView from '@/views/HomeView.vue';

export default {
  name: 'App',
  components: { HomeView }
};
</script>
<style>
html, body{
  scroll-behavior: smooth;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>