<template>
    <div class="tabs-panel" id="profile" v-if="selecttab" v-bind:class="{'is-active' : selecttab}">
        <!-- <form v-on:submit.prevent="onupdateuserinfo($event)" id="userform"> -->
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 text-center">
                <p class="h3 cursive title">Welcome</p>
                <p class="h1">{{userprofile.fullname}}</p>
                <div class="grid-x grid-padding-x align-middle">
                    <div class="cell small-12 msmall-6 medium-4 medium-offset-4 text-center">
                        <div class="profile-img">
                            <img :src="userprofile.imagefilepath" alt="">
                        </div>
                    </div>
                    <div class="cell small-12 msmall-6 medium-4 text-left profile-img-actions">
                        <p>Photo &nbsp;
                            <span class="subtitle">Min. 250x250px</span>
                        </p>
                        <p>
                            <input id="imagefile" type="file" @change="onfilechange" style="opacity:0">
                            <button class="button muted" @click="triggerfileinput">Change</button>
                            <button class="button muted hollow" @click="removeimage">Delete</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="cell user-info small-12 xlarge-10 xlarge-offset-1">
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Username</div>
                    <div class="cell small-12 smedium-10 medium-10">
                        <p class="h3 user-info-data">{{userprofile.username}}</p>
                    </div>
                </div>
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Password</div>
                    <div class="cell small-12 smedium-10 medium-10">
                        <p class="h3 user-info-data" v-html="decodeData(userpassword)"></p>
                    </div>
                </div>
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Email</div>
                    <div class="cell small-12 smedium-10 medium-10">
                        <p class="h3 user-info-data">{{userprofile.emailaddress}}</p>
                    </div>
                </div>
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 smedium-2 medium-2 user-info-label">Bio</div>
                    <div class="cell small-12 smedium-10 medium-10">
                        <div class="callout user-info-block">
                            <p>{{userprofile.userbio}}</p>
                        </div>
                    </div>
                </div>
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 smedium-10 medium-10 smedium-offset-2 medium-offset-2">
                        <p>
                            <button class="button muted" data-open="edit-profile" @click="showModal = true">Edit User Information</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- </form> -->
        <hr />
        <form v-on:submit.prevent="onupdatepersonalinfo($event)" id="personalform">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-10 xlarge-8 medium-offset-1 xlarge-offset-2">
                    <p class="h3 cursive title text-center line-left-right">Personal Information</p>
                    <div class="callout personal-info">
                        <div class="grid-x grid-margin-x">
                            <div class="cell small-3 smedium-3 medium-3">
                                <p class="h3">Gender</p>
                            </div>
                            <div class="cell auto">
                                <fieldset>
                                    <input type="radio" name="pokemon" id="gender-male" value="MALE" required v-model="userprofile.sex">
                                    <label for="gender-male">Male</label>
                                    <input type="radio" name="pokemon" id="gender-female" value="FEMALE" v-model="userprofile.sex">
                                    <label for="gender-female">Female</label>
                                </fieldset>
                            </div>
                        </div>
                        <hr />
                        <div class="grid-x grid-margin-x">
                            <div class="cell small-12 smedium-3 medium-3 align-middle">
                                <p class="h3">Birthday</p>
                            </div>
                            <div class="cell auto text-right">
                                <div class="grid-x grid-padding-x small-up-3">
                                    <div class="cell">
                                        <select name="birth-month" v-model="birthMonth">
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">Mar</option>
                                            <option value="04">Apr</option>
                                            <option value="05">May</option>
                                            <option value="06">Jun</option>
                                            <option value="07">Jul</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div class="cell">
                                        <select name="birth-day" v-model="birthDay">
                                            <option v-for="n in 31" v-bind:key="'birth-day'+n">{{n}}</option>
                                        </select>
                                    </div>
                                    <div class="cell">
                                        <select name="birth-year" v-model="birthYear">
                                            <option v-for="n in 119" v-bind:key="'birth-year'+n" :value="2019-n">{{2019-n}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="grid-x grid-margin-x">
                            <div class="cell small-12 smedium-3 medium-3">
                                <p class="h3">Weight</p>
                            </div>
                            <div class="cell auto text-right">
                                <div class="grid-x grid-padding-x">
                                    <div class="cell small-9 align-middle">
                                        <input class="input-group-field" type="number" name="weight" v-model="userprofile.weight">
                                    </div>
                                    <div class="cell auto">
                                        <p>lb</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="grid-x grid-margin-x">
                            <div class="cell small-12 smedium-3 medium-3">
                                <p class="h3">Height</p>
                            </div>
                            <div class="cell auto text-right">
                                <div class="grid-x grid-padding-x small-up-2">
                                    <div class="cell">
                                        <div class="input-group">
                                            <select class="input-group-field" name="height-feet" v-model="userprofile.height">
                                                <option v-for="(i) in 9" :key="(9-i).key" :value="9-i">{{9-i}}</option>
                                            </select>
                                            <span class="input-group-label">ft</span>
                                        </div>
                                    </div>
                                    <div class="cell">
                                        <div class="input-group">
                                            <select class="input-group-field" name="height-inches" v-model="userprofile.height2">
                                                <option v-for="(i) in 12" :key="(12-i).key" :value="12-i">{{12-i}}</option>
                                            </select>
                                            <span class="input-group-label" id="weight-label">in</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="grid-x grid-margin-x">
                            <div class="cell small-12">
                                <p class="h3">Activity Level</p>
                            </div>
                            <div class="cell auto">
                                <!--I store the FK ActivityLevelID-->
                                <select name="activity-level" id="activity-level" v-model="userprofile.activitylevelid">
                                    <option v-for="activitylevel in lovActivityLevels" :value="activitylevel.activitylevelid" v-bind:key="'ActivityLevelID'+activitylevel.activitylevelid">{{activitylevel.desc1}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p class="text-center">
                        <button class="button muted">Update Personal Information</button>
                    </p>
                </div>
            </div>
        </form>
        <hr />
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 medium-10 xlarge-8 medium-offset-1 xlarge-offset-2">
                <p class="h3 cursive title text-center line-left-right">Address Information</p>
                <div class="grid-x grid-padding-x" id="address-settings">
                    <div class="cell small-12 medium-6">
                        <p class="h3">Billing Address</p>
                        <p>
                            <strong class="address-info">{{userprofile.fullname}}</strong>
                            <span class="address-info">{{useraddress.attentiondesc1}}</span>
                            <span class="address-info">{{useraddress.street}}</span>
                            <span class="address-info">{{useraddress.street2}}</span>
                            <span class="address-info">{{useraddress.city}}{{useraddress.city?',':''}} {{useraddress.statedesc1}} {{useraddress.zipcodedesc1}}</span>
                            <span class="address-info">{{useraddress.countrydesc1}}</span>
                        </p>
                        <p>
                            <button class="button muted" @click="showBillingModal = true">Edit &nbsp;
                                <i class="fa fa-edit"></i>
                            </button>
                        </p>
                    </div>
                    <div class="cell small-12 medium-6">
                        <p class="h3">Shipping Address</p>
                        <p>
                            <strong class="address-info">{{shippingAddress.desc1}}</strong>
                            <span class="address-info">{{shippingAddress.street}}</span>
                            <span class="address-info">{{shippingAddress.city}}{{shippingAddress.city?',':''}} {{shippingAddress.statedesc1}} {{shippingAddress.zipcodedesc1}}</span>
                            <span class="address-info">{{shippingAddress.countrydesc1}}</span>
                        </p>
                        <p>
                            <button class="button muted" @click="showShippingModal = true">Edit &nbsp;
                                <i class="fa fa-edit"></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- user information update modal  -->
        <div class="reveal-overlay" :style="[showModal?{display:'block'}:{display:'none'}]">
            <div class="reveal form-popup" :style="[showModal?{display:'block'}:{display:'none'}]" id="edit-profile" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
                <form v-on:submit.prevent="onupdateuserinfo($event)" id="edit-profile-form">
                    <div class="grid-x grid-padding-x">
                        <div class="cell small-12 large-10 large-offset-1" id="toggle-all">
                            <p class="text-center title h3">Edit User Information</p>

                            <div class="form-floating-label">
                                <input type="text" name="username" v-model="userprofile.username" />
                                <label>Username</label>
                            </div>
                            <fieldset class="fieldset">
                                <legend>Password</legend>
                                <div class="form-floating-label">
                                    <input type="password" name="confirmuserpassword" v-model="newpassword" />
                                    <label>New Password</label>
                                </div>
                                <div class="form-floating-label">
                                    <input type="password" name="confirmuserpassword" v-model="confirmuserpassword" />
                                    <label>Confirm Password</label>
                                </div>
                            </fieldset>
                            <div class="form-floating-label">
                                <input type="email" name="emailaddress" v-model="userprofile.emailaddress" />
                                <label>Email</label>
                            </div>
                            <div class="form-floating-label">
                                <textarea name="userbio" v-model="userprofile.userbio">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel fuga impedit sint similique facilis enim aliquam? Corrupti modi praesentium magnam perspiciatis. Blanditiis, esse commodi!</textarea>
                                <label>Bio</label>
                            </div>

                            <p class="text-center">
                                <button class="button muted" data-close aria-label="Close reveal">Update</button>
                            </p>
                        </div>
                    </div>
                    <button class="close-button" data-close aria-label="Close reveal" type="button" @click="showModal = false">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </form>
            </div>
        </div>

        <!-- Billing Address Edit Modal  -->
        <div class="reveal-overlay" :style="[showBillingModal?{display:'block'}:{display:'none'}]">
            <div class="reveal form-popup" :style="[showBillingModal?{display:'block'}:{display:'none'}]" id="edit-billing-address" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
                <form v-on:submit.prevent="onupdatebillingaddressinfo($event)" id="billingaddressform">
                    <div class="grid-x grid-padding-x">
                        <div class="cell small-12 large-10 large-offset-1" id="toggle-all">
                            <p class="text-center title h3">Edit Billing Address</p>

                            <div class="form-floating-label">
                                <input type="text" name="attention" required v-model="useraddress.attentiondesc1" />
                                <label>Attention</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="street" required v-model="useraddress.street" />
                                <label>Street</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="street2" v-model="useraddress.street2" />
                                <label>Street2</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="city" required v-model="useraddress.city" />
                                <label>City</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="statedesc1" required v-model="useraddress.statedesc1" />
                                <label>State</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="zipcodedesc1" required v-model="useraddress.zipcodedesc1" />
                                <label>ZipCode</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="countrydesc1" required v-model="useraddress.countrydesc1" />
                                <label>Country</label>
                            </div>

                            <p class="text-center">
                                <button class="button muted" data-close aria-label="Close reveal">Update</button>
                            </p>
                        </div>
                    </div>
                    <button class="close-button" data-close aria-label="Close reveal" type="button" @click="showBillingModal = false">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </form>
            </div>
        </div>

        <!-- Shipping Address Edit Modal  -->
        <div class="reveal-overlay" :style="[showShippingModal?{display:'block'}:{display:'none'}]">
            <div class="reveal form-popup" :style="[showShippingModal?{display:'block'}:{display:'none'}]" id="edit-shipping-address" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast">
                <form v-on:submit.prevent="onupdateshippingaddressinfo($event)" id="shippingaddressform">
                    <div class="grid-x grid-padding-x">
                        <div class="cell small-12 large-10 large-offset-1" id="toggle-all">
                            <p class="text-center title h3">Edit Shipping Address</p>

                            <div class="form-floating-label">
                                <input type="text" name="attention" required v-model="shippingAddress.attentiondesc1" />
                                <label>Attention</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="street" required v-model="shippingAddress.street" />
                                <label>Street</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="street2" v-model="shippingAddress.street2" />
                                <label>Street2</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="city" required v-model="shippingAddress.city" />
                                <label>City</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="statedesc1" required v-model="shippingAddress.statedesc1" />
                                <label>State</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="zipcodedesc1" required v-model="shippingAddress.zipcodedesc1" />
                                <label>ZipCode</label>
                            </div>
                            <div class="form-floating-label">
                                <input type="text" name="countrydesc1" required v-model="shippingAddress.countrydesc1" />
                                <label>Country</label>
                            </div>

                            <p class="text-center">
                                <button class="button muted" data-close aria-label="Close reveal">Update</button>
                            </p>
                        </div>
                    </div>
                    <button class="close-button" data-close aria-label="Close reveal" type="button" @click="showShippingModal = false">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// Library components.
import axios from 'axios';
import { mapState } from 'vuex'
// Custom components.
import router from '../../router'

export default {
    name: 'Profile',
    props: ['selecttab', 'ZNavKey'],
    components: {
    },

    data() {
        return {
            // ZNavKey: 'CE89FE19-8B6504A2C-AEC5-59B40B8153C1',
            loading: false,
            userprofile: {
                // "userid": 49,
                // "desc1": "Daniel Doble",
                // "firstname": "Daniel",
                // "lastname": "Doble",
                // "fullname": "Daniel Doble",
                // "username": null,
                // "emailaddress": "ddoble@fooduniverse.com",
                // "confirmemailaddress": null,
                // "userpassword": null,
                // "datecreated": "2017-08-29T10:37:30.263",
                // "imagefilepath": "http://admin.fooduniverse.com/App/Users/UserImages/member_1917718121.jpg",
                // "defaultprofilepage": null,
                // "isadmin": null,
                // "activationcode": "D8731E2C-3DBA-4503-B85B-5083F5189107",
                // "useraccounthash": null,
                // "webuseraccounthash": "0x6A46E63791494574DAASW6A46E6395428AB",
                // "street": "147 Briarwood",
                // "street2": null,
                // "city": "Irvine",
                // "statedesc1": "California",
                // "zipcodedesc1": null,
                // "latitude": null,
                // "longitude": null,
                // "cellphone": "9492411905",
                // "dateofbirth": null,
                // "sex": "MALE",
                // "userbio": null,
                // "countrydesc1": null,
                // "geodefid": null,
                // "geodefdesc1": null,
                // "statusdefid": 43,
                // "statusdefdesc1": "Active",
                // "isuseedibleimages": null,
                // "solidservingsize": null,
                // "solidservingsizeuomid": null,
                // "liquidservingsize": null,
                // "liquidservingsizeuomid": null,
                // "isuseemailnotifications": null,
                // "isagreetoterms": true,
                // "agreementdate": "2017-08-29T11:00:20.033",
                // "redirectpageurl": null,
                // "mobileredirectpageurl": null,
                // "invitationcodeid": null,
                // "invitationcodedesc1": null,
                // "isvendoruser": null,
                // "usertypeid": 6,
                // "usertypedesc1": "Employee",
                // "height": null,
                // "heightuomid": null,
                // "heightuomdesc1": null,
                // "height2": null,
                // "height2uomid": null,
                // "height2uomdesc1": null,
                // "heightcm": 0,
                // "weight": null,
                // "weightuomid": null,
                // "weightuomdesc1": null,
                // "weightkg": 0,
                // "ageyears": null,
                // "dailycalorietarget": 2000,
                // "activitylevelid": null,
                // "activityleveldesc1": null,
                // "bmrvalue": null
            },
            useraddress: {
                // "userid": 49,
                // "desc1": "Daniel Doble",
                // "firstname": "Daniel",
                // "lastname": "Doble",
                // "fullname": "Daniel Doble",
                // "street": null,
                // "street2": null,
                // "city": null,
                // "statedesc1": null,
                // "zipcodedesc1": null,
                // "latitude": null,
                // "longitude": null,
                // "countrydesc1": null
            },
            shippingAddress: {
                // "useraddressid": 52,
                // "desc1": "User Account Address",
                // "userid": 80,
                // "attentiondesc1": null,
                // "street": null,
                // "street2": null,
                // "city": null,
                // "statedesc1": null,
                // "zipcodedesc1": null,
                // "zipcodeid": null,
                // "latitude": null,
                // "longitude": null,
                // "isprimaryaddress": true,
                // "countrydesc1": null

            },
            token: '',
            userpassword: '',
            newpassword: '',
            confirmuserpassword: '',
            birthYear: null,
            birthMonth: null,
            birthDay: -1,
            lovActivityLevels: [],

            showModal: false,
            showBillingModal: false,
            showShippingModal: false
        }
    },
    created: function() {
        //this.search()
        this.fetch()
    },
    computed: {

    },
    mounted: function() {



    },
    methods: {
        search(srhtext = '') {
            // alert('Home : ' + srhtext)
            //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})

            router.push({ path: `/SearchResults` }) // -> /user/123
            //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123

        },
        fetch() {

            // this.ZNavKey = this.$route.params.ZNavKey
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
                        'Authorization': "bearer " + this.token
                    }
                }

                // Get AccountPage-User Information.
                axios.post(process.env.API_URL + '/AccountPage-User', {
                    ZNavKey: this.ZNavKey,
                    config
                }).then((response) => {
                    console.log('user information', response);

                    // Change Userpassword format
                    this.userprofile = response.data.Item ? response.data.Item : this.userprofile
                    console.log('userprofile', this.userprofile)

                    for (var i = 0; i < this.userprofile.userpassword.length; i++) {
                        this.userpassword += '&#x25cf';
                    }

                    // Get Year, Month, Day from dateofbirth

                    if (this.userprofile.dateofbirth) {
                        var date_array = this.userprofile.dateofbirth.split('T')[0].split('-');
                        console.log(date_array)
                        this.birthYear = date_array[0];
                        console.log(typeof this.birthYear)
                        this.birthMonth = date_array[1];
                        this.birthDay = parseInt(date_array[2]).toString();
                    } else {
                        this.birthYear = '2018'
                    }
                })

                // Get AccountPage-User-Address(Billing Addess) Information
                axios.post(process.env.API_URL + '/AccountPage-UserAddresses-Billing', {
                    ZNavKey: this.ZNavKey,
                    config
                }).then((response) => {
                    console.log('billing', response)
                    this.useraddress = response.data.item ? response.data.item : this.useraddress
                    if (!this.useraddress.countrydesc1) {
                        this.useraddress.countrydesc1 = 'USA'
                    }
                })

                // Get LOV
                axios.post(process.env.API_URL + '/LOV-ActivityLevels', {
                    ZNavKey: this.ZNavKey,
                    config
                }).then((response) => {
                    console.log('lov', response)
                    this.lovActivityLevels = response.data.Items
                })

                // Get Shipping Addess
                axios.post(process.env.API_URL + '/AccountPage-UserAddresses-Shipping', {
                    ZNavKey: this.ZNavKey,
                    config
                }).then((response) => {
                    console.log('shipping', response)
                    this.shippingAddress = response.data.Single ? response.data.Single : this.shippingAddress
                    if (this.shippingAddress.countrydesc1) {
                        console.log('countrydesc1')
                    } else {
                        this.shippingAddress.countrydesc1 = 'USA'
                        console.log(this.shippingAddress.countrydesc1)
                    }
                })

            })
        },
        onupdateuserinfo: function(e) {
            // Update user information
            let $this = this

            this.showModal = false

            var config = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "bearer " + this.token
                }
            }

            // Update AccountPage-User Information.
            axios.post(process.env.API_URL + '/AccountPage-User-UPDATE', {
                ZUserName: this.userprofile.username,
                ZEmailAddress: this.userprofile.emailaddress,
                ZUserPassword: this.newpassword,
                ZConfirmUserPassword: this.confirmuserpassword,
                ZUserBio: this.userprofile.userbio,
                ZNavKey: this.ZNavKey
            }).then((response) => {
                console.log('update', response);

                if (response.status == 200 && !response.data.HasError) {

                    this.$toastr.Add({
                        title: "Success", // Toast Title
                        msg: "Updated user account successfully", // Message
                        position: "toast-top-center", // Toast Position.
                        type: "success", // Toast type,
                        preventDuplicates: true //Default is false
                    });
                    // Change Userpassword format
                    this.userprofile.userpassword = this.newpassword
                    // this.userprofile = response.data.Items[0]?response.data.Items[0]:this.userprofile
                    for (var i = 0; i < this.userprofile.userpassword.length; i++) {
                        this.userpassword += '&#x25cf';
                    }

                    //Close modal
                    this.showModal = false
                }
            })
            console.log('onupdateuserinfo');
        },
        onupdatepersonalinfo: function(e) {
            // Update personal information
            let $this = this

            var config = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "bearer " + this.token
                }
            }

            // Update AccountPage-User Information.
            axios.post(process.env.API_URL + '/AccountPage-User-Personal-UPDATE', {
                ZGender: this.userprofile.sex,
                ZDateOfBirth: this.birthYear + '-' + this.birthMonth + '-' + this.birthDay,
                ZWeight: this.userprofile.weight,
                ZHeight: this.userprofile.height,
                ZHeight2: this.userprofile.height2,
                ZActivityLevelID: this.userprofile.activitylevelid,
                ZNavKey: this.ZNavKey
            }).then((response) => {
                console.log('update', response);

                if (response.status == 200 && !response.data.HasError) {

                    this.$toastr.Add({
                        title: "Success", // Toast Title
                        msg: "Updated user personal information successfully", // Message
                        position: "toast-top-center", // Toast Position.
                        type: "success", // Toast type,
                        preventDuplicates: true //Default is false
                    });
                }
            })
                .catch(e => {
                    console.log(e)
                })
            console.log('onupdatepersonalinfo');
        },
        triggerfileinput: function() {
            // Trigger the file input.
            document.getElementById('imagefile').click()
        },
        onfilechange: function(e) {
            // Change the imagefilepath
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            //this.createimage(files[0]);

            // upload the profile image to aws s3 bucket server and get url path.
            var url = 'assets/ProfileImages/profileimage.jpg'
            //var url = 'assets/img/icons/basket-green.png'

            //upload image path
            var config = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "bearer " + this.token
                }
            }
            axios.post(process.env.API_URL + '/Oboard-Users-ImageFilePath-UPDATE', {
                ZNavKey: this.ZNavKey,
                ZImageFilePath: url,
                config
            }).then((response) => {
                console.log("image update successfully.")
                this.fetch()

            })

        },
        createimage(file) {
            // Change the imagefilepath.
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                this.userprofile.imagefilepath = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeimage: function(e) {

            //upload image path
            var config = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "bearer " + this.token
                }
            }
            axios.post(process.env.API_URL + '/Oboard-Users-ImageFilePath-UPDATE', {
                ZNavKey: this.ZNavKey,
                ZImageFilePath: '',
                config
            }).then((response) => {
                console.log("image Deleted successfully.")
                // Remove the imagefilepath.
                this.userprofile.imagefilepath = '';

            })
        },
        onupdateshippingaddressinfo: function() {
            let $this = this
            var config = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "bearer " + this.token
                }
            }

            console.log(typeof this.shippingAddress.useraddressid)
            // Update AccountPage-User Information.
            axios.post(process.env.API_URL + '/AccountPage-UserAddresses-Shipping-UPDATE', {
                ZUserAddressID: this.shippingAddress.useraddressid,
                ZAttentionDesc1: this.shippingAddress.attentiondesc1,
                ZStreet: this.shippingAddress.street,
                ZStreet2: this.shippingAddress.street2,
                ZCity: this.shippingAddress.city,
                ZStateDesc1: this.shippingAddress.statedesc1,
                ZZipCodeDesc1: this.shippingAddress.zipcodedesc1,
                ZCountryDesc1: this.shippingAddress.countrydesc1,
                ZNavKey: this.ZNavKey
            }).then((response) => {
                console.log('Shipping update', response);

                if (response.status == 200 && !response.data.HasError) {

                    this.$toastr.Add({
                        title: "Success", // Toast Title
                        msg: "Updated user Shipping Address successfully", // Message
                        position: "toast-top-center", // Toast Position.
                        type: "success", // Toast type,
                        preventDuplicates: true //Default is false
                    });
                }

                // Close modal
                this.showShippingModal = false;
            })
                .catch(e => {
                    console.log(e)
                })
            console.log('onupdateshippingaddressinfo');
        },
        onupdatebillingaddressinfo: function() {
            let $this = this

            var config = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "bearer " + this.token
                }
            }

            // Update AccountPage-User Information.
            axios.post(process.env.API_URL + '/AccountPage-UserAddresses-Billing-UPDATE', {
                ZAttentionDesc1: this.useraddress.attentiondesc1,
                ZStreet: this.useraddress.street,
                ZStreet2: this.useraddress.street2,
                ZCity: this.useraddress.city,
                ZStateDesc1: this.useraddress.statedesc1,
                ZZipCodeDesc1: this.useraddress.zipcodedesc1,
                ZCountryDesc1: this.useraddress.countrydesc1,
                ZNavKey: this.ZNavKey
            }).then((response) => {
                console.log('billing update', response);

                if (response.status == 200 && !response.data.HasError) {

                    this.$toastr.Add({
                        title: "Success", // Toast Title
                        msg: "Updated user Billing Address successfully", // Message
                        position: "toast-top-center", // Toast Position.
                        type: "success", // Toast type,
                        preventDuplicates: true //Default is false
                    });
                }

                // Close modal
                this.showBillingModal = false;
            })
                .catch(e => {
                    console.log(e)
                })
            console.log('onupdateaddressinfo');
        },
        decodeData(data) {
            return JSON.parse('"' + data + '"');
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reveal-overlay::-webkit-scrollbar {
    display: none;
}
</style>
