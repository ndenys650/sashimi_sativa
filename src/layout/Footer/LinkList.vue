<template>
  <v-container>
        <v-row justify="center" align="center" class="my-10">
            <v-col cols="12" xl="2" lg="2" md="4" sm="6">
                <h2 class="mb-5">About Us</h2>
                <div v-for="(n, index) in aboutUs" :key="index" class="my-1">
                    <a href="#" class="text-decoration-none footer-link-hover ">{{n}}</a>
                </div>
            </v-col>
            <v-col cols="12" xl="3" lg="3" md="4" sm="6">
                <h2 class="mb-5">Customer Care</h2>
                <div v-for="(n, index) in customerCare" :key="index" class="my-1">
                    <a href="#" class="text-decoration-none footer-link-hover">{{n}}</a>
                </div>
            </v-col>
            <v-col cols="12" xl="3" lg="3" md="4" sm="6">
                <h2 class="mb-5">Careers</h2>
                <div v-for="(n, index) in customerCare" :key="index" class="my-1">
                    <a href="#" class="text-decoration-none footer-link-hover">{{n}}</a>
                </div>
            </v-col>
            <v-col cols="12" xl="3" lg="3" md="4" sm="6">
                <h2 class="mb-5">Contact Us</h2>
                <p class="footer-text">70 Washington Square South, New York, NY 10012, United States</p>
                <p class="footer-text">Email: uilib.help@gmail.com</p>
                <p class="footer-text mb-5">Phone: +1 1123 456 780</p>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      
      aboutUs: ['Careers', 'Our Stores', 'Our Cares', 'Terms & Conditions', 'Privacy Policy'],
      Careers: ['Help Center', 'How to Buy', 'Track Your Order', 'Corporate & Bulk Purchasing', 'Returns & Funds'],
      customerCare: ['Help Center', 'How to Buy', 'Track Your Order', 'Corporate & Bulk Purchasing', 'Returns & Funds']

    }),
  }
</script>

<style scoped>
a:hover {
    color: #AF4034;
}
</style>