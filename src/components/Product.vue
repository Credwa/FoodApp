<template>
 <div class="page-product">
   <StandardHeader></StandardHeader>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12">
          <nav aria-label="You are here:" role="navigation">
            <ul class="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">Store</a></li>
              <li class="disabled">Baking Supplies</li>
              <li>
                <span class="show-for-sr">Current: </span> Organic Coconut Chips
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <header class="grid-container" id="product-header">
      <div class="grid-x grid-padding-x">
        <div class="cell smedium-6 medium-5">
          <div class="img-wrapper">
            <a href="/assets/img/products/coconut-chips-1.jpg" class="MagicZoom" id="product-img" data-options="transitionEffect: false;">
              <img src="/assets/img/products/coconut-chips-1.jpg" alt="Organic Coconut Chips" />
            </a>
            <button class="score-badge better">85</button>
          </div>
          <div class="thumbs">
            <a href="/assets/img/products/coconut-chips-1.jpg" data-zoom-id="product-img" data-image="/assets/img/products/coconut-chips-1.jpg">
              <img src="/assets/img/products/coconut-chips-1.jpg" alt="Organic Coconut Chips">
            </a>
            <a href="/assets/img/products/coconut-chips-2.jpg" data-zoom-id="product-img" data-image="/assets/img/products/coconut-chips-2.jpg">
              <img src="/assets/img/products/coconut-chips-2.jpg" alt="Toasted Coconut Chips">
            </a>
            <a href="/assets/img/products/coconut-chips-3.jpg" data-zoom-id="product-img" data-image="/assets/img/products/coconut-chips-3.jpg">
              <img src="/assets/img/products/coconut-chips-3.jpg" alt="Coconut Chips Packaging">
            </a>
          </div>
        </div>
        <div class="cell smedium-6 medium-6 medium-offset-1">
          <h4 class="cursive subtitle">Wendell&rsquo;s Farms</h4>
          <h1>Organic Coconut Chips</h1>
          <div class="attributes">
            <big class="item-size">16 oz pouch</big>
            <div class="ratings">
              <div class="empty-stars"></div>
              <div class="full-stars" style="width:86%;"></div>
            </div>        <small class="reviews-number">(16 Reviews)</small>
          </div>
          <p class="item-desc big">Ventosus humo jugis mi ad dolore proin viverra. Ornare pretium aliquip feugait ultricies exerci. Aliquam lobortis abico.</p>
          <p class="item-stats">
            <small class="stock-status in-stock">IN STOCK</small>
            <!--<small class="stock-status out-of-stock">OUT OF STOCK</small>-->
            <small class="upc">796030114977</small>
          </p>
          <div class="price-quantity grid-x grid-padding-x">
            <div class="cell small-5 price h1">5.95</div>
            <div class="cell small-7 quantity text-right">
              <label for="quantity"><strong>Qty:</strong></label>
              <select id="quantity" class="input-up-down-arrows">
                <optgroup>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="cell smedium-8 medium-7 large-6">
              <button class="button secondary button-add-cart expanded">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="grid-container" id="product-info">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12">
          <button id="tabs-mobile-button" class="hide-for-smedium" data-toggle="tabs-wrapper" @click="showMobileMenu = !showMobileMenu">{{activeTab}}</button>
          <div id="tabs-wrapper" data-toggler=".expanded">
            <ul class="tabs grid-x small-up-1 smedium-up-4" data-deep-link="true" data-update-history="true" data-deep-link-smudge="true" data-tabs id="main-tabs">
              <li class="tabs-title cell"><a :aria-selected="shownTab.showDescription" @click="tabClicked(0)">Description</a></li>
              <li class="tabs-title cell" ><a :aria-selected="shownTab.showNutrition" @click="tabClicked(1)">Nutrition</a></li>
              <li class="tabs-title cell"><a :aria-selected="shownTab.showAttributes" @click="tabClicked(2)">Attributes</a></li>
              <li class="tabs-title cell"><a :aria-selected="shownTab.showReviews" @click="tabClicked(3)">Reviews</a></li>
            </ul>
          </div>
          <div class="hide-for-smedium" v-show="showMobileMenu">
            <ul class="tabs grid-x">
              <li class="tabs-title cell"><a :aria-selected="shownTab.showDescription" @click="tabClicked(0)">Description</a></li>
              <li class="tabs-title cell" ><a :aria-selected="shownTab.showNutrition" @click="tabClicked(1)">Nutrition</a></li>
              <li class="tabs-title cell"><a :aria-selected="shownTab.showAttributes" @click="tabClicked(2)">Attributes</a></li>
              <li class="tabs-title cell"><a :aria-selected="shownTab.showReviews" @click="tabClicked(3)">Reviews</a></li>
            </ul>
          </div>

          <div class="tabs-content" data-tabs-content="main-tabs">
            <div class="tabs-panel is-active"  id="description" v-if="shownTab.showDescription">
              <div class="grid-x grid-padding-x">
                <div class="cell medium-10 large-8" >
                  <p>Delenit maecenas rutrum wisi decet dignissim. Mara diam qui sed erat demoveo tristique magnis. Fusce faucibus abbas nobis sociis. Donec minim fatua abico in. Arcu singularis quadrum volutpat neo oppeto posuere. Vehicula lucidus dolus ille mus litora roto sociosqu.</p>

                  <p>Vereor decet ante dictum exputo curabitur. Ulciscor egestas dis indoles autem proprius. Ille tristique sem quis molior non. Illum facilisis hendrerit refero refoveo torqueo venio. Comis pneum singularis accumsan id. Purus enim fringilla pulvinar sodales. Inhibeo fere sollicitudin pharetra ibidem natu. Et vehicula scisco luptatum roto est consectetuer.</p>

                  <p>Nullam fermentum cursus elit, in euismod enim congue ac. In vel diam lacinia, ultrices nisl eu, tempor libero. Aliquam eu mattis nibh. Duis ornare mauris et suscipit finibus. Sed maximus neque sed maximus iaculis. Suspendisse ut lectus ac nibh venenatis tempor. Aenean vulputate elementum urna eu sollicitudin.</p>
                </div>
              </div>
            </div>

            <div class="tabs-panel is-active" id="nutrition" v-if="shownTab.showNutrition">
              <div class="grid-x grid-padding-x">
                <div class="cell">
                  <div class="callout">
                    <p><strong>Ingredients</strong></p>
                    <p class="small">Organic Dried Coconut Strips, Organic Maple Syrup, Organic Vanilla Bean Extract, Organic Vietnamese Cinnamon, Sea Salt</p>
                  </div>
                  <div class="callout">
                    <p><strong>Nutritional Information</strong></p>
                    <p class="small nutrition-overview">
                      <span>Serving Size: 1/2 Cup</span>
                      <span>Servings Per Containing: 3</span>
                      <span>Amount Per Serving Calories: 150</span>
                      <span>Calories From Fat: 110</span>
                    </p>
                    <div class="nutrition-tables grid-x grid-padding-x medium-up-2">
                      <div class="cell">
                        <table class="plain">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Per Serving</th>
                              <th>% Daily Value**</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Total Fat</th>
                              <td>13g</td>
                              <td>20%</td>
                            </tr>
                            <tr>
                              <td>Saturated Fat</td>
                              <td>11g</td>
                              <td>55%</td>
                            </tr>
                            <tr>
                              <td>Trans Fat</td>
                              <td>0g</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Cholesterol</td>
                              <td>0mg</td>
                              <td>0%</td>
                            </tr>
                            <tr>
                              <th>Sodium</th>
                              <td>35mg</td>
                              <td>1%</td>
                            </tr>
                            <tr>
                              <th>Potassium</th>
                              <td>150mg</td>
                              <td>3%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="cell">
                        <table class="plain">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Per Serving</th>
                              <th>% Daily Value**</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Total Carbohydrate</th>
                              <td>10g</td>
                              <td>3%</td>
                            </tr>
                            <tr>
                              <td>Dietary Fiber</td>
                              <td>4g</td>
                              <td>16%</td>
                            </tr>
                            <tr>
                              <td>Sugars</td>
                              <td>5g</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th>Protein</th>
                              <td>2g</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th>Vitamin A</th>
                              <td></td>
                              <td>--%</td>
                            </tr>
                            <tr>
                              <th>Vitamin C</th>
                              <td></td>
                              <td>0%</td>
                            </tr>
                            <tr>
                              <th>Calcium</th>
                              <td></td>
                              <td>2%</td>
                            </tr>
                            <tr>
                              <th>Iron</th>
                              <td></td>
                              <td>6%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <ul class="footnotes no-bullet">
                      <li>*Contains less than 2% of the daily values of these nutrients</li>
                      <li>**Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on calorie needs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs-panel is-active" id="attributes"  v-if="shownTab.showAttributes">
              <div class="grid-x grid-padding-x small-up-2 msmall-up-3 smedium-up-4 large-up-6" id="attributes-grid">
                <div class="cell">
                  <a href="#origin" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Origin">
                    <small>Origin</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#breeds" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Breeds">
                    <small>Breeds</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#genetic-mod" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Genetic Mod">
                    <small>Genetic Mod</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#seasonality" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Seasonality">
                    <small>Seasonality</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#feed" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Feed">
                    <small>Feed</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#animal-husbandry" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Animal Husbandry">
                    <small>Animal Husbandry</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#organic" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Organic">
                    <small>Organic</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#grade" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Grade">
                    <small>Grade</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#metal-purity" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Heavy Metal/Purity">
                    <small>Heavy Metal/Purity</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#geo-location" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Geographic Location">
                    <small>Geographic Location</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#hormones" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Hormones">
                    <small>Hormones</small>
                  </a>
                </div>
                <div class="cell">
                  <a href="#anti-biotics" class="attribute-item">
                    <img src="/assets/img/icons/attributes/placeholder.svg" alt="Anti-biotics">
                    <small>Anti-biotics</small>
                  </a>
                </div>
              </div>
            </div>

            <div class="tabs-panel is-active" id="reviews" v-if="shownTab.showReviews">
              <div id="customer-reviews" class="grid-x grid-padding-x">
                <div class="cell medium-4">
                  <div class="callout">
                    <div class="text-center" id="ratings-summary">
                      <h4>4.3</h4>
                      <div class="ratings">
                <div class="empty-stars"></div>
                <div class="full-stars" style="width:86%;"></div>
              </div><br />
                      <small>Based on 16 reviews</small>
                    </div>
                    <div id="ratings-breakdown">
                      <div class="grid-x">
                        <div class="cell small-2">5 star</div>
                        <div class="cell small-8">
                          <div class="warning progress" role="progressbar" tabindex="0" aria-valuenow="7" aria-valuemin="0" aria-valuetext="7 percent" aria-valuemax="7">
                            <div class="progress-meter" style="width: 6.25%"></div>
                          </div>
                        </div>
                        <div class="cell small-2 revs-percentage text-right">6</div>
                      </div>
                      <div class="grid-x">
                        <div class="cell small-2">4 star</div>
                        <div class="cell small-8">
                          <div class="warning progress" role="progressbar" tabindex="0" aria-valuenow="57" aria-valuemin="0" aria-valuetext="57 percent" aria-valuemax="57">
                            <div class="progress-meter" style="width: 56.25%"></div>
                          </div>
                        </div>
                        <div class="cell small-2 revs-percentage text-right">56</div>
                      </div>
                      <div class="grid-x">
                        <div class="cell small-2">3 star</div>
                        <div class="cell small-8">
                          <div class="warning progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="25">
                            <div class="progress-meter" style="width: 25%"></div>
                          </div>
                        </div>
                        <div class="cell small-2 revs-percentage text-right">25</div>
                      </div>
                      <div class="grid-x">
                        <div class="cell small-2">2 star</div>
                        <div class="cell small-8">
                          <div class="warning progress" role="progressbar" tabindex="0" aria-valuenow="7" aria-valuemin="0" aria-valuetext="7 percent" aria-valuemax="7">
                            <div class="progress-meter" style="width: 6.25%"></div>
                          </div>
                        </div>
                        <div class="cell small-2 revs-percentage text-right">6</div>
                      </div>
                      <div class="grid-x">
                        <div class="cell small-2">1 star</div>
                        <div class="cell small-8">
                          <div class="warning progress" role="progressbar" tabindex="0" aria-valuenow="7" aria-valuemin="0" aria-valuetext="7 percent" aria-valuemax="7">
                            <div class="progress-meter" style="width: 6.25%"></div>
                          </div>
                        </div>
                        <div class="cell small-2 revs-percentage text-right">6</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="cell medium-8">
                  <div class="grid-x grid-padding-x align-middle" id="reviews-header">
                    <div class="cell auto">
                      <h3>Reviews</h3>
                    </div>
                    <div class="cell auto">
                      <div class="filter-container">
                        <button class="button filter-button filter-dropdown-button" type="button" data-toggle="sort-by"><span class="selected-choice">Most helpful</span></button>
                        <div class="dropdown-pane filter-dropdown" id="sort-by" data-dropdown data-auto-focus="true">
                          <ul class="menu vertical">
                            <li><a href="javascript:void(0);" class="selected">Most helpful</a></li>
                            <li><a href="javascript:void(0);">Most recent</a></li>
                            <li><a href="javascript:void(0);">Rating</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="reviews-list">
                    <div class="customer-review">
                      <div class="grid-x grid-padding-x align-middle">
                        <div class="cell small-9">
                          <div class="member-image"><img src="/assets/img/anonymous-user.svg" alt="Anonymous user image"></div>
                          <span class="member-name">Member 1</span>
                        </div>
                        <div class="cell small-3 text-right">
                          <span class="date-posted">6/16/17</span>
                        </div>
                        <div class="cell small-12">
                          <div class="ratings">
                            <div class="empty-stars"></div>
                            <div class="full-stars" style="width:60%;"></div>
                          </div>      <div class="small review-text">
                            <p>Montes ut probo aliquip mara ingenium. Erat bene caecus fermentum natoque vel interdum. Voco aliquip esca himenaeos molestie ligula. Bis per ornare elit defui molestie distineo. Ridiculus montes pharetra risus suscipit distineo eu. Pagus rutrum et cursus utrum lectus augue. Maecenas qui sem turpis loquor accumsan abluo validus. Per te voco pulvinar augue porttitor venenatis mara illum. Regula lobortis duis velit pharetra.</p>
                          </div>
                          <div class="review-likes">
                            <div class="heart-toggle">
                              <input id="reviewid-1" type="checkbox" />
                              <label for="reviewid-1"></label>
                            </div>        <small>20 Likes</small>
                          </div>
                        </div>
                      </div>
                    </div>      <div class="customer-review">
                      <div class="grid-x grid-padding-x align-middle">
                        <div class="cell small-9">
                          <div class="member-image"><img src="/assets/img/anonymous-user.svg" alt="Anonymous user image"></div>
                          <span class="member-name">Member 2</span>
                        </div>
                        <div class="cell small-3 text-right">
                          <span class="date-posted">5/5/17</span>
                        </div>
                        <div class="cell small-12">
                          <div class="ratings">
                            <div class="empty-stars"></div>
                            <div class="full-stars" style="width:80%;"></div>
                          </div>      <div class="small review-text">
                            <p>Iste maxime a quis ex odio laboriosam, reprehenderit quam provident quod ratione. Tempore ipsum, dignissimos nulla omnis assumenda eligendi sapiente quisquam dolor autem error, natus atque quam praesentium cumque quidem asperiores veritatis molestias iste Eum, delectus, doloribus cupiditate porro maiores corrupti labore quia blanditiis ratione dolorem voluptate vero adipisci eos ipsam sunt!</p>
                          </div>
                          <div class="review-likes">
                            <div class="heart-toggle">
                              <input id="reviewid-2" type="checkbox" />
                              <label for="reviewid-2"></label>
                            </div>        <small>5 Likes</small>
                          </div>
                        </div>
                      </div>
                    </div>      <div class="customer-review">
                      <div class="grid-x grid-padding-x align-middle">
                        <div class="cell small-9">
                          <div class="member-image"><img src="/assets/img/anonymous-user.svg" alt="Anonymous user image"></div>
                          <span class="member-name">Member 9</span>
                        </div>
                        <div class="cell small-3 text-right">
                          <span class="date-posted">4/30/17</span>
                        </div>
                        <div class="cell small-12">
                          <div class="ratings">
                            <div class="empty-stars"></div>
                            <div class="full-stars" style="width:80%;"></div>
                          </div>      <div class="small review-text">
                            <p>Culpa, voluptate voluptatum doloribus quasi nihil nemo nesciunt quo amet consectetur aliquid optio, accusamus beatae repellendus neque ab iusto vitae corrupti perspiciatis consequatur velit magni doloremque ipsam recusandae illum. Est eum vero rem sed necessitatibus eveniet. Ad labore nostrum et commodi asperiores nihil doloremque eius repudiandae, iure facilis molestiae distinctio, non facere, omnis nesciunt. Ad modi magnam reprehenderit voluptatum animi optio doloribus! Omnis, id voluptate?</p>
                          </div>
                          <div class="review-likes">
                            <div class="heart-toggle">
                              <input id="reviewid-3" type="checkbox" />
                              <label for="reviewid-3"></label>
                            </div>        <small>11 Likes</small>
                          </div>
                        </div>
                      </div>
                    </div>    </div>
                  <div class="search-pagination text-center">
                    <nav aria-label="Pagination">
                      <ul class="pagination text-center">
                        <li class="pagination-previous disabled">Previous</li>
                        <li class="current"><span class="show-for-sr">You're on page</span> 1</li>
                        <li><a href="#" aria-label="Page 2">2</a></li>
                        <li><a href="#" aria-label="Page 3">3</a></li>
                        <li><a href="#" aria-label="Page 4">4</a></li>
                        <li class="ellipsis"></li>
                        <li><a href="#" aria-label="Page 12">12</a></li>
                        <li><a href="#" aria-label="Page 13">13</a></li>
                        <li class="pagination-next"><a href="#" aria-label="Next page">Next</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>        </div>
          </div>
      </div>
      </div>
    </section>
    <section class="best-selling section" id="also-interested">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 text-center">
            <h2 class="line-bottom">You May Also Be Interested In</h2>
          </div>
          <div class="cell small-12">
            <div class="card-slider">
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                      <button class="score-badge better">85</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:70%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Strawberries</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">7.99</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                      <button class="score-badge best">95</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:80%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Nectarines</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">8.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                      <button class="score-badge best">90</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:60%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Bananas</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">4.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                      <button class="score-badge avoid">74</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:99%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Celery</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">7.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                      <button class="score-badge better">85</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:70%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Strawberries</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">7.99</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                      <button class="score-badge best">95</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:80%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Nectarines</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">8.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                      <button class="score-badge best">90</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:60%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Bananas</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">4.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                      <button class="score-badge avoid">74</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:99%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Celery</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">7.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/strawberry.jpg" alt="Organic Strawberries" />
                      <button class="score-badge better">85</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:70%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Strawberries</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">7.99</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/nectarines.jpg" alt="Organic Nectarines" />
                      <button class="score-badge best">95</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:80%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Nectarines</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">8.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/bananas.jpg" alt="Organic Bananas" />
                      <button class="score-badge best">90</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:60%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Bananas</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">4.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-wrapper">
                <a class="results-card" href="#">
                  <div class="grid-x grid-margin-x">
                    <div class="card-img cell small-12 align-self-top">
                      <img src="/assets/img/products/celery.jpg" alt="Organic Celery" />
                      <button class="score-badge avoid">74</button>
                      <button class="button secondary button-add-cart show-for-smedium">ADD</button>
                    </div>
                    <div class="card-info cell small-12">
                      <div class="ratings">
                        <div class="empty-stars"></div>
                        <div class="full-stars" style="width:99%;"></div>
                      </div>      <small class="subtitle">Tanaka Farms</small>
                      <big class="product-name"><strong>Organic Celery</strong></big>
                      <small class="product-units">per lb</small>
                      <span class="h4 product-price">7.00</span>
                      <button class="button secondary button-add-cart hide-for-smedium">ADD</button>
                    </div>
                  </div>
                </a>
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
            <p>You&rsquo;ll be the first to know about sales, specials, new products, and the latest EverythingFood news!</p>
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
  <div class="remodal large" data-remodal-id="origin">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Origin</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="breeds">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Breeds</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
 <div class="remodal large" data-remodal-id="genetic-mod">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Genetic Mod</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="seasonality">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Seasonality</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="feed">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Feed</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="animal-husbandry">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Animal Husbandry</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="organic">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Organic</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="grade">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Grade</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="metal-purity">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Heavy Metal/Purity</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="geo-location">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Geographic Location</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="hormones">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Hormones</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
    <div class="remodal large" data-remodal-id="anti-biotics">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12" id="toggle-all">
          <p class="title h3">Anti-biotics</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni consectetur tempore quasi nemo molestias animi repudiandae nam doloremque assumenda. Deleniti dicta aut in quisquam earum quasi. Saepe, alias odio?</p>
          <p>Maxime explicabo perferendis dolor veniam illo temporibus odio amet blanditiis eius, ad libero voluptas sunt ratione fuga reiciendis non beatae reprehenderit totam porro adipisci consectetur. Aspernatur facere quia natus maxime?</p>
          <p>Obcaecati quisquam similique excepturi beatae numquam pariatur iusto, est et alias maiores voluptatem voluptatibus! Inventore id consequuntur facere, magnam dolorem mollitia minus illum illo eius quam, saepe, consequatur porro quaerat.</p>
        </div>
      </div>
    </div>
<!-- / Attribute Popups -->
    <footer class="standard-footer">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell medium-8">
            <div class="grid-x grid-padding-x small-up-2 smedium-up-4 medium-up-4" id="footer-links">
              <div class="cell">
                <h5>Store Info</h5>
                <ul class="no-bullet">
                  <li><a href="#">How It Works</a></li>
                  <li><a href="#">Food Quality Scoring</a></li>
                  <li><a href="#">Our Story</a></li>
                </ul>
              </div>
              <div class="cell">
                <h5>Company</h5>
                <ul class="no-bullet">
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Shipping &amp; Returns</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">User Agreement</a></li>
                </ul>
              </div>
              <div class="cell">
                <h5>Customer Center</h5>
                <ul class="no-bullet">
                  <li><a href="#">Customer Service</a></li>
                  <li><a href="#">Vendor Questions</a></li>
                  <li><a href="#">Payment &amp; Pricing</a></li>
                  <li><a href="#">Promotions</a></li>
                  <li><a href="#">Preferred Club Member</a></li>
                </ul>
              </div>
              <div class="cell">
                <h5>Products</h5>
                <ul class="no-bullet">
                  <li><a href="#">Meats</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Baking Goods</a></li>
                  <li><a href="#">Beverages</a></li>
                  <li><a href="#">Dry Goods</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cell medium-4" id="footer-social">
            <h5>Follow Us</h5>
            <a href="#" class="twitter-link"><i class="fab fa-3x fa-twitter"></i></a>
            <a href="#" class="facebook-link"><i class="fab fa-3x fa-facebook"></i></a>
            <a href="#" class="pinterest-link"><i class="fab fa-3x fa-pinterest"></i></a>
            <a href="#" class="instagram-link"><i class="fab fa-3x fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p class="text-center copyright"><small>&copy;2018 EverythingFood, Inc. All rights reserved.</small></p>
    </footer>


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
      shownTab: {
        showDescription: true,
        showNutrition: false,
        showAttributes: false,
        showReviews: false
      },
      showMobileMenu: false,
      activeTab: 'Description'
    };
  },
  mounted() {
    this.fetch();
  },
  computed: {
  },

  methods: {
    tabClicked(tabid) {
      let tempTab = null;
      Object.keys(this.shownTab).forEach((tab, index) => {
        if (index === tabid) {
          this.shownTab[tab] = true;
          tempTab = tab;
        } else {
          this.shownTab[tab] = false;
        }
      });
      this.activeTab = tempTab.split('show')[1];
      this.showMobileMenu = !this.showMobileMenu;
    },
    search() {
      router.push({ path: `/SearchResults` });
    },
    fetch() {

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
