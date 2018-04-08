<template>
    <div class="homePage">
        <StandardHeader :search="search"></StandardHeader>
        <header class="homepage-marquee grid-x">
      <div class="homepage-slider dark-theme small-12">
      <div v-for="slide in mainslides" v-bind:key="slide.promopanelslideid" v-if="false">
        <div class="homepage-slide" :style="'background-image:url('+slide.imagefilepath+');'" >
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{slide.displaytitletop}}c</h4>
                <h1>{{slide.displaytitlemiddle}}</h1>
                <p><strong>{{slide.displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="homepage-slide" :style="'background-image:url('+mainslides[0].imagefilepath+');'">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[0].displaytitletop}}c</h4>
                <h1>{{mainslides[0].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[0].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slide" :style="'background-image:url('+mainslides[1].imagefilepath+');'">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[1].displaytitletop}}c</h4>
                <h1>{{mainslides[1].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[1].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slide" :style="'background-image:url('+mainslides[2].imagefilepath+');'">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[2].displaytitletop}}c</h4>
                <h1>{{mainslides[2].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[2].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slide" :style="'background-image:url('+mainslides[3].imagefilepath+');'">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[3].displaytitletop}}c</h4>
                <h1>{{mainslides[3].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[3].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="homepage-slide" style="background-image:url(./assets/img/bkgds/making-apple-pie-bk.jpg);">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[1].displaytitletop}}c</h4>
                <h1>{{mainslides[1].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[1].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slide" style="background-image:url(./assets/img/bkgds/spinach-field-bk.jpg);">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[2].displaytitletop}}c</h4>
                <h1>{{mainslides[2].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[2].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slide" style="background-image:url(./assets/img/bkgds/spinach-field-bk.jpg);">
          <div class="grid-container">
            <div class="grid-x">
              <div class="smedium-8 medium-6 xlarge-4">
                <h4 class="subtitle cursive line-bottom-left">{{mainslides[3].displaytitletop}}c</h4>
                <h1>{{mainslides[3].displaytitlemiddle}}</h1>
                <p><strong>{{mainslides[3].displaytextdesc1}}</strong></p>
              </div>
            </div>
          </div>
        </div> -->


      </div>
           <!-- <div class="homepage-slider dark-theme small-12">
                <div class="homepage-slide" v-for="slide in mainslides" v-bind:key="slide.promopanelslideid" :style="'background-image:url('+slide.imagefilepath+');'">
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="smedium-8 medium-6 xlarge-4">
                                <h4 class="subtitle cursive line-bottom-left">{{slide.displaytitletop}}</h4>
                                <h1>{{slide.displaytitlemiddle}}</h1>
                                <p>
                                    <strong>{{slide.displaytextdesc1}}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
          </div> -->
      <div class="homepage-promos small-12">
        <div class="grid-container">
          <div class="grid-x">
            <div class="banner-promos small-6 medium-4 large-3" >
              <div class="grid-y">
                <div class="small-7 text-center banner-promo has-button" style="background-image:url(/assets/img/bkgds/cheesecloth-herbs-bk.jpg);">
                  <div class="header-area">
                    <h2 class="text-orange cursive">{{contentsinnerblog.titletext}}</h2>
                    <small><strong>&mdash; {{contentsinnerblog.subtitletext}} &mdash;</strong></small>
                  </div>
                  <div class="button-area">
                    <button class="button secondary expanded">{{contentsinnerblog.calltoaction}}</button>
                  </div>
                </div>
                <div class="small-5 banner-promo has-link" style="background-image:url(/assets/img/bkgds/chocolate-squares-bk.jpg);">
                  <div class="vendor-logo"><img src="/assets/img/logos/chocobits-logo.png" alt="ChocoBits logo"></div>
                  <div class="button-area">
                    <button class="button clear">SHOP NOW »</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-blocks text-white small-6 medium-12">
              <div class="grid-x grid-margin-x medium-up-3">
                <div class="cell">
                  <div class="promo-content">
                    <h4>Sale! Up to 50% Off!</h4>
                    <p>For all meat products</p>
                  </div>
                </div>
                <div class="cell">
                  <div class="promo-content">
                    <h4>FREE SHIPPING</h4>
                    <p>For all orders over $100</p>
                  </div>
                </div>
                <div class="cell">
                  <div class="promo-content">
                    <h4>Join Our Club</h4>
                    <p>Subscribe and save annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </header>
        <section class="dept-sliders">
            <div class="grid-container">
                <div class="dept-block grid-x grid-padding-x small-up-1">
                    <div class="cell">
                        <div class="grid-x grid-padding-x">
                            <div class="cell smedium-4 medium-4">
                                <div class="dept-image" style="background-image:url(/assets/img/apples-pail.jpg);"></div>
                            </div>
                            <div class="cell smedium-8 medium-8">
                                <h2>Fresh Produce</h2>
                                <h4 class="subtitle cursive">Get it fresh. Make it healthy.</h4>
                                <hr />
                                <div class="dept-slider">
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis brpbibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/broccoli.jpg" alt="Organic Broccoli" />
                                        </a>
                                        <p class="h3 price">$3.00</p>
                                        <big>Organic Broccoli</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="grid-x grid-padding-x">
                            <div class="cell smedium-4 medium-4">
                                <div class="dept-image" style="background-image:url(/assets/img/fruit-tarts.jpg);"></div>
                            </div>
                            <div class="cell smedium-8 medium-8">
                                <h2>Baking Goods</h2>
                                <h4 class="subtitle cursive">So good it&rsquo;s really good for you.</h4>
                                <hr />
                                <div class="dept-slider">
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                    <div class="slider-item">
                                        <a class="product-img" href="#">
                                            <img src="/assets/img/products/fudge-cake.jpg" alt="Fudge Cake" />
                                        </a>
                                        <p class="h3 price">$22.00</p>
                                        <big>Fudge Cake</big>
                                        <small>Montes rusticus adipiscing in similis bibendum dolore. Wisi probo validus luptatum hac. Penatibus dictum jumentum oppeto venenatis tation.</small>
                                        <button class="button secondary button-add-cart">ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best-selling section">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 text-center">
            <h2>Best Selling Products</h2>
            <h4 class="subtitle cursive line-bottom">Customer approved and loved</h4>
          </div>
          <div class="cell small-12">
            <div class="card-slider">
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Strawberries</strong></big>
                    <span class="h5 product-price">7.99</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Nectarines</strong></big>
                    <span class="h5 product-price">8.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Bananas</strong></big>
                    <span class="h5 product-price">4.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Celery</strong></big>
                    <span class="h5 product-price">7.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Strawberries</strong></big>
                    <span class="h5 product-price">7.99</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Nectarines</strong></big>
                    <span class="h5 product-price">8.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Bananas</strong></big>
                    <span class="h5 product-price">4.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Celery</strong></big>
                    <span class="h5 product-price">7.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Strawberries</strong></big>
                    <span class="h5 product-price">7.99</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Nectarines</strong></big>
                    <span class="h5 product-price">8.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Bananas</strong></big>
                    <span class="h5 product-price">4.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Celery</strong></big>
                    <span class="h5 product-price">7.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="promo-banner text-white" id="abb-score">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell smedium-8 medium-8 large-6 smedium-offset-4 medium-offset-4 large-offset-6">
            <h4 class="cursive subtitle line-bottom-left">Organic Food</h4>
            <h1>Good Food. Scored.</h1>
            <p><big><strong>Ventosus humo jugis mi ad dolore proin viverra. Ornare pretium aliquip feugait ultricies exerci. Aliquam lobortis abico. Quisque auctor ultrices magna, vitae mattis lectus convallis.</strong></big></p>
            <p><a href="#" class="button primary">LEARN ABOUT ABB</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="best-selling section">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 text-center">
            <h2>You Recently Viewed</h2>
            <h4 class="subtitle cursive line-bottom">In case you forgot where you were</h4>
          </div>
          <div class="cell small-12">
            <div class="card-slider">
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Strawberries</strong></big>
                    <span class="h5 product-price">7.99</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Nectarines</strong></big>
                    <span class="h5 product-price">8.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Bananas</strong></big>
                    <span class="h5 product-price">4.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Celery</strong></big>
                    <span class="h5 product-price">7.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Strawberries</strong></big>
                    <span class="h5 product-price">7.99</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Nectarines</strong></big>
                    <span class="h5 product-price">8.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Bananas</strong></big>
                    <span class="h5 product-price">4.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Celery</strong></big>
                    <span class="h5 product-price">7.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Strawberries</strong></big>
                    <span class="h5 product-price">7.99</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Nectarines</strong></big>
                    <span class="h5 product-price">8.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Bananas</strong></big>
                    <span class="h5 product-price">4.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card slider-card" href="#">
                  <div class="card-img">
                    <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                    <button class="button secondary button-add-cart">ADD</button>
                  </div>
                  <div class="card-info">
                    <big class="product-name"><strong>Organic Celery</strong></big>
                    <span class="h5 product-price">7.00</span>
                    <hr />
                    <small class="subtitle vendor-name">Tanaka Farms</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="vendors-highlight section">
      <div class="grid-container fluid">
        <div class="grid-x grid-padding-x small-up-1">
          <div class="cell">
            <h2>Get to Know Our Vendors</h2>
            <h4 class="cursive subtitle line-bottom">People making food for people</h4>
          </div>
          <div class="cell slider-wrapper">
            <div class="vendors-slider">
              <div class="vendor-slide">
                <div class="vendor-logo">
                  <img src="/assets/img/logos/tammys-farms-logo-white.svg" alt="Tammy's Farms logo">
                </div>
                <p class="vendor-desc">Ea probo elementum dui phasellus tellus multo typicus. Enim aliquet enim fatua epulae causa comis. Nisi ingenium class sollicitudin probo iaculis vehicula id. Montes defui turpis vero gravida oppeto autem sudo cras refero.</p>
                <button class="button clear">SHOP NOW &raquo;</button>
              </div>
              <div class="vendor-slide bg-red">
                <div class="vendor-logo">
                  <img src="/assets/img/logos/chocobits-logo-white.svg" alt="Chocobits logo">
                </div>
                <p class="vendor-desc">Ipsum nonummy vereor appellatio utinam neo faucibus mus tristique. Vicis libero suspendisse sit quibus brevitas purus. Imputo ultrices accumsan semper valetudo aliquip. Hos cum est curabitur lectus.</p>
                <button class="button clear">SHOP NOW &raquo;</button>
              </div>
              <div class="vendor-slide bg-blue">
                <div class="vendor-logo">
                  <img src="/assets/img/logos/cowfarms-logo-white.svg" alt="Cowfarms logo">
                </div>
                <p class="vendor-desc">Bibendum vereor minim semper distineo facilisis. Pretium nibh populus letalis olim. Hos nobis nisi gemino taciti suscipere pneum. Torqueo morbi pellentesque pneum sagittis pala.</p>
                <button class="button clear">SHOP NOW &raquo;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section newsletter-signup">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell xlarge-10 xlarge-offset-1">
            <h2>Newsletter Sign&nbsp;Up</h2>
            <p>You&rsquo;ll be the first to know about sales, specials, new products, and the latest FoodUniverse news!</p>
            <div class="input-group input-group-rounded">
              <input class="input-group-field" type="email" placeholder="Email Address">
              <div class="input-group-button">
                <input type="submit" class="button secondary" value="Sign Up!">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
</template>

<script>
// Library components.
import { mapState } from 'vuex';
import axios from 'axios';
// Custom components.
import StandardHeader from './StandardHeader.vue';
import router from '../router';

export default {
  name: 'Home',
  components: {
    StandardHeader,
  },
  data() {
    return {
      loading: false,
      token: '',
      mainslides: [{}, {}, {}, {}],
      contentsinnerblog: {},
      contentsinnerfood: {},
    };
  },
  mounted() {
    this.fetch();
  },
  computed: {
    getMainSlides() {
      console.log('slides', this.mainslides);
      return this.mainslides;
    }
  },
  // watch: {
  //     mainslides: function(newVal, oldVal) {
  //         console.log(document.getElementsByClassName("homepage-slider").innerHTML)
  //         document.getElementsByClassName("homepage-slider").slick({
  //             accessibility: true,
  //             adaptiveHeight: false,
  //             arrows: false,
  //             dots: true,
  //             autoplay: true,
  //             autoplaySpeed: 5000,
  //             fade: true,
  //             cssEase: 'ease'
  //         })
  //     }

  // },
  methods: {
    search() {
      router.push({ path: `/SearchResults` });
    },
    fetch() {
      if (this.loading) return;

      //Get token.
      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      this.loading = true;

      //get Access token by username and password.
      var data_array = {
        grant_type: 'password',
        username: 'saritasa@fooduniverse.com',
        password: 'Apple2018!'
      };

      const data_string = Object.keys(data_array)
        .map(key => {
          return (
            encodeURIComponent(key) + '=' + encodeURIComponent(data_array[key])
          );
        })
        .join('&');
      // Get contentsinnerblog.
      axios
        .post(
          process.env.API_URL + '/StoreFront-Panel-Contents-Middle-Inner-Blog',
          {
            config
          }
        )
        .then(response => {
          this.contentsinnerblog = response.data.items[0];

          // this.$set(this.contentsinnerblog, response.data.items[0])
        });

      axios
        .post(process.env.API_URL + '/StoreFront-Panel-Contents-Middle', {
          config
        })
        .then(response => {
          console.log(this.mainslides);
          this.mainslides = response.data.items;
          console.log(this.mainslides);
          // this.$set(this.mainslides, response.data.items)
          var autoplaySpeed = this.mainslides[0].durationseconds;

          setTimeout(function() {
            $('.homepage-slider').slick({
              accessibility: true,
              adaptiveHeight: false,
              arrows: false,
              dots: true,
              autoplay: true,
              autoplaySpeed: autoplaySpeed * 1000,
              fade: true,
              cssEase: 'ease'
            });
          }, 500);

          // Get contentsinnerfood.
          axios
            .post(
              process.env.API_URL +
                '/StoreFront-Panel-Contents-Middle-Inner-Food',
              {
                config
              }
            )
            .then(response => {
              this.contentsinnerfood = response.data.item;
            });

          axios({
            method: 'post',
            url: 'http://ab.fooduniverse.com/service/token',
            data: data_string,
            config
          })
            .then(response => {
              // Set token by username and password.
              this.token = response.data.access_token;
              if (this.token == '') return;
              // Get data for slider.
              config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'bearer' + this.token
                }
              };

              document.getElementsByClassName(
                'banner-promos'
              )[0].style.display =
                'block';
            })
            .catch(error => {
              throw error;
            });
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#coming-soon {
  margin: 60px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.VueCarousel-pagination {
  position: relative !important;
  margin-top: -67px !important;
  text-align: left !important;
}

.banner-promos {
  display: none;
}
</style>
