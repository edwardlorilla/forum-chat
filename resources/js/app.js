/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: "active",
    routes:[
        {
            path: "/profile/:name",
            component: resolve => {
                require.ensure(["./components/Profile/index.vue"], () => {
                    resolve(require("./components/Profile/index.vue"))
                })
            },
            meta: {auth: false, url: '/api/profile', name: 'profile.index'},
            name: "profile.index"
        },
        {
            path: "/(threads)",
            component: resolve => {
                require.ensure(["./components/Thread/index.vue"], () => {
                    resolve(require("./components/Thread/index.vue"))
                })
            },
            meta: {auth: false, url: '/api/threads', name: 'thread.index'},
            name: "thread.index"
        },
        {
            path: "/thread/:id(\\d+)/channel/:channel",
            component: resolve => {
                require.ensure(["./components/Thread/show.vue"], () => {
                    resolve(require("./components/Thread/show.vue"))
                })
            },
            meta: {auth: false, url: '/api/threads', name: 'thread.show'},
            name: "thread.show"
        },
        {
            path: "/channel/:channel",
            component: resolve => {
                require.ensure(["./components/Thread/channel.vue"], () => {
                    resolve(require("./components/Thread/channel.vue"))
                })
            },
            meta: {auth: false, url: '/api/threads', name: 'thread.channel'},
            name: "thread.channel"
        },
        {
            path: "/thread/create",
            component: resolve => {
                require.ensure(["./components/Thread/create.vue"], () => {
                    resolve(require("./components/Thread/create.vue"))
                })
            },
            meta: {auth: true, url: '/api/threads', name: 'thread.create'},
            name: "thread.create"
        },
        {path: '*', redirect: {name: 'thread.index', params: {"0": 'threads'}}},
    ]
});
axios.get(`/api/user`).then(response => {
    return response;
}).then(data => {
    return Vue.prototype.$user = data;
}).catch(() => {
    return Vue.prototype.$user = null;
}).then(() => {
    new Vue({
        router,
        render: h => h(require('./components/App.vue'))
    }).$mount('#app');
})


