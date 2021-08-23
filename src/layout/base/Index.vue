<template>
  <v-app>
    <NavBar />

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/layout/base/NavBar'
import Footer from '@/layout/base/Footer'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style>

</style>
