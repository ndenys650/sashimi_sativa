<template>
    <div>
        <v-app-bar
            app
            id="home-app-bar"
            class="white"
            elevation="1"
            elevate-on-scroll
            height="80"
        >
            <v-container class="mx-auto py-0">
            <v-row align="center">
                <router-link to="/">
                <v-img
                    :src="require('@/assets/logo.svg')"
                    class="mr-5"
                    contain
                    height="48"
                    width="48"
                    max-width="48"
                    @click="$vuetify.goTo(0)"
                />
                </router-link>
               
                <v-spacer></v-spacer>

                <div>
                <v-tabs
                    class="hidden-sm-and-down chevron"
                    optional
                    background-color="transparent"
                >
                    <v-tab
                    v-for="(name, i) in drawer_menu"
                    :key="i"
                    :to="name.link"
                    :ripple="false"
                    class="font-weight-bold"
                    min-width="96"
                    text
                    left
                    >
                      <v-icon v-if="name.icon" class="mr-2">{{ name.icon }}</v-icon>

                    {{ name.title }}
                    </v-tab>
                    <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        elevation="0"
                        fab
                        small
                        class="ml-4"
                        color="grey lighten-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </template>

                    <v-card>
                      <div class="content px-10 pt-10">
                        <div class="d-flex flex-column text-center justify-center">
                          <h3 class="mb-2">Welcome To Ecommerce</h3>
                          <h5 class="text-sm grey--text text--darken-2 font-600 mb-8">Log in with email & password</h5>
                        </div>

                        <p class="text-14 mb-2">Email Or Phone Number</p>
                        <v-text-field
                            placeholder="example@mail.com"
                            outlined
                            dense
                            hide-details=""
                            class="mb-4"
                        ></v-text-field>
                        <p class="text-14 mb-2">Password</p>
                        <v-text-field
                            type="password"
                            placeholder="*******"
                            outlined
                            dense
                            hide-details=""
                            class="mb-8"
                        ></v-text-field>

                        <v-btn
                          color="primary"
                          class="text-capitalize font-600 mb-4 py-5"
                          block
                        >
                           Login
                        </v-btn>
                        <v-row>
                          <v-col cols="12" lg="6" class="mx-auto">
                            <div class="d-flex align-center mb-4">
                              <v-divider></v-divider>
                              <span class="mx-3 text-16 grey--text text--darken-1 mb-1">on</span>
                              <v-divider></v-divider>
                            </div>
                            
                          </v-col>
                        </v-row>
                        <v-btn 
                          color="indigo"
                          class="text-capitalize font-600 white--text mb-4 py-5"
                          block
                        >
                          <v-icon left>mdi-facebook</v-icon>
                          Continue with Facebook
                        </v-btn>
                        <v-btn 
                          color="blue"
                          class="text-capitalize font-600 white--text mb-0 py-5"
                          block
                        >
                          <v-icon left>mdi-google</v-icon>
                          Continue with Google
                        </v-btn>

                        
                        
                      </div>
                      <div class="text-center my-5">
                          <span class="grey--text text--darken-1">Don't have account ? <a href="#" class="ms-2 grey--text text--darken-4 font-600">Sign Up</a> </span>
                        </div>
                      <div class="py-4 grey lighten-2">
                          <div class="text-center">
                            <span class="grey--text text--darken-1">Forgot your password ? <a href="#" class="ms-2 grey--text text--darken-4 font-600">Reset It</a> </span>
                          </div>
                      </div>
                     
                    </v-card>
                  </v-dialog>




                  <v-badge
                    color="primary"
                    :content="this.getCartTotalItems"
                    :value="this.getCartTotalItems > 0"
                    overlap
                    dot
                    tile
                    class="ml-4"
                  >
                    <v-btn
                      @click="cartDrawer = true"
                      elevation="0"
                      fab
                      color="grey lighten-2"
                      small
                    >
                      <v-icon color="">mdi-cart</v-icon>
                    </v-btn>
                  </v-badge>
                    



                </v-tabs>
                </div>
            <v-badge
              bordered
              color="error"
              :content="this.getCartTotalItems"
              :value="this.getCartTotalItems > 0"
              overlap
              class="ml-8 hidden-md-and-up"
            >
              <v-btn
                @click="cartDrawer = true"
                elevation="0"
                fab
                color="grey lighten-2"
                small
              >
                <v-icon color="">mdi-cart</v-icon>
              </v-btn>
            </v-badge>

            <v-app-bar-nav-icon
            class="hidden-md-and-up"
            @click="toggleDrawer"
            />
            

            </v-row>
            </v-container>
        </v-app-bar>



         <!-- Cart Drawer -->
         <v-navigation-drawer
            v-model="cartDrawer"
            fixed
            temporary
            right
            width="320"
            class="z-999"
          >
            <div class="secondary-siebar-content">
              <v-list-item>
                <v-list-item-avatar class="mr-0">
                  <v-icon color="">mdi-shopping-outline</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="">{{ getCartTotalItems }} Items</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    icon
                    color=""
                    @click="cartDrawer = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
              
                <div 
                  v-for="(item, index) in cart"
                  :key="index"
                  style=""
                >
                  <div class="cart-item d-flex justify-space-between align-center px-2 py-3">
                    <div class="d-flex flex-column align-center">
                      <v-btn
                        
                        class="mx-2"
                        fab
                        outlined
                        dark
                        x-small
                        color="primary"
                        @click="$store.dispatch('addItemAlreadyInCart', item.id)"
                      >
                        <v-icon dark>
                          mdi-plus
                        </v-icon>
                      </v-btn>
                      <span>{{ item.quantity }}</span>
                      <v-btn
                        class="mx-2"
                        fab
                        outlined
                        dark
                        x-small
                        color="primary"
                        @click="$store.dispatch('subtractItemAlreadyInCart', item.id)"

                      >
                        <v-icon dark>
                          mdi-minus
                        </v-icon>
                      </v-btn>
                    </div>
                    <v-avatar tile size="76">
                      <img :src="item.imgUrl" alt="">
                    </v-avatar>
                    <div class="col-5">
                      <h5 class="text-truncate">{{ item.title }}</h5>
                      <p class="text-tiny">${{ item.price }} x {{ item.quantity }}</p>
                      <h5 class="primary--text">${{ item.price * item.quantity }}</h5>
                    </div>
                    <v-btn
                      icon
                      color=""
                      @click="$store.dispatch('deleteFromCart', item.id)"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div>
                  <v-divider></v-divider>
                </div>
            </div>
            <template v-slot:append>
              <div class="pa-2">
                <v-btn class="text-capitalize mb-3" block color="primary">
                  Checkout Now (${{ getCartTotalCost }})
                </v-btn>
                <v-btn class="text-cappitalise" outlined block color="primary">
                  View Cart
                </v-btn>
              </div>
            </template>

          </v-navigation-drawer>






        <!-- Menu Drawer -->
        <v-navigation-drawer
            v-model="drawer"
            light
            app
            temporary
            left
            width="60%"
        >
            <v-list>
                <v-list-item
                    v-for="(name, i) in drawer_menu"
                    :key="i"
                    :to="name.link"
                    @click="onClick($event, link)"
                    :ripple="false"
                >
                    <v-list-item-title v-text="name.title" />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import {
    mapMutations, mapGetters, mapState
  } from 'vuex';

export default {
    name: 'NavBar',
    data: () => ({
        drawer_menu: [            
            {
            title: 'Find A Store',
            link: 'find-a-store',
            icon: 'mdi-map-marker'
            },
            {
            title: 'Menu',
            link: 'menu',
            },
            {
            title: 'Home',
            link: '/',
            }
        ],
      cartDrawer: false,
      dialog: false,
      social: [
        {
          name: 'Github',
          href: 'https://github.com/ndenys650',
          icon: 'mdi-github'
        },
        {
          name: 'Linkedin',
          href: 'https://www.linkedin.com/in/nathan-denys',
          icon: 'mdi-linkedin'
        }
      ]
    }),
    
    computed: {
      ...mapGetters(['getCartTotalCost', 'getCartTotalItems']),
      ...mapState(['cart']),
      homePage() {
        if(this.$route.path == "/" ) {
          return true
        } else {
          return false
        }
      },
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },
    methods: {
      ...mapMutations(['toggleDrawer', 'setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      }
    }
  }
</script>

<style scoped>
.z-999 {
    z-index: 999;
  }
.z-0 {
    z-index: 0!important;
  }
</style>