import VueRouter from 'vue-router'

import PageStart from '@/components/PageStart'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageRecipes from '@/components/PageRecipes'
import PageNews from '@/components/PageNews'
import PagePrelast from '@/components/PagePrelast'
import PageScore from '@/components/PageScore'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/', 
            name: ''
        }
    ]
})