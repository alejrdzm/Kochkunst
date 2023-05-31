const app = Vue.createApp({
    data() {
        return {
            logo: "./images/logo.png",
            allRecipes: [],
            selectedIndex: 0,
            hasRecipes: true,
            //list of all the recipes registered
            recipesList: [
                { id: 01, image: './images/recipes/bienenstich.png', likes: '120', name: 'Bienenstich', category: 'Breakfast', prep_time: '30 min', cook_time: '25 min', total_time: '55 min', portions: 12, complexity: 'intermediate', occasion: 'Dad Day', description: 'Bienenstich, or "bee sting" cake, is a traditional German pastry that consists of a yeast dough, a vanilla custard filling, and a caramelized almond topping.', ingredients: ['flour', 'sugar', 'butter', 'milk', 'yeast', 'eggs', 'vanilla extract', 'cornstarch', 'almonds', 'honey'], instructions: ['Make the yeast dough', 'Make the custard filling', 'Caramelize the almonds', 'Assemble the cake', 'Bake the cake'], recipes_related: ['Müsli'] },
            ],
            //list of the most liked recipes
            featuredRecipes: [
                { id: 01, image: './images/recipes/gluhwein.png', likes: '30', name: 'Glühwein', category: 'Drinks', prep_time: '5 minutes', cook_time: '30 minutes', total_time: '35 minutes', portions: 8, complexity: 'Easy', occasion: 'Christmas', description: 'A classic hot mulled wine that is perfect for the winter season.', ingredients: ['1 bottle of red wine', '1/2 cup sugar', '1/2 cup water', '1 orange, sliced', '1/2 lemon, sliced', '1 cinnamon stick', '4 cloves', '1 star anise'], instructions: 'Combine all ingredients in a large pot and heat until the mixture is hot and the sugar is dissolved. Do not boil. Serve hot.', recipes_related: ['Spiced Apple Cider', 'Hot Toddy'] },
           ],
            //users registered
            users: [
                { name: 'John Doe', image: './images/profile/placeholder.jpg', info: 'jdoe@email.com' },
                { name: 'Jane Doe', image: './images/profile/placeholder.jpg', info: 'janedoe@email.com' }
            ],
            //recipes pending to be registered
            revision: [
                { name: 'Arequipe', status: 'Pending' },
                { name: 'Bratwurst', status: 'Pending' },
                { name: 'Rouladen', status: 'Pending' }
            ]
        }
    },
    mounted: function () {
        this.all_recipes = this.recipes;
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
        .then(
            (response) => {
                let items = response.data.meals;
                items.forEach((element, index) => {
                    this.categories.push({ id: index, name: element.strCategory });
                });
            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
        })
        .then(
            (response) => {
                let items = response.data.meals;
                this.recipes = [];
                if(items.length > 0) this.loading = false;
                items.forEach(element => {
                    this.recipes.push({ 
                        id: element.idMeal,
                        image: element.strMealThumb,
                        name: element.strMeal,
                        category: "Beef",
                        time: "20 mins",
                        level: "Easy",
                        likes: 18,
                        ingredients: "NA",
                        instructions: "NA"
                    });
                });
            }
        )
        .catch(
            error => console.log(error)
        );
    },
    methods: {
        //button to like a recipe
        onClickLike(index) {
            //console.log("btn - click");
            this.featuredRecipes[index].likes += 1;
            this.featuredRecipes[index].likes += 1;
        },
        //button to dislike a recipe
        onClickUnlike(index) {
            //console.log("btn - click");
            if (this.featuredRecipes[index].likes > 0) this.featuredRecipes[index].likes -= 1;
            if (this.recipesList[index].likes > 0) this.recipesList[index].likes -= 1;
        },
        //button to show all the categories
        onClickCategory(category) {
            if (category == "All") {
                this.featuredRecipes = this.allRecipes;
            } else {
                this.featuredRecipes = this.allRecipes;
                let recipesInCategory = this.featuredRecipes.filter(function (el) {
                    return el.category === categories;
                });
                if (recipesInCategory.length > 0) {
                    this.hasRecipes = true;
                    this.featuredRecipes = recipesInCategory;
                } else {
                    this.hasRecipes = false;
                }

            }
        },
        //button to load the details of the selected recipe
        onClickViewRecipe(index) {
            this.selectedIndex = index;
        },
        //buttons to navigate through the recipes
        onClickPrevFeatured() {
            this.selectedIndex--;
            if (this.selectedIndex < 0) this.selectedIndex = this.featuredRecipes.length - 1;
        },
        onClickNextFeatured() {
            this.selectedIndex++;
            if (this.selectedIndex > this.featuredRecipes.length - 1) this.selectedIndex = 0;
        }   
    }
});

