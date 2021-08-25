<template>
  <v-container>
        <v-row justify="center" align="center" class="my-10">
            <v-col cols="12" xl="2" lg="2" md="4" sm="6">
                <h2 class="mb-5">About</h2>
                <div v-for="(n, index) in aboutUs" :key="index" class="my-1">
                    <a href="#" class="text-decoration-none footer-link-hover">{{n}}</a>
                </div>
            </v-col>
            <!-- <v-col cols="12" xl="3" lg="3" md="4" sm="6">
                <h2 class="mb-5">Customers</h2>
                <div v-for="(n, index) in customerCare" :key="index" class="my-1">
                    <a href="#" class="text-decoration-none footer-link-hover">{{n}}</a>
                </div>
            </v-col> -->
            <v-col cols="12" xl="3" lg="3" md="4" sm="6">
                <h2 class="mb-5">Careers</h2>
                <div v-for="(n, index) in careers" :key="index" class="my-1">
                    <a href="#" class="text-decoration-none footer-link-hover">{{n}}</a>
                </div>
            </v-col>
            <v-col cols="12" xl="3" lg="3" md="4" sm="6">
                <h2 class="mt-2 mb-5">Contact</h2>
                <p class="footer-text">Redwood City, CA, 94403, United States</p>
                <p class="footer-text">uilib.help@gmail.com</p>
                <p class="footer-text">+1 (650) 456-1780</p>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      
      aboutUs: ['Our Stores', 'Our Cares', 'Terms & Conditions', 'Privacy Policy'],
      careers: ['Help Center', 'How to', 'Corporate & Bulk Purchasing', 'Returns & Funds'],
    }),
  }
</script>

<style scoped>
a:hover {
    color: #AF4034;
}
</style>