<template>
    <div>
        <StandardHeader :search="search"></StandardHeader>
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12">
                    <nav aria-label="You are here:" role="navigation">
                        <ul class="breadcrumbs">
                            <li>
                                <router-link :to="'/'">Home</router-link>
                            </li>
                            <li>
                                <span class="show-for-sr">About Us: </span> About Us
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
                            <h2>All About Us</h2>
                            <h4 class="line-bottom subtitle cursive">What is FoodUniverse</h4>
                        </div>
                        <p>FoodUniverse is a platform for connecting health-conscious consumers with high quality food providers. Every food product is scored based on its attributes, nutrition profile and the ingredients used. The producers that use the highest quality ingredients and best processing methods that preserve the nutrition levels of the final food product will score highest. Consumers are able to personalize their food preferences, their food quality levels, set personal health goals and share their experiences with the community.</p>

                        <p>FoodUniverse provides an easy-to-read food score for every product, along with useful time-saving tools for pantry management, scheduling food deliveries, establishing meal calendars as well as managing food related tasks in their households. It is a community where sourcing and eating high quality, nutritious food is the norm. FoodUniverse raises the bar for communicating about nutrition by establishing easy to understand standards, based on nutrition information to which all food products are compared.</p>

                        <p>FoodUniverse, Inc. is a software startup company in Orange, CA, established by foodies interested in healthy eating and living. The desire to develop a new platform for foodies became reality for the CEO of FoodUniverse, Peter Balsells, when managing his own weight. His doctor asked him to follow a diet where important food quality levels were pointed out. After successfully reaching his desired weight, his friends asked him about the diet and where to get these particular foods. The light bulb went off! People need to know where to get these foods.</p>

                        <p>Peter then met with a long-time business partner, Dan Doble, a software engineer. They had worked together for twenty years in job shop manufacturing environments. They started discussing how they could develop a quality system like they used in factories to vet raw material grades. They developed an unabridged food database with standardized food quality levels across all food categories that could consistently and intuitively rate the food. A new collaboration, FoodUniverse, was born.</p>
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
    name: 'AboutUs',
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
