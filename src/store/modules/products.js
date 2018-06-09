export default {
    namespaced: true,
    state: {
        items: getProducts()
    },
    getters: {
        items(state) {
            return state.items;
        }
    },
    mutations: {

    },
    actions: {

    }
}


function getProducts() {
    return [{
            id_product: 10,
            title: 'iPhone 5',
            price: 20000,
            img: './assets/img/products/i5.jpg'
        },
        {
            id_product: 20,
            title: 'iPhone 6',
            price: 25000,
            img: './assets/img/products/i6.jpg'
        },
        {
            id_product: 30,
            title: 'iPhone 7',
            price: 30000,
            img: './assets/img/products/i7.jpg'
        }
    ]
}