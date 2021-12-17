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
        :items="currentCountries"
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
    currentCountries: function () {
      if (this.searchValue != null) {
        return this.countries.filter((elem) =>
          elem.name.toLowerCase().startsWith(this.searchValue.toLowerCase())
        );
      } else {
        return this.countries;
      }
    },
    paginationStyle: function () {
      return {
        ul: {
          backgroundColor: this.darkMode ? "#343a40 !important" : "",
        },

        a: {
          color: this.darkMode ? "white" : "#343a40",
          backgroundColor: this.darkMode ? "#343a40" : "",
          border: this.darkMode ? "1px solid white" : "",
        },
      };
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
