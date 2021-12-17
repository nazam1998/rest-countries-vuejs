<template>
  <div>
    <b-container class="my-5">
      <b-btn
        @click="$router.go(-1)"
        :variant="darkMode ? 'dark' : 'white'"
        class="shadow border rounded px-4"
        ><font-awesome-icon
          :icon="['fas', 'long-arrow-alt-left']"
          class="ml-0 mr-2"
        />
        Back
      </b-btn>
      <b-row class="my-5 align-items-center justify-content-between">
        <b-col cols="5">
          <img
            :src="currentCountry.flag"
            alt=""
            class="img-fluid img-country"
          />
        </b-col>
        <b-col cols="6">
          <h3 class="font-weight-bold">{{ currentCountry.name }}</h3>
          <b-row class="my-4 justify-content-between">
            <b-col cols="6">
              <span class="font-weight-bold">Native Name: </span>
              {{ currentCountry.nativeName }}
            </b-col>
            <b-col cols="6">
              <span class="font-weight-bold">Top Level Domain: </span>
              <span
                v-for="(domain, index) in currentCountry.topLevelDomain"
                :key="index"
              >
                {{ domain
                }}<span v-if="index != currentCountry.topLevelDomain.length - 1"
                  >,</span
                >
              </span>
            </b-col>
            <b-col cols="6">
              <span class="font-weight-bold">Population: </span>
              {{ population }}
            </b-col>
            <b-col cols="6">
              <span class="font-weight-bold">Currencies: </span>
              <span
                v-for="(currency, index) in currentCountry.currencies"
                :key="index"
              >
                {{ currency.name
                }}<span v-if="index != currentCountry.currencies.length - 1"
                  >,</span
                >
              </span>
            </b-col>
            <b-col cols="6">
              <span class="font-weight-bold">Region: </span>
              {{ currentCountry.region }}
            </b-col>
            <b-col cols="6">
              <span class="font-weight-bold">Languages: </span>
              <span
                v-for="(language, index) in currentCountry.languages"
                :key="index"
              >
                {{ language.name
                }}<span v-if="index != currentCountry.languages.length - 1"
                  >,</span
                >
              </span>
            </b-col>
            <b-col cols="12">
              <span class="font-weight-bold">Sub Region: </span>
              {{ currentCountry.subregion }}
            </b-col>
            <b-col cols="12" v-if="currentCountry.capital">
              <span class="font-weight-bold">Capital: </span>
              {{ currentCountry.capital }}
            </b-col>
          </b-row>
          <div class="my-3 border-countries" v-if="borderCountries">
            <span class="font-weight-bold">Border Countries :</span>
            <router-link
              :to="{ name: 'Country', params: { country: border.alpha3Code } }"
              class="border py-1 px-3 text-center mx-2"
              v-for="(border, index) in borderCountries"
              :key="index"
              :class="{ 'text-white': darkMode, 'text-dark': !darkMode }"
              >{{ border.name }}
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "CountryDetails",
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentCountry: function () {
      return this.$store.getters.countries.find(
        (elem) => elem.alpha3Code == this.country
      );
    },
    population: function () {
      return new Intl.NumberFormat("en-US").format(
        this.currentCountry.population
      );
    },
    borderCountries: function () {
      let myCountry = this.currentCountry;
      if (myCountry.borders) {
        return this.$store.getters.countries.filter(function (elem) {
          return myCountry.borders.includes(elem.alpha3Code);
        });
      } else {
        return false;
      }
    },
    darkMode: function () {
      return this.$store.getters.darkMode;
    },
  },
};
</script>
<style scoped>
.border-countries {
  white-space: nowrap;
}
.img-country {
  height: 300px;
}
</style>