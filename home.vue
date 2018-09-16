<template>
    <div>
    	{{count}}
		<button @click="tapPlus()">增加</button>
    </div>
</template>
<script>
	import {mapGetters,mapActions} from "vuex";
	export default{
		data(){
			return {
				
			}
		},
		mounted:function(){
			//console.log(this)
			//console.log(...mapState(['state']))
		},
		computed:{
			...mapGetters(['count'])
		},
		methods:{
			...mapActions(["tapPlus"])
		}
	}
</script>
