<template>
    <div class="tabs-panel" id="store-settings"
        v-if="selecttab"
        v-bind:class="{'is-active' : selecttab}"
    >
        <div v-show="visible">
            <header class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <div @click="countperpage=0">
                            <h2>Products</h2>

                            <button class="button muted" @click="onNewProduct" style="float:right"><span v-if="!newLoading">New</span> <span v-else>Loading...</span></button>

                        </div>
                        <hr />
                    </div>
                </div>
            </header>
            <main id="search-results-grid">

                <div class="grid-container">
                    <div class="grid-x grid-padding-x">


                        <!--BEGIN LOOP of API ARRAY: VendorPortal-FoodItemLists-->

                        <div class="cell small-12 smedium-6 medium-4 xlarge-3" v-for="(product, index) in products" v-bind:key="product.vendorfooditemid" @click="editProduct(index)">
                            <!-- <router-link :to="'/fooditem/'+fooditem.vendorfooditemid"> -->
                                <a class="results-card" href="#">

                                    <div class="grid-x grid-margin-x">
                                        <div class="card-img cell small-6 smedium-12 medium-12 align-self-top">
                                            <img :src="product.imagefilepath" alt="" />
                                            <button :class="'score-badge '+product.abbdefdesc1.toLowerCase()">{{product.abbscore}}</button>
                                            <button class="button secondary button-add-cart show-for-smedium">Edit</button>
                                        </div>
                                        <div class="card-info cell small-6 smedium-12 medium-12">
                                            <div class="ratings">
                                                <div class="empty-stars"></div>
                                                <div class="full-stars" style="width:#VendorSearch-Vendors.UserRatingPerc#%;"></div>
                                            </div>
                                            <small class="subtitle">{{product.vendordesc1}}</small>
                                            <big class="fooditem-name">
                                                <strong>{{product.desc1}}</strong>
                                            </big>
                                            <small class="fooditem-units">{{product.priceuomdesc1}}</small>
                                            <span class="h4 fooditem-price">${{product.unitcost?(product.unitcost).toFixed(2):''}}</span>
                                            <button class="button secondary hide-for-smedium">GO</button>
                                        </div>
                                    </div>
                                </a>
                            <!-- </router-link> -->
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

            <!-- Edit Product Modal -->

            <div class="reveal-overlay" :style="[showProductModal?{display:'block'}:{display:'none'}]">
                <div class="reveal form-popup" :style="[showProductModal?{display:'block'}:{display:'none'}]" id="edit-billing-address" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
                    <form v-on:submit.prevent="onupdateproductinfo($event)" id="billingaddressform">
                        <div class="grid-x grid-padding-x">
                            <div class="cell small-12 large-11 block-center" id="toggle-all">
                                <p class="text-center title h3">Edit Product Info</p>
                                <div class="center-pic-upload">
                                    <img class="click-to-upload text-center line-eft-right" v-if="product.imagefilepath" :src="product.imagefilepath" height="30px" width="250px" alt="Click to upload contact picture"/>
                                    <div id="vue-frame" @click="showFrame = !showFrame">
                                    <vue-frame v-on:submit.prevent class="click-to-upload text-center line-eft-right" text="Click to upload product picture" :url="'http://staging.fooduniverse.com/image-Upload-FoodItem.cfm?ZScopeDesc1=FoodItems&ZPKID=' + product.fooditemid" frame="myframe" type="a"></vue-frame>
                                    <br />
                                    <iframe scrolling="no" class="upload-iframe" id="myframe" width="80%" height="100px" :hidden="!showFrame"></iframe>
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Food Class Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="vendordesc1" v-model="product.foodclassdesc1" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">UPC_No</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="vendordesc1" v-model="product.upc_no" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Vendor Ref No</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="vendordesc1" v-model="product.vendorrefno" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Food Item Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="vendordesc1" v-model="product.desc1" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="ZDesc1" v-model="product.fooditemdesc1" />
                                    </div>
                                </div>
                               <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Brand Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="vendordesc1" v-model="product.vendordesc1" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Product Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <textarea type="text" name="ZProductDescription" v-model="product.ZProductDescription"></textarea>
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Marketing Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <textarea type="text" name="marketingdescription" v-model="product.marketingdescription"></textarea>
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x small-3">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Drop Ship Price</div>
                                    <div class="cell small-12 smedium-4 medium-4">
                                        <input type="text" name="unitcost" v-model="product.unitcost" />
                                    </div>
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Retail Price</div>
                                    <div class="cell small-12 smedium-4 medium-4">
                                        <input type="text" name="unitprice" v-model="product.unitprice" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Ingredients</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="ZIngredients" v-model="product.ZIngredients" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Warning Description</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <textarea type="text" name="ZWarningsDesc1" v-model="product.ZWarningsDesc1"></textarea>
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Directions</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <textarea type="text" name="ZDirections" v-model="product.ZDirections"></textarea>
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Packaging Size</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <textarea type="text" name="ZPackagingSize" v-model="product.ZPackagingSize"></textarea>
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x small-3">

                                        <div class="cell small-12 smedium-2 medium-2 user-info-label">Serving Size Quantity</div>
                                        <div class="cell small-12 smedium-2 medium-2">
                                            <input type="text" name="ZServingSizeQty" v-model="product.ZServingSizeQty" />
                                        </div>

                                        <div class="cell small-12 smedium-2 medium-2 user-info-label">Serving Size UOM</div>
                                        <div class="cell small-12 smedium-2 medium-2">
                                            <select name="ZServingSizeUOMID" v-model="product.ZServingSizeUOMID">
                                                <option v-for="servingsizeuom in servingsizeuomlist" v-bind:key="servingsizeuom.uomid" :value="servingsizeuom.uomid">{{servingsizeuom.desc1}}</option>
                                            </select>
                                        </div>

                                        <div class="cell small-12 smedium-2 medium-2 user-info-label">Servings Per Container</div>
                                        <div class="cell small-12 smedium-2 medium-2">
                                            <input type="text" name="ZServingsPerContainer" v-model="product.ZServingsPerContainer" />
                                        </div>
                                </div>

                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Recipe Directions</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="ZRecipeDirections" v-model="product.ZRecipeDirections" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Country Of Origin</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="ZCountryOfOriginDesc1" v-model="product.ZCountryOfOriginDesc1" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Score</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <input type="text" name="abbscore" v-model="product.abbscore" />
                                    </div>
                                </div>
                                <div class="grid-x grid-margin-x">
                                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Thumbnail Image Path</div>
                                    <div class="cell small-12 smedium-10 medium-10">
                                        <textarea type="text" name="imagefilepath" v-model="product.imagefilepath" />
                                    </div>
                                </div>

                                <p class="text-center">
                                    <button class="button muted" data-close aria-label="Close reveal">Update</button>
                                </p>
                            </div>
                        </div>
                        <button class="close-button" data-close aria-label="Close reveal" type="button" @click="showProductModal = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </form>
                </div>
            </div>

            <!-- End Modal -->
        </div>
    </div>
</template>

<script>
// Library components.
import axios from 'axios';
import Paginate from 'vuejs-paginate';
import VueFrame from 'vue-frame'
// Custom components.
import router from '../../router';
import { mapState } from 'vuex';

export default {
  name: 'Products',
  props: ['selecttab', 'ZNavKey', 'VendorZNavKey'],
  components: {
    Paginate,
    VueFrame
  },

  data() {
    return {
      products: [],
      product: {},
      currentpage: 1,
      countperpage: 24,
      pagecount: 1,
      visible: false,
      loading: false,
      showProductModal: false,
      servingsizeuomlist: [],
      newLoading: false,
      vendor: '',
      showFrame: false
    };
  },
  mounted: function() {
    this.fetch();
  },
  computed: {},
  watch: {
    VendorZNavKey: function() {
      this.fetch();
    }
  },
  methods: {
    fetch() {
      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };
      axios
        .post(process.env.API_URL + '/VendorPage-Vendor', {
          ZNavKey: this.VendorZNavKey,
          config1
        })
        .then(response => {
          this.vendor = response.data.Item;
        });
      // Get VendorPortal-FoodItemLists Information.
      axios
        .post(process.env.API_URL + '/VendorPage-FoodItems-List', {
          ZNavKey: this.VendorZNavKey,
          config1
        })
        .then(response => {
            console.log('Fooditem list', response.data.items)
          this.products = response.data.items;
          if (this.products) {
            if (this.products.length > 0) {
              this.visible = true;
              if (this.countperpage == 0) {
                //if All is selected
                this.pagecount = 1;
              } else {
                this.pagecount = Math.round(
                  (this.products.length + 1) / this.countperpage
                );
                this.products = this.products.slice(
                  (this.currentpage - 1) * this.countperpage,
                  this.currentpage * this.countperpage
                );
              }
            }
          }
        });

      // Get LOV-ServingSize-UOMID
      axios
        .post(process.env.API_URL + '/LOV-ServingSize-UOMID', {
          ZNavKey: this.VendorZNavKey,
          config1
        })
        .then(response => {
          this.servingsizeuomlist = response.data.items;
        });
    },
    onupdateproductinfo: function() {
        console.log('updating')
      if (!this.product.vendorfooditemid) {
        this.onaddProduct();
        return;
      }

      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };

      console.log(this.product.ZServingSizeUOMID);
      axios
        .post(process.env.API_URL + '/FoodItemPage-FoodItem-Update', {
          ZNavKey: this.VendorZNavKey,
          ZDesc1: this.product.fooditemdesc1,
          ZWarningsDesc1: this.product.ZWarningsDesc1 || '',
          ZThumbnailImageFilePath: this.product.imagefilepath || '',
          ZProductDescription: this.product.ZProductDescription || '',
          ZMarketingDescription: this.product.marketingdescription || '',
          ZDirections: this.product.ZDirections || '',
          ZIngredients: this.product.ZIngredients || '',
          ZBrandDesc1: this.product.vendordesc1 || '',
          ZPackagingSize: this.product.ZPackagingSize || '',
          ZPackagingType: this.product.ZPackagingType || '',
          ZServingSizeQty: this.product.ZServingSizeQty || '',
          ZServingSizeUOMID: this.product.ZServingSizeUOMID || '',
          ZServingsPerContainer: this.product.ZServingsPerContainer || '',
          ZRecipeDirections: this.product.ZRecipeDirections || '',
          ZUnitPrice: this.product.unitprice || '',
          ZUnitCost: this.product.unitcost || '',
          ZCountryOfOriginDesc1: this.product.ZCountryOfOriginDesc1 || 'USA',
          ZUPC_No: this.product.upc_no || '',
          ZVendorRefNo: this.product.vendorrefno || '',
          ZFoodClassDesc1: this.product.foodclassdesc1 || '',
        })
        .then(response => {
          console.log('fooditem update', response.data);

          if (!response.data.HasError) {
            this.showProductModal = false;

            this.$toastr.Add({
              title: 'Success', // Toast Title
              msg: 'Updated Product information successfully', // Message
              position: 'toast-top-center', // Toast Position.
              type: 'success', // Toast type,
              preventDuplicates: true //Default is false
            });
          } else {
            this.$toastr.Add({
              title: 'Failed update', // Toast Title
              msg: response.data.ErrorMessage, // Message
              position: 'toast-top-center', // Toast Position.
              type: 'error', // Toast type,
              // progressBarValue: 0,
              preventDuplicates: true //Default is false
            });
          }
        }).catch(e => {
            console.log(e)
        });
    },

    onaddProduct: function() {
      console.log('onaddproduct');

      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };

      axios
        .post(process.env.API_URL + '/FoodItemPage-FoodItem-Insert', {
          ZNavKey: this.VendorZNavKey,
          ZDesc1: this.brand.desc1,
          ZThumbnailImageFilePath: this.brand.thumbmailimagefilepath || '',
          ZImageFilePath: this.brand.imagefilepath || '',
          ZCompanyID: localStorage.getItem('companyid')
        })
        .then(response => {
          console.log(response.data);
          if (!response.data.HasError) {
            this.showProductModal = false;

            this.$toastr.Add({
              title: 'Success', // Toast Title
              msg: 'Created new Product information successfully', // Message
              position: 'toast-top-center', // Toast Position.
              type: 'success', // Toast type,
              preventDuplicates: true //Default is false
            });

            this.products[this.product.last_index] = this.product;
            console.log('added', this.product);
            console.log(response);
          } else {
            this.$toastr.Add({
              title: 'Failed update', // Toast Title
              msg: response.data.ErrorMessage, // Message
              position: 'toast-top-center', // Toast Position.
              type: 'error', // Toast type,
              // progressBarValue: 0,
              preventDuplicates: true //Default is false
            });
          }
        });
    },
    onNewProduct() {
      this.newLoading = true;
      axios
        .post(process.env.API_URL + '/VendorPage-FoodItems-NewFoodItem-Call', {
          ZFoodClassID: 1052,
          ZVendorID: this.vendor.vendorid
        })
        .then(response => {
          this.fetch();
        });
    },
    editProduct: function(index) {
      this.showProductModal = true;
      this.product = this.products[index];
      console.log('selected index', index);
    },
    addProduct: function(last_index) {
      this.brand = {};
      this.brand.last_index = last_index;
      console.log(this.brand.last_index);
      this.showProductModal = true;
    },
    setpagenum: function(pagenum) {
      this.currentpage = pagenum;
    },
    GoVendor: function(ZNavKey) {
      this.$store.commit('setZNavKey', ZNavKey);
      router.push({ path: `/vendor` });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit-billing-address {
  width: 80vw;
}
.reveal-overlay::-webkit-scrollbar {
  display: none;
}
.block-center {
  margin-left: auto;
  margin-right: auto;
}
.user-info-label {
  font-size: 0.75em;
  font-weight: bold;
}
.imagefile {
  word-break: break-all;
  width: 50%;
}
</style>
