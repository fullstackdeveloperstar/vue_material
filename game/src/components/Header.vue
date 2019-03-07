<template>
	<div class="header">
	    <md-toolbar class="" md-elevation="1">
	      <h3 class="md-title" style="flex: 1; align-items: center;display: flex;">Bounty.Games
			<md-button >Blog</md-button>
			<md-button >Forum</md-button>
	      </h3>

	      <md-button v-if="isLogin">Bounties</md-button>
	      <md-button >Games</md-button>
      	  <md-button >Marketplace</md-button>
	      <md-button v-if="!isLogin" v-on:click="clickLogin">Login</md-button>
      	  <md-button v-if="!isLogin" v-on:click="clickSignup">Register</md-button>
      	  
      	  <md-avatar v-if="isLogin">
	        <img src="../assets/avatar.png" alt="Avatar">
	      </md-avatar>
	      <md-button v-if="isLogin">Settings</md-button>
	      <md-button v-if="isLogin">Logout</md-button>

	    </md-toolbar>
	</div>
</template>

<script>
	export default {
	  name: 'Header',
	  data: () => ({
	  	
	  }),
	  props: {
	  	isLogin: Boolean
	  },
	  methods:{
	  	clickLogin: function() {
	  		this.$router.push({ path: '/' })
	  	},
	  	clickSignup: function() {
	  		this.$router.push({ path: '/signup' })
	  	}
	  }
	}
</script>

<style scoped>
.header{}
</style>