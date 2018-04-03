<template>
  <div>

    <div>
      <StandardHeader :search="search"></StandardHeader>
      <BreadCrumbs :vendor_desc1="Vendor.desc1"></BreadCrumbs>
      <header id="vendor-hero">
        <div class="grid-container">
          <div class="grid-x grid-padding-x align-stretch align-middle">
            <div class="cell small-12 smedium-4 medium-4">
              <div class="vendor-profile">
                <h4 class="title line-bottom-left">Vendor Profile</h4>
                <div class="vendor-logo">
                  <img v-bind:src="Vendor.logoimagefilepath" :alt="Vendor.desc1">
                </div>
              </div>
            </div>
            <div class="cell small-12 smedium-8 medium-8">
              <div class="vendor-promos">
                <div class="promos-slider">
                  <!--BEGIN LOOP of API ARRAY: VendorPage-VendorPromoPanels-->
                  <carousel :perPage=1 paginationActiveColor="#ea8a35" :paginationSize=20 :autoplay=true>
                    <slide class="promos-slide" :style="{backgroundColor: '#FFFFFF', color: randomColor()}" v-for="VendorPromoPanel in VendorPromoPanels.Items" v-bind:key="VendorPromoPanel.vendorpromopanelid">
                      <div class="grid-x grid-padding-x">
                        <div class="cell small-12 msmall-6 smedium-4 medium-6">
                          <div class="vendor-promo-img">
                            <img :src="VendorPromoPanel.imagefilepath" :alt="VendorPromoPanel.desc1">
                          </div>
                        </div>
                        <div class="cell small-12 msmall-6 smedium-8 medium-6 vendor-promo-text">
                          <h3>{{VendorPromoPanel.titletext}}</h3>
                          <p>{{VendorPromoPanel.displaytextdesc1}}</p>
                        </div>
                      </div>
                    </slide>
                  </carousel>
                  <!--END API ARRAY LOOP-->
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
      <section class="vendor-story dark" style="background-image:radial-gradient(800px at center 200px,rgba(49,49,49,.65) 0,#313131 100%), url(/assets/img/bkgds/fence-bk.jpg);">
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="cell small-12 large-8 large-offset-2 text-center">
              <div class="section-header">
                <h2>{{Vendor.vendormessagetitletext}}</h2>
                <h4 class="line-bottom subtitle cursive">{{Vendor.vendormessagedisplaytextdesc1}}</h4>
              </div>
              <p>{{Vendor.vendormessagedesc1}}</p>
            </div>
          </div>
        </div>
      </section>
      <header class="section-header text-center">
        <h2>{{Vendor.desc1}}</h2>
        <h4 class="subtitle cursive lin}}e-bottom">Our Items</h4>
      </header>
      <section id="search-results">
        <main id="search-results-grid">
          <div class="grid-container">
            <div class="grid-x grid-padding-x">
              <!--BEGIN LOOP of API ARRAY: VendorPage-VendorFoodItems-->
              <div class="cell small-12 smedium-6 medium-4 xlarge-3" v-for="VendorFoodItem in itemsofcurpage" v-bind:key="VendorFoodItem.vendorfooditemid">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-6 smedium-12 medium-12 align-self-top">
                      <img :src="VendorFoodItem.imagefilepath" :alt="VendorFoodItem.fooditemdesc1" />
                      <button class="score-badge better">{{VendorFoodItem.abbscore}}</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-6 smedium-12 medium-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:70%;"></div>
                      </div>
                      <small class="subtitle">{{VendorFoodItem.vendordesc1}}</small>
                      <big class="product-name">
                        <strong>{{VendorFoodItem.fooditemdesc1}}</strong>
                      </big>
                      <small class="product-units">{{VendorFoodItem.priceuomdesc1}}</small>
                      <span class="h4 product-price">{{VendorFoodItem.unitprice?(VendorFoodItem.unitprice).toFixed(2):''}}</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <!--END API ARRAY LOOP-->
            </div>
          </div>
          <div class="grid-container">
            <div class="search-pagination text-center">
              <hr />
              <div class="pagination" v-show="pagecount > 1">
                <paginate :page-count="pagecount" :page-range="3" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'" :click-handler="setpagenum">
                </paginate>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
// Library components.
import axios from 'axios';
import Paginate from 'vuejs-paginate'
// Custom components.
import StandardHeader from './StandardHeader.vue'
import BreadCrumbs from './BreadCrumbs.vue'
import { Carousel, Slide } from 'vue-carousel';
import router from '../router'

export default {
  name: 'Vendor',
  components: {
    Paginate,
    StandardHeader,
    BreadCrumbs,
    Carousel,
    Slide
  },

  data() {
    return {
      ZVendorID: 15007,
      ZNavKey: '',
      loading: false,

      itemsofcurpage: [],
      currentpage: 1,
      countperpage: 24,
      pagecount: 0,
      soryby: 'a',
      token: '',
      Vendor: {
        // vendorid: 15038,
        // companyid: 8526,
        // desc1: "Pacific Seafood",
        // street: "16797 SE 130th Avenue",
        // street2: "",
        // city: "Clackamas",
        // statedesc1: "OR",
        // zipcodedesc1: "97015",
        // logoimagefilepath: "http://www.fooduniverse.com/VendorImages/Pacific_Seafood-logo2.png",
        // webaddress: "https://www.pacseafood.com/",
        // addressworkspace: null,
        // vendormessagedesc1: "<p>For more than 70 years, Pacific Sustainable Seafood has served the oceans by harvesting, processing and distributing the highest-quality and best tasting seafood to our loyal consumers.\r\nIt is our responsibility to serve the oceans through a continuous commitment to sustainable fishing practices. Not only does this help protect the longevity of our oceans and the important ecological balance within them, but it means we can continue to serve your family great tasting seafood for generations to come.</p>",
        // vendormessagetitletext: "SUSTAINABILITY",
        // vendormessagedisplaytextdesc1: "IS IN OUR NAME"
      },
      VendorPromoPanels: [],
        // Items: [
        //   {
        //     vendorpromopanelid: 7,
        //     desc1: "Pac1",
        //     titletext: "A Leader in Seafood",
        //     displaytextdesc1: "We expect ourselves to do business right, to lead by example and to help out when we are needed. It is our company philosophy that guides our everyday decisions. It is good to be responsible, not just because it is the right thing to do, but because it also sets the bar for our company’s commitment to ensure that the communities in which we work and live will continue to prosper.",
        //     imagefilepath: "http://admin.fooduniverse.com/app/vendors/FishermanBoat.png",
        //     seqorder: 1,
        //     vendordesc1: "Pacific Seafood"
        //   },
        //   {
        //     vendorpromopanelid: 8,
        //     desc1: "Pac2",
        //     titletext: "Social Responsibility",
        //     displaytextdesc1: "Pacific Seafood's Social Responsibilities are defined by our Mission, Vision and Core Values.. These tenets help us navigate our business in three distinctive areas of responsibility: Sustainability, Community and Self-Governance. And, acting as a compass, our Social Responsibility Program, On Board - Doing Good Together, guides our behavior as corporate citizens.",
        //     imagefilepath: "http://admin.fooduniverse.com/app/vendors/Sustain.jpg",
        //     seqorder: 2,
        //     vendordesc1: "Pacific Seafood"
        //   }
        // ]
      // },
      VendorFoodItems: [],
        // Items: [
        //   {
        //     vendorfooditemid: 1783228,
        //     fooditemid: 1500213,
        //     fooditemdesc1: "Wild King Salmon Fillet",
        //     imagefilepath: "http://www.fooduniverse.com/App/Port/FoodItems/Companies/ImageFilePathUpload/8526/Wild King Salmon Fillet-300.jpg",
        //     marketingdescription: "The name says it all. The largest and most prized of the wild salmon, kings are what salmon are all about: big, silvery, fighting fish, with a rich red meat. These big fish, which can exceed 100 pounds, range across much of the eastern North Pacific, from the Yukon River in Alaska to the Sacramento River in central California.",
        //     vendordesc1: "Pacific Seafood",
        //     abbscore: 99,
        //     unitprice: 39,
        //     priceuomdesc1: "per pound",
        //     abbdefdesc1: "best"
        //   },
        //   {
        //     vendorfooditemid: 1417434,
        //     fooditemid: 1062015,
        //     fooditemdesc1: "Wild Caught, Pacific Coldwater",
        //     imagefilepath: "http://www.fooduniverse.com/App/Port/FoodItems/Companies/ThumbnailImageFilePathUpload/8526/shrimp-01-thumb.jpg",
        //     marketingdescription: "",
        //     vendordesc1: "Pacific Seafood",
        //     abbscore: 99,
        //     unitprice: 9.95,
        //     priceuomdesc1: "per pound",
        //     abbdefdesc1: "best"
        //   }
        // ]
      // }


    }
  },
  created: function() {
    this.fetch()
  },
  watch: {
    '$route': 'fetch'
  },
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());
      return `rgb(${r()}, ${r()}, ${r()})`
    },
    fetch(page = 1) {

      if (this.loading)
        return;

      if (typeof this.$route.params.ZNavKey !== 'undefined') {
        this.ZNavKey = this.$route.params.ZNavKey
      }
      if (this.ZNavKey == '')
        this.ZNavKey = this.$store.state.ZNavKey
      console.log('ZNavKey', this.ZNavKey)
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

        config = {
          headers: {
            'Content-Type': "application/json",
            'Authorization': "bearer" + this.token
          }
        };
        // Get Vendor Information.
        console.log(this.ZNavKey);
        axios.post(process.env.API_URL + '/VendorPage-Vendor', {
          ZNavKey: this.ZNavKey,
          config
        }).then((response) => {
          console.log('vendor', response.data)
          this.Vendor = response.data.Item

          // Get VendorPromoPanels.
          axios.post(process.env.API_URL + '/VendorPage-VendorPromoPanels', {
            ZNavKey: this.ZNavKey,
            config
          }).then((response) => {

            if(response.data.Items){
              this.VendorPromoPanels = response.data.Items
            }else{
              this.VendorPromoPanels[0] = response.data.Item
            }
            // Get VendorFoodItems.
            axios.post(process.env.API_URL + '/VendorPage-VendorFoodItems', {
              ZNavKey: this.ZNavKey,
              config
            }).then((response) => {
              console.log('VendorFoodItems', response.data)
              if(response.data.Items){
                this.VendorFoodItems = response.data.Items
              }else{
                this.VendorFoodItems[0] = response.data.Item
              }
              if (this.VendorFoodItems.length >= 1){
                this.setpagenum(1)
              }
            },
              (error) => {
                this.loading = false;
              })
          },
            (error) => {
              this.loading = false;
            })

        },
          (error) => {
            this.loading = false;
          })

      })
        .catch(error => {
          console.log(error);
          throw (error);
        });

    },
    filter() {
      if (this.countperpage == 0) {
        //if All is selected
        this.itemsofcurpage = this.VendorFoodItems.Items;
        return
      } else {
        this.itemsofcurpage = this.VendorFoodItems.slice((this.currentpage - 1) * this.countperpage, this.currentpage * this.countperpage)
      }
      this.pagecount = Math.round((this.VendorFoodItems.length + 1) / this.countperpage)

    },
    setpagenum: function(pagenum) {
      this.currentpage = pagenum
      this.filter()
    },
    view() {

      this.fetch()
    },
    search() {
      console.log('go to search results');
      router.push({ path: `/SearchResults` }) // -> /user/123
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vendor-hero .vendor-promos .promos-slider {
  padding: 0;
  background: #ffffff;
}

#vendor-hero .vendor-promos .vendor-promo-text {
  color: #313131;
}
</style>
