<template>
    <div class="tabs-panel" id="profile" v-if="selecttab" v-bind:class="{'is-active' : selecttab}">
        <form v-on:submit.prevent="onupdatecompanyaddress($event)" id="personalform" enctype="multipart/form-data">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-10 xlarge-8 medium-offset-1 xlarge-offset-2">
                  <div class="center-pic-upload">
                    <img class="click-to-upload text-center line-eft-right" v-if="companyaddress.logoimagefilepath" :src="companyaddress.logoimagefilepath" height="30px" width="250px" alt="Click to upload contact picture"/>
                    <div id="vue-frame" @click="showFrame = !showFrame;">
                      <vue-frame  v-on:submit.prevent class="click-to-upload text-center line-eft-right" text="Click to upload company logo" :url="'http://staging.fooduniverse.com/Image-Upload-CompanyLogo.cfm?ZScopeDesc1=Companies&ZPKID=' + companyaddress.companyid" frame="myframe" type="a"></vue-frame>
                      <br />
                      <iframe scrolling="no" class="upload-iframe" id="myframe" width="80%" height="100px" :hidden="!showFrame"></iframe>
                    </div>

                  </div>

                    <p class="h3 cursive title text-center line-left-right">Company Address</p>
                    <div class="callout personal-info">
                        <div class="form-floating-label">
                            <input type="text" name="ZDesc1" required v-model="companyaddress.desc1" />
                            <label>Company Name</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZAttentionDesc1" v-model="companyaddress.attentiondesc1" />
                            <label>Attention</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZStreet" required v-model="companyaddress.street" />
                            <label>Street</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZStreet2"  v-model="companyaddress.street2" />
                            <label>Street</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZCity"  v-model="companyaddress.city" />
                            <label>City</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZStateDesc1"  v-model="companyaddress.statedesc1" />
                            <label>State</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZZipCodeDesc1" required v-model="companyaddress.zipcodedesc1" />
                            <label>Zipcode</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZCountryDesc1" v-model="companyaddress.country" />
                            <label>Country</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZWebAddress" required v-model="companyaddress.webaddress" />
                            <label>Web Address</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="tel" name="ZPhoneNumber" required v-model="companyaddress.phonenumber" />
                            <label>Phone Number</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="email" name="ZEmailAddress" required v-model="companyaddress.emailaddress" />
                            <label>Email</label>
                        </div>
                        <div class="form-floating-label">
                            <input type="text" name="ZLogoImageFilePath" v-model="companyaddress.logoimagefilepath" />
                            <label>Logo Image File</label>
                        </div>
                        <div class="form-floating-label">
                            <textarea name="ZNoteDesc1" v-model="companyaddress.vendormessagetitletext"></textarea>
                            <label>Note</label>
                        </div>
                    </div>
                    <p class="text-center">
                        <button class="button muted">Update Company Information</button>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
// Library components.
import axios from 'axios';
import { mapState } from 'vuex';
import VueFrame from 'vue-frame'
// Custom components.
import router from '../../router';

export default {
  name: 'CompanyInfo',
  props: ['selecttab', 'ZNavKey', 'VendorZNavKey'],
  components: { VueFrame },

  data() {
    return {
      // ZNavKey: 'CE89FE19-8B6504A2C-AEC5-59B40B8153C1',
      loading: false,
      companyaddress: {},
      isSaving: false,
      token: '',
      uploadFieldName: 'photos',
      showFrame: false,
      image: {
        name: '',
        data: ''
      },
    };
  },
  created: function() {
    //this.search()
    this.fetch();

  },
  computed: {},
  mounted: function() {},
  methods: {
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      // save it
      this.save(formData);
    },
    save(formData) {
    //   // upload data to the server
    //   const url = `${BASE_URL}/VendorImages`;
    //   return (
    //     axios
    //       .post(url, formData)
    //       // get data
    //       .then(x => x.data)
    //       // add url field
    //       .then(x =>
    //         x.map(img =>
    //           Object.assign({}, img, { url: `${BASE_URL}/images/${img.id}` })
    //         )
    //       )
    //   );
    },
    search(srhtext = '') {
      // alert('Home : ' + srhtext)
      //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})

      router.push({ path: `/SearchResults` }); // -> /user/123
      //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123
    },
    fetch() {
      var config1 = {
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': "bearer " + this.token
        }
      };
      console.log('usernavkey', this.ZNavKey);
      // Get AccountPage-User Information.
      axios
        .post(process.env.API_URL + '/VendorPage-Vendor-FromUser', {
          ZNavKey: this.ZNavKey,
          config1
        })
        .then(response => {
          console.log('company address', response);
          this.companyaddress = response.data.items;
          this.companyaddress.country = 'USA';

          // Save Companyaddrss to localstorage
          localStorage.setItem('companyid', this.companyaddress.companyid);
          this.$emit('updatevenodornavkey', this.companyaddress.navkey);
        });
    },
    onupdatecompanyaddress: function(e) {
      // Update personal information
      let $this = this;

      var config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'bearer ' + this.token
        }
      };

      // Update AccountPage-User Information.
      axios
        .post(process.env.API_URL + '/VendorPage-Company-Address-Update', {
          ZDesc1: this.companyaddress.desc1,
          ZAttentionDesc1: this.companyaddress.desc1,
          ZStreet: this.companyaddress.street,
          ZStreet2: this.companyaddress.street2,
          ZCity: this.companyaddress.city,
          ZStateDesc1: this.companyaddress.statedesc1,
          ZZipCodeDesc1: this.companyaddress.zipcodedesc1,
          ZCountryDesc1: this.companyaddress.country,
          ZNoteDesc1: this.companyaddress.vendormessagedisplaytextdesc1,
          ZWebAddress: this.companyaddress.webaddress,
          ZPhoneNumber: this.companyaddress.phonenumber,
          ZEmailAddress: this.companyaddress.emailaddress,
          ZLogoImageFilePath: this.companyaddress.logoimagefilepath,
          ZCompanyID: this.companyaddress.companyid
        })
        .then(response => {
          console.log('update company address', response);

          if (response.status == 200 && !response.data.HasError) {
            this.$toastr.Add({
              title: 'Success', // Toast Title
              msg: 'Updated Company information successfully', // Message
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
        })
        .catch(e => {
          console.log(e);
        });
      console.log('onupdatecompanyaddress');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reveal-overlay::-webkit-scrollbar {
  display: none;
}
.form-floating-label.has-value input ~ label,
.form-floating-label input ~ label,
.form-floating-label select ~ label {
  -webkit-transform: translateY(-0.4em);
  -ms-transform: translateY(-0.4em);
  transform: translateY(-0.4em);
  font-size: 0.875rem;
  color: #979797;
  padding: 0 2px;
}
</style>
