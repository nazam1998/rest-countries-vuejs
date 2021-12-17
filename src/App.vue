<template>
  <div id="app" :class="{ 'text-white': darkMode, 'bg-dark': darkMode }">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    darkMode: function () {
      return this.$store.getters.darkMode;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
html,
body {
  overflow: auto;
}
body,
html,
#app {
  min-height: 100%;
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Nunito Sans", sans-serif;
}
</style>
