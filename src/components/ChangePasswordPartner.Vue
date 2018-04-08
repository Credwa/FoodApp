<template>
    <div>
        <!--	Beginning of Sign In Page -->
        <div class="remodal-bg page-forgot-password">
        <main id="sign-in">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell small-12 form-box">
                        <h2 class="cursive text-center">Change Password</h2>
                        <div class="callout">
                            <div class="grid-x grid-padding-x align-center">
                                <div class="cell small-9 msmall-8 medium-7">
                                    <router-link :to="'/'" id="logo-link">
                                        <span class="show-for-sr" aria-hidden="true">Food Universe</span>
                                        <span class="logo"></span>
                                    </router-link>
                                </div>
                                <div class="cell smedium-10">
                                    <form v-on:submit.prevent="submit($event)">
                                      <div class="form-floating-label has-icon">
                                            <input type="email" name="UserEmail" v-model="ZEmailAddress" disabled />
                                            <label>User</label>
                                            <div class="i fas fa-lock icon"></div>
                                        </div>
                                        <br>
                                        <div class="form-floating-label has-icon">
                                            <input type="password" name="UserPassword" v-model="ZUserPassword" />
                                            <label>Password</label>
                                            <div class="i fas fa-lock icon"></div>
                                        </div>
                                        <div class="form-floating-label has-icon">
                                            <input type="password" name="UserPassword" v-model="ZConfirmUserPassword" />
                                            <label>Confirm Password</label>
                                            <div class="i fas fa-lock icon"></div>
                                        </div>
                                        <button class="button secondary expanded">Update</button>
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
import router from '../router'
import CommonFooter from './CommonFooter.vue'
import { mapState } from 'vuex';

export default {
    name: 'ChangePasswordPartner',
    data() {
        return {
            ZEmailAddress: this.$store.state.currentUser.username,
            ZUserPassword: '',
            ZConfirmUserPassword: '',
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
            if (this.ZUserPassword == "" || this.ZConfirmUserPassword == "") {
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
                    ZNavKey: this.$store.state.ZNavKey,
                    ZUserPassword: this.ZUserPassword,
                    ZConfirmUserPassword: this.ZConfirmUserPassword
                };

                axios({
                    method: 'post',
                    url: process.env.API_URL + '/Account-Page-User-Password-Update',
                    data: data_array,
                    config
                }).then(response => {
                    var item = response.data.item;
                    console.log('changepasswordpartner', response)
                    if (item) {

                        this.$toastr.Add({
                            title: "Success", // Toast Title
                            msg: "Password updated, Logged in as partner successfully", // Message
                            position: "toast-top-center", // Toast Position.
                            type: "success", // Toast type,
                            preventDuplicates: true //Default is false
                        });
                        router.push({ path: '/vendorportal' });
                    } else {
                        this.$toastr.Add({
                            title: "Error", // Toast Title
                            msg: "Failed To Update Password", // Message
                            position: "toast-top-center", // Toast Position.
                            type: "warning", // Toast type,
                            preventDuplicates: true //Default is false
                        });
                    }

                    //Get Token

                })
                    .catch(e => {
                      console.log(e);
                        this.$toastr.Add({
                            title: "Error", // Toast Title
                            msg: "Failed password change", // Message
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

#sign-in {
    height: 80vh;
}

.remodal-footer {
    background-color: #7DBE00;
    height: 20vh;
    margin-top: 0;
    padding-top: 0;
    bottom: 0;
    position: relative;
}
</style>
