<template>
	<div class="app">
		
		<div class="tu">
			<div class="tu-lt">
				<img style="width: 100%;" src="http://img5.imgtn.bdimg.com/it/u=3433447979,1619965462&fm=11&gp=0.jpg"/>
			</div>
			<div class="tu-rt">
				<p>精品歌单></p>
				<p>评论过万的英文歌与潜力股</p>
				<p>听歌写评论,评评更健康</p>
			</div>
		</div>
		
		<!-- 全部歌单 -->
		<div class="biaoti">
			<div class="biaoti-lt">全部歌单></div>
			<div class="biaoti-rt">
				<p>欧美 |</p>
				<p>民谣</p>
				<p>| 电子</p>
			</div>
		</div>
		
		<div class="main">
			
			<div class="main-lt"> 
				<div class="main-top"
				style="background:url('http://img4.imgtn.bdimg.com/it/u=2200075786,1137830760&fm=11&gp=0.jpg');
					background-repeat: no-repeat;
					background-size: 100% 100%;"
				>
					<div class="main-t-t">
						<van-icon name="audio" />
						<p>207万</p>
					</div>
					<div class="main-t-b">我是作者</div>
				</div>
				<p>和声|被和声点缀的音乐</p>
			</div>
			
			<div class="main-lt">
				<div class="main-top"
				style="background:url('http://img2.imgtn.bdimg.com/it/u=1211110498,1817134192&fm=11&gp=0.jpg');
					background-repeat: no-repeat;
					background-size: 100% 100%;"
				>
					<div class="main-t-t">
						<van-icon name="audio" />
						<p>207万</p>
					</div>
					<div class="main-t-b">我是作者</div>
				</div>
				<p>和声|被和声点缀的音乐</p>
			</div>
			
			<div class="main-lt">
				<div class="main-top"
				style="background:url('http://img5.imgtn.bdimg.com/it/u=2717241025,1528806694&fm=26&gp=0.jpg');
					background-repeat: no-repeat;
					background-size: 100% 100%;"
				>
					<div class="main-t-t">
						<van-icon name="audio" />
						<p>207万</p>
					</div>
					<div class="main-t-b">我是作者</div>
				</div>
				<p>和声|被和声点缀的音乐</p>
			</div>
			
			<div class="main-lt">
				<div class="main-top"
				style="background:url('http://img5.imgtn.bdimg.com/it/u=1066422205,467371090&fm=26&gp=0.jpg');
					background-repeat: no-repeat;
					background-size: 100% 100%;"
				>
					<div class="main-t-t">
						<van-icon name="audio" />
						<p>207万</p>
					</div>
					<div class="main-t-b">我是作者</div>
				</div>
				<p>和声|被和声点缀的音乐</p>
			</div>
			
			<div class="main-lt">
				<div class="main-top"
				style="background:url('http://img2.imgtn.bdimg.com/it/u=2040276409,1650560011&fm=26&gp=0.jpg');
					background-repeat: no-repeat;
					background-size: 100% 100%;"
				>
					<div class="main-t-t">
						<van-icon name="audio" />
						<p>207万</p>
					</div>
					<div class="main-t-b">我是作者</div>
				</div>
				<p>和声|被和声点缀的音乐</p>
			</div>
			
			<div class="main-lt">
				<div class="main-top"
				style="background:url('http://img3.imgtn.bdimg.com/it/u=144166055,3232843084&fm=26&gp=0.jpg');
					background-repeat: no-repeat;
					background-size: 100% 100%;"
				>
					<div class="main-t-t">
						<van-icon name="audio" />
						<p>207万</p>
					</div>
					<div class="main-t-b">我是作者</div>
				</div>
				<p>和声|被和声点缀的音乐</p>
			</div>

		</div>
		
		<p class="teshu"> 懒得写了 别划拉了 </p>
		
		
	</div>
</template>

<script>
	export default{
		name:'gedan'
	}
</script>

<style scoped="scoped">
p{
	margin: 0;
	padding: 0;
}
.tu{
	height: 150px;
	background: #646566;
	display: flex;
	align-items: center;
}
.tu-lt{
	margin-left: 20px;
	height: 100px;
	width: 100px;
	background: #E8E8E8;
}
.tu-rt{
	margin-left: 20px;
	height: 90px;
	line-height: 25px;
	color: #EBEDF0;
}

/* 全部歌单 */
.biaoti{
	height: 50px;
	display: flex;
	justify-content: space-between;
}
.biaoti-lt{
	height: 50px;
	line-height: 50px;
	padding-left: 20px;
}
.biaoti-rt{
	height: 50px;
	line-height: 50px;
	width: 150px;
	display: flex;
	justify-content: space-around;
}

.main{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.main-top{
	height: 150px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin:5px 0;
}
.main-t-t{
	display: flex;
	justify-content: flex-end;
}

.teshu{
	margin-top: 20px;
	height: 100px;
	line-height: 100px;
	width: 100%;
	text-align: center;
	font-size: 20px;
	background: #000;
	color: #fff;
}


</style>
