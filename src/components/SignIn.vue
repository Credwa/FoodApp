<template>
    <div>
        <!--	Beginning of Sign In Page -->

        <main id="sign-in">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell small-12 form-box">
                        <h2 class="cursive text-center">Sign In</h2>
                        <div class="callout">
                            <div class="grid-x grid-padding-x align-center">
                                <div class="cell small-9 msmall-8 medium-7">
                                    <router-link :to="'/'" id="logo-link">
                                        <span class="show-for-sr" aria-hidden="true">Food Universe</span>
                                        <span class="logo"></span>
                                    </router-link>
                                </div>
                                <div class="cell smedium-10">
                                    <div class="external-login">
                                        <button class="button facebook-login expanded">
                                            <i class="fab fa-lg fa-facebook-f"></i> Sign in with Facebook</button>
                                        <button class="button google-login expanded">
                                            <i class="fab fa-lg fa-google"></i> Sign in with Google</button>
                                    </div>
                                    <p class="text-light text-center">&mdash; or &mdash;</p>
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
                                            <div class="cell text-right small">
                                                <router-link :to="'/forgotpassword'">Forgot my password</router-link>
                                            </div>
                                        </div>
                                        <button class="button secondary expanded">Sign in</button>
                                    </form>
                                </div>
                                <div class="cell smedium-10">
                                    <div class="separator-title">
                                        <h4 class="subtitle cursive">New customer?</h4>
                                    </div>
                                    <router-link :to="'/signup'" class="button secondary hollow expanded">Create an account</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- END OF Sign In-->

        <!-- Common Footer Begin  -->
        <CommonFooter></CommonFooter>
        <!-- End Common Footer  -->
    </div>
</template>
<script>
// Library components.
import axios from 'axios';
// import { mapMutations } from 'vuex'
import router from '../router'
import CommonFooter from './CommonFooter.vue'

export default {
    name: 'SignIn',
    data() {
        return {
            ZEmailAddress: '',
            ZUserPassword: '',
            loading: false,
            token: '',
            rememberme: false
        }
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
            if (this.ZEmailAddress == "" || this.ZUserPassword == "") {
                this.$toastr.Add({
                    title: "Tip", // Toast Title
                    msg: "Please fill all the fields.", // Message
                    position: "toast-top-center", // Toast Position.
                    type: "info", // Toast type,
                    preventDuplicates: true //Default is false
                });
                // this.log = "Preencha o campo para login.";
                event.preventDefault();
            } else {
                var config = {
                    headers: {
                        'Content-Type': "application/json",
                    }
                };

                var data_array = {
                    ZEmailAddress: this.ZEmailAddress,
                    ZUserPassword: this.ZUserPassword
                };

                axios({
                    method: 'post',
                    url: process.env.API_URL + '/Evaluate-Login',
                    data: data_array,
                    config
                }).then(response => {
                    var item = response.data.Item;
                    console.log('signin', response)
                    if (item) {
                        // Set navkey from response
                        this.$store.commit('setZNavKey', item.navkey);
                        localStorage.setItem('ZNavKey', item.navkey)

                        this.$toastr.Add({
                            title: "Success", // Toast Title
                            msg: "Logged in successfully", // Message
                            position: "toast-top-center", // Toast Position.
                            type: "success", // Toast type,
                            preventDuplicates: true //Default is false
                        });
                        router.push({ path: '/' });
                    } else {
                        this.$toastr.Add({
                            title: "Error", // Toast Title
                            msg: "Failed Login", // Message
                            position: "toast-top-center", // Toast Position.
                            type: "warning", // Toast type,
                            preventDuplicates: true //Default is false
                        });
                    }

                    //Get Token

                })
                    .catch(e => {
                        this.$toastr.Add({
                            title: "Error", // Toast Title
                            msg: "Failed Login", // Message
                            position: "toast-top-center", // Toast Position.
                            type: "warning", // Toast type,
                            preventDuplicates: true //Default is false
                        });
                        console.log(e)
                    })
            }
        },
    }
}
</script>
<style scoped>
#main-nav .grid-x {
    background-position: center 100px;
    background-repeat: no-repeat;
}
</style>
