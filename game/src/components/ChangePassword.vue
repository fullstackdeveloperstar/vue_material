<template>
  <div>
    <Header/>
    <div class="changepassword md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-field>

        <md-field>
          <label>Confirm Password</label>
          <md-input type="password" v-model="cpassword"></md-input>
        </md-field>

        <div class="md-layout">
          <md-button class="md-raised md-primary" type="submit">Change Password</md-button>
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
  name: 'ChangePassword',
  components:{
    Header,
    Footer
  },
  props: {
  },
  data: () => ({
    password: "",
    cpassword: ""
  }),

  methods: {
  }
}
</script>

<style scoped>
.changepassword{
  margin: 200px 0;
}
</style>
