app.component('recipe-card', {
    //component that shows the recipe overview
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
    methods: {
        onClickLike() {
            console.log("LIKE");
            this.$emit('recipelike', this.index);
        },
        onClickUnlike() {
            console.log("UNLIKE");
            this.$emit('recipeunlike', this.index);
        },
        onClickViewRecipe() {
            console.log("VIEW RECIPE");
            this.$emit('recipedetails', this.index);
        }
    },
    template: /*html*/
        `<div class="card p-2">
    <img class="card-img-top rounded" v-bind:src="featuredRecipes.image" alt="featured recipe">
    <div class="card-body">
      <p class="category-text">{{ category }}</p>
      <h5 class="card-title name-text">{{ name }}</h5>
      <p class="card-text time-text">{{ time }}</p>
      <p class="card-text level-text">{{ complexity }}</p>
      <p class="card-text likes-text">{{ likes }}</p>
      <button class="btn btn-success me-3" v-on:click="onClickLike(index)">Like</button>
      <button class="btn btn-danger me-3" v-on:click="onClickUnlike(index)">Unlike</button>
      <button class="btn btn-dark me-3 mt-2" data-bs-toggle="modal" data-bs-target="#featuredRecipes" v-on:click="onClickViewRecipe(index)">View Recipe</button>
    </div>
  </div>`
})