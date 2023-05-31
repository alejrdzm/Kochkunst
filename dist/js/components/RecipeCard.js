app.component('recipe-card', {
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
        cook_time:{
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
        onClickLike() { //Los metodos personalizados debe crearse en los botones que generarán la acción
            console.log("LIKE");
            this.$emit('recipelike', this.index); //De esta manera creamos un metodo personalizado, el cual es generado en el botón correspondiente a este metodo, para posteriormetne ser escuchao por el componente padre el cual ejecutará acciones en base a este metodo eprsonalizado
        },
        onClickUnlike() {
            console.log("UNLIKE");
            this.$emit('recipeunlike', this.index);
        },
        onClickViewRecipe() {
            console.log("VIEW RECIPE");
            this.$emit('recipedetails', this.index);
            //this.$test.emit('foo', "Works!"); //Llamamos a la variable global y accedemos a el metodo emit que se hereda de el objeto almacenado en la variable (por la librería), funciona como un $emit, de esta forma creamos un metodo personalizado el cual no necesita ser escuchado por el componente padre
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