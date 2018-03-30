<template>
    <div>
        <!--	Beginning of Forgot Password In Page -->

        <main id="sign-in">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell small-12 form-box">
                        <h2 class="cursive text-center">Forgot my password</h2>
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
                                        <p>Enter the email address associated with your Food Universe account to reset your password:</p>
                                    </div>
                                    <form action="">
                                        <div class="form-floating-label has-icon">
                                            <input type="email" />
                                            <label>Email address</label>
                                            <div class="i far fa-envelope icon"></div>
                                        </div>
                                        <button class="button secondary expanded">Reset my password</button>
                                    </form>
                                </div>
                                <div class="cell smedium-10">
                                    <p class="text-center"><router-link :to="'/signin'">&larr; Cancel</router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- END OF Forgot Password-->

        <!-- Common Footer Begin  -->
        <CommonFooter></CommonFooter>
        <!-- End Common Footer  -->

    </div>
</template>
<script>
// Library components.
import axios from 'axios';
// import { mapMutations } from 'vuex'
import CommonFooter from './CommonFooter.vue'

export default {
    name: 'ForgotPassword',
    data() {
        return {
            ZEmailAddress: '',
            ZUserPassword: '',
            loading: false,
            token: '',
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
        submit(e){
            console.log(this.ZEmailAddress)
            console.log(this.ZUserPassword)
            if(this.ZEmailAddress == "" || this.ZUserPassword == ""){
                event.preventDefault();
            }else{
                var config = {
                    headers: {
                        'Content-Type': "application/json",
                    }
                };

                var data_array = {
                    ZEmailAddress: this.ZEmailAddress,
                    ZUserPassword: this.ZUserPassword
                };

                const data_string = Object.keys(data_array).map((key) => {
                    return encodeURIComponent(key) + '="' + encodeURIComponent(data_array[key])+'"';
                }).join('&');

                axios({
                    method: 'post',
                    url: process.env.API_URL + '/Evaluate-Login',
                    data: data_array,
                    config
                    }).then(response => {
                        if(response.Items){
                            this.$toastr.Add({
                                title: "Success", // Toast Title
                                msg: "Logged in successfully", // Message
                                clickClose: false, // Click Close Disable
                                progressBarValue: 3000, // Manually update progress bar value later; null (not 0) is default
                                position: "toast-top-center", // Toast Position.
                                type: "success", // Toast type,
                                preventDuplicates: true //Default is false
                            });
                            console.log(response)
                        }else{
                            this.$toastr.Add({
                                title: "Error", // Toast Title
                                msg: "Failed Login", // Message
                                position: "toast-top-center", // Toast Position.
                                type: "warning", // Toast type,
                                preventDuplicates: true //Default is false
                            });
                            console.log(response)
                        }

                })
                .catch(e => {
                    this.$toastr.Add({
                        title: "Error", // Toast Title
                        msg: "Failed Login", // Message
                        position: "toast-top-center", // Toast Position.
                        type: "warning", // Toast type,
                        preventDuplicates: true //Default is false
                    });
                    console.log(response)
                    this.errors.push(e)
                })
            }
        },
    }
}
</script>
<style scoped>

</style>
