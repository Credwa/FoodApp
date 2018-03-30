<template>
    <div>
        <footer>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell text-center">
                        <p class="footer-links small-margin">
                            <small>
                                <a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">User Agreement</a> &nbsp;|&nbsp; <a href="#">Help</a>
                            </small>
                        </p>
                        <p>
                            <small>&copy; 2018 FoodUniverse, Inc. All Rights Reserved.</small>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

import router from '../router'

export default {
    name: 'CommonFooter',
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
        search() {
            router.push({ path: `/SearchResults` })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #coming-soon{
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
</style>
