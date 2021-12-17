<template>
  <router-link
    :to="{ name: 'Country', params: { country: country.alpha3Code } }"
    class="col-lg-3 my-3"
  >
    <b-card
      :img-src="country.flag"
      img-alt="Image"
      img-top
      tag="article"
      style="height: 350px"
      class="mb-2"
      :bg-variant="darkMode ? 'dark' : ''"
      :text-variant="!darkMode ? 'dark' : 'white'"
    >
      <b-card-text class="text-decoration-none">
        <h5 class="font-weight-bold">{{ country.name }}</h5>
        <p>
          <span class="font-weight-bold">Population:</span>
          {{ population }}
        </p>
        <p>
          <span class="font-weight-bold">Region:</span> {{ country.region }}
        </p>
        <p>
          <span v-if="country.capital" class="font-weight-bold">Capital:</span> {{ country.capital }}
        </p>
      </b-card-text>
    </b-card>
  </router-link>
</template>
<script>
export default {
  name: "Country",
  props: {
    country: Object,
  },
  computed: {
    population: function () {
      return new Intl.NumberFormat("en-US").format(this.country.population);
    },
    darkMode: function () {
      return this.$store.getters.darkMode;
    },
  },
};
</script>
<style scoped>
.card-img-top {
  height: 170px !important;
  width: 100%;
}
a,
a:hover {
  text-decoration: none;
}
</style>