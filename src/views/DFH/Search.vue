<template>
	<div class="zujian">
		<!-- 头部搜索框 -->
		<div class="nihao">
			<div class="top">
				<input type="text"
				  placeholder="搜索音乐.电台.歌词"
				  v-model="value"
				  class="kkk"
				/>
				<p @click="toTinggeshiqu()" style="font-size: 17px;">取消</p>
			</div>
			<div @click="toList()" class="teshu" v-if="value">搜索:"{{value}}"</div>
		</div>
		
		
		<div class="toFenlei" @click="toFenlei()">歌手分类</div>
		
		<div class="buttom">
			懒得掉接口 你就看搜索历史吧!!!
		</div>
		
		<!-- 搜索记录 -->
		<ul class="main">
			<li v-for="(item, index) in list" :key="index">
			<strong>{{item}}</strong>
			<button class="del" @click="delList(index)">x</button>
			</li>
		</ul>
		
		
	</div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
	
export default{
	name:"search",
	data(){
		return{
			value:''
		}
	},
	computed:{
		...mapState(["list"])
	},
	methods:{
		toFenlei(){
			this.$router.push({name:"geshoufenlei"})
		},
		toTinggeshiqu(){
			this.$router.go(-1)
		},
		delList(index){
			this.$store.commit('delList',index)
		},
		addSearch(value){
			this.$store.commit('addList',value)
		},
		toList(){
			this.$store.commit('addList',this.value)
			
			this.value = ""
		}
	},
}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.top{
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #000;
	}
	.kkk{
		background: #C8C9CC;
		border: 0;
		width: 270px;
		border-radius: 20px;
		height: 30px;
		padding-left: 10px;
		text-align: center;
	}
	
	.toFenlei{
		border-bottom:1px solid #646566;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	
	.buttom{
		color: red;
		height: 150px;
		text-align: center;
		line-height: 150px;
	}
.nihao{
	position: relative;
}
.teshu{
	text-align: center;
	min-width: 200px;
	min-height: 50px;
	line-height: 50px;
	position: absolute;
	left: 50px;
	border: 1px solid #1989FA;
	color: #fff;
	border-radius: 20px;
	background: #000000;
}	
.main{
	height: 100px;
}
.main li{
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	border-bottom:1px solid #969799;
	color: #000;
}
.del{
	font-size: 20px;
	background: #fff;
	color: #888888;
	width: 30px;
	height: 30px;
	border: none;
	border-radius: 50%;
}
	
	
	
</style>
