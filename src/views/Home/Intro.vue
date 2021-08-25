<template>
  <section>


      <!-- Section 1 -->
      <v-container fluid>
          <v-row no-gutters align="contain">
                <v-col cols="12" md="6" class="d-flex flex-column">
                    <v-img
                        class=""
                        height="500"
                        src="@/assets/images/sushi/sushi.jpg"
                    >
                    </v-img>
                </v-col>
                <v-col cols="12" md="6" class="d-flex flex-column justify-center secondary">
                  
                    <h1 class="h3 mx-auto mt-4">
                        SASHIMI A TAP AWAY
                    </h1>
                    <h2 class="body-1 mx-auto my-2">Join now to order and start earning Rewards.*</h2>
                    <v-btn class="mx-auto mb-5 mt-3" outlined rounded width="20%">Join Now</v-btn>                
                </v-col>
          </v-row>
      </v-container>



      <v-container fluid>
            <v-row no-gutters align="contain"
                    justify="center"
                    class="d-flex flex-row flex-wrap-reverse"
            >
              <v-col cols="12" md="6" class="d-flex flex-column order-sm-first justify-center primary">
                  
                    <h1 class="h3 mx-auto mt-4">
                        SATIVA A TAP AWAY
                    </h1>
                    <h2 class="body-1 mx-auto my-2">Delivery within the hour or your order free.*</h2>
                    

                    <v-btn class="mx-auto mb-5 mt-3" outlined rounded width="20%">Order Now</v-btn>                
                </v-col>
                <v-col cols="12" md="6" class="d-flex flex-column">
                    
                    <v-img
                        class=""
                        height="500"
                        src="@/assets/images/sushi/can.jpg"
                    >
                    </v-img>
                 
                </v-col>
          </v-row>
      </v-container>

      <!-- Section 2 -->
      <v-container fluid>
          <v-row>
              <v-col cols="12" md="6">
                  <v-card
                        class="mx-auto"
                    >
                        <v-img
                        height="500"
                        src="@/assets/images/sushi/indoor.jpg"
                        ></v-img>

                        <v-card-text class="secondary">
                            <h2 class="body-1 px-12 my-6 text-center">
                                Small plates, salads & ramen - enjoy an intimate setting with 12 private indoor seats or patio seating.
                            </h2>
                        </v-card-text>
                    </v-card>
              </v-col>

              
              <v-col cols="12" md="6" class="pb-6">
                  <v-card
                        class="mx-auto"
                    >
                        <v-img
                        height="500"
                        src="@/assets/images/sushi/dispense.jpg"
                        ></v-img>

                        <v-card-text class="secondary">
                            <h2 class="body-1 px-12 my-6 text-center">
                                Topicals, flowers, & edibles - an upstairs bar-like experience to ease the rest of your night.
                            </h2>
                        </v-card-text>
                    </v-card>
              </v-col>
          </v-row>
      </v-container>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>