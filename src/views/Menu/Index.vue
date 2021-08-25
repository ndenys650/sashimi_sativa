<template>
  <section>

    <v-container class="mb-60">
      <v-row>

        <v-col cols="12" lg="12" xl="10">
          <div class="d-flex justify-space-between mb-5">
            <h2 class="font-weight-bold">Plants</h2>
            <!-- <a href="#" class="text-decoration-none blue-grey--text darken-1">
              View all
              <v-icon class="m-0 p-0">mdi-menu-right</v-icon>
            </a> -->
          </div>

          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
              v-for="(n, index) in this.getProducts"
              :key="index"
            >
              <CardCart cardHoverShadow :content="n" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- section-13  -->
    <v-container class="mb-60">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <BaseCard cardHoverShadow class=" py-48">
            <v-card-text class="d-flex align-center justify-center flex-column">
              <div
                class="py-5 avatar-64 d-flex flex-row justify-center align-center grey lighten-2 rounded-circle mb-5"
              >
                <!-- <img
                  v-svg-inline
                  class="icon secondary--text text--darken-1 mr-0"
                  src="@/assets/images/icons/truck.svg"
                  alt=""
                /> -->
              </div>
              <h4 class="font-600 black--text mb-3">
                Speedy Delivery
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-4 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </BaseCard>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <BaseCard cardHoverShadow class=" py-48">
            <v-card-text class="d-flex align-center justify-center flex-column">
              <div
                class="py-5 avatar-64 d-flex flex-row justify-center align-center grey lighten-2 rounded-circle mb-5"
              >
                <!-- <img
                  v-svg-inline
                  class="icon secondary--text text--darken-1 mr-0"
                  src="@/assets/images/icons/credit.svg"
                  alt=""
                /> -->
              </div>
              <h4 class="font-600 black--text mb-3">
                Safe Payment
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-4 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </BaseCard>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <BaseCard cardHoverShadow class=" py-48">
            <v-card-text class="d-flex align-center justify-center flex-column">
              <div
                class="py-5 avatar-64 d-flex flex-row justify-center align-center grey lighten-2 rounded-circle mb-5"
              >
                <!-- <img
                  v-svg-inline
                  class="icon secondary--text text--darken-1 mr-0"
                  src="@/assets/images/icons/shield.svg"
                  alt=""
                /> -->
              </div>
              <h4 class="font-600 black--text mb-3">
                Shop With Confidence
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-4 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </BaseCard>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <BaseCard cardHoverShadow class=" py-48">
            <v-card-text class="d-flex align-center justify-center flex-column">
              <div
                class="py-5 avatar-64 d-flex flex-row justify-center align-center grey lighten-2 rounded-circle mb-5"
              >
                <!-- <img
                  v-svg-inline
                  class="icon secondary--text text--darken-1 mr-0"
                  src="@/assets/images/icons/headphone.svg"
                  alt=""
                /> -->
              </div>
              <h4 class="font-600 black--text mb-3">
                24/7 Support
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-4 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import CardCart from "@/components/cartCard/cartCard";
import BaseCard from "@/components/base/Card";
import { mapState, mapGetters } from 'vuex'


export default {
  name: 'Home',
  components: {
    CardCart,
    BaseCard
  },
  computed: {
      ...mapState(['products', 'cart']),
      ...mapGetters(['getProducts', 'getCart'])
    },

  data() {
    return {
   
      brandsIcon: [
        {
          name: "TMW",
          image: require("@/assets/images/brands/v.png")
        },
        {
          name: "Zerrari",
          image: require("@/assets/images/brands/u.png")
        },
        {
          name: "Zord",
          image: require("@/assets/images/brands/v.png")
        },
        {
          name: "Gini",
          image: require("@/assets/images/brands/u.png")
        },
        {
          name: "Nesla",
          image: require("@/assets/images/brands/v.png")
        }
      ],
    };
  }
};
</script>

<style>

</style>