<template>
  <div class="home my-5">
    <b-container>
      <the-search-section />
      <b-row id="countries">
        <country
          v-for="(country, index) in countries"
          :key="index"
          :country="country"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSearchSection from "@/components/TheSearchSection.vue";
import Country from "@/components/Country.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    TheSearchSection,
    Country,
  },
  data() {
    return {
      perPage: 9,
      currentPage: 1,
    };
  },
  mounted() {
    this.$store.dispatch("callCountries");
  },
  computed: {
    rows: function () {
      return this.countries.length;
    },
    ...mapState(["countries"]),
  },
};
</script>
