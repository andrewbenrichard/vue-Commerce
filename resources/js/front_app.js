/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
Vue.use(VueRouter);

let routes = [
    {
        path: "/home",
        component: require("./components/frontendComponents/pages/home.vue")
            .default
    },
    {
        path: "/contact",
        component: require("./components/frontendComponents/pages/contact.vue")
            .default
    },
    {
        path: "/about-us",
        component: require("./components/frontendComponents/pages/about_us.vue")
            .default
    },
    /* shop routes starts here */
    {
        path: "/shop",
        component: require("./components/frontendComponents/pages/shop/shop.vue")
            .default
    },
    {
        path: "/category",
        component: require("./components/frontendComponents/pages/shop/category.vue")
            .default
    },
    {
        path: "/product",
        component: require("./components/frontendComponents/pages/shop/product_1.vue")
            .default
    },
    {
        path: "/cart",
        component: require("./components/frontendComponents/pages/shop/cart.vue")
            .default
    },
    {
        path: "/checkout",
        component: require("./components/frontendComponents/pages/shop/checkout.vue")
            .default
    },
    {
        path: "/payment",
        component: require("./components/frontendComponents/pages/shop/payment.vue")
            .default
    },
    /* 
        blog routes
    */
    {
        path: "/blog",
        component: require("./components/frontendComponents/pages/home.vue")
            .default
    },
    {
        path: "/article",
        component: require("./components/frontendComponents/pages/home.vue")
            .default
    }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});
/**
 * The following block of code may be used to automatically register your
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router
});
