import Vue from 'vue'
import Vuex from 'vuex'
import products from "@/data/product-database";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    products: products,
    cart: [], 

  },
  getters: {
    getCart: state => state.cart,
    getCartTotalItems: state => state.cart.length,
    getCartTotalCost: state => state.cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    getCategories: state => state.categories,
    getProducts: state => state.products.slice(0, 10)
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    addToCart(state, newCartItem) {
      console.log(newCartItem)
      state.cart.push(newCartItem)
    },
    deleteFromCart(state, id) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== id)
    },
    addItemAlreadyInCart(state, id) {
      if (state.cart.find(cartItem => cartItem.id === id)) {
        state.cart.find(cartItem => cartItem.id === id).quantity++
        console.log(state.cart)
        return [...state.cart]
      }

    },
    subtractItemAlreadyInCart(state, id) {
      if (state.cart.find(cartItem => cartItem.id === id)) {
        if (state.cart.find(cartItem => cartItem.id === id).quantity > 1) {
          state.cart.find(cartItem => cartItem.id === id).quantity--
          return [...state.cart]
        } else if (state.cart.find(cartItem => cartItem.id === id).quantity === 1) {
          state.cart = state.cart.filter(cartItem => cartItem.id !== id)
        } else {
          console.log("Error: Item quantity is 0")
        }
      }
    }
  },
  actions: {
    addNewItemToCart({ commit }, newItem) {
      // if (!state.cart.find(cartItem => cartItem.id === newItem.id)) {
      //   commit('addToCart', newItem)
      // } else {
      //   commit('updateCartItemCount', newItem)
      // }
      let newCartItem = {
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        imgUrl: newItem.imgUrl,
        category: newItem.category,
        quantity: 1
      }
      // db.collection('cart').add(newCartItem).then(()  => {
        commit('addToCart', newCartItem)
      // })
    },
    addItemAlreadyInCart({ commit }, id) {
      commit('addItemAlreadyInCart', id)
    },
    subtractItemAlreadyInCart({ commit }, id) {
      commit('subtractItemAlreadyInCart', id)
    },
    deleteFromCart({ commit }, id) {
      // let id = item
      // db.collection('cart').remove(id).then(()  => {
        commit('deleteFromCart', id)
      // })
    }
  },
})

