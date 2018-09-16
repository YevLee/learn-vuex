import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)

//数据初始化
var state={
	num:20
};

//取值
var getters={
	count(state){
		return state.num;
	}
};

//事件
//组件应用$store.commit("tapPlus")
var mutations={
	tapPlus(state){
		state.num++;
	}
};

//注册事件
//组件应用$store.dispatch("tapPlus")
var actions={
	tapPlus(store){
		store.commit('tapPlus')
	}
}
export default new Vuex.Store({
    state,
	mutations,
	actions,
	getters
})