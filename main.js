import Vue from 'vue'
import App from './App'

import index from './pages/index/index.vue'
Vue.component('index',index)

import course from './pages/course/course.vue'
Vue.component('course',course)

import community from './pages/community/community.vue'
Vue.component('community',community)

import person from './pages/person/person.vue'
Vue.component('person',person)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

// 引入全局分割线
import divider from "@/components/common/divider.vue"
Vue.component('divider', divider)

// 引入全局导航navigate
Vue.prototype.$navigate = function navigate(path) {
		if(!path) return;
		uni.navigateTo({
			url: `/pages/${path}/${path}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
