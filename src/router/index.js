import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import VendorSearch from '../components/VendorSearch.vue'
import Vendor from '../components/Vendor.vue'
import FoodItem from '../components/FoodItem.vue'
import Account from '../components/Account.vue'
import AboutUs from '../components/AboutUs.vue'
import Customers from '../components/Customers.vue'
import Partners from '../components/Partners.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import SignInPartner from '../components/SignInPartner.vue'
import ChangePasswordPartner from '../components/ChangePasswordPartner.vue'
import Agreement from '../components/Agreement.vue'
import SignUpPartner from '../components/SignUpPartner.vue'
import VendorPortal from '../components/VendorPortal.vue'
import Product from '../components/Product.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: 'FoodUniverse | FoodUniverse' }
        },
        {
            path: '/Product',
            name: 'product',
            component: Product,
            meta: { title: 'Product | FoodUniverse' }
        },
        {
            path: '/SearchResults',
            name: 'SearchResults',
            component: VendorSearch,
            meta: { title: 'SearchResults | FoodUniverse' }
        },
        {
            path: '/vendor',
            name: 'Vendor',
            component: Vendor,
            meta: { title: 'Vendor | FoodUniverse' }
        },
        {
            path: '/vendor/:ZNavKey',
            name: 'Vendor',
            component: Vendor,
            meta: { title: 'Vendor | FoodUniverse' }
        },
        {
            path: '/fooditem/:ZNavKey',
            name: 'FoodItem',
            component: Product,
            meta: { title: 'FoodItem | FoodUniverse' }
        },
        {
            path: '/account',
            name: 'Account',
            component: Account,
            meta: { title: 'My Account | FoodUniverse', description: 'User account settings for FoodUniverse', requiresAuth: true }
        },
        {
            path: '/about',
            name: 'AboutUs',
            component: AboutUs,
            meta: { title: 'About Us | FoodUniverse' }
        },
        {
            path: '/customers',
            name: 'Customers',
            component: Customers,
            meta: { title: 'Our Customers | FoodUniverse' }
        },
        {
            path: '/partners',
            name: 'Partners',
            component: Partners,
            meta: { title: 'Our Partners | FoodUniverse' }
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn,
            meta: { title: 'Sign In | FoodUniverse' }
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
            meta: { title: 'Sign Up | FoodUniverse' }
        },
        {
            path: '/forgotpassword',
            name: 'forgotpassword',
            component: ForgotPassword,
            meta: { title: 'Forgot My Password | FoodUniverse' }
        },
        {
            path: '/signinPartner',
            name: 'SignInPartner',
            component: SignInPartner,
            meta: { title: 'Sign In | FoodUniverse' }
        },
        {
            path: '/signupPartner',
            name: 'SignUpPartner',
            component: SignUpPartner,
            meta: { title: 'Sign Up | FoodUniverse' }
        },
        {
            path: '/changePasswordPartner',
            name: 'changePasswordPartner',
            component: ChangePasswordPartner,
            meta: { title: 'Change Password | FoodUniverse' }
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement,
            meta: { title: 'Agreement | FoodUniverse' }
        },
        {
            path: '/vendorportal',
            name: 'VendorPortal',
            component: VendorPortal,
            meta: { title: 'VendorPortal | FoodUniverse', description: 'VendorPortal for FoodUniverse', requiresAuth: true, partner: true }
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    document.description = to.meta.description
        // Check Authentication and Partner
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(to.matched.some(record => record.meta.partner)){
            if (!localStorage.getItem('ZNavKey')) {
                next({
                    path: '/signinPartner',
                });
                return;
            }
        }else{
            if (!localStorage.getItem('ZNavKey')) {
                next({
                    path: '/signin',
                });
                return;
            }
        }

    }
    next();
})

export default router
