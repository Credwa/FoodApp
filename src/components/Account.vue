<template>
    <div>
        <StandardHeader :search="search"></StandardHeader>
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12">
                    <nav aria-label="You are here:" role="navigation">
                        <ul class="breadcrumbs">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <router-link :to="'/account'">My Account</router-link>
                            </li>
                            <li>
                                <span class="show-for-sr">Current: </span> Settings
                            </li>
                            <li>
                                <a @click="logout()">Log Out</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <header id="account-header">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <h4 class="title line-bottom-left">My Account</h4>
                    </div>
                </div>
            </div>
        </header>
        <section id="account-settings">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <button id="tabs-mobile-button" class="hide-for-smedium" data-toggle="tabs-wrapper">Profile</button>
                        <div id="tabs-wrapper" data-toggler=".expanded">
                            <ul class="tabs grid-x small-up-1 smedium-up-4" data-deep-link="true" data-update-history="true" data-deep-link-smudge="500" data-tabs id="main-tabs">
                                <li v-for="(item, index) in items" class="tabs-title cell" v-bind:class="{'is-active' : index === currentselected}" @click="selecttab(index)" v-bind:key="index">
                                    <a> {{ item.title }} </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tabs-content" data-tabs-content="main-tabs">
                            <Profile :selecttab="0 === currentselected" :ZNavKey="ZNavKey"></Profile>
                            <DietarySettings :selecttab="1 === currentselected" :ZNavKey="ZNavKey"></DietarySettings>
                            <StoreSettings :selecttab="2 === currentselected" :ZNavKey="ZNavKey"></StoreSettings>
                            <SecuritySettings :selecttab="3 === currentselected" :ZNavKey="ZNavKey"></SecuritySettings>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
// Library components.
import { mapState } from 'vuex'
import axios from 'axios';
// Custom components.
import StandardHeader from './StandardHeader.vue'
import router from '../router'
import Profile from './account/Profile'
import DietarySettings from './account/DietarySettings'
import StoreSettings from './account/StoreSettings'
import SecuritySettings from './account/SecuritySettings'

export default {
    name: 'Account',
    components: {
        StandardHeader,
        Profile,
        DietarySettings,
        StoreSettings,
        SecuritySettings
    },

    data() {
        return {
            currentselected: 0,
            items: [
                {
                    id: "0",
                    title: "Profile"
                },
                {
                    id: "1",
                    title: "Dietary Settings"
                },
                {
                    id: "2",
                    title: "Store Settings"
                },
                {
                    id: "3",
                    title: "Security Settings"
                }
            ],
            loading: false
        }
    },
    created: function() {
        //this.search()
    },
    computed: {
        ZNavKey: function() {
            return localStorage.getItem('ZNavKey')
        }
    },

    methods: {
        search(srhtext = '') {
            //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})
            //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123
            router.push({ path: `/SearchResults` }) // -> /user/123
        },
        selecttab(index) {
            this.currentselected = index
        },
        logout() {

            var config = {
                headers: {
                    'Content-Type': "application/json",
                }
            };
            var data_array = {
                ZNavKey: localStorage.getItem('ZNavKey')
            };

            axios({
                method: 'post',
                url: process.env.API_URL + '/User-Logout',
                data: data_array,
                config
            }).then(response => {
                if (response.status == 200) {
                    console.log('logout')
                }
            })

            localStorage.setItem('ZNavKey', '')
            localStorage.setItem('VendorZNavKey', '')
            router.push({ path: `/` }) // -> /user/123
            console.log(localStorage.getItem('ZNavKey'))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tabs-wrapper .tabs-title.is-active>a {
    background: #7DBE00;
    color: #ffffff;
}
</style>
