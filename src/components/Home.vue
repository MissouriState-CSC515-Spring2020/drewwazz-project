<template>
	<!-- Start of page -->
	<div>
		<div>
			<h1>Drew's Guitar Shop</h1>
		</div>
		<div>
			<h4>All Guitars</h4>
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
				<div class = "carousel-item">
						<img v-bind:src="g1" class = "d-block w-100" alt="Fourth slide">
					<div class ="carousel-caption">
						<h3>Gibson</h3>
					</div>
				</div>
				<div class = "carousel-item">
						<img v-bind:src="g2" class = "d-block w-100" alt="Fifth slide">
					<div class ="carousel-caption">
						<h3>Gibson</h3>
					</div>
				</div>
				<div class = "carousel-item">
						<img v-bind:src="g3" class = "d-block w-100" alt="Sixth slide">
					<div class ="carousel-caption">
						<h3>Gibson</h3>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>
<script>
	//import jQuery from 'jquery';
	//let $ = jQuery;
	export default {
		
		data(){
			return{
				f1: require('./images/Fender1.jpg'),
				f2: require('./images/Fender2.jpg'),
				f3: require('./images/JimmyPageFender.jpg'),
				g1: require('./images/Gibson1.jpg'),
				g2: require('./images/Gibson2.jpg'),
				g3: require('./images/Gibson3.jpg')
			}
		},
		mounted(){

			//$(document).ready(function(){
				//$("#MagicCarousel").carousel({
					//interval: 1500
				//});
			//});
		}

	}
</script>