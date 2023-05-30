app.component('recipe-details', {
    props:{
        name:{
            type:String
        },
        image:{
            type:String
        },
        ingredients:{
            type:String
        },
        instructions:{
            type:String
        }
    },

    mounted(){  //Se crea un mounted
      this.$test.on('foo', function(data){ //Se llama a la variable global y al metodo on para así poder implementar el metodo personalizado que se creó en el componente recipe card
        console.log(data);
      })
    }, //Esta forma de comunicar los objetos nos funciona para comunicar objetos que no necesiten información del componente padre component.js, de esta forma la comunicación se logra entre datos de 2 componentes hijos, una consulta por decirlo así

    methods:{
        onClickPrev(){
            console.log("PREV");
            this.$emit('prevrecipe', this.index);
        },
        onClickNext(){
            console.log("NEXT");
            this.$emit('nextrecipe', this.index);
        }
    },
    template:
    /*html*/
    `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ name }}">
          <p class="text-center fs-6">{{ ingredients }}</p>
          <p class="fst-italic fw-light fs-5">{{ instructions }}</p>
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