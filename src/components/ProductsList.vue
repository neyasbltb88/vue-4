<template>
	<div>
		<h1>Products</h1>
		<hr>
		<div class="row">
			<div	class="col col-sm-6 col-md-4"
						v-for="item in products"
						:key="item.id_product"
			>
				<div class="thumbnail">
					<img	:src="item.img"
								alt=""
					>
					<div class="caption">
						<h3>{{ item.title }}</h3>
						<p>Price: {{ item.price }}</p>
						<hr>
						<div class="buttons">
							<span class="btn btn-success"
										@click="addToCart(item.id_product)"
										v-if="inCart.indexOf(item.id_product) === -1"
							>Add to cart</span>
							<span class="btn btn-danger"
										@click="removeFromCart(item.id_product)"
										v-else
							><i class="fa fa-trash"></i></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
			//this.$store.dispatch('products/loadItems');
		},
		computed: {
			...mapGetters('products', {
				products: 'items'
			}),
			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove',
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
	.caption h3 {
		text-align: center;
	}
	.buttons {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>