<template>
    <div>
        <!-- off canvas menu -->
        <div class="off-canvas position-left hide-for-smedium" id="off-canvas-menu" data-off-canvas data-transition="overlap">
            <ul class="menu vertical">
                <li>
                    <a href="#">Corporate</a>
                </li>
                <li>
                    <a href="#">Food Program</a>
                </li>
                <li>
                    <a href="#">Become a Member</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
            <hr />
            <ul class="menu vertical">
                <li>
                    <a href="#">My Account</a>
                </li>
            </ul>
        </div>

        <nav id="main-nav">
            <div id="nav-banner">
                <div class="grid-container">
                    <div class="grid-x grid-margin-x">
                        <div class="cell small-2 hide-for-smedium">
                            <button class="menu-icon" id="canvas-menu-btn" type="button" data-toggle="off-canvas-menu" data-responsive-toggle="top-menu" data-hide-for="smedium"></button>
                        </div>
                        <div class="cell smedium-4 medium-4 show-for-smedium" id="top-links">
                            <ul class="menu vertical smedium-horizontal" id="top-menu">
                                <li>
                                    <router-link :to="'/about'">About Us</router-link>
                                </li>
                                <li>
                                    <router-link :to="'/customers'">Our Customers</router-link>
                                </li>
                                <li>
                                    <router-link :to="'/partners'">Our Partners</router-link>
                                </li>
                                <li>
                                    <a href="mailto:lrapacci@fooduniverse.com">Email</a>
                                </li>
                            </ul>
                        </div>
                        <div class="cell small-8 smedium-4 medium-4 text-center">
                            <a href="/" id="logo-link">
                                <span class="show-for-sr" aria-hidden="true">FoodUniverse</span>
                                <span class="logo"></span>
                            </a>
                        </div>
                        <div class="cell small-2 smedium-4 medium-4 text-right" id="cart-links">
                            <a class="shopping-basket" href="#">
                                <img xlink:href="assets/img/icons/basket-green.svg" src="assets/img/icons/basket-green.png" width="24" height="22" />
                                <span class="items-badge hide-for-medium">0</span>
                            </a>
                            <small class="show-for-medium">0 items - $0.00</small>
                            <span class="vertical-line show-for-smedium"></span>
                            <a href="#" class="show-for-smedium">
                                <span class="hide-for-medium">
                                    <i class="fas fa-user fa-lg"></i>
                                </span>
                                <small v-if="navkey=='' || typeof navkey == undefined" class="show-for-medium">
                                    <router-link :to="'/signin'">Sign In</router-link>
                                </small>
                                <small v-else class="show-for-medium">
                                    <router-link :to="'/account'">My Account</router-link>
                                </small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="nav-bar">
                <div class="grid-container">
                    <div class="grid-x grid-margin-x">
                        <div class="cell small-12 smedium-4 medium-4 large-5 medium-offset-1 large-offset-1 xxlarge-offset-2 small-order-1 smedium-order-2">
                            <div class="input-group input-group-rounded">
                                <input v-model="srhtext" class="input-group-field" type="search" placeholder="SEARCH ..." @change="search1">
                                <div class="input-group-button">
                                    <input type="submit" class="button" value="">
                                </div>
                            </div>
                        </div>
                        <div class="cell small-12 smedium-8 medium-7 large-6 xxlarge-5 small-order-2 smedium-order-1">
                            <ul class="dropdown menu" id="shop-by-btns" data-dropdown-menu>
                                <li class="mega-menu" @mouseover="menucontrol(0)" @mouseleave="menucontrol(1)">
                                    <a href="#" data-toggle="mega-menu">
                                        <span class="shopby-img">
                                            <img src="assets/img/icons/fruit-white.svg" alt="fruit icon">
                                        </span>
                                        <span class="shopby-text">Shop by Department</span>
                                    </a>

                                </li>
                                <li>
                                    <a href="#">
                                        <span class="shopby-img">
                                            <img src="assets/img/icons/fish-white.svg" alt="fish icon">
                                        </span>
                                        <span class="shopby-text">Shop by Vendor</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="shopby-img">
                                            <img src="assets/img/icons/strawberry-white.svg" alt="strawberry icon">
                                        </span>
                                        <span class="shopby-text">Deals &amp; Promotions</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="dropdown-pane bottom" id="mega-menu" @mouseover="menucontrol(0)" @mouseleave="menucontrol(1)" data-dropdown data-options="closeOnClick:true; hover: true; hoverPane: true; vOffset:10">
                                <div class="grid-x grid-padding-x">
                                    <div class="cell small-12">
                                        <h4 class="cursive subtitle line-right">Departments</h4>
                                    </div>
                                </div>
                                <div class="grid-x grid-padding-x">
                                    <!--BEGIN LOOP of API ARRAY: DepartmentDefs-List-->
                                    <div class="cell small-6 smedium-4 large-3" v-for="departmentitem in departmentdefslist" v-bind:key="departmentitem.departmentdefid">
                                        <a href="#" class="dept-link">
                                            <span class="dept-icon"><img :src="departmentitem.thumbnailimagefilepath" :alt="departmentitem.desc1" /></span> {{departmentitem.desc1}}
                                        </a>
                                    </div>
                                    <!--END API ARRAY LOOP-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
// Library components.
import axios from 'axios';

export default {
    props: ['search'],
    data() {
        return {
            srhtext: '',
            username: 'saritasa@fooduniverse.com',
            password: 'Apple2018!',
            loading: false,
            token: '',
            departmentdefslist: [],
        }
    },
    created() {
        //do something after creating vue instance
        this.getdepartmentdefslist()
    },
    components: {

    },
    computed: {
        navkey: function() {
            return localStorage.getItem('ZNavKey') ? localStorage.getItem('ZNavKey') : ''
        }
    },
    mounted: function() {
        this.srhtext = this.$store.state.srhtext
    },
    methods: {
        menucontrol(flag) {
            if (flag == 1) {
                document.getElementById("mega-menu").style.display = "none"
                document.getElementById("mega-menu").style.visibility = "hidden"
            } else {
                document.getElementById("mega-menu").style.display = "block"
                document.getElementById("mega-menu").style.visibility = "visible"
            }
        },
        search1() {
            // Save the search keyword to store
            this.$store.commit('setSrhtext', this.srhtext);
            console.log('parent serarch');
            this.$parent.search();
        },
        getdepartmentdefslist() {
            //get listitems
            var config = {
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                }
            };

            this.loading = true

            // //get Access token by username and password.
            // var data_array = {
            //     grant_type: 'password',
            //     username: this.username,
            //     password: this.password
            // };

            // const data_string = Object.keys(data_array).map((key) => {
            //     return encodeURIComponent(key) + '=' + encodeURIComponent(data_array[key]);
            // }).join('&');

            // axios({
            //     method: 'post',
            //     url: 'http://ab.fooduniverse.com/service/token',
            //     data: data_string,
            //     config
            // }).then(response => {

            //     // Set token by username and password.
            //     this.token = response.data.access_token

            //     // config = {
            //     //     headers: {
            //     //         'Content-Type': "application/json"
            //     //     }
            //     // };

            //     // // Get DepartmentDefs-List.
            //     // axios.post(process.env.API_URL + '/DepartmentDefs-List', {
            //     //     config
            //     // }).then((response) => {
            //     //     this.departmentdefslist = response.data.Items;
            //     // })

            // })

            config = {
                headers: {
                    'Content-Type': "application/json"
                }
            };

            // Get DepartmentDefs-List.
            axios.post(process.env.API_URL + '/DepartmentDefs-List', {
                config
            }).then((response) => {
                this.departmentdefslist = response.data.Items;
            })
        }
    }
}
</script>
<style scoped>
#main-nav .grid-x {
    background-position: center 100px;
    background-repeat: no-repeat;
}
</style>
