<template>
	<div>
		<div>
			<h1>Gibson Page</h1>
		</div>
		<div id ="MagicCarousel" class ="carousel slide" data-ride="carousel">
			<div class="carousel-inner" role="listbox">
		
				<div class = "carousel-item active">
					<img v-bind:src="g1" class = "d-block w-100" alt="First slide">
					<div class ="carousel-caption">
						<h3>Gibson</h3>
					</div>
				</div>
				<div class = "carousel-item">
					<img v-bind:src="g2" class = "d-block w-100" alt="Second slide">
					<div class ="carousel-caption">
						<h3>Gibson</h3>
					</div>
				</div>
				<div class = "carousel-item">
					<img v-bind:src="g3" class = "d-block w-100" alt="Third slide">
					<div class ="carousel-caption">
						<h3>Gibson</h3>
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
				g1: require('./images/Gibson1.jpg'),
				g2: require('./images/Gibson2.jpg'),
				g3: require('./images/Gibson3.jpg')
			}
		}

	}
</script>