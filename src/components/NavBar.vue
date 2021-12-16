<template>
  <b-navbar
    toggleable="lg"
    :type="darkMode ? 'dark' : 'light'"
    :variant="darkMode ? 'dark' : 'light'"
    :class="{ shadow: darkMode }"
  >
    <router-link :to="{ name: 'Home' }">
      <b-navbar-brand class="font-weight-bold ml-5"
        >Where in the world?</b-navbar-brand
      >
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-5">
        <b-btn
          :variant="darkMode ? 'dark' : 'white'"
          @click="$store.commit('toggleDarkMode')"
          ><font-awesome-icon :icon="[darkMode ? 'fas' : 'far', 'moon']" /> Dark
          Mode</b-btn
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    darkMode: function () {
      return this.$store.getters.darkMode;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: hsl(0, 0%, 98%);
}
</style>
