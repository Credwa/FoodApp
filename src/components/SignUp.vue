<template>
    <div>
        <!--	Beginning of Sign Up Page -->

        <main id="sign-in">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell small-12 form-box">
                        <h2 class="cursive text-center">Create an account</h2>
                        <div class="callout">
                            <div class="grid-x grid-padding-x align-center">
                                <div class="cell small-9 msmall-8 medium-7">
                                    <a href="/" id="logo-link">
                                        <span class="show-for-sr" aria-hidden="true">Food Universe</span>
                                        <span class="logo"></span>
                                    </a>
                                </div>
                                <div class="cell smedium-10">
                                    <div class="external-login">
                                        <button class="button facebook-login expanded" @click="authenticate('facebook')">
                                            <i class="fab fa-lg fa-facebook-f"></i> Sign up with Facebook</button>
                                        <button class="button google-login expanded" @click="authenticate('google')">
                                            <i class="fab fa-lg fa-google"></i> Sign up with Google</button>
                                    </div>
                                    <p class="text-light text-center">&mdash; or &mdash;</p>
                                    <form v-on:submit.prevent="submit($event)">
                                        <div class="form-floating-label has-icon">
                                            <input type="email" name="ZEmailAddress" required v-model="ZEmailAddress" />
                                            <label>Email address</label>
                                            <div class="i far fa-envelope icon"></div>
                                        </div>
                                        <div class="form-floating-label has-icon">
                                            <input type="text" name="ZFirstName" required v-model="ZFirstName" />
                                            <label>First name</label>
                                            <div class="i fas fa-user icon"></div>
                                        </div>
                                        <div class="form-floating-label has-icon">
                                            <input type="text" name="ZLastName" required v-model="ZLastName" />
                                            <label>Last name</label>
                                            <div class="i fas fa-user icon"></div>
                                        </div>
                                        <div class="form-floating-label has-icon">
                                            <input type="password" required v-model="ZUserPassword" />
                                            <label>Password</label>
                                            <div class="i fas fa-lock icon"></div>
                                        </div>
                                        <div class="form-floating-label has-icon">
                                            <input type="password" required v-model="ZUserConfirmPassword" />
                                            <label>Confirm</label>
                                            <div class="i fas fa-lock icon"></div>
                                        </div>
                                        <p class="text-light smaller text-left">
                                            By creating an account, you are agreeing to the Food Universe
                                            <a class="muted underline" href="#">terms &amp; conditions</a> and
                                            <a class="muted underline" href="#">privacy policy</a>, including receipt of Food Universe exclusive email offers and promotions. To manage your marketing choices, please
                                            <a class="muted underline" href="#">click here</a>.
                                        </p>
                                        <button class="button secondary expanded">Create account</button>
                                    </form>
                                </div>
                                <div class="cell smedium-10">
                                    <p class="text-center">Already have an account?
                                        <router-link :to="'/signin'">
                                            <strong>Sign in</strong>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- END OF Sign Up-->

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
    name: 'SignUp',
    data() {
        return {
            ZEmailAddress: '',
            ZFirstName: '',
            ZLastName: '',
            ZUserPassword: '',
            ZUserConfirmPassword: '',
            //endpoint: 'https://api.fooduniverse.com/service/api/data/doquery/Onboard-Users-Insert',
            endpointregister: 'https://api.everythingfood.com/service/api/account/register',
            loading: false,
        }
    },
    created() {
        //do something after creating vue instance
    },
    components: {
        CommonFooter
    },
    mounted: function() {
    },
    methods: {
        submit(e) {
            if (this.Email == "" || this.Password == "") {
                // this.log = "Preencha o campo para login.";
                event.preventDefault();
            } else {
                var config = {
                    headers: {
                        'Content-Type': "application/json"
                    }
                };

                var data_array = {
                    ZEmailAddress: this.ZEmailAddress,
                    ZFirstName: this.ZFirstName,
                    ZLastName: this.ZLastName,
                    ZUserPassword: this.ZUserPassword,
                };

                // const data_string = Object.keys(data_array).map((key) => {
                //     return encodeURIComponent(key) + '=' + encodeURIComponent(data_array[key]);
                // }).join('&');

                // Show alert while signing up
                this.$toastr.Add({
                    title: "Signing Up", // Toast Title
                    msg: "You are signing up now. Please wait for a moment", // Message
                    position: "toast-top-center", // Toast Position.
                    timeout: 10000,
                    type: "info", // Toast type,
                    preventDuplicates: true //Default is false
                });

                axios({
                    method: 'post',
                    url: process.env.API_URL + '/Onboard-Users-Insert',
                    data: data_array,
                    config
                }).then(response => {

                    var data_array_register = {
                        Email: this.ZEmailAddress,
                        Password: this.ZUserPassword,
                        ConfirmPassword: this.ZUserConfirmPassword
                    }

                    axios({
                        method: 'post',
                        url: this.endpointregister,
                        data: data_array_register,
                        config
                    }).then(response => {

                        if (response.status == 200) {
                            this.$toastr.Add({
                                title: "Success", // Toast Title
                                msg: "Signup successfully", // Message
                                position: "toast-top-center", // Toast Position.
                                type: "success", // Toast type,
                                preventDuplicates: true, //Default is false
                                onCreate: function() {
                                    this.$toastr.removeByType('info')
                                },
                            });
                            router.push({ path: '/signin' });
                        } else {
                            this.$toastr.Add({
                                title: "Error", // Toast Title
                                msg: "Failed Signup", // Message
                                position: "toast-top-center", // Toast Position.
                                type: "warning", // Toast type,
                                preventDuplicates: true //Default is false
                            });

                        }

                    })
                })
                .catch(e => {
                    this.errors.push(e)
                    this.$toastr.Add({
                        title: "Error", // Toast Title
                        msg: "Failed Signup", // Message
                        position: "toast-top-center", // Toast Position.
                        type: "warning", // Toast type,
                        preventDuplicates: true //Default is false
                    });

                })
            }
        },
        authenticate: function(provider) {
            console.log('provider', provider);

            this.$auth.authenticate(provider).then(function(response) {
                console.log('response', response)
                var access_token = response.data.access_token
                axios({
                    method: 'get',
                    url: 'https://www.googleapis.com/plus/v1/people/me',
                }).then(function(response) {
                    console.log('profile', response)
                    this.ZEmailAddress = response.data.emails[0].value
                    this.ZFirstName = response.data.name.givenName
                    this.ZLastName = response.data.name.familyName

                })
                .catch(e => {
                    console.log(e)
                })
            })
            .catch(e => {
                // this.errors.push(e)
                console.log('error', e)
            })
        }
    }
}
</script>
