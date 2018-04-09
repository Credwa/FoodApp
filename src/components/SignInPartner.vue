<template>
    <div>
        <!--	Beginning of Sign In Page -->
        <div class="remodal-bg page-forgot-password">
        <main id="sign-in">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell small-12 form-box">
                        <h2 class="cursive text-center">Partner Sign In</h2>
                        <div class="callout">
                            <div class="grid-x grid-padding-x align-center">
                                <div class="cell small-9 msmall-8 medium-7">
                                    <router-link :to="'/'" id="logo-link">
                                        <span class="show-for-sr" aria-hidden="true">Food Universe</span>
                                        <span class="new-logo"></span>
                                    </router-link>
                                </div>
                                <div class="cell smedium-10">
                                    <form v-on:submit.prevent="submit($event)">
                                        <div class="form-floating-label has-icon">
                                            <input type="email" name="EmailAddress" required v-model="ZEmailAddress" />
                                            <label v-show="!rememberme">Email address</label>
                                            <div class="i far fa-envelope icon"></div>
                                        </div>
                                        <div class="form-floating-label has-icon">
                                            <input type="password" name="UserPassword" v-model="ZUserPassword" />
                                            <label v-show="!rememberme">Password</label>
                                            <div class="i fas fa-lock icon"></div>
                                        </div>
                                        <div class="grid-x small-up-2">
                                            <div class="cell">
                                                <input id="remember-me" type="checkbox" v-model="rememberme">
                                                <label for="remember-me">Remember me</label>
                                            </div>
                                        </div>
                                        <button class="button secondary expanded">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- END OF Sign In-->

        <!-- Common Footer Begin  -->
        <CommonFooter class="remodal-footer"></CommonFooter>
        <!-- End Common Footer  -->
        </div>
    </div>
</template>
<script>
// Library components.
import axios from 'axios';
// import { mapMutations } from 'vuex'
import router from '../router';
import CommonFooter from './CommonFooter.vue';

export default {
  name: 'SignInPartner',
  data() {
    return {
      ZEmailAddress: '',
      ZUserPassword: '',
      loading: false,
      token: '',
      rememberme: false
    };
  },
  created() {
    //do something after creating vue instance
  },
  components: {
    CommonFooter
  },
  mounted: function() {
    // this.srhtext = this.$store.state.srhtext
  },
  methods: {
    submit(e) {
      if (this.ZEmailAddress == '' || this.ZUserPassword == '') {
        this.$toastr.Add({
          title: 'Tip', // Toast Title
          msg: 'Please fill all the fields.', // Message
          position: 'toast-top-center', // Toast Position.
          type: 'info', // Toast type,
          preventDuplicates: true //Default is false
        });
        // this.log = "Preencha o campo para login.";
        event.preventDefault();
      } else {
        var config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        var data_array = {
          ZEmailAddress: this.ZEmailAddress,
          ZUserPassword: this.ZUserPassword
        };

        axios({
          method: 'post',
          url: process.env.API_URL + '/Evaluate-Partner-Login',
          data: data_array,
          config
        })
          .then(response => {
            var item = response.data.item;
            console.log('signinparnter', response);
            if (item.navkey) {
              // Set navkey from response
              this.$store.commit('setZNavKey', item.navkey);
              this.$store.commit('setCurrentUser', {
                username: this.ZEmailAddress,
                password: this.ZUserPassword
              });
              localStorage.setItem('ZNavKey', item.navkey);
              console.log(this.$store.state.currentUser)
              this.$toastr.Add({
                title: 'Success', // Toast Title
                msg: 'Logged in as partner successfully', // Message
                position: 'toast-top-center', // Toast Position.
                type: 'success', // Toast type,
                preventDuplicates: true //Default is false
              });
              if (response.data.item.isagreetoterms) {
                console.log(this.$store.state.currentUser)
                if (
                  this.$store.state.currentUser.username ===
                  this.$store.state.currentUser.password
                ) {
                  router.push({ path: '/changePasswordPartner' });
                } else {
                  router.push({ path: '/vendorportal' });
                }
              } else {
                router.push({ path: '/agreement' });
              }
            } else {
              this.$toastr.Add({
                title: 'Error', // Toast Title
                msg: 'Username or password incorrect', // Message
                position: 'toast-top-center', // Toast Position.
                type: 'warning', // Toast type,
                preventDuplicates: true //Default is false
              });
            }

            //Get Token
          })
          .catch(e => {
            this.$toastr.Add({
              title: 'Error', // Toast Title
              msg: 'Failed Login', // Message
              position: 'toast-top-center', // Toast Position.
              type: 'warning', // Toast type,
              preventDuplicates: true //Default is false
            });
            console.log(e);
          });
      }
    }
  }
};
</script>
<style scoped>
#main-nav .grid-x {
  background-position: center 100px;
  background-repeat: no-repeat;
}

#sign-in {
  height: 70vh;
}

.remodal-footer {
  background-color: #7dbe00;
  height: 30vh;
  margin-top: 0;
  padding-top: 0;
  bottom: 0;
  position: relative;
}
</style>
