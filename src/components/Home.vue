<template>
    <div>
        <StandardHeader :search="search"></StandardHeader>
        <header class="homepage-marquee grid-x">
            <div class="homepage-slider dark-theme small-12">

                <div class="homepage-slide" v-for="slide in mainslides" v-bind:key="slide.promopanelslideid" :style="'background-image:url('+slide.imagefilepath+');'">
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="smedium-8 medium-6 xlarge-4">
                                <h4 class="subtitle cursive line-bottom-left">{{slide.displaytitletop}}</h4>
                                <h1>{{slide.displaytitlemiddle}}</h1>
                                <p>
                                    <strong>{{slide.displaytextdesc1}}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="homepage-promos small-12">
                <div class="grid-container">
                    <div class="grid-x">
                        <div class="banner-promos small-6 medium-4 large-3">
                            <div class="grid-y">
                                <div class="small-7 text-center banner-promo" :style="'background-image:url('+contentsinnerblog.imagefilepath+');'">
                                    <div class="header-area">
                                        <h2 class="text-orange cursive">{{contentsinnerblog.titletext}}</h2>
                                        <small>
                                            <strong>&mdash; {{contentsinnerblog.subtitletext}} &mdash;</strong>
                                        </small>
                                    </div>
                                    <div class="button-area">
                                        <button class="button secondary expanded">{{contentsinnerblog.calltoaction}}</button>
                                    </div>
                                </div>
                                <div class="small-5 banner-promo" :style="'background-image:url('+contentsinnerfood.imagefilepath+');'">
                                    <div class="vendor-logo">
                                        <!-- <img src="/assets/img/logos/chocobits-logo.png" alt="ChocoBits logo"> -->
                                        <h4 style="color:white">{{contentsinnerfood.desc1}}</h4>
                                    </div>
                                    <div class="button-area">
                                        <button class="button clear">SHOP NOW »</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="promo-blocks text-white small-6 medium-12">
                            <div class="grid-x grid-margin-x medium-up-3">
                                <div class="cell">
                                    <div class="promo-content">
                                        <h4>Sale! Up to 50% Off!</h4>
                                        <p>For all meat products</p>
                                    </div>
                                </div>
                                <div class="cell">
                                    <div class="promo-content">
                                        <h4>FREE SHIPPING</h4>
                                        <p>For all orders over $100</p>
                                    </div>
                                </div>
                                <div class="cell">
                                    <div class="promo-content">
                                        <h4>Join Our Club</h4>
                                        <p>Subscribe and save annually</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="dept-sliders">
            <div class="grid-container">
                <div class="dept-block grid-x grid-padding-x small-up-1">
                    <div class="cell">
                        <div class="grid-x grid-padding-x">
                            <div class="cell smedium-4 medium-4">
                                <div class="dept-image" style="background-image:url(/assets/img/apples-pail.jpg);"></div>
                            </div>
                            <div class="cell smedium-8 medium-8">
                                <h2>Fresh Produce</h2>
                                <h4 class="subtitle cursive">Get it fresh. Make it healthy.</h4>
                                <hr />
                                <div class="dept-slider">
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="grid-x grid-padding-x">
                            <div class="cell smedium-4 medium-4">
                                <div class="dept-image" style="background-image:url(/assets/img/fruit-tarts.jpg);"></div>
                            </div>
                            <div class="cell smedium-8 medium-8">
                                <h2>Baking Goods</h2>
                                <h4 class="subtitle cursive">So good it&rsquo;s really good for you.</h4>
                                <hr />
                                <div class="dept-slider">
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                </div>
                            </div>
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
import { Carousel, Slide } from 'vue-carousel';

// Custom components.
import StandardHeader from './StandardHeader.vue'
import router from '../router'

export default {
    name: 'Home',
    components: {
        StandardHeader,
        Carousel,
        Slide
    },
    data() {
        return {
            loading: false,
            token: '',
            mainslides: {
            },
            contentsinnerblog: {

            },
            contentsinnerfood: {

            }
        }
    },
    created() {
        this.fetch()
    },
    // watch: {
    //     mainslides: function(newVal, oldVal) {
    //         console.log(document.getElementsByClassName("homepage-slider").innerHTML)
    //         document.getElementsByClassName("homepage-slider").slick({
    //             accessibility: true,
    //             adaptiveHeight: false,
    //             arrows: false,
    //             dots: true,
    //             autoplay: true,
    //             autoplaySpeed: 5000,
    //             fade: true,
    //             cssEase: 'ease'
    //         })
    //     }

    // },
    methods: {
        search() {
            router.push({ path: `/SearchResults` })
        },
        fetch() {
            if (this.loading)
                return;

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
                username: 'saritasa@fooduniverse.com',
                password: 'Apple2018!'
            };

            const data_string = Object.keys(data_array).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data_array[key]);
            }).join('&');

            axios({
                method: 'post',
                url: 'http://ab.fooduniverse.com/service/token',
                data: data_string,
                config
            }).then(response => {
                // Set token by username and password.
                this.token = response.data.access_token
                if (this.token == '')
                    return
                // Get data for slider.
                config = {
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': "bearer" + this.token
                    }
                };

                axios.post(process.env.API_URL + '/StoreFront-Panel-Contents-Middle', {
                    config
                }).then((response) => {
                    this.mainslides = response.data.items

                    var autoplaySpeed = this.mainslides[0].durationseconds

                    setTimeout(function() {
                        $(".homepage-slider").slick({
                            accessibility: true,
                            adaptiveHeight: false,
                            arrows: false,
                            dots: true,
                            autoplay: true,
                            autoplaySpeed: autoplaySpeed * 1000,
                            fade: true,
                            cssEase: 'ease'
                        })

                    }, 500);


                    // Get contentsinnerblog.
                    axios.post(process.env.API_URL + '/StoreFront-Panel-Contents-Middle-Inner-Blog', {
                        config
                    }).then((response) => {
                        this.contentsinnerblog = response.data.item
                    })
                    // Get contentsinnerfood.
                    axios.post(process.env.API_URL + '/StoreFront-Panel-Contents-Middle-Inner-Food', {
                        config
                    }).then((response) => {
                        this.contentsinnerfood = response.data.item
                    })

                    document.getElementsByClassName('banner-promos')[0].style.display = "block"



                }).catch(error => {
                    throw (error);
                });
            }).catch(error => {
                throw (error);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#coming-soon {
    margin: 60px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.VueCarousel-pagination {
    position: relative!important;
    margin-top: -67px!important;
    text-align: left!important;
}

.banner-promos {
    display: none
}
</style>
