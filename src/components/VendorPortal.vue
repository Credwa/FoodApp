<template>
    <div>
        <VendorPortalHeader :search="search"></VendorPortalHeader>
        <!-- breadcrumbs <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12">
                    <nav aria-label="You are here:" role="navigation">
                        <ul class="breadcrumbs">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <router-link :to="'/vendorportal'">Vendor Portal</router-link>
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
        </div> -->
        <header id="account-header">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <h4 class="title line-bottom-left">Vendor Portal</h4>
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
                            <ul class="tabs grid-x small-up-1 smedium-up-5" data-deep-link="true" data-update-history="true" data-deep-link-smudge="500" data-tabs id="main-tabs">
                                <li v-for="(item, index) in items" class="tabs-title cell" v-bind:class="{'is-active' : index === currentselected}" @click="selecttab(index)" v-bind:key="index">
                                    <a> {{ item.title }} </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tabs-content" data-tabs-content="main-tabs">
                            <CompanyInfo :selecttab="0 === currentselected" :companyaddress="companyaddress" :ZNavKey="ZNavKey" :VendorZNavKey="VendorZNavKey" @updatevenodornavkey="updatevenodornavkey"></CompanyInfo>
                            <Contacts :selecttab="1 === currentselected" :ZNavKey="ZNavKey" :VendorZNavKey="VendorZNavKey"></Contacts>
                            <Brands :selecttab="2 === currentselected" :ZNavKey="ZNavKey" :VendorZNavKey="VendorZNavKey"></Brands>
                            <Products :selecttab="3 === currentselected" :ZNavKey="ZNavKey" :VendorZNavKey="VendorZNavKey"></Products>
                            <Orders :selecttab="4 === currentselected" :ZNavKey="ZNavKey" :VendorZNavKey="VendorZNavKey"></Orders>
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
import VendorPortalHeader from './VendorPortalHeader.vue'
import router from '../router'
import CompanyInfo from './vendorportal/CompanyInfo'
import Contacts from './vendorportal/Contacts'
import Brands from './vendorportal/Brands'
import Products from './vendorportal/Products'
import Orders from './vendorportal/Orders'

export default {
    name: 'VendorPortal',
    components: {
        VendorPortalHeader,
        CompanyInfo,
        Contacts,
        Brands,
        Products,
        Orders
    },

    data() {
        return {
            currentselected: 0,
            items: [
                {
                    id: "0",
                    title: "Company Info"
                },
                {
                    id: "1",
                    title: "Contacts"
                },
                {
                    id: "2",
                    title: "Brands"
                },
                {
                    id: "3",
                    title: "Products"
                },
                {
                    id: "4",
                    title: "Orders"
                }
            ],
            loading: false,
            // ZNavKey: '',
            VendorZNavKey: '',
            companyaddress: {}
        }
    },
    created: function() {
        this.fetch()
    },
    computed: {
        ZNavKey: {
            get: function() {
                return localStorage.getItem('ZNavKey')
            },
        },
    },
    methods: {
        fetch() {
            var config1 = {
                headers: {
                    'Content-Type': "application/json",
                    // 'Authorization': "bearer " + this.token
                }
            }
            // Get AccountPage-User Information.
            axios.post(process.env.API_URL + '/VendorPage-Vendor-FromUser', {
                ZNavKey: this.ZNavKey,
                config1
            }).then((response) => {
                console.log('company address', response);
                this.companyaddress = response.data.items
                this.companyaddress.country = 'USA'

                // Save Companyaddrss to localstorage
                localStorage.setItem('companyid', this.companyaddress.companyid)
                localStorage.setItem('VendorZNavKey', this.companyaddress.navkey)
                //   this.ZNavKey = localStorage.getItem('ZNavKey')
                this.VendorZNavKey = this.companyaddress.navkey
                //   this.$emit('updatevenodornavkey', this.companyaddress.navkey);
            })
        },
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
            router.push({ path: `/` }) // -> /user/123
            console.log(localStorage.getItem('ZNavKey'))
        },
        updatevenodornavkey(vendorNavKey) {
            // this.VendorZNavKey = vendorNavKey
            localStorage.setItem('VendorZNavKey', vendorNavKey)

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
