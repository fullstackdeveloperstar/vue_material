<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <div class="header-bar">
	        <div class="header-bar-left">
		        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
		          <md-icon>menu</md-icon>
		        </md-button>
		        
		        <span class="md-title">DashBoard</span>
		        <md-button >Blog</md-button>
				<md-button >Forum</md-button>
	        </div>
	        <div>
	        	<md-button>Bounties</md-button>
		      	<md-button>Games</md-button>
	      	  	<md-button>Marketplace</md-button>
	        	<md-avatar>
			      <img src="../../assets/avatar.png" alt="Avatar">
			    </md-avatar>
	        	<md-button>Settings</md-button>
	        	<md-button>Logout</md-button>
	        </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Dashboard',
  components: {
  	Header,
  	Footer
  },
  data: () => ({
      menuVisible: true
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
}
</script>

<style scoped="">
.md-app{
	height: 100vh;
}

.header-bar{
	display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.header-bar-left{
	display: flex;
	align-items: center;
}
</style>
