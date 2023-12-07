app.component('comment-list', {
    template:
      /*html*/
      `
      <div v-if="comments.length" class="comment-container">
      <h3>Comments:</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            {{ comment.name }} gave {{ comment.rating }} stars
            <br/>
            "{{ comment.text }}"
          </li>
        </ul>
      </div>
    `,
    props: {
      comments: {
        type: Array,
        required: true
      }
    }
  })
  