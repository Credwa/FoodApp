<template>
	<div class="tabs-panel" id="dietary-settings" v-if="selecttab" v-bind:class="{'is-active' : selecttab}">
		<div class="grid-x grid-margin-x">
			<div class="cell small-12 text-center">
				<p class="h3 cursive title line-left-right">Vendor Contacts</p>
			</div>
			<div class="cell small-12 xlarge-10 xlarge-offset-1">
				<div class="callout">
					<div class="grid-x grid-padding-x">
						<div class="cell small-12 large-10 large-offset-1">
							<button class="button muted" @click="addContact(contacts.length)" style="float:right">New Contact</button>
							<table class="stack">
								<thead>
									<tr>
										<th>Edit</th>
										<th>Name</th>
										<th>ContactTitle</th>
										<th>Address</th>
										<th>Contact Info</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<!--BEGIN LOOP of API ARRAY: VendorPortal-Contacts-->

									<tr v-for="(contact, index) in contacts" :key="contact.contactid">
										<td><button class="button muted" data-open="edit-contact" @click="editContact(index)">Go</button></td>
										<td>{{contact.fullname}}</td>
										<td>{{contact.contacttitle}}</td>
										<td>{{contact.street}} {{contact.city}} {{contact.statedesc1}} {{contact.zipcodedesc1}}</td>
										<td>{{contact.emailaddress}} {{contact.cellphone}}</td>
										<td>{{contact.statusdefdesc1}}</td>
									</tr>

									<!-- End API Loop -->
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact Insert/Edit Modal  -->

		<div class="reveal-overlay" :style="[showContactModal?{display:'block'}:{display:'none'}]">
			<div class="reveal form-popup" :style="[showContactModal?{display:'block'}:{display:'none'}]" id="edit-billing-address" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
				<form v-on:submit.prevent="onupdatecontactinfo($event)" id="billingaddressform">
					<div class="grid-x grid-padding-x">
						<div class="cell small-12 large-10 large-offset-1" id="toggle-all">
							<p class="text-center title h3">Edit Contact Info</p>
							    <div class="center-pic-upload">
                    <img class="click-to-upload text-center line-eft-right" v-if="contact.imagefilepath" :src="contact.imagefilepath" height="30px" width="250px" alt="Click to upload contact picture"/>
                    <div id="vue-frame" @click="showFrame = !showFrame">
                      <vue-frame v-on:submit.prevent class="click-to-upload text-center line-eft-right" text="Click to upload contact picture" :url="'http://staging.fooduniverse.com/image-Upload-Contact.cfm?ZScopeDesc1=Contacts&ZPKID=' + contact.contactid" frame="myframe" type="a"></vue-frame>
                      <br />
                      <iframe class="upload-iframe" id="myframe" width="80%" height="100px" :hidden="!showFrame"></iframe>
                    </div>
                  </div>

							<div class="form-floating-label">
								<input type="text" name="ZFirstName" required v-model="contact.firstname" />
								<label>First name</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZLastName" required v-model="contact.lastname" />
								<label>Lastname</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZEmailAddress" required v-model="contact.emailaddress" />
								<label>EmailAddress</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZStreet" v-model="contact.street" />
								<label>Street</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZStreet2" v-model="contact.street2" />
								<label>Street2</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZCity" v-model="contact.city" />
								<label>City</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZStateDesc1" v-model="contact.statedesc1" />
								<label>State</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZZipCodeDesc1" v-model="contact.zipcodedesc1" />
								<label>Zipcode</label>
							</div>
							<div class="form-floating-label">
							<input type="text" name="ZImageFilePath" v-model="contact.imagefilepath" />
							<label>ImageFile</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZCountryDesc1" v-model="contact.countrydesc1" />
								<label>Country</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZCellPhone" v-model="contact.cellphone" />
								<label>Phone</label>
							</div>
							<div class="form-floating-label">
								<input type="date" name="ZBirthday"  v-model="contact.dateofbirth" />
								<label>BirthDay</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZSex"  v-model="contact.sex" />
								<label>Sex</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZContactTitle"  v-model="contact.contacttitle" />
								<label>Contact Title</label>
							</div>
							<div class="form-floating-label">
								<input type="text" name="ZContactBio"  v-model="contact.contactbio" />
								<label>Bio</label>
							</div>

							<p class="text-center">
								<button class="button muted" data-close aria-label="Close reveal">Update</button>
								<button class="button muted" v-show="contact.contactid" @click="ondelete($event)" aria-label="Close reveal">Delete</button>
							</p>
						</div>
					</div>
					<button class="close-button" data-close aria-label="Close reveal" type="button" @click="showContactModal = false">
						<span aria-hidden="true">&times;</span>
					</button>
				</form>
			</div>
		</div>
		<!-- End Contact Insert/Edit Modal  -->
	</div>
</template>

<script>
// Library components.
import axios from "axios";
import { mapState } from "vuex";
import VueFrame from 'vue-frame'
// Custom components.
import router from "../../router";

export default {
	name: "Contacts",
	props: ["selecttab", "ZNavKey", "VendorZNavKey"],
	components: { VueFrame },

	data() {
		return {
			// ZNavKey: 'CE89FE19-8B65-4A2C-AEC5-59B40B8153C1',
			loading: false,
			contacts: [],
			token: "",
			contact: "",
			showContactModal: false,
			showFrame: false
		};
	},
	mounted: function() {
        this.fetch();
    },
	watch: {
        VendorZNavKey: function(){
            this.fetch()
        }
    },
	methods: {
		search(srhtext = "") {
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
					"Content-Type": "application/x-www-form-urlencoded"
				}
			};

			this.loading = true;

			var config1 = {
				headers: {
					"Content-Type": "application/json"
					// 'Authorization': "bearer " + this.token
				}
			};

			axios.post(process.env.API_URL + "/VendorPage-Contacts-List", {
				ZNavKey: this.VendorZNavKey,
				config1
			}).then(response => {
				console.log("first fetch", response.data);
				if (response.data.items) {
					this.contacts = response.data.items;
				} else {
					this.$set(this.contacts, 0, response.data.item)
				}
				this.loading = false
			});
		},
		editContact: function(index) {
			this.showContactModal = true;
			this.contact = this.contacts[index];
			this.contact.index = index
			console.log(index);
		},
		addContact: function(last_index) {
			console.log(last_index);
			this.contact = {};
			this.contact.last_index = last_index;
			this.showContactModal = true;
		},
		ondelete: function() {
			if (!this.contact.contactid) {
				return;
			}
			if (event) event.preventDefault()


			let options = {
				loader: true, // set to true if you want the dailog to show a loader after click on "proceed"
				okText: 'Continue',
				cancelText: 'Close',
				animation: 'zoom', // Available: "zoom", "bounce", "fade"
				type: 'basic', // coming soon: 'soft', 'hard'
			};
			this.$dialog.confirm('Are you sure to delete this product?', {
				loader: true // default: false - when set to true, the proceed button shows a loader when clicked.
							// And a dialog object will be passed to the then() callback
			})
			.then((dialog) => {
				// Triggered when proceed button is clicked
				// do some stuff like ajax request.
				console.log('Clicked on delete')
				var config1 = {
					headers: {
						"Content-Type": "application/json"
						// 'Authorization': "bearer " + this.token
					}
				};
				axios.post(process.env.API_URL + "/ContactPage-Contact-Delete", {
					ZNavKey: this.VendorZNavKey,
					ZContactID: this.contact.contactid,
					config1
				}).then(response => {
					console.log("deleted index", this.contact.index);

					this.contacts.splice(this.contact.index, 1)
					dialog.close()
					this.showContactModal = false
					this.contact = {}

					this.$toastr.Add({
						title: "Success", // Toast Title
						msg: "Deleted current Contact successfully", // Message
						position: "toast-top-center", // Toast Position.
						type: "success", // Toast type,
						preventDuplicates: true //Default is false
					});
				}).catch(e => {
					console.log(e)
				})

			})
			.catch(function () {
				console.log('Clicked on cancel')
			});


		},
		onupdatecontactinfo: function() {
			if (!this.contact.contactid) {
				this.onaddcontact();
				return;
			}
			var config1 = {
				headers: {
				"Content-Type": "application/json"
				// 'Authorization': "bearer " + this.token
			}
		};
		axios.post(process.env.API_URL + "/ContactPage-Contact-Update", {
			ZNavKey: this.VendorZNavKey,
			ZFirstName: this.contact.firstname,
			ZLastName: this.contact.lastname,
			ZContactTitle: this.contact.contacttitle || "",
			ZEmailAddress: this.contact.emailaddress,
			ZStreet: this.contact.street || "",
			ZStreet2: this.contact.street2 || "",
			ZCity: this.contact.city || "",
			ZStateDesc1: this.contact.statedesc1 || "",
			ZZipCodeDesc1: this.contact.zipcodedesc1 || "",
			ZImageFilePath: this.contact.imagefilepath || "",
			ZCountryDesc1: this.contact.countrydesc1 || "",
			ZCellPhone: this.contact.cellphone || "",
			ZBirthday: this.contact.dateofbirth || "",
			ZSex: this.contact.sex || "",
			ZContactBio: this.contact.contactbio || "",
			ZContactID: this.contact.contactid
		}).then(response => {
			console.log(response.data);
			if (!response.data.HasError) {
				this.showContactModal = false;
				this.$toastr.Add({
					title: "Success", // Toast Title
					msg: "Updated Contact information successfully", // Message
					position: "toast-top-center", // Toast Position.
					type: "success", // Toast type,
					preventDuplicates: true //Default is false
				});
			} else {
				this.$toastr.Add({
					title: "Failed update", // Toast Title
					msg: response.data.ErrorMessage, // Message
					position: "toast-top-center", // Toast Position.
					type: "error", // Toast type,
					// progressBarValue: 0,
					preventDuplicates: true //Default is false
				});
			}
			});
		},
		onaddcontact: function() {
			var config1 = {
				headers: {
					"Content-Type": "application/json"
					// 'Authorization': "bearer " + this.token
				}
			};
			axios
			.post(process.env.API_URL + "/ContactPage-Contact-Insert", {
				ZNavKey: this.VendorZNavKey,
				ZFirstName: this.contact.firstname,
				ZLastName: this.contact.lastname,
				ZContactTitle: this.contact.contacttitle || "",
				ZEmailAddress: this.contact.emailaddress,
				ZStreet: this.contact.street || "",
				ZStreet2: this.contact.street2 || "",
				ZCity: this.contact.city || "",
				ZStateDesc1: this.contact.statedesc1 || "",
				ZZipCodeDesc1: this.contact.zipcodedesc1 || "",
				ZImageFilePath: this.contact.imagefilepath || "",
				ZCountryDesc1: this.contact.countrydesc1 || "",
				ZCellPhone: this.contact.cellphone || "",
				ZDateOfBirth: this.contact.dateofbirth || "",
				ZSex: this.contact.sex || "",
				ZContactBio: this.contact.contactbio || "",
				ZCompanyID: this.contacts[0].companyid || ""
			})
			.then(response => {
			console.log(response.data);
			if (!response.data.HasError) {
				this.showContactModal = false;
				this.$toastr.Add({
				title: "Success", // Toast Title
				msg: "Updated Contact information successfully", // Message
				position: "toast-top-center", // Toast Position.
				type: "success", // Toast type,
				preventDuplicates: true //Default is false
				});
				this.contact.fullname =
				this.contact.firstname + " " + this.contact.lastname;
				this.contacts[this.contact.last_index] = this.contact;
				console.log("added", this.contact);
				console.log(response);
			} else {
				this.$toastr.Add({
				title: "Failed update", // Toast Title
				msg: response.data.ErrorMessage, // Message
				position: "toast-top-center", // Toast Position.
				type: "error", // Toast type,
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

.reveal-overlay::-webkit-scrollbar {
    display: none;
}
</style>
