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
                                <span class="show-for-sr">Current: </span> Our Food Providers
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
                            <h2>Our Food Providers</h2>
                            <h4 class="line-bottom subtitle cursive">Why Sign Up with EverythingFood</h4>
                        </div>
                        <p>EverythingFood provides a unique platform to connect discerning consumers with food providers, producing high quality foods. On the platform, food products are scored based on the quality of ingredients, processing methods and nutrition levels. The producers that use the highest quality ingredients and best processing methods that preserve the nutrition levels of the final food product will score highest. High quality food producers all have the same problem: How to communicate that they have the most natural, healthy product grown, raised or processed with care and respect.</p>

                        <p>Our food quality system clearly shows this important differentiation. The consumer selects the high quality products directly on the platform or app and the manufacturer receives the order and ships the product directly to the consumer. The food manufacturers can bring in new products and provide more nutrition, pedigree attributes or other information on each of their products. The more that information is available for the consumer, the better the score. And the higher the probability that the consumer will purchase the product. The platform also has the capability for setting up recurring orders and subscriptions.</p>
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
    name: 'Partners',
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
            // alert('Home : ' + srhtext)
            //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})

            router.push({ path: `/SearchResults` }) // -> /user/123
            //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
