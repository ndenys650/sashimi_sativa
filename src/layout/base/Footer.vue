<template>
  <section class="grey">
  <LinkList />
  <v-footer
    class="grey"
    >
    
      <v-container>
        <v-row>
          <v-col
            class="text-center text-md-left"
            cols="12"
            md="6"
          >
          <v-btn
              v-for="(item, i) in social"
              :key="i"
              :href="item.href"
              target="_blank"
              icon
              large
              outlined
              class="mx-2"
            >
              <v-icon v-text="item.icon" />
          </v-btn>
          </v-col>

          
        </v-row>
        <v-row>
          <div v-for="(n, index) in customerCare" :key="index" class="my-1 px-2">
              <a href="#" class="text-decoration-none footer-link-hover"> {{ n }}</a>
          </div>
        </v-row>
        <v-row>
          <v-col
            class="text-center text-md-left font-weight-light"
            cols="12"
            md="6"
          >
            &copy; Nate Denys - {{ new Date().getFullYear() }}
            
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </section>
</template>

<script>
import LinkList from '@/layout/Footer/LinkList'

export default {
    name: 'Footer',
    data: () => ({
      items: [
        'Home',
        'Projects',
      ],
      customerCare: ['Help Center', 'How to Buy', 'Track Your Order', 'Corporate & Bulk Purchasing', 'Returns & Funds'],
      social: [
        {
          name: 'Github',
          href: 'https://github.com/ndenys650',
          icon: 'mdi-github'
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/natedenys/',
          icon: 'mdi-instagram'
        },
        {
          name: 'Linkedin',
          href: 'https://www.linkedin.com/in/nathan-denys',
          icon: 'mdi-linkedin'
        },
        {
          name: 'Google',
          href: 'www.google.com',
          icon: 'mdi-google'
        },
        {
          name: 'Youtube',
          href: 'www.youtube.com',
          icon: 'mdi-youtube'
        }
      ]
    }),
    components: {
      LinkList
    }

}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
  color: #AF4034;
}
</style>