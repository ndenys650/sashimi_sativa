<template>
  <section>
    <!-- <div class="white mb-60">
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
    </div> -->

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
  </section>
</template>

<script>
import CardCart from "@/components/cartCard/cartCard";
import { mapState, mapGetters } from 'vuex'


export default {
  name: 'Home',
  components: {
    CardCart
  },
  computed: {
      ...mapState(['products', 'cart']),
      ...mapGetters(['getProducts', 'getCart'])
    },

  data() {
    return {
      // slickSettings: {
      //   infinite: false,
      //   speed: 500,
      //   slidesToShow: 5,
      //   slidesToScroll: 5,
      //   initialSlide: 0,

      //   responsive: [
      //     {
      //       breakpoint: 1700,
      //       settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 4,
      //         infinite: true
      //       }
      //     },
      //     {
      //       breakpoint: 1264,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true
      //       }
      //     },
      //     {
      //       breakpoint: 960,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
      // },
      // slickSettingsTwo: {
      //   infinite: false,
      //   speed: 500,
      //   slidesToShow: 4,
      //   slidesToScroll: 4,
      //   initialSlide: 0,

      //   responsive: [
      //     {
      //       breakpoint: 1700,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true
      //       }
      //     },
      //     {
      //       breakpoint: 1264,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         infinite: true
      //       }
      //     },
      //     {
      //       breakpoint: 960,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2
      //       }
      //     },
      //     {
      //       breakpoint: 650,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         initialSlide: 1
      //       }
      //     }
      //   ]
      // },
      // slickSettingsThree: {
      //   infinite: false,
      //   speed: 500,
      //   slidesToShow: 6,
      //   slidesToScroll: 6,
      //   initialSlide: 0,

      //   responsive: [
      //     {
      //       breakpoint: 1700,
      //       settings: {
      //         slidesToShow: 5,
      //         slidesToScroll: 5,
      //         infinite: true
      //       }
      //     },
      //     {
      //       breakpoint: 1264,
      //       settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 4,
      //         infinite: true
      //       }
      //     },
      //     {
      //       breakpoint: 960,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         initialSlide: 3
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2
      //       }
      //     }
      //   ]
      // },
      // brandsIcon: [
      //   {
      //     name: "TMW",
      //     image: require("@/assets/images/brands/v.png")
      //   },
      //   {
      //     name: "Zerrari",
      //     image: require("@/assets/images/brands/u.png")
      //   },
      //   {
      //     name: "Zord",
      //     image: require("@/assets/images/brands/v.png")
      //   },
      //   {
      //     name: "Gini",
      //     image: require("@/assets/images/brands/u.png")
      //   },
      //   {
      //     name: "Nesla",
      //     image: require("@/assets/images/brands/v.png")
      //   }
      // ],
      // flashDeals: [
      //   {
      //     img: require("@/assets/images/products/flash-1.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-2.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-3.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-4.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-1.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-2.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-3.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-4.png")
      //   }
      // ],
      // topRatings: [
      //   {
      //     img: require("@/assets/images/products/camera-1.png"),
      //     title: "Camera",
      //     price: "$3,300"
      //   },
      //   {
      //     img: require("@/assets/images/products/shoes-2.png"),
      //     title: "Shoe",
      //     price: "$400"
      //   },
      //   {
      //     img: require("@/assets/images/products/mobile-1.png"),
      //     title: "Mobile",
      //     price: "$999"
      //   },
      //   {
      //     img: require("@/assets/images/products/watch-1.png"),
      //     title: "Watch",
      //     price: "$600"
      //   }
      // ],
      // newArrivals: [
      //   {
      //     img: require("@/assets/images/products/imagegoggles.png"),
      //     title: "Sunglass",
      //     price: "$150"
      //   },
      //   {
      //     img: require("@/assets/images/products/lipstick(2).png"),
      //     title: "Lipstick",
      //     price: "$250"
      //   },
      //   {
      //     img: require("@/assets/images/products/lipstick(2).png"),
      //     title: "Lipstick",
      //     price: "$250"
      //   },
      //   {
      //     img: require("@/assets/images/products/bgwatch.png"),
      //     title: "Lipstick",
      //     price: "$250"
      //   },
      //   {
      //     img: require("@/assets/images/products/lipstick(4).png"),
      //     title: "Green Plant",
      //     price: "$250"
      //   },
      //   {
      //     img: require("@/assets/images/products/lipstick(3).png"),
      //     title: "Bonsai Tree",
      //     price: "$450"
      //   }
      // ],
      // bigDiscounts: [
      //   {
      //     img: require("@/assets/images/products/Electronics/7.beatsw3.png"),
      //     title: "BenX 2020"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/9.SonyTV1080p.png"),
      //     title: "Tony TV 1080p"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/10.SonyPS4.png"),
      //     title: "Tony PS4"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/11.Netgear2020.png"),
      //     title: "Setgearr 2020"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/12.SonyBGB.png"),
      //     title: "Tony BGB"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/13.LGProducts.png"),
      //     title: "RG Products"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/14.Panasonic2019.png"),
      //     title: "Sanasonic 2019"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/15.DuneHD.png"),
      //     title: "Zune HD"
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/19.LGWashingMachine.png"),
      //     title: "JK Washing Machine"
      //   }
      // ],
      // cars: [
      //   {
      //     img: require("@/assets/images/products/Automotive/1.Ford2019.png"),
      //     title: "Lord 2019"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/2.Audi2017.png"),
      //     title: "Budi 2017"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/3.Tesla2015.png"),
      //     title: "Fesla 2015"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/4.Porsche2018.png"),
      //     title: "Porsche 2018"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/5.Ford2018.png"),
      //     title: "Ford 2018"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/6.Ford2020.png"),
      //     title: "Ford 2020"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/7.Mitsubishi2018.png"),
      //     title: "Mitsubishi 2018"
      //   },
      //   {
      //     img: require("@/assets/images/products/Automotive/8.BMW2019.png"),
      //     title: "BMW 2019"
      //   }
      // ],
      // mobilePhones: [
      //   {
      //     img: require("@/assets/images/products/Electronics/29.AppleEarphones.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/30.Nokiaandroidone.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/4.LumixDSLR.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/2.COSOR1.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/20.TascuigoAriadryLight.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Electronics/31.Symphonlights.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/flash-3.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/bgmobile1.png")
      //   }
      // ],
      // opticsWatch: [
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/9.RayBanBlack.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/10.RayBanOcean.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png")
      //   }
      // ],
      // moreForYou: [
      //   {
      //     img: require("@/assets/images/products/Bikes/6.Honda2019.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/7.NinjaKawasaki2016.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/9.HeroHonda2017.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/11.Kawasaki2020.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/13.RoyalEnfield2010.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/14.RoaylEnfield2011.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/15.PrimeXTZ.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/16.RoyalEnfield2012.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/18.NinjaKawasaki2019.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/20.CBR2022.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/21.TarzT3.png")
      //   },
      //   {
      //     img: require("@/assets/images/products/Bikes/22.YamahaR15Black.png")
      //   }
      // ],
      // topCategories: [
      //   {
      //     img: require("@/assets/images/banners/category-1.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-2.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-3.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-1.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-1.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-2.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-3.png")
      //   },
      //   {
      //     img: require("@/assets/images/banners/category-1.png")
      //   }
      // ],
      // featuredBrands: [
      //   {
      //     img: require("@/assets/images/products/london-britches.png"),
      //     title: "London Britches"
      //   },
      //   {
      //     img: require("@/assets/images/products/jimandjiko.png"),
      //     title: "Jim & Jago"
      //   }
      // ],
      // categories: [
      //   {
      //     img: require("@/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
      //     title: "Tops"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
      //     title: "Jacket"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png"),
      //     title: "Smart Watch"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/10.RayBanOcean.png"),
      //     title: "Sunglasses"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Accessories/3.BrownCap.png"),
      //     title: "Cap"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Shoes/1.NikeRed.png"),
      //     title: "Nike Red"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Shoes/5.NikeBlue.png"),
      //     title: "Nike Silver"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png"),
      //     title: "Gold Necklace"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png"),
      //     title: "NBL Hoodie"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
      //     title: "Jacket"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
      //     title: "Tops"
      //   },
      //   {
      //     img: require("@/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
      //     title: "Jacket"
      //   }
      // ],
      // heroSlider: [
      //   {
      //     img: require("@/assets/images/products/apple-watch-0.png"),
      //     name: "50% Off For Your First Shopping"
      //   },
      //   {
      //     img: require("@/assets/images/products/apple-watch-0.png"),
      //     name: " 20% Off For  First Electronics Purchase"
      //   },
      //   {
      //     img: require("@/assets/images/products/apple-watch-0.png"),
      //     name: "Get 70% Off For  First  Grocery Purchase"
      //   }
      // ],
      // tab: null,
      // items: ["Brands", "Shops"]
    };
  }
};
</script>

<style>

</style>