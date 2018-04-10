<template>
  <div class="tabs-panel" id="dietary-settings" v-if="selecttab" v-bind:class="{'is-active' : selecttab}">
    <!-- Allergies -->
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 text-center">
        <p class="h3 cursive title line-left-right">Allergies</p>
      </div>
      <div class="cell small-12 xlarge-10 xlarge-offset-1">
        <div class="callout">
          <div class="grid-x grid-padding-x">
            <div class="cell small-12 large-10 large-offset-1">
              <p class="text-center">Please select all that apply</p>
              <fieldset>
                <ul class="large-list no-bullet grid-x small-up-2 smedium-up-3 medium-up-3 large-up-4 xlarge-up-5 xxlarge-up-6">
                  <!--BEGIN API LOOP - AccountPage-AllergyDefs - TopLevel: AllergryDefDesc1, AllergyDefID-->
                  <li class="cell" v-for="AllergyDef in AllergyDefs" v-bind:key="AllergyDef.allergydefid">
                    <div class="img-checkbox">
                      <input :id="'likes-'+AllergyDef.allergydefid" type="checkbox" />
                      <label :for="'likes-'+AllergyDef.allergydefid">
                        <div class="img">
                          <img :src="AllergyDef.imagefilepath" :alt="AllergyDef.alergydefdesc1">
                        </div>
                        <strong>{{AllergyDef.alergydefdesc1}}</strong>
                        <button class="button tiny muted" :data-open="AllergyDef.allergydefid+'-subcategories'" @click="opensubcategory('AllergyDef-'+AllergyDef.allergydefid+'-subcategories')">Make Selections</button>
                      </label>
                    </div>
                  </li>
                  <!--END API LOOP-->
                </ul>
              </fieldset>
              <p class="text-center">
                <button class="button muted">Save Selections</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--START API LOOP: Allergies  -  OUTER LOOP FOR Allergies-->
    <div v-for="AllergyDef in AllergyDefs" :key="AllergyDef.allergydefid" class="modal-mask reveal large" :id="'AllergyDef-'+AllergyDef.allergydefid+'-subcategories'" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast" style="visibility:hidden">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 large-10 large-offset-1" id="toggle-all" style="background-color:white;margin-top:50px;">
          <p class="text-center title h3">{{AllergyDef.alergydefdesc1}}</p>
          <p class="text-center">Select the item(s) you are allergic to.</p>
          <hr />
          <fieldset>
            <ul class="small-checkboxes large-list no-bullet grid-x grid-margin-x small-up-1 smedium-up-2 medium-up-2">
              <!--START API LOOP: AccountPage-UserAllergies  -  INNER LOOP-->
              <li class="cell large-listitem" v-if="UserAllergy.allergydefid === AllergyDef.allergydefid" v-for="UserAllergy in UserAllergies" :key="UserAllergy.foodclassid">
                <div class="custom-checkbox">
                  <input :id="'select-'+UserAllergy.foodclassid" type="checkbox" :checked="UserAllergy.ischecked==0?'':'checked'" />
                  <label :for="'select-'+UserAllergy.foodclassid"></label>
                </div>
                <span class="h4">{{UserAllergy.foodclassdesc1}}</span>
              </li>
              <!-- END INNER LOOP-->

            </ul>
          </fieldset>
          <p class="text-center">
            <button class="button muted" data-close aria-label="Close reveal" @click="close('AllergyDef-'+AllergyDef.allergydefid+'-subcategories')">Save and Close</button>
          </p>
        </div>
      </div>
      <button class="close-button" data-close aria-label="Close reveal" type="button" @click="close('AllergyDef-'+AllergyDef.allergydefid+'-subcategories')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!--END OUTER LOOP-->

    <!--Food Types  -->
    <hr />
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 text-center">
        <p class="h3 cursive title line-left-right">Food Like</p>
      </div>
      <div class="cell small-12 xlarge-10 xlarge-offset-1">
        <div class="callout img-grid">
          <div class="grid-x grid-padding-x">
            <div class="cell small-12">
              <p class="text-center">Please select all that apply</p>
              <fieldset>
                <ul class="large-list no-bullet grid-x small-up-2 smedium-up-3 medium-up-3 large-up-4 xlarge-up-5 xxlarge-up-6">
                  <li class="cell" v-for="FoodType in FoodTypes" v-bind:key="FoodType.foodtypeid">
                    <div class="img-checkbox">
                      <input :id="'likes-'+FoodType.foodtypedesc1" type="checkbox" />
                      <label :for="'likes-'+FoodType.foodtypedesc1">
                        <div class="img"><img :src="FoodType.imagefilepath" :alt="FoodType.foodtypedesc1+' icon'"></div>
                        <strong>{{FoodType.foodtypedesc1}}</strong>
                        <button class="button tiny muted" :data-open="FoodType.foodtypeid+'-subcategories'" @click="opensubcategory('foodtype-'+FoodType.foodtypeid+'-subcategories')">Make Selections</button>
                      </label>
                    </div>
                  </li>

                </ul>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--START API LOOP: FoodType  -  OUTER LOOP FOR FoodType-->
    <div v-for="(FoodType,index) in FoodTypes" :key="index+'_'+FoodType.foodtypeid" class="modal-mask reveal large" :id="'foodtype-'+FoodType.foodtypeid+'-subcategories'" data-reveal data-animation-in="slide-in-down fast" data-animation-out="slide-out-up fast" style="visibility:hidden">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 large-10 large-offset-1" id="toggle-all" style="background-color:white;margin-top:50px;">
          <p class="text-center title h3">{{FoodType.foodtypedesc1}}</p>
          <p class="text-center">Select the item(s) you are allergic to.</p>
          <hr />
          <fieldset>
            <ul class="small-checkboxes large-list no-bullet grid-x grid-margin-x small-up-1 smedium-up-2 medium-up-2">
              <!--START API LOOP: FoodLike  -  INNER LOOP-->
              <li class="cell large-listitem" v-if="FoodLike.foodtypeid === FoodType.foodtypeid" v-for="(FoodLike,index) in FoodLikes" :key="index+'_'+FoodLike.foodclassid">
                <div class="custom-checkbox">
                  <input :id="'select-'+FoodLike.foodclassid" type="checkbox" :checked="FoodLike.ischecked==0?'':'checked'" />
                  <label :for="'select-'+FoodLike.foodclassid"></label>
                </div>
                <span class="h4">{{FoodLike.foodclassdesc1}}</span>
              </li>
              <!-- END INNER LOOP-->
            </ul>
          </fieldset>
          <p class="text-center">
            <button class="button muted" data-close aria-label="Close reveal" @click="close('foodtype-'+FoodType.foodtypeid+'-subcategories')">Save and Close</button>
          </p>
        </div>
      </div>
      <button class="close-button" data-close aria-label="Close reveal" type="button" @click="close('foodtype-'+FoodType.foodtypeid+'-subcategories')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!--END OUTER LOOP-->

    <hr />
    <!--Dietary Choices  -->
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 text-center">
        <p class="h3 cursive title line-left-right">Dietary Choices</p>
      </div>
      <div class="cell small-12 xlarge-10 xlarge-offset-1">
        <div class="callout img-grid">
          <div class="grid-x grid-padding-x">
            <div class="cell small-12">
              <p class="text-center">Please select all that apply</p>
              <fieldset>
                <ul class="large-list no-bullet grid-x small-up-2 smedium-up-3 medium-up-3 large-up-4 xlarge-up-5 xxlarge-up-6">

                  <!--START API LOOP-->

                  <li class="cell" v-for="(UserDietType, index) in UserDietTypes" v-bind:key="'userdiettype_'+index">
                    <div class="img-checkbox">
                      <input :id="'diet-'+UserDietType.diettypeid" type="checkbox"  :checked="UserDietType.ischecked==0?'':'checked'" />
                      <label :for="'diet-'+UserDietType.diettypeid">
                        <div class="img"><img :src="'assets/img/icons/'+UserDietType.dietcode+'-darkgray.svg'" :alt="UserDietType.dietcode+' icon'"></div>
                        <strong>{{UserDietType.dietcode}}</strong>
                      </label>
                    </div>
                  </li>

                  <!--  END API LOOP-->

                </ul>
              </fieldset>
              <p class="text-center">
                <button class="button muted">Save Selections</button>
              </p>
            </div>
          </div>
        </div>
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
  name: 'DietarySettings',
  props: ['selecttab', 'ZNavKey'],
  components: {

  },

  data() {
    return {
      // ZNavKey: 'CE89FE19-8B65-4A2C-AEC5-59B40B8153C1',
      loading: false,
      AllergyDefs: {
      },
      UserAllergies: {
      },
      FoodTypes: {
      },
      FoodLikes: {
      },
      UserDietTypes: {

      },
      token: '',
    }
  },
  created: function() {
    //this.search()
    this.fetch()
  },

  methods: {
    search(srhtext = '') {
      // alert('Home : ' + srhtext)
      //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})

      router.push({ path: `/SearchResults` }) // -> /user/123
      //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123

    },
    fetch() {

      if (this.loading)
        return;
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
        url: 'http://ab.everythingfood.com/service/token',
        data: data_string,
        config
      }).then(response => {

        // Set token by username and password.
        this.token = response.data.access_token
        if (this.token == '')
          return
        // console.log(this.token)
        config = {
          headers: {
            'Content-Type': "application/json",
            'Authorization': "bearer " + this.token
          }
        }

        // AllergyDefs => UserAllergies
        axios.post(process.env.API_URL + '/AccountPage-AllergyDefs', {
          ZNavKey: this.ZNavKey,
          config
        }).then((response) => {
          this.AllergyDefs = response.data.Items;
        })
        axios.post(process.env.API_URL + '/AccountPage-UserAllergies', {
          ZNavKey: this.ZNavKey,
          config
        }).then((response) => {
          this.UserAllergies = response.data.Items;
        })

        // FoodTypes => FoodLikes
        axios.post(process.env.API_URL + '/AccountPage-FoodTypes', {
          ZNavKey: this.ZNavKey,
          config
        }).then((response) => {
          this.FoodTypes = response.data.Items;
        })
        axios.post(process.env.API_URL + '/AccountPage-FoodLikes', {
          ZNavKey: this.ZNavKey,
          config
        }).then((response) => {
          this.FoodLikes = response.data.Items;
        })

        //Dietary Choice.
        axios.post(process.env.API_URL + '/AccountPage-UserDietTypes', {
          ZNavKey: this.ZNavKey,
          config
        }).then((response) => {
          this.UserDietTypes = response.data.Items;
        })

      })
    },
    opensubcategory(id) {

      document.getElementById(id).style.visibility = "visible"
      document.getElementById(id).style.display = "block"
    },
    close(id) {
      document.getElementById(id).style.visibility = "hidden"
      document.getElementById(id).style.display = "none"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  overflow-y: auto;
  height: 100vh;
}

div.modal-mask::-webkit-scrollbar {
  display: none;
}
</style>
