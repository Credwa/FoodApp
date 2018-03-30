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
            <div>
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
                            <a href="/vendorportal" id="logo-link">
                                <span class="show-for-sr" aria-hidden="true">FoodUniverse</span>
                                <span class="logo"></span>
                            </a>
                        </div>
                        <div class="cell small-2 smedium-4 medium-4 text-right" id="cart-links">
                            <a class="shopping-basket" href="#">
                                Orders
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
                                    <router-link :to="'/vendorportal'">My Account</router-link>
                                </small>
                            </a>
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
