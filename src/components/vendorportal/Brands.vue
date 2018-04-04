<template>
	<div class="tabs-panel" id="security-settings" v-if="selecttab" v-bind:class="{'is-active' : selecttab}">
		<div class="grid-x grid-margin-x">
			<div class="cell small-12 text-center">
				<p class="h3 cursive title line-left-right">Brands</p>
			</div>
			<div class="cell small-12 xlarge-10 xlarge-offset-1">
				<div class="callout">
					<div class="grid-x grid-padding-x">
						<div class="cell small-12 large-10 large-offset-1  table-wrapper">
							<button class="button muted" @click="addBrand(brands.length)" style="float:right">New Brand</button>
							<table class="stack">
								<thead>
									<tr>
										<th></th>
										<th>Description</th>
										<th>Image</th>
										<th>UPCs</th>
									</tr>
								</thead>
								<tbody>

								<!--BEGIN LOOP of API ARRAY: VendorPortal-Brands-->

								<tr v-for="(brand, index) in brands" :key="brand.contactid">
									<td><button class="button muted" data-open="edit-brand" @click="editBrand(index)">Go</button></td>
									<td>{{brand.desc1}}</td>
									<td class="imagefile"><img :src="brand.imagefilepath" alt=""></td>
									<td>{{brand.vcount}}</td>
								</tr>

								<!-- End API Loop -->

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Brand Insert/Edit Modal  -->

		<div class="reveal-overlay" :style="[showBrandsModal?{display:'block'}:{display:'none'}]">
			<div class="reveal form-popup" :style="[showBrandsModal?{display:'block'}:{display:'none'}]" id="edit-billing-address" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
				<form v-on:submit.prevent="onupdatebrandinfo($event)" id="billingaddressform">
					<div class="grid-x grid-padding-x">
						<div class="cell small-12 large-11 block-center" id="toggle-all">
							<p class="text-center title h3">Edit Brand Info</p>
                  <div class="center-pic-upload">
                    <img class="click-to-upload text-center line-eft-right" v-if="brand.imagefilepath" :src="brand.imagefilepath" height="30px" width="250px" alt="Click to upload contact picture"/>
                    <div id="vue-frame" @click="showFrame = !showFrame">
                      <vue-frame v-on:submit.prevent class="click-to-upload text-center line-eft-right" text="Click to upload brand logo" :url="'http://staging.fooduniverse.com/image-Upload-Brand.cfm?ZScopeDesc1=Brands&ZPKID=' + brand.brandid" frame="myframe" type="a"></vue-frame>
                      <br />
                      <iframe scrolling="no" class="upload-iframe" id="myframe" width="80%" height="100px" :hidden="!showFrame"></iframe>
                    </div>
                  </div>
							<div class="grid-x grid-margin-x">
								<div class="cell small-12 smedium-2 medium-3 user-info-label">Description</div>
								<div class="cell small-12 smedium-10 medium-9">
									<input type="text" name="ZDesc1" required v-model="brand.desc1" />
								</div>
							</div>
							<p class="text-center">
								<button class="button muted" data-close aria-label="Close reveal">Update</button>
								<button class="button muted" v-show="brand.brandid" @click="ondelete($event)" aria-label="Close reveal">Delete</button>
							</p>
						</div>
					</div>
					<button class="close-button" data-close aria-label="Close reveal" type="button" @click="showBrandsModal = false">
						<span aria-hidden="true">&times;</span>
					</button>
				</form>
			</div>
		</div>
		<!-- End Brand Insert/Edit Modal  -->
	</div>
</template>

<script>
// Library components.

import axios from 'axios';
import VueFrame from 'vue-frame'
// Custom components.

import router from '../../router';

import { mapState } from 'vuex';

export default {
  name: 'Brands',

  props: ['selecttab', 'ZNavKey', 'VendorZNavKey'],

  components: { VueFrame },

  data() {
    return {
      loading: false,
      brands: [],
      token: '',
      brand: '',
      showBrandsModal: false,
      showFrame: false
    };
  },

  mounted: function() {
    this.fetch();
  },
  watch: {
    VendorZNavKey: function() {
      this.fetch();
    }
  },
  methods: {
    search(srhtext = '') {
      // alert('Home : ' + srhtext)

      //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})

      router.push({
        path: `/SearchResults`
      }); // -> /user/123
      //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123
    },

    fetch() {
      // if (this.loading) return;
      // this.ZNavKey = this.$route.params.ZNavKey
      //Get token.

      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      this.loading = true;

      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };

      axios
        .post(process.env.API_URL + '/VendorPage-Brands-List', {
          ZNavKey: this.VendorZNavKey,

          config1
        })
        .then(response => {
          console.log('fetch brands', response.data);

          if (response.data.items) {
            this.brands = response.data.items;
          } else {
            this.$set(this.brands, 0, response.data.item);
          }
          this.loading = false;
        });
    },

    editBrand: function(index) {
      this.showBrandsModal = true;

      this.brand = this.brands[index];
      this.brand.index = index;
      console.log(index);
    },

    addBrand: function(last_index) {
      this.brand = {};
      this.brand.last_index = last_index;
      console.log(this.brand.last_index);
      this.showBrandsModal = true;
    },
    ondelete: function() {
      if (!this.brand.brandid) {
        return;
      }
      if (event) event.preventDefault();

      let options = {
        loader: true, // set to true if you want the dailog to show a loader after click on "proceed"
        okText: 'Continue',
        cancelText: 'Close',
        animation: 'zoom', // Available: "zoom", "bounce", "fade"
        type: 'basic' // coming soon: 'soft', 'hard'
      };
      this.$dialog
        .confirm('Are you sure to delete this Brand?', {
          loader: true // default: false - when set to true, the proceed button shows a loader when clicked.
          // And a dialog object will be passed to the then() callback
        })
        .then(dialog => {
          // Triggered when proceed button is clicked
          // do some stuff like ajax request.
          console.log('Clicked on delete', this.brand.brandid);
          var config1 = {
            headers: {
              'Content-Type': 'application/json'
              // 'Authorization': "bearer " + this.token
            }
          };
          axios
            .post(process.env.API_URL + '/BrandPage-Brand-Delete', {
              // ZNavKey: this.ZNavKey,
              ZBrandID: this.brand.brandid,
              config1
            })
            .then(response => {
              console.log('deleted response', response);
              if (response.data.HasError) {
                dialog.close();
                this.$toastr.Add({
                  title: 'Failed Delete', // Toast Title
                  msg: response.data.ErrorMessage, // Message
                  position: 'toast-top-center', // Toast Position.
                  type: 'error', // Toast type,
                  // progressBarValue: 0,
                  preventDuplicates: true //Default is false
                });
              } else {
                this.brands.splice(this.brand.index, 1);
                dialog.close();
                this.showBrandsModal = false;
                this.brand = {};

                this.$toastr.Add({
                  title: 'Success', // Toast Title
                  msg: 'Deleted current Brand successfully', // Message
                  position: 'toast-top-center', // Toast Position.
                  type: 'success', // Toast type,
                  preventDuplicates: true //Default is false
                });
              }
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(function() {
          console.log('Clicked on cancel');
        });
    },
    onupdatebrandinfo: function() {
      if (!this.brand.brandid) {
        this.onaddBrand();
        return;
      }

      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };

      axios
        .post(process.env.API_URL + '/BrandPage-Brand-Update', {
          ZNavKey: this.VendorZNavKey,
          ZDesc1: this.brand.desc1,
          ZThumbnailImageFilePath: this.brand.thumbmailimagefilepath || '',
          ZImageFilePath: this.brand.imagefilepath || '',
          ZBrandID: this.brand.brandid
        })
        .then(response => {
          console.log(response.data);

          if (!response.data.HasError) {
            this.showBrandsModal = false;

            this.$toastr.Add({
              title: 'Success', // Toast Title
              msg: 'Updated Brand information successfully', // Message
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
        });
    },

    onaddBrand: function() {
      console.log('onaddbrand');

      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };

      axios
        .post(process.env.API_URL + '/BrandPage-Brand-Insert', {
          ZNavKey: this.VendorZNavKey,
          ZDesc1: this.brand.desc1,
          ZThumbnailImageFilePath: this.brand.thumbmailimagefilepath || '',
          ZImageFilePath: this.brand.imagefilepath || '',
          ZCompanyID: localStorage.getItem('companyid')
        })
        .then(response => {
          console.log(response.data);
          if (!response.data.HasError) {
            this.showBrandsModal = false;

            this.$toastr.Add({
              title: 'Success', // Toast Title
              msg: 'Created new Brand information successfully', // Message
              position: 'toast-top-center', // Toast Position.
              type: 'success', // Toast type,
              preventDuplicates: true //Default is false
            });

            this.brands[this.brand.last_index] = this.brand;
            console.log('added', this.brand);
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-wrapper {
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
}
#edit-billing-address {
  width: 900px;
}
.block-center {
  margin-left: auto;
  margin-right: auto;
}
.user-info-label {
  font-size: 19px;
  font-weight: bold;
}
.imagefile {
  word-break: break-all;
  width: 50%;
}
.reveal-overlay::-webkit-scrollbar {
  display: none;
}
</style>
