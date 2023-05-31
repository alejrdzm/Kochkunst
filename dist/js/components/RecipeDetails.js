app.component('recipe-details', {
    //component that pop-up the recipe information
    props: {
        image: {
            type: String
        },
        category: {
            type: String,
            default: "recipe category"
        },
        name: {
            type: String,
            default: "recipe name"
        },
        description: {
            type: String,
            default: "recipe description"
        },
        ingredients: {
            type: String,
            default: "recipe ingredients"
        },
        instructions: {
            type: String,
            default: "recipe instructions"
        },
        total_time: {
            type: String,
            default: "recipe time"
        },
        prep_time: {
            type: String,
            default: "recipe preparation time"
        },
        cook_time: {
            type: String,
            default: "recipe cooking time"
        },
        portions: {
            type: String,
            default: "recipe portions"
        },
        occasion: {
            type: String,
            default: "recipe occasion"
        },
        level: {
            type: String,
            default: "recipe level"
        },
        likes: {
            type: Number,
            default: 10
        },
        recipes_related: {
            type: String,
            default: "recipes related"
        },
        index: {
            type: String
        }
    },

    mounted() {
        this.$test.on('foo', function (data) {
            console.log(data);
        })
    },

    methods: {
        onClickPrev() {
            console.log("PREV");
            this.$emit('prevrecipe', this.index);
        },
        onClickNext() {
            console.log("NEXT");
            this.$emit('nextrecipe', this.index);
        }
    },
    template: /*html*/
        `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ name }}">
          <p class="box-text text-center mt-3">Preparation: {{ prep_time }} - Cooking: {{ cook_time }}</p>
            <p class="box-text text-center mt-3">Total: {{ total_time }}</p>
            <p class="box-text text-center">Likes: {{ likes }} - Portions: {{ portions }} - {{ complexity }}</p>
            <p class="content-text">{{ description }}</p>
            <p class="content-text">{{ ingredients }}</p>
            <p class="content-text">{{ instructions }}</p>
            <p class="content-text text-center">Recipes related: {{ recipes_related }}
            </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" v-on:click="onClickPrev()">Prev</button>
          <button type="button" class="btn btn-dark" v-on:click="onClickNext()">Next</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
})