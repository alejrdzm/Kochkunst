app.component('search-bar', {
    //component that search the recipe in the website
    data() {
      return {
        keyword: '',
        searchResults: [],
      };
    },
    methods: {
      async search() {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.keyword}`);
          const data = await response.json();
          this.searchResults = data.meals;
        } catch (error) {
          console.error(error);
        }
      },
    },
    template: /*html*/ `
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="keyword" placeholder="What are you searching for?">
        <button class="btn btn-dark" v:on="search">Search</button>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="result in searchResults" :key="result.idMeal">
          {{ result.strMeal }}
        </li>
      </ul>
    `,
  });