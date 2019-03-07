<template>
  <div>
    <Header/>
    <div class="forgot md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label for="email">Email</label>
          <md-input name="email" id="email" v-model="email" type="email"></md-input>
        </md-field>
        <div class="md-layout">
          <md-button class="md-raised md-primary" type="submit">Submit</md-button>
          <router-link to="/"><md-button class="md-dense md-primary">Go to login</md-button></router-link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'ForgotPassword',
  components:{
    Header,
    Footer
  },
  props: {
  },
  data: () => ({
    email: ""
  }),

  methods: {
  }
}
</script>

<style scoped>
.forgot{
  margin: 200px 0;
}
</style>
