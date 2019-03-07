<template>
  <div class="userprofile">
    

    <md-card>
      

      <md-card-content>
        <div class="banner">
          <div class="jumbo"></div>
          <div class="icons">
            <md-avatar class="md-avatar-icon md-primary">
              <md-icon>chat</md-icon>
            </md-avatar>
            <div class="profile-image"></div>
            <md-avatar class="md-avatar-icon md-accent">
              <md-icon>favorite</md-icon>
            </md-avatar>
          </div>
        </div>

        <md-card class="md-primary" md-theme="black-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Ellena</div>
              <div class="md-subhead">Member since 05 January 2016</div>
            </md-card-header-text>
          </md-card-header>
        </md-card>

        <md-tabs class="md-primary">
          <template slot="md-tab" slot-scope="{ tab }">
            {{ tab.label }} <i class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</i>
          </template>

          <md-tab id="tab-overview" md-label="Overview" >
            Home Tab
          </md-tab>

          <md-tab id="tab-stats" md-label="Stats" >
            Pages tab
            <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
          </md-tab>

          <md-tab id="tab-posts" md-label="Posts" >
            Posts tab
            <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
          </md-tab>

          <md-tab id="tab-videos" md-label="Videos" :md-template-data="{ badge: newPosts }" >
            Favorites tab
            <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
          </md-tab>

          <md-tab id="tab-friends" md-label="Friends" >
            <span class="md-headline">Friends</span>

            <div class="md-layout md-gutter">
              <md-card>
                <md-card-header>
                  <md-card-header-text>
                    <div class="md-title">Ellena</div>
                    <div class="md-subhead">United Stats</div>
                  </md-card-header-text>

                  <md-card-media>
                    <img src="../../assets/avatar.png" alt="People">
                  </md-card-media>
                </md-card-header>
              </md-card>
              
              <md-card>
                <md-card-header>
                  <md-card-header-text>
                    <div class="md-title">Ellena</div>
                    <div class="md-subhead">United Stats</div>
                  </md-card-header-text>

                  <md-card-media>
                    <img src="../../assets/avatar.png" alt="People">
                  </md-card-media>
                </md-card-header>
              </md-card>
            </div>
          </md-tab>

          <md-tab id="tab-following" md-label="Following" >
            <span class="md-headline">Following</span>

            <div class="md-layout md-gutter">
              <md-card>
                <md-card-header>
                  <md-card-header-text>
                    <div class="md-title">Ellena</div>
                    <div class="md-subhead">United Stats</div>
                  </md-card-header-text>

                  <md-card-media>
                    <img src="../../assets/avatar.png" alt="People">
                  </md-card-media>
                </md-card-header>
              </md-card>
              
              <md-card>
                <md-card-header>
                  <md-card-header-text>
                    <div class="md-title">Ellena</div>
                    <div class="md-subhead">United Stats</div>
                  </md-card-header-text>

                  <md-card-media>
                    <img src="../../assets/avatar.png" alt="People">
                  </md-card-media>
                </md-card-header>
              </md-card>
            </div>
          </md-tab>

          <md-tab id="tab-follower" md-label="Follower" >
            Follower tab
          </md-tab>
        </md-tabs>
      </md-card-content>
    </md-card>

  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  components:{
    
  },
  props: {
  },
  data: () => ({
   newPosts: 1,
  }),

  methods: {
    
  }
}
</script>

<style scoped>
  .jumbo{
    height: 250px;
    background: url(../../assets/profile-banner.jpg);
    background-size: cover;
  }

  .banner .icons{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .banner .icons .md-avatar{
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
    width: 50px;
    height: 50px;
    margin-top: -25px;
  }

  .profile-image{
    width: 134px;
    height: 134px;
    background: url(../../assets/avatar.png) center center;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 2px solid white;
    margin-top: -67px;
  }

  .badge {
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2px;
    right: 2px;
    background: red;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -.05em;
    font-family: 'Roboto Mono', monospace;
  }

  .md-card{
    margin: 5px;
  }

  .md-tabs .md-card {
    cursor: pointer;
  }
</style>
