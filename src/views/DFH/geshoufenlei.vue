<template>
	<div class="zujian">
		<div class="top">
			<div class="top-lt" @click="fanhui()">&lt</div>
			<div class="top-main">歌手分类</div>
			<van-icon name="music" class="top-rt"  @click="toPlayMusic()"/>
		</div>
		
		<div class="main">
			<ul>
				<li><h5>华语男歌手</h5><P>></P></li>
				<li><h5>华语女歌手</h5><P>></P></li>
				<li><h5>华语乐队/组合</h5><P>></P></li>
			</ul>
			
			<ul>
				<li><h5>欧美男歌手</h5><P>></P></li>
				<li><h5>欧美女歌手</h5><P>></P></li>
				<li><h5>欧美乐队/组合</h5><P>></P></li>
			</ul>
			
			<ul>
				<li><h5>日本男歌手</h5><P>></P></li>
				<li><h5>日本女歌手</h5><P>></P></li>
				<li><h5>日本乐队/组合</h5><P>></P></li>
			</ul>
			
			<ul>
				<li><h5>其他男歌手</h5><P>></P></li>
				<li><h5>其他女歌手</h5><P>></P></li>
				<li><h5>其他乐队/组合</h5><P>></P></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"geshoufenlei",
		data(){
			return{
				
			}
		},
		methods:{
			toPlayMusic(){
				this.$router.push({name:"playMusic"})
			},
			fanhui(){
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
.top-lt{
	font-size: 30px;
}
.top-rt{
	font-size: 30px;
}


.main ul{
	margin: 0;
	padding-left: 0;
	border-top: 15px solid #E8E8E8;
}
.main ul li{
	padding:0 11px;
	list-style: none;
	display: flex;
	justify-content: space-between;
	width: 94%;
	line-height: 50px;
	height: 50px;
	border-bottom: 1px solid #000;
}
p{
	margin: 0;
	padding: 0;
}
h5{
	margin: 0;
	width: 100px;
	height: 20px;
}

</style>
