<template>
    <div>
        <StandardHeader :search="search"></StandardHeader>
        <FoodItemSearchResult :searchdata="fooditemsearchresult"></FoodItemSearchResult>
        <VendorSearchResult :searchdata="vendersearchresult"></VendorSearchResult>
    </div>
</template>

<script>
// Library components.
import axios from 'axios';
// Custom components.
import VendorSearchResult from './VendorSearchResult.vue'
import FoodItemSearchResult from './FoodItemSearchResult.vue'
import StandardHeader from './StandardHeader.vue'


export default {
    name: 'VendorSearch',
    components: {
        VendorSearchResult,
        FoodItemSearchResult,
        StandardHeader
    },
    data() {
        return {
            username: 'saritasa@fooduniverse.com',
            password: 'Apple2018!',
            loading: false,
            token: '',
            vendersearchresult: [],
            fooditemsearchresult: [],
            //...this.$store.state.srhtext
        }
    },

    created: function() {
        this.search()
    },
    watch: {
        '$route': 'search'
    },
    methods: {
        search() {

            var ZSearchDesc1 = this.$store.state.srhtext
            //Get token.
            var config = {
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                }
            };

            this.loading = true

            //get Access token by username and password.
            var data_array = {
                grant_type: 'password',
                username: this.username,
                password: this.password
            };

            const data_string = Object.keys(data_array).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data_array[key]);
            }).join('&');

            axios({
                method: 'post',
                url: 'http://ab.everythingfood.com/service/token',
                data: data_string,
                config
            }).then(response => {

                // Set token by username and password.
                this.token = response.data.access_token

                config = {
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': "bearer" + this.token
                    }
                };

                // Get FoodItem(Proucts) Information.
                axios.post(process.env.API_URL + '/SearchResults-FoodItems', {
                    ZSearchDesc1: ZSearchDesc1,
                    config
                }).then((response) => {
                    this.fooditemsearchresult = response.data.Items;
                    console.log('food', this.fooditemsearchresult)
                })

                // Get Vendor Information.
                axios.post(process.env.API_URL + '/VendorSearch-Vendors', {
                    ZSearchDesc1: ZSearchDesc1,
                    config
                }).then((response) => {
                    this.vendersearchresult = response.data.Items;
                    console.log(this.vendersearchresult)
                })
            })
        }

    }
}
</script>