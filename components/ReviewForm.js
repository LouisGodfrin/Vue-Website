app.component('comment-form', {
    template:
      /*html*/
      `
      <form class="comment-form" @submit.prevent="onSubmit">
        <h3>Leave a comment</h3>
  
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      
        <label for="comment">Comment:</label>      
        <textarea id="comment" v-model="text"></textarea>
  
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
    
        <input class="button" type="submit" value="Submit">  
      
      </form>
    `,
    data() {
      return {
        name: '',
        text: '',
        rating: null
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.text === '' || this.rating === null) {
          alert('Your comment is incomplete. Please fill out every field.')
          return
        }
  
        const comment = {
          name: this.name,
          text: this.text,
          rating: this.rating
        }
        this.$emit('comment-submitted', comment)
        this.name = ''
        this.text = ''
        this.rating = null
      }
    }
  })
  