<template>
  <div class="mb-5">
    <b-row class="justify-content-between">
      <b-col cols="5">
        <span v-if="msg">{{ msg }}</span>
        <b-input-group
          class="UniqueFullWidth shadow-sm"
          :class="darkMode ? 'darkMode' : 'white'"
        >
          <!-- Input Search -->
          <b-input-group-prepend>
            <span class="input-group-text"
              ><font-awesome-icon :icon="['fas', 'search']"
            /></span>
          </b-input-group-prepend>
          <b-form-input
            class="search-input"
            size="lg"
            v-model="inputSearch"
            placeholder="Search for a country"
          >
          </b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="3" class="text-right">
        <b-dropdown
          id="dropdown-1"
          :text="
            currentRegion && currentRegion != 'All'
              ? currentRegion
              : 'Filter by Region'
          "
          :variant="darkMode ? 'dark' : 'white'"
          class="m-md-2 border rounded shadow-sm"
          :class="darkMode ? 'dark-dropdown' : ''"
        >
          <b-dropdown-item
            v-if="currentRegion != 'All'"
            @click="filterByRegion('All')"
            >All</b-dropdown-item
          >
          <b-dropdown-item v-if="currentRegion != 'Africa'" @click="filterByRegion('Africa')"
            >Africa</b-dropdown-item
          >
          <b-dropdown-item v-if="currentRegion != 'Americas'" @click="filterByRegion('Americas')"
            >Americas</b-dropdown-item
          >
          <b-dropdown-item v-if="currentRegion != 'Asia'" @click="filterByRegion('Asia')"
            >Asia</b-dropdown-item
          >
          <b-dropdown-item v-if="currentRegion != 'Europe'" @click="filterByRegion('Europe')"
            >Europe</b-dropdown-item
          >
          <b-dropdown-item v-if="currentRegion != 'Oceania'" @click="filterByRegion('Oceania')"
            >Oceania</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TheSearchSection",
  data() {
    return {
      inputSearch: null,
      currentRegion: "All",
      msg: null,
    };
  },
  watch: {
    inputSearch: function (value) {
      if (this.inputSearch != "") {
        this.$store.commit("setSearchValue", value);
      } else {
        this.$store.commit("setSearchValue", value);
        this.$store.dispatch("callCountries");
      }
    },
  },
  methods: {
    filterByRegion: function (value) {
      this.currentRegion = value;
      if (this.currentRegion != "All") {
        this.$store.dispatch("callByRegion", value);
      } else {
        this.$store.dispatch("callCountries");
      }
    },
  },
  computed: {
    darkMode: function () {
      return this.$store.getters.darkMode;
    },
    ...mapState(["countries", "searchValue"]),
  },
};
</script>
<style scoped>
.UniqueFullWidth .input-group-text {
  width: 48px;
  border-right: none;
  background-color: #ffffff;
}
.UniqueFullWidth svg {
  display: inline-block;
  width: 100%;
}
.UniqueFullWidth .search-input {
  border-left: none;
}
.input-group-prepend {
  background: transparent;
}
.darkMode .input-group-text {
  background-color: #343a40;
  color: white;
}
.darkMode .form-control {
  background-color: #343a40;
  color: white;
}
::v-deep .dark-dropdown .dropdown-menu {
  color: white !important;
  background-color: #343a40 !important;
}
::v-deep .dark-dropdown .dropdown-item {
  color: white !important;
  background-color: #343a40 !important;
}
</style>