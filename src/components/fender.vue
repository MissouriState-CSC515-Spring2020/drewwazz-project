<template>
	<div>
		<div>
			<h1>Fender Page</h1>
		</div>
		<div id ="MagicCarousel" class ="carousel slide" data-ride="carousel">
			<div class="carousel-inner" role="listbox">
				<div class="carousel-item active">
					<img v-bind:src="f1" class = "d-block w-100" alt="First slide">
					<div class ="carousel-caption">
						<h3>Fender</h3>
					</div>
				</div>
				<div class = "carousel-item">
					<img v-bind:src="f2" class = "d-block w-100" alt="Second slide">
					<div class ="carousel-caption">
						<h3>Fender</h3>
					</div>
				</div>
				<div class = "carousel-item">
					<img v-bind:src="f3" class = "d-block w-100" alt="Third slide">
					<div class ="carousel-caption">
						<h3>Fender</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				f1: require('./images/Fender1.jpg'),
				f2: require('./images/Fender2.jpg'),
				f3: require('./images/JimmyPageFender.jpg')
			}

		}
	}
</script>