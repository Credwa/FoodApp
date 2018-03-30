<template>
      <div class="tabs-panel" id="store-settings"
          v-if="selecttab"
          v-bind:class="{'is-active' : selecttab}"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo aliquid exercitationem, facilis minus saepe maiores voluptatibus veniam tempore vitae! Vel id laudantium tempora, unde est, dignissimos reprehenderit error, sint corrupti eveniet fugiat ex nisi quasi temporibus minima totam voluptates officiis quia recusandae velit illum dolorem distinctio pariatur illo. Quis!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident deserunt quia reprehenderit fugiat id numquam eveniet ratione at, dolorum optio itaque voluptate quasi quaerat ipsum dolorem? Aut accusamus, quo quas magni amet quis error vero reprehenderit beatae fugit esse pariatur.</p>
    </div>
</template>

<script>
// Library components.
// Custom components.
import router from '../../router'
import { mapState } from 'vuex'

export default {
    name: 'StoreSettings',
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
