<template>
  <div>
    <Header/>
    <div class="login md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label for="first-name">Email</label>
          <md-input name="first-name" id="first-name" v-model="email" type="email"></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-field>
        <md-checkbox v-model="rememberme" class="md-primary">Remember Me</md-checkbox>
        <div class="md-layout">
          <md-button class="md-raised md-primary" type="submit" v-on:click="login">Login</md-button>
          <md-button class="md-raised md-accent" v-on:click="clear">Clear</md-button>
          <md-button class="md-dense md-primary">Forgot Password?</md-button>
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
  name: 'Login',
  components:{
    Header,
    Footer
  },
  props: {
  },
  data: () => ({
    email: "",
    password: "",
    rememberme: false
  }),

  methods: {
    login: function() {
      
    },
    clear : function() {
      this.email = "";
      this.password = "";
      this.rememberme = false;
    }
  }
}
</script>

<style scoped>
.login{
  margin: 200px 0;
}
</style>
