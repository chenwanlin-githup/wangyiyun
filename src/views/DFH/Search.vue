<template>
	<div class="main">
		<!-- 头部搜索框 -->
		<div class="top">
			<input type="text"
			 placeholder="搜索音乐.电台.歌词"
			  v-model="value"
			  class="kkk"
			  />
			<p @click="toTinggeshiqu()" style="font-size: 17px;">取消</p>
		</div>
		
		<div class="toFenlei" @click="toFenlei()">歌手分类</div>
		
		<div class="buttom">
			我是暂时占位置的!!!
		</div>
	</div>
</template>

<script>
export default{
	name:"search",
	data(){
		return{
			value:''
		}
	},
	methods:{
		toFenlei(){
			this.$router.push({name:"geshoufenlei"})
		},
		toTinggeshiqu(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped="scoped">
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
	}
	
	.toFenlei{
		border-bottom:1px solid #646566;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	
	.buttom{
		height: 300px;
		background: #FFD01E;
		text-align: center;
		line-height: 300px;
	}
	
</style>
