<template>
  <div class="home" :class="{ darkHome: darkMode }">
    <b-container>
      <the-search-section />
      <b-row id="countries">
        <country
          v-for="(country, index) in pageOfItems"
          :key="index"
          :country="country"
        />
      </b-row>
      <jw-pagination
        :items="countries"
        @changePage="onChangePage"
        :pageSize="20"
        :styles="paginationStyle"
        class="mx-auto my-3"
      ></jw-pagination>
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
      pageOfItems: [],
    };
  },
  mounted() {
    this.$store.dispatch("callCountries");
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  computed: {
    rows: function () {
      return this.countries.length;
    },
    paginationStyle: function () {
      return {
        ul: {
          backgroundColor: this.darkMode ? "#343a40" : "",
        },
      };
    },
    ...mapState(["countries", "darkMode"]),
  },
};
</script>

<style scoped>
.darkHome {
  background: #343a40;
}
</style>
