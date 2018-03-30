<template>
  <div>

    <div class="spinner-container" v-show="loading">
      <div id="wrapper"></div>
      <div id="spinner">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
      </div>
    </div>

    <section class="vendor-story dark" style="background-image:radial-gradient(800px at center 200px,rgba(49,49,49,.65) 0,#313131 100%), url(../assets/img/bkgds/fence-bk.jpg);">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 large-8 large-offset-2 text-center">
            <div class="section-header">
              <h2>{{user.firstname}}</h2>
              <h4 class="line-bottom subtitle cursive">{{user.lastname}}</h4>
            </div>
            <p>{{user.emailaddress}}</p>
          </div>
        </div>
      </div>
    </section>
    <header class="section-header text-center">
      <h2>{{user.fullname}}</h2>
      <h4 class="subtitle cursive line-bottom">Items for sale today</h4>
    </header>
    <section id="search-results">
      <nav class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-8 medium-5 xlarge-4">
            <div class="filter-container">
              <select>
                <option></option>
                <option>ABB Score</option>
                <option>Featured</option>
                <option>Star ratings</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Best seller</option>
                <option>Newest</option>
              </select>

            </div>
          </div>
          <div class="cell medium-4 xlarge-3 show-for-medium">
            <div class="filter-container">
              <select v-model="counterperpage">
                <option value="0">All</option>
                <option value="12">12 per page</option>
                <option value="24">24 per page</option>
                <option value="48">48 per page</option>
                <option value="96">96 per page</option>
              </select>
            </div>
          </div>
          <div class="cell small-4 medium-3 xlarge-2">
            <button class="button filter-button" type="button" data-toggle="filter-off-canvas" v-on:click="filter">
              FILTER
            </button>
          </div>
        </div>
      </nav>
      <main id="search-results-grid">
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="cell small-12 smedium-6 medium-4 xlarge-3" v-for="item in itemsofcurpage" v-bind:key="item.fooditemid">
              <a class="results-card" href="#">
                <div class="grid-x grid-margin-x">
                  <div class="card-img cell small-6 smedium-12 medium-12 align-self-top">
                    <img v-bind:src="item.thumbnailimagefilepath" v-bind:alt="item.fooditemdesc1" />
                    <button class="score-badge better">85</button>
                    <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                  </div>
                  <div class="card-info cell small-6 smedium-12 medium-12">
                    <div class="ratings">
                      <div class="empty-stars"></div>
                      <div class="full-stars" style="width:70%;"></div>
                    </div>
                  </div>
                  <small class="subtitle">{{item.vendordesc1}}</small>
                  <big class="product-name">
                    <strong>{{item.fooditemdesc1}}</strong>
                  </big>
                  <small class="product-units">per lb</small>
                  <span class="h4 product-price">{{item.unitprice}}</span>
                  <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                </div>
              </a>
              {{item.fooditemdesc1}}
            </div>
          </div>
        </div>

      </main>
    </section>
    <div class="pagination" v-show="pagination_visible">
      <paginate :page-count="pagecount" :page-range="3" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'" :click-handler="setpagenum">
      </paginate>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Paginate from 'vuejs-paginate'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'HelloWorld',
  components: {
    Paginate,
    PulseLoader
  },
  data() {
    return {
      loading: false,
      user: {},
      items: [],
      itemsofcurpage: [],
      currentpage: 1,
      counterperpage: 0,
      pagecount: 20,
      pagination_visible: false,
      soryby: 'a',
      color: '#cc181e',
      size: '50px',
      token: ''

    }
  },
  created: function() {
    this.fetch()
  },
  methods: {
    fetch(page = 1) {
      if (this.loading)
        return;

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

        //set token by username and password.
        this.token = response.data.access_token

        if (this.token == '')
          return

        //get user information.
        config = {
          headers: {
            'Content-Type': "application/json",
            'Authorization': "bearer" + this.token
          }
        };
        axios.post(process.env.API_URL + '/Profile-Users-All-Read', {
          zuserid: 80,
          config
        }).then((response) => {

          this.user = response.data.Items[0]

          //get item list.
          axios.post(process.env.API_URL + '/Search-Results-Simple', {
            ZSearchDesc1: 'a',
            config
          }).then((response) => {
            this.loading = false
            this.items = response.data.Items
            
            this.filter()

          }, (error) => {
            this.loading = false;
          })

        }, (error) => {
          this.loading = false;
        })

      })
        .catch(error => {
          throw (error);
        });

    },
    filter(){
      
      if(this.counterperpage == 0)
      {
        //if All is selected
        this.itemsofcurpage = this.items;
        this.pagination_visible = false;
        return
      }else{
        this.itemsofcurpage = this.items.slice((this.currentpage-1)*this.counterperpage, this.currentpage*this.counterperpage)
        this.pagination_visible = true;
      }
      this.pagecount = Math.round((this.items.length + 1) / this.counterperpage)
      
    },
    setpagenum: function (pagenum) {
      this.currentpage = pagenum
      this.filter()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
