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
        :labels="labels"
        :items="currentCountries"
        @changePage="onChangePage"
        :pageSize="20"
        :maxPages="5"
        :styles="darkMode ? paginationDarkStyle : paginationStyle"
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
    currentCountries: function () {
      if (this.searchValue != null) {
        return this.countries.filter((elem) =>
          elem.name.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      } else {
        return this.countries;
      }
    },
    labels: function () {
      return {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      };
    },
    paginationDarkStyle: function () {
      return {
        ul: {
          backgroundColor: "#343a40 !important",
        },

        a: {
          color: "white",
          backgroundColor: "#343a40",
          border: "1px solid white",
        },
      };
    },
    paginationStyle: function () {
      return {};
    },
    ...mapState(["countries", "darkMode", "searchValue"]),
  },
};
</script>

<style scoped>
.darkHome {
  background: #343a40;
}
</style>
