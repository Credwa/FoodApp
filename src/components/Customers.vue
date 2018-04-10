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
                                <router-link :to="'/about'">About</router-link>
                            </li>
                            <li>
                                <span class="show-for-sr">Current: </span> Our Customers
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <section class="vendor-story dark" style="background-image:radial-gradient(800px at center 200px,rgba(49,49,49,.65) 0,#313131 100%), url(/assets/img/bkgds/fence-bk.jpg);">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12 large-8 large-offset-2 text-center">
                        <div class="section-header">
                            <h2>Our Customers</h2>
                            <h4 class="line-bottom subtitle cursive">Interested in Healthy Lifestyle?</h4>
                        </div>
                        <p>EverythingFood is an app for health-conscious consumers who are interested in sourcing healthy food, learning about the food origins and connecting with high quality food producers. We help consumers make better food choices. We empower the users to make mindful decisions about their food, set their own food quality standards and improve their health.</p>

                        <p>We provide the users with time-saving tools for comprehensive food scoring, managing their pantry items, scheduling food deliveries, establishing meal calendars as well as managing their recipes and food related tasks in their households.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// Library components.
import { mapState } from 'vuex'

// Custom components.
import StandardHeader from './StandardHeader.vue'
import router from '../router'

export default {
    name: 'Customers',
    components: {
        StandardHeader,
    },

    data() {
        return {
            loading: false
        }
    },
    created: function() {
        //this.search()
    },

    methods: {
        search(srhtext = '') {
            //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})
            //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123
            router.push({ path: `/SearchResults` }) // -> /user/123
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
