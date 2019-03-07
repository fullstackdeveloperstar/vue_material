<template>
  <div>
    <Header/>
    <div class="signup md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label for="email">Email</label>
          <md-input name="email" id="email" v-model="email" type="email"></md-input>
        </md-field>

        <md-field>
          <label for="user-name">User Name</label>
          <md-input name="user-name" id="user-name" v-model="username" type="text"></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-field>

        <md-field>
          <label>Confirm Password</label>
          <md-input type="password" v-model="cpassword"></md-input>
        </md-field>

        <md-checkbox v-model="termsagree" class="md-primary">By signing up to our service, you agree to our Terms</md-checkbox>
        <md-checkbox v-model="otheragree" class="md-primary">By signing up to our service, you agree to Conditions and Privacy Policy</md-checkbox>
        <div class="md-layout">
          <md-button class="md-raised md-primary" type="submit" v-on:click="login">Register</md-button>
          <md-button class="md-raised md-accent" v-on:click="clear">Clear</md-button>
          <router-link to="/"><md-button class="md-dense md-primary">Go to Login</md-button></router-link>
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
  name: 'Signup',
  components:{
    Header,
    Footer
  },
  props: {
  },
  data: () => ({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    termsagree: false,
    otheragree: false
  }),

  methods: {
    login: function() {
      
    },
    clear : function() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.cpassword = "";
      this.termsagree = false;
      this.otheragree = false;
    }
  }
}
</script>

<style scoped>
.signup{
  margin: 100px 0;
}
</style>
