<template>
    <div>
        <!--	Beginning of Sign In Page -->
        <div class="remodal-bg page-forgot-password">
        <main id="sign-in">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell small-12 form-box">
                        <h2 class="cursive text-center">Agreement</h2>
                        <div id="pdf">
                          <!-- <object class="pdf" width="540" height="350" type="application/pdf" data="/assets/LE-5VendorAgreement.pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0" id="pdf_content">
                            <p><a  href="/assets/LE-5VendorAgreement.pdf">Click to open pdf </a></p>
                          </object> -->
<object data="/assets/LE-5VendorAgreement.pdf" type="application/pdf" class="pdf" width="740" height="450">
    <embed src="/assets/LE-5VendorAgreement.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/LE-5VendorAgreement.pdf" class="downloadpdf" focus>Download PDF</a>.</p>
    </embed>
</object>
                        </div>
                      <div class="grid-x small-up-2">
                        <div class="cell">
                          <input id="remember-me" type="checkbox" v-model="agreement">
                          <label for="remember-me">Accept agreement</label>
                        </div>
                      </div>
                      <button class="button secondary expanded" @click="submit">Continue</button>
                    </div>
                </div>
            </div>
        </main>
        <!-- END OF Sign In-->

        <!-- Common Footer Begin  -->
        <CommonFooter class="remodal-footer"></CommonFooter>
        <!-- End Common Footer  -->
        </div>
    </div>
</template>
<script>
// Library components.
import pdf from 'vue-pdf'
import axios from 'axios';

// import { mapMutations } from 'vuex'
import router from '../router';
import CommonFooter from './CommonFooter.vue';
import { mapState } from 'vuex';

export default {
  name: 'ChangePasswordPartner',
  components: {
    pdf
  },
  data() {
    return {
      ZEmailAddress: this.$store.state.currentUser,
      ZUserPassword: '',
      ZConfirmUserPassword: '',
      loading: false,
      token: '',
      agreement: false,
    };
  },
  created() {
    //do something after creating vue instance
  },
  components: {
    CommonFooter
  },
  mounted: function() {
    // this.srhtext = this.$store.state.srhtext
  },
  methods: {
    submit(e) {
      if (!this.agreement) {
        this.$toastr.Add({
          title: 'Tip', // Toast Title
          msg: 'Accept agreement to continue', // Message
          position: 'toast-top-center', // Toast Position.
          type: 'info', // Toast type,
          preventDuplicates: true //Default is false
        });
        // this.log = "Preencha o campo para login.";
        event.preventDefault();
      } else {
        var config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        var data_array = {
          ZNavKey: this.$store.state.ZNavKey
        };

        axios({
          method: 'post',
          url: process.env.API_URL + '/User-Agreement-Update',
          data: data_array,
          config
        })
          .then(response => {
            console.log(response)
            console.log(this.$store.state.currentUser)
            if (
              this.$store.state.currentUser.username ===
              this.$store.state.currentUser.password
            ) {
              router.push({ path: '/changePasswordPartner' });
            } else {
              router.push({ path: '/vendorportal' });
            }
            //Get Token
          })
          .catch(e => {
            console.log(e);
            this.$toastr.Add({
              title: 'Error', // Toast Title
              msg: 'Something went wrong', // Message
              position: 'toast-top-center', // Toast Position.
              type: 'warning', // Toast type,
              preventDuplicates: true //Default is false
            });
          });
      }
    }
  }
};
</script>
<style scoped>
#main-nav .grid-x {
  background-position: center 100px;
  background-repeat: no-repeat;
}

#sign-in {
  height: 90vh;
}
.pdf {
  margin-left: -15%
}

.downloadpdf {
  color: red;
}

.downloadpdf:active {
  color:blue
}
.remodal-footer {
  background-color: #7dbe00;
  height: 20vh;
  margin-top: 0;
  padding-top: 0;
  bottom: 0;
  position: relative;
}
</style>
