<template>
	<div class="tabs-panel" id="dietary-settings" v-if="selecttab" v-bind:class="{'is-active' : selecttab}">
		<div class="grid-x grid-margin-x">
			<div class="cell small-12 text-center">
				<p class="h3 cursive title line-left-right">Vendor Orders</p>
			</div>
			<div class="cell small-12 xlarge-10 xlarge-offset-1">
				<div class="callout">
					<div class="grid-x grid-padding-x">
						<div class="cell small-12 large-10 large-offset-1">
							<table class="stack">
								<thead>
									<tr>
										<th>Edit</th>
										<th>Name</th>
										<th>View</th>
                    <th>OrderID</th>
										<th>Description</th>
                    <th>Total Price</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<!--BEGIN LOOP of API ARRAY: VendorPortal-orders-->

									<tr v-for="(order, index) in orders" :key="order.vendororderid">
										<td><button class="button muted" data-open="edit-order" @click="editorder(index)">Go</button></td>
										<td>{{order.vendordesc1}}</td>
                    <td><img :src="order.logoimagefilepath" alt="" width="80px"></td>
										<td>{{order.vendororderid}}</td>

										<td style="max-width:20vw">{{order.orderdesc1}}</td>
                    <td>{{order.exttotalprice}}</td>
										<td>{{order.statusdefdesc1}}</td>
									</tr>

									<!-- End API Loop -->
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- order Insert/Edit Modal  -->

		<div class="reveal-overlay" :style="[showorderModal?{display:'block'}:{display:'none'}]">
			<div class="reveal form-popup" :style="[showorderModal?{display:'block'}:{display:'none'}]" id="edit-billing-address" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
				<form v-on:submit.prevent="onupdateorderinfo($event)" id="billingaddressform">
					<div class="grid-x grid-padding-x">
						<div class="cell small-12 large-10 large-offset-1" id="toggle-all">
							<header class="page-header white-bg">
                <div class="row">
                  <div class="pull-left logo-body">
                    <img src="../../../assets/img/fooduniverse-logo.png" height="50px" width="80px" alt="Food Universe">
                  </div>
                </div>
              </header>

              <div class="order-details">
                     <section id="main-content">
                      <section class="panel">
                          <header class="panel-heading">

                          <div class="shopping-cart" style="margin-top:50px">
                            <div class="media-body">
                          	<div style="float:left">
                          		<table>
                                <tbody><tr>
                                <td valign="top"><strong>Ship To:</strong></td>
                                <td valign="top">&nbsp;</td>
                                <td valign="top">	<strong>{{orderDetail.attentiondesc1}}<br>
                               		  {{orderDetail.street}}<br>
                                      {{orderDetail.city}},&nbsp;{{orderDetail.statedesc1}}&nbsp;&nbsp;{{orderDetail.zipcodedesc1}}<br>
                                      Phone: {{orderDetail.cellphone}}<br>
                                </strong></td>
                                </tr>
                                </tbody></table>
							</div>
                            <div style="float:left; margin-left:12%">

                        	<div class="total-cart">
	                          	<table>
                                <tbody><tr>
                                <td align="right" valign="top"><strong>Line Count:</strong></td>
                                <td valign="top">&nbsp;</td>
                                <td align="right" valign="top">&nbsp;</td>
                                <td align="right" valign="top"><strong>(1)&nbsp;</strong></td>
                                </tr>
                                 <tr>
                                <td align="right" valign="top"><strong>Qty Count:</strong></td>
                                <td valign="top">&nbsp;</td>
                                <td align="right" valign="top">&nbsp;</td>
                                <td align="right" valign="top"><strong>(3)&nbsp;</strong></td>
                                </tr>
                                <tr>
                                <td align="right"><strong><span class="total-amt">Order Total:</span></strong></td>
                                <td>&nbsp;</td>
                                <td align="right">&nbsp;</td>
                                <td align="right"><strong>$11.97</strong></td>
                                </tr>

                                 <tr>
                                <td align="right"><strong><span class="total-amt">Web Order #:</span></strong></td>
                                <td>&nbsp;</td>
                                <td align="right">&nbsp;</td>
                                <td align="right"><strong>{{orderDetail.weborderref}}</strong></td>
                                </tr>

                                  <tr>
                                <td align="right"><strong><span class="total-amt">Vendor Order #:</span></strong></td>
                                <td>&nbsp;</td>
                                <td align="right">&nbsp;</td>
                                <td align="right"><strong>{{orderDetail.vendororderref}}</strong></td>
                                </tr>

                                  <tr>
                                <td align="right"><strong><span class="total-amt">Order Status:</span></strong></td>
                                <td>&nbsp;</td>
                                <td align="right">&nbsp;</td>
                                <td align="right"><strong>{{orderDetail.statusdefdesc1}}</strong></td>
                                </tr>

                                </tbody></table>
                          	</div>


                         </div>
                         <div style="max-width: 30vw;">

                        	<div class="total-cart">
	                         		<p class="delivery-note">

                                         </p><form name="form1">
                                         <table>
                                         <tbody><tr>
                                         <td align="right">Tracking Number: </td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td><input autocomplete="off" class="form-control" type="text" name="TrackingNumber" size="30" v-model="orderDetail.trackingnumber"></td>
                                         </tr>
                                         <tr>
                                         <td align="right">Shipping Via:</td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td> <select class="form-control customSelect hasCustomSelect" name="ShippingVendorID" style="-webkit-appearance: menulist-button; width: 200px; position: absolute; height: 34px; font-size: 12px;" v-model="firstShippingOption">
                                           <option :value="vendor.shippingvendorid" v-for="vendor in shippingVendors" :key="vendor.shippingvendorid">{{vendor.desc1}}</option>
                                          </select><span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 230px; display: inline-block;">UPS</span></span>
                                          </td>
                                          </tr>

                                           <tr>
                                         <td align="right">Shipped on:</td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td v-if="!editFirstDate" @click="editFirstDate = true;"> {{moment(orderDetail.shippingdate).format( "MMM DD, YYYY")}}</td>
                                         <input @keyup.enter="editFirstDate = false;" v-if="editFirstDate" type="text" v-model="orderDetail.shippingdate">
                                          </tr>


                                           <tr>
                                         <td align="right">&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td>

                                          </td>
                                          </tr>
                                          </tbody></table>

                                          <input type="hidden" name="MM_UpdateRecord" value="form1">
                                          <input type="hidden" name="VendorOrderID" value="1094">
                                          <input type="hidden" name="DefaultShippingDate" value="2018-03-29">
                                          </form>
                                         <p></p>
                          	</div>


                         </div>
                          </div>
                          <div class="clearfix"></div>
                          </div>
                         </header>
                          <div class="clearfix"></div>
                          <div class="panel-body" style="margin-top: 5vh; display:flex; flex-wrap: no-wrap; flex-direction: column; border-top: solid black">

                          		<div class="clearfix"></div>                            <div class="shopping-cart" v-for="orderLine in orderLines" :key="orderLine.fooditemid">
                                  <article class="media">
                                      <a class="pull-left thumb p-thumb-NHC-Cart">
                                          <img :src="orderLine.thumbnailimagefilepath">
                                      </a>
                                      <div class="media-body">
                                      	<div style="float:left">
                                        	<div class="item-desc">
                                          		<a class=" p-head"><strong>{{orderLine.fooditemdesc1}}</strong></a>
                                          		<p class="delivery-note">Qty: {{orderLine.qty}} @ ${{orderLines.unitprice}} = ${{orderLine.exttotalprice}}</p>
                                        	</div>

                                            <div class="item-count">
                                             <p class="delivery-note">Status: <strong>{{orderLine.statusdefdesc1}}</strong><br>Shipping from: {{orderLine.vendordesc1}}</p>
                                             </div>
                                         </div>
                                         <div style="float:right; margin-top:-10px">
                                         <p class="delivery-note">

                                         </p><form name="form1">
                                         <table>
                                         <tbody><tr>
                                         <td align="right">Tracking Number: </td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td><input autocomplete="off" class="form-control" type="text" name="TrackingNumber" size="30" v-model="orderLine.trackingnumber"></td>
                                         </tr>
                                         <tr>
                                         <td align="right">Shipping Via:</td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td> <select class="form-control customSelect hasCustomSelect" name="ShippingVendorID" style="-webkit-appearance: menulist-button; width: 200px; position: absolute; height: 30px; font-size: 10px;" v-model="secondShippingOption">
                                           <option :value="vendor.shippingvendorid" v-for="vendor in shippingVendors" :key="vendor.shippingvendorid">{{vendor.desc1}}</option>
                                          </select><span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 232px; display: inline-block;">UPS</span></span></td>
                                          </tr>

                                           <tr>
                                         <td align="right">Shipped on:</td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td v-if="!editSecondDate" @click="editSecondDate = true;"> {{moment(orderLine.shippingdate).format( "MMM DD, YYYY")}}</td>
                                         <input @keyup.enter="editSecondDate = false;" v-if="editSecondDate" type="text" v-model="orderLine.shippingdate">
                                          </tr>


                                           <tr>
                                         <td align="right">&nbsp;</td>
                                         <td>                                <button class="button" @click.prevent="updateOrderLine(orderLine)">Update</button></td>
                                         <td>&nbsp;</td>
                                         <td>
                                          </td>

                                          </tr>
                                          </tbody></table>

                                          <input type="hidden" name="MM_UpdateRecord" value="form1">
                                          <input type="hidden" name="VendorOrderLineID" value="183">
                                          <input type="hidden" name="DefaultShippingDate" value="2018-03-29">
                                          </form>
                                         <p></p>


									        </div>
                                    </div>

                                  </article>
                                  <hr>


                              </div>
                          </div>
                      </section>


      </section>
              </div>

						</div>
					</div>
					<button class="close-button" data-close aria-label="Close reveal" type="button" @click="showorderModal = false">
						<span aria-hidden="true">&times;</span>
					</button>
				</form>
			</div>
		</div>
		<!-- End order Insert/Edit Modal  -->
	</div>
</template>

<script>
// Library components.
import moment from 'moment';
import axios from 'axios';
import { mapState } from 'vuex';
// Custom components.
import router from '../../router';

export default {
  name: 'orders',
  props: ['selecttab', 'ZNavKey', 'VendorZNavKey'],
  components: {},

  data() {
    return {
      // ZNavKey: 'CE89FE19-8B65-4A2C-AEC5-59B40B8153C1',
      loading: false,
      orders: [],
      orderDetail: '',
      token: '',
      editFirstDate: false,
      editSecondDate: false,
      orderLines: [],
      firstShippingOption: '1',
      secondShippingOption: '1',
      shippingVendors: [],
      order: '',
      showorderModal: false,
      moment: moment
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

      router.push({ path: `/SearchResults` }); // -> /user/123
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
        .post(process.env.API_URL + '/VendorPage-Orders-Open-List', {
          ZNavKey: this.VendorZNavKey,
          config1
        })
        .then(response => {
          console.log('vendorOrder-open-list', response.data);
          if (response.data.items) {
            this.orders = response.data.items;
          } else {
            this.$set(this.orders, 0, response.data.item);
          }
          this.loading = false;
        });
    },
    editorder: function(index) {
      this.showorderModal = true;
      this.order = this.orders[index];
      this.order.index = index;
      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };
      axios
        .post(process.env.API_URL + '/VendorPage-VendorOrder-Detail', {
          ZNavKey: this.VendorZNavKey,
          ZVendorOrderID: this.order.vendororderid,
          config1
        })
        .then(response => {
          if (response.data.item) {
            console.log('vendororder-detail', response.data);
            this.orderDetail = response.data.item;
          } else {
            this.$set(this.orders, 0, response.data.item);
          }
        });

      axios
        .post(
          process.env.API_URL + '/VendorPage-VendorOrder-VendorOrderLines',
          {
            ZNavKey: this.VendorZNavKey,
            ZVendorOrderID: this.order.vendororderid,
            config1
          }
        )
        .then(response => {
          console.log('vendororder-line', response.data);
          this.$set(this.orderLines, 0, response.data.item);
        });

      axios
        .post(process.env.API_URL + '/LOV-ShippingVendors', {
          ZNavKey: this.VendorZNavKey,
          config1
        })
        .then(response => {
          this.shippingVendors = response.data.items;
          console.log(this.shippingVendors);
        });
    },
    updateOrderLine(orderLine) {
      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };
      axios
        .post(process.env.API_URL + '/VendorPage-VendorOrderLine-Update', {
          ZNavKey: this.VendorZNavKey,
          config1,
          ZShippingVendorID: this.secondShippingOption,
          ZTrackingNumber: orderLine.trackingnumber,
          ZShippingDate: orderLine.shippingdate,
          ZVendorOrderLineID: orderLine.vendororderlineid
        })
        .then(response => {
          console.log(response.data);
        });
    },
    onupdateorderinfo: function() {
      // if (!this.order.orderid) {
      //   this.onaddorder();
      //   return;
      // }
      // var config1 = {
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Authorization': "bearer " + this.token
      //   }
      // };
      // axios
      //   .post(process.env.API_URL + '/VendorPage-VendorOrder-Update', {
      //     ZNavKey: this.VendorZNavKey,
      //     ZFirstName: this.order.firstname,
      //     ZShippingVendorID: '',
      //     ZTrackingNumber: '',
      //     ZShippingDate: '',
      //     ZVendorOrderID: this.order.vendororderid
      //   })
      //   .then(response => {
      //     console.log(response.data);
      //     if (!response.data.HasError) {
      //       this.showorderModal = false;
      //       this.$toastr.Add({
      //         title: 'Success', // Toast Title
      //         msg: 'Updated order information successfully', // Message
      //         position: 'toast-top-center', // Toast Position.
      //         type: 'success', // Toast type,
      //         preventDuplicates: true //Default is false
      //       });
      //     } else {
      //       this.$toastr.Add({
      //         title: 'Failed update', // Toast Title
      //         msg: response.data.ErrorMessage, // Message
      //         position: 'toast-top-center', // Toast Position.
      //         type: 'error', // Toast type,
      //         // progressBarValue: 0,
      //         preventDuplicates: true //Default is false
      //       });
      //     }
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  overflow-y: auto;
  height: 100vh;
}

div.modal-mask::-webkit-scrollbar {
  display: none;
}

.modal-dialog {
  width: 98%;
  height: 92%;
  padding: 0;
}

.modal-content {
  height: 99%;
}
#edit-billing-address {
  height: 100vh;
  width: 100vh;
  padding: 0;
  width: 100%;
  top: 0;
}

.order-details {
  position: relative;
  top: 10vh;
}

.order-details::-webkit-scrollbar {
  display: none;
}

.reveal-overlay::-webkit-scrollbar {
  display: none;
}
</style>
