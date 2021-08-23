<template>
  <div>
    <div class="white mb-60">
      <v-container>
        <v-row>

          <v-col cols="12" xl="10" lg="9">
            <v-carousel
              class="vuetify-carousel"
              cycle
              height="100%"
              hide-delimiter-background
              show-arrows-on-hover
              :show-arrows="true"
            >
              <v-carousel-item v-for="(n, index) in heroSlider" :key="index">
                <v-sheet height="100%" light>
                  <v-row class="fill-height" align="center">
                    <v-col cols="7" lg="8" class="mb-14 mb-sm-0">
                      <v-col cols="12" xl="7" class="ms-3 ps-0">
                        <h1 class="show-3 font-weight-bold mb-4">
                          {{ n.name }}
                        </h1>
                      </v-col>
                      <v-col cols="12" xl="8">
                        <p class="secondary--text banner-text mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quis lobortis consequat eu, quam etiam at quis
                          ut convallis.
                        </p>
                      </v-col>
                      <v-btn color="primary" class="text-capitalize ms-3"
                        >Shop Now</v-btn
                      >
                    </v-col>
                    <v-col cols="5" lg="4">
                      <v-img aspect-ratio="1" contain :src="n.img"></v-img>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- section-2  -->
    <!-- <div class="container mb-60">
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between mb-4">
            <div class="d-flex align-center">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/light.svg"
                alt=""
              />

              <h2 class="font-weight-bold">Flash Deals</h2>
            </div>
            <a href="#" class="text-decoration-none blue-grey--text darken-1">
              View all
              <v-icon class="m-0 p-0">mdi-menu-right</v-icon>
            </a>
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <div class="">
            <VueSlickCarousel
              class="slick-secondary"
              :arrows="true"
              :dots="false"
              v-bind="slickSettings"
            >
              <v-col cols="12" v-for="(item, index) in flashDeals" :key="index">
                <CardCart :content-img="item.img" class="m-5" />
              </v-col>

              <template #prevArrow="arrowOption">
                <v-btn
                  class="mx-2 slick-arrow prev slick-prev"
                  fab
                  dark
                  small
                  color="secondary"
                >
                  <v-icon dark>
                    {{ arrowOption }}
                    mdi-arrow-left
                  </v-icon>
                </v-btn>
              </template>
              <template #nextArrow="arrowOption">
                <v-btn
                  class="mx-2 slick-arrow next slick-next"
                  fab
                  dark
                  small
                  color="secondary"
                >
                  <v-icon dark>
                    {{ arrowOption }}
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </template>
            </VueSlickCarousel>
          </div>
        </v-col>
      </v-row>
    </div> -->

    <!-- section-7  -->
    <v-container class="mb-60">
      <v-row>
        <v-col cols="12" lg="3" xl="2">
          <base-card>
            <v-card-text>
              <div class="" v-for="(brand, index) in brandsIcon" :key="index">
                <v-btn
                  block
                  class="mb-3 text-capitalize py-5"
                  elevation="0"
                  color="grey lighten-2 "
                >
                  <v-avatar size="16" tile class="me-4">
                    <img :src="brand.image" alt="" />
                  </v-avatar>
                  <span class="font-600">{{ brand.name }}</span>
                </v-btn>
              </div>
              <div class="mb-60"></div>
              <v-btn
                class="text-capitalize py-5"
                block
                elevation="0"
                color="grey lighten-2 "
              >
                <span class="font-600">View All Brands</span>
              </v-btn>
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" lg="9" xl="10">
          <div class="d-flex justify-space-between mb-5">
            <h2 class="font-weight-bold">Cars</h2>
            <a href="#" class="text-decoration-none blue-grey--text darken-1">
              View all
              <v-icon class="m-0 p-0">mdi-menu-right</v-icon>
            </a>
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
          <base-card cardHoverShadow class=" py-48">
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
              <h4 class="font-600 grey--text text--darken-4 mb-3">
                Worldwide Delivery
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-2 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <base-card cardHoverShadow class=" py-48">
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
              <h4 class="font-600 grey--text text--darken-4 mb-3">
                Safe Payment
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-2 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <base-card cardHoverShadow class=" py-48">
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
              <h4 class="font-600 grey--text text--darken-4 mb-3">
                Shop With Confidence
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-2 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3">
          <base-card cardHoverShadow class=" py-48">
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
              <h4 class="font-600 grey--text text--darken-4 mb-3">
                24/7 Support
              </h4>
              <v-card-subtitle
                class="text-center grey--text text--darken-2 pt-0"
                >We offer competitive prices on our 100 million plus product any
                range.</v-card-subtitle
              >
            </v-card-text>
          </base-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>