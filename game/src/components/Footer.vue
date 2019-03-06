<template>
	<div class="footer">
		<md-divider></md-divider>
		<div class="links md-layout">
		    <div class="md-layout-item md-size-30 md-large-size-30 md-medium-size-30 md-small-size-30 md-xsmall-size-100">
		    	<h1 class="logo">Bounty.Games</h1>
		    </div>
		    <div class="md-layout md-layout-item md-size-70 md-large-size-70 md-medium-size-70 md-small-size-70 md-xsmall-size-100">
		    	<div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-33 md-xsmall-size-100">
		    		<md-list>
				      <md-list-item >The team behind</md-list-item>
				      <md-list-item >How it works</md-list-item>
				      <md-list-item >Support</md-list-item>
				    </md-list>
		    	</div>
		    	<div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-33 md-xsmall-size-100">
		    		<md-list>
				      <md-list-item >Contact</md-list-item>
				      <md-list-item >Facebook</md-list-item>
				      <md-list-item >Twitter</md-list-item>
				    </md-list>
		    	</div>
		    	<div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-33 md-xsmall-size-100">
		    		<md-list>
				      <md-list-item >Discord</md-list-item>
				      <md-list-item >Steam</md-list-item>
				      <md-list-item></md-list-item>
				    </md-list>
		    	</div>
		    </div>
		</div>

		<md-toolbar class="" >
	      <h3 class="md-title" style="flex: 1">Bounty.Games</h3>
	      <span>Copyright since 2019</span>
	    </md-toolbar>
	</div>
</template>

<script>
	export default {
	  name: 'Footer'
	}
</script>

<style scoped>
.links{
	padding: 30px 0;

}
.logo{
	color: white;
}
</style>