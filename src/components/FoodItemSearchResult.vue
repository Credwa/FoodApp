<template>
    <div>
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12">
                    <nav aria-label="You are here:" role="navigation">
                        <ul class="breadcrumbs">
                            <li>
                                <span class="show-for-sr">Current: </span> Home
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div v-show="visible">
            <header class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <div @click="countperpage=0">
                            <h2>Products</h2>
                        </div>

                        <hr />
                    </div>
                </div>
            </header>
            <main id="search-results-grid">

                <div class="grid-container">
                    <div class="grid-x grid-padding-x">

                        <!--BEGIN LOOP of API ARRAY: FoodItemSearch-FoodItems-->

                        <div class="cell small-12 smedium-6 medium-4 xlarge-3" v-for="fooditem in itemsofcurpage" v-bind:key="fooditem.navkey">
                            <router-link :to="'/fooditem/'+fooditem.navkey">
                                <a class="results-card" href="#">
                                    <!--Cui, is there a way to call the PartnerPage.html (you developed yesterday) without exposing the NavKey?-->

                                    <div class="grid-x grid-margin-x">
                                        <div class="card-img cell small-6 smedium-12 medium-12 align-self-top">
                                            <img :src="fooditem.thumbnailimagefilepath" :alt="fooditem.desc1" />
                                            <button :class="'score-badge '+fooditem.abbdefdesc1.toLowerCase()">{{fooditem.abbscore}}</button>
                                            <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                                        </div>
                                        <div class="card-info cell small-6 smedium-12 medium-12">
                                            <div class="ratings">
                                                <div class="empty-stars"></div>
                                                <div class="full-stars" style="width:#VendorSearch-Vendors.UserRatingPerc#%;"></div>
                                            </div>
                                            <small class="subtitle">{{fooditem.vendordesc1}}</small>
                                            <big class="fooditem-name">
                                                <strong>{{fooditem.desc1}}</strong>
                                            </big>
                                            <small class="fooditem-units">per {{fooditem.priceuomdesc1}}</small>
                                            <span class="h4 fooditem-price">${{fooditem.unitprice?(fooditem.unitprice).toFixed(2):''}}</span>
                                            <button class="button secondary hide-for-smedium">GO</button>
                                        </div>
                                    </div>
                                </a>
                            </router-link>
                        </div>

                        <!--END API ARRAY LOOP-->

                    </div>
                </div>
                <div class="grid-container">
                    <div class="search-pagination text-center">
                        <div class="pagination" v-show="pagecount > 1">
                            <paginate :page-count="pagecount" :page-range="5" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'" :click-handler="setpagenum">
                            </paginate>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </div>
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
    name: 'FoodItemSearchResult',
    components: {
        Paginate
    },
    props: ["searchdata"],
    data() {
        return {
            currentpage: 1,
            countperpage: 24,
            pagecount: 1,
            visible: false
        }
    },
    computed: {
        // a computed getter
        itemsofcurpage: function() {
            if (typeof this.searchdata !== 'undefined') {
                if (this.searchdata.length > 0)
                    this.visible = true
                if (this.countperpage == 0) {
                    //if All is selected
                    this.pagecount = 1;
                    return this.searchdata;

                } else {
                    this.pagecount = Math.round((this.searchdata.length + 1) / this.countperpage)
                    return this.searchdata.slice((this.currentpage - 1) * this.countperpage, this.currentpage * this.countperpage)
                }
            }

        }
    },
    methods: {
        setpagenum: function(pagenum) {
            this.currentpage = pagenum

        }
    }
}
</script>
