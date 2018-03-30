<template>
      <div class="tabs-panel" id="security-settings"
          v-if="selecttab"
          v-bind:class="{'is-active' : selecttab}"
      >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur nam non, architecto repudiandae dolor autem doloremque odit praesentium cupiditate saepe nesciunt ducimus dolorem est dolorum, mollitia cum sit adipisci.</p>
          <p>Vel, sit quaerat tempore earum cumque velit omnis in ullam? Atque rem consectetur veniam, unde quibusdam illo accusamus officia et minima vitae odit. Laudantium ab repellendus commodi delectus molestiae. Dolorum.</p>
          <p>Aspernatur asperiores ratione odit ut perspiciatis iure doloremque vero molestias. Reprehenderit error tempora delectus aperiam voluptas! Laudantium, facere eum, quia placeat eaque nemo iste quod numquam ducimus quos tempora molestiae?</p>
      </div>
</template>

<script>
// Library components.
// Custom components.
import router from '../../router'
import { mapState } from 'vuex'

export default {
    name: 'SecuritySettings',
    props: ['selecttab'],
    components: {
    },

    data() {
        return {
            loading: false
        }
    },
    created: function() {
        //this.search()
    },

    methods: {
        search(srhtext='') {
            // alert('Home : ' + srhtext)
            //router.push({ name: 'vendorsearch', params: { srhtext: 'srhtext' }})

            router.push({ path: `/SearchResults` }) // -> /user/123
            //router.push({ path: '/vendorsearch/'+srhtext }) // -> /user/123

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
