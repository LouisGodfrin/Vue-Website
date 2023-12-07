app.component('product-display', 
{
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template:
      /*html*/
      `
     <div class="product-display">
          
      <div class="product-container">
        <div class="product-image">
          <img :src="image" />
        </div>
  
        <div class="product-info">
          <h1>{{ productName }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
  
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
  
          <div class="color-circle"
            v-for="(variant, index) in variants" 
            :key="variant.id"
            :style="{ backgroundColor: variant.color }"
            @mouseover="updateProduct(index)"
            >
          </div> 
  
          <button class="button" v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          Add to cart
          </button>
        </div>
      </div>
  
      <comment-list :comments="comments"></comment-list>
      <comment-form @comment-submitted="addComment" ></comment-form>
    </div>
     `,
    data() {
      return {
        product: 'Mousqueton',
        brand: 'Mastery Lock',
        selectedVariant: 0,
        details: ['80% aluminium', '20% steel', 'Neutral-weigh'],
        variants: [
          {
            id: 2234,
            color: 'blue',
            image: './assets/images/mousqueton_B.avif',
            quantity: 10
          },
          {
            id: 2235,
            color: 'red',
            image: './assets/images/mousqueton_R.avif',
            quantity: 0
          },
          {
            id: 2236,
            color: 'white',
            image: './assets/images/mousqueton_W.avif',
            quantity: 20
          }
        ],
        comments: [],
        tabs: ['comment-form', 'comment-list'],
        activeTab: 'comment-form'
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateProduct(index) {
        this.selectedVariant = index
      },
      addComment(comment) {
        this.comments.push(comment)
      }
    },
    computed: {
      productName() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
    }
  })
  