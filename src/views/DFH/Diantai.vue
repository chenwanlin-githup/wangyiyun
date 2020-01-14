<template>
	<div class="zujian">
		<img class="tu" src="http://img3.imgtn.bdimg.com/it/u=1441935680,694897945&fm=26&gp=0.jpg" />
		
		<div class="nav">
			<div class="nav-lt">
				<van-icon name="send-gift" size="25"/>
				<p>电台分类</p>
			</div>
			<div class="nav-rt">
				<van-icon name="wap-nav" size="25"/>
				<P>电台排行</P>
			</div>
		</div>
		
		<!-- 每天听些好节目 -->
		<p style="padding:0 0 10px 20px;">每天听些好节目</p>
		
		<div class="main">
			<div class="main-lt"></div>
			<div class="main-rt">
				<p>凉凉-丸子/神秘男水友</p>
				<p>丸子www</p>
			</div>
		</div>
		
		<div class="main">
			<div class="main-lt"></div>
			<div class="main-rt">
				<p>凉凉-丸子/神秘男水友</p>
				<p>丸子www</p>
			</div>
		</div>
		
		<div class="main">
			<div class="main-lt"></div>
			<div class="main-rt">
				<p>凉凉-丸子/神秘男水友</p>
				<p>丸子www</p>
			</div>
		</div>
		
		<!-- 电台个性推荐> -->
		<p style="padding:0 0 10px 20px;">电台个性推荐></p>
		<van-grid :gutter="10" :column-num="3">
		  <van-grid-item
		    v-for="value in 6"
		    :key="value"
		    icon="photo-o"
		    text="程一电台"
		  />
		</van-grid>
		
		<!-- 明星做主播> -->
		<p style="padding:0 0 10px 20px;">明星做主播></p>
		<van-grid :gutter="10" :column-num="3">
		  <van-grid-item
		    v-for="value in 3"
		    :key="value"
		    icon="photo-o"
		    text="谭松韵"
		  />
		</van-grid>
		
		<!-- 热门分类 -->
		<p style="padding:0 0 10px 20px;">热门分类></p>
		<div class="fenlei">
			<div class="fenlei-lt">
				<div class="fenlei-lt-tt">
					<van-icon class="niubi" name="manager" size="20"/>
					<p>明星做主播</p>
				</div>
				<div class="fenlei-lt-main">
					<van-icon class="niubi" name="smile" size="20"/>
					<p>脱口秀</p>
				</div>
				<div class="fenlei-lt-bt">
					<van-icon class="niubi" name="play-circle" size="20"/>
					<p>音乐故事</p>
				</div>
			</div>
			<div class="fenlei-rt">
				<div class="fenlei-lt-tt">
					<van-icon class="niubi" name="manager" size="20"/>
					<p>明星做主播</p>
				</div>
				<div class="fenlei-lt-main">
					<van-icon class="niubi" name="smile" size="20"/>
					<p>脱口秀</p>
				</div>
				<div class="fenlei-lt-bt">
					<van-icon class="niubi" name="play-circle" size="20"/>
					<p>音乐故事</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'diantai'
	}
</script>

<style scoped="scoped">
p{
	margin: 0;
	padding: 0;
}
img{
	display: block;
}
.tu{
	height: 150px;
	width: 100%;
}

.nav{
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.nav-lt{
	width: 100px;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;	
}
.nav-rt{
	width: 100px;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.main{
	height: 70px;
	display: flex;
	align-items: center;
	margin: 10px 0;
}
.main-lt{
	width: 70px;
	height: 70px;
	background: #888888;
	margin-right: 15px;
}

/* 热门分类 */
.fenlei{
	height: 150px;
	width: 100%;
	display: flex;
	border-bottom: 1px solid #DCDCDC;
}
.fenlei-lt{
	height: 150px;
	width: 50%;
	border-right: 1px solid #DCDCDC;
	display: flex;
	flex-direction: column;
	
}
.fenlei-rt{
	height: 150px;
	width: 50%;
}
.fenlei-lt-tt{
	border-top: 1px solid #DCDCDC;
	display: flex;
	align-items: center;
	height: 50px;
}
.fenlei-lt-main{
	border-top: 1px solid #DCDCDC;
	display: flex;
	align-items: center;
	height: 50px;
}
.fenlei-lt-bt{
	border-top: 1px solid #DCDCDC;
	display: flex;
	align-items: center;
	height: 50px;
}
.niubi{
	padding: 0 10px;
}


</style>
