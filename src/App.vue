<template>
	<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="col col-sm-9">
						<h1>Site</h1>
					</div>
					<div class="col col-sm-3">
						<div class="alert alert-default">
							<router-link	class="btn btn-default" 
														v-if="!emptyCart"
														:to="{name: 'cart'}"
														tag="button"
							>
								<i class="fa fa-shopping-cart"></i> In Cart: {{ amountInCart }}
							</router-link>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-3 menu">
						<ul class="list-group">
							<router-link v-for="(item, key) in menuList"
														:key="key"
														:to="item.url"
														tag="button"
														class="list-group-item"
														active-class="active"
							>
							{{ item.text }}
							</router-link>
						</ul>
					</div>
					<div class="col col-sm-9">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('menu', {
				'menuList': 'items'
			}),
			...mapGetters('cart', {
				amountInCart: 'amount'
			}),
			emptyCart() {
				return this.amountInCart > 0 ? false : true
			}
			// menuList() {
			// 	return this.$store.getters['menu/items']
			// }
		}
	}
</script>

<style scoped>
	.btn {
		outline: none;
	}
	button {
		outline: none;
	}
	.menu{
		border-right: 1px solid #ddd;
	}

	.list-group-item{
		transition: background 0.3s, color 0.3s;
	}

	.list-group-item a{
		text-decoration: none;
	}

	.list-group-item.active a{
		color: inherit;
	}

	/* .slide-enter{
		
	} */

	.slide-enter-active{
		animation: slideIn 0.5s;
	}

	/* .slide-enter-to{
		
	}

	.slide-leave{
		
	} */

	.slide-leave-active{
		animation: slideOut 0.5s;
	}

	/* .slide-leave-to{
		
	} */

	@keyframes slideIn{
		from{transform: rotateY(90deg);}
		to{transform: rotateY(0deg);}
	}

	@keyframes slideOut{
		from{transform: rotateY(0deg);}
		to{transform: rotateY(90deg);}
	}

	.alert {
		min-height: 66px;
	}
</style>