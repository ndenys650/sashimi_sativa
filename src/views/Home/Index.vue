<template>
  <section>
    <!-- Cookies Modal PopUp -->


    <!-- CDC Guidelines Section -->
    <CDC />


    <!-- First Section -->

    <Intro />


    <!-- Second Section -->

    <Community />

    <Restrictions />

  </section>
</template>

<script>
  import CDC from '@/views/Home/cdcGuideLines'
  import Intro from '@/views/Home/Intro'
  import Community from '@/views/Home/Community'
  import Restrictions from '@/views/Home/Restrictions'


  export default {
    name: 'Home',

    components: {
      CDC,
      Intro,
      Community,
      Restrictions
    },
  }
</script>
