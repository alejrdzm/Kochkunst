const app = Vue.createApp({
    data(){
        return{
            logo: "./images/logo.png",
            categories:[
                {id: 1, name: "All"},
                {id: 2, name: "Breakfast"},
                {id: 3, name: "Drinks"},
                {id: 4, name: "Entrees"},
                {id: 5, name: "Lunch"},
                {id: 6, name: "Desserts"},
                {id: 7, name: "Soups"}
            ],
            allRecipes: [],
            selectedIndex: 0,
            hasRecipes: true,
            recipesList:[
                {id: 01, image:'./images/recipes/bienenstich.png', likes: '120', name: 'Bienenstich', category: 'Breakfast', prep_time: '30 min', cook_time: '25 min', total_time: '55 min', portions: 12, complexity: 'intermediate', occasion: 'Dad Day', description: 'Bienenstich, or "bee sting" cake, is a traditional German pastry that consists of a yeast dough, a vanilla custard filling, and a caramelized almond topping.', ingredients: ['flour', 'sugar', 'butter', 'milk', 'yeast', 'eggs', 'vanilla extract', 'cornstarch', 'almonds', 'honey'], instructions: ['Make the yeast dough', 'Make the custard filling', 'Caramelize the almonds', 'Assemble the cake', 'Bake the cake'], recipes_related: ['Müsli']},
                {id: 02, image:'./images/recipes/musli.png', likes: '20', name: 'Müsli', category: 'Breakfast', prep_time: '10 min', cook_time: '0 min', total_time: '10 min', portions: 2, complexity: 'easy', occasion: 'Mom Day', description: 'Müsli is a popular German breakfast dish that typically consists of rolled oats, fruit, and nuts. It can be served with yogurt or milk.', ingredients: ['rolled oats', 'milk', 'yogurt', 'honey', 'blueberries', 'almonds'], instructions: ['Mix the oats, milk, and yogurt together', 'Add the honey, blueberries, and almonds', 'Enjoy!'], recipes_related: ['Bienenstich']},
                {id: 03, image:'./images/recipes/gluhwein.png', likes: '30', name: 'Glühwein',  category: 'Drinks', prep_time: '5 minutes', cook_time: '30 minutes', total_time: '35 minutes', portions: 8, complexity: 'Easy', occasion: 'Christmas', description: 'A classic hot mulled wine that is perfect for the winter season.', ingredients: ['1 bottle of red wine', '1/2 cup sugar', '1/2 cup water', '1 orange, sliced', '1/2 lemon, sliced', '1 cinnamon stick', '4 cloves', '1 star anise'], instructions: 'Combine all ingredients in a large pot and heat until the mixture is hot and the sugar is dissolved. Do not boil. Serve hot.', recipes_related: ['Spiced Apple Cider', 'Hot Toddy']},
                {id: 04, image:'./images/recipes/berliner_weisse.png', likes: '40', name: 'Berliner Weisse', category: 'Drinks', prep_time: '15 minutes', cook_time: '0 minutes', total_time: '15 minutes', portions: 2, complexity: 'Intermediate', occasion: 'Summer', description: 'A refreshing and tart wheat beer that is perfect for a hot summer day.', ingredients: ['2 cups Berliner Weisse beer', '1/2 cup raspberry syrup', '1/2 cup woodruff syrup', '1 lemon, sliced'], instructions: 'Fill two glasses with ice. Pour the beer into the glasses, then add the raspberry syrup and woodruff syrup. Stir gently. Garnish with lemon slices and serve.', recipes_related: ['Hefeweizen', 'Radler']},
                {id: 05, image:'./images/recipes/schnitzel.png', likes: '50', name: 'Schnitzel', category: 'Entrees', prep_time: '15 min', cook_time: '15 min', total_time: '30 min', portions: 4, complexity: 'Intermediate', occasion: 'Kids Day', description: 'Traditional German schnitzel made with breaded pork cutlets.', ingredients: ['4 pork cutlets', '1 cup breadcrumbs', '1/2 cup flour', '2 eggs', '1/4 cup milk', 'Salt and pepper to taste', 'Oil for frying'], instructions: ['1. Preheat the oven to 375°F.', '2. Beat the eggs and milk together in a shallow dish.', '3. Mix the breadcrumbs, flour, salt, and pepper together in another shallow dish.', '4. Dip each pork cutlet in the egg mixture, then coat with the breadcrumb mixture.', '5. Heat oil in a large skillet over medium-high heat.', '6. Fry the pork cutlets for 3-4 minutes on each side until golden brown.', '7. Transfer the pork cutlets to a baking sheet and bake in the oven for 10 minutes.', '8. Serve with your favorite sides.'], recipes_related: ['German potato salad', 'Red cabbage']},
                {id: 06, image:'./images/recipes/spatzle.png', likes: '60', name: 'Spätzle', category: 'Entrees',prep_time: '10 min', cook_time: '20 min', total_time: '30 min', portions: 4, complexity: 'Easy', occasion: 'Lunch', description: 'Homemade German egg noodles made with flour, eggs, and milk.', ingredients: ['2 cups flour', '3 eggs', '1/2 cup milk', 'Salt and pepper to taste', '1/4 cup butter'], instructions: ['1. Combine the flour, eggs, milk, salt, and pepper in a mixing bowl.', '2. Beat the mixture until it forms a smooth dough.', '3. Bring a large pot of salted water to a boil.', '4. Using a spaetzle maker or a colander with large holes, press the dough into the boiling water.', '5. Cook the spaetzle for 2-3 minutes or until they float to the surface.', '6. Remove the spaetzle with a slotted spoon and drain them in a colander.', '7. Melt the butter in a skillet over medium heat.', '8. Add the spaetzle to the skillet and cook for 2-3 minutes, stirring occasionally.', '9. Serve as a side dish with your favorite German meal.'], recipes_related: ['Sauerbraten', 'Bratwurst']},
                {id: 07, image:'./images/recipes/kartoffelpuffer.png', likes: '70', name: 'Kartoffelpuffer', category: 'Lunch', prep_time: '15 minutes', cook_time: '15 minutes', total_time: '30 minutes', portions: 4, complexity: 'Easy', occasion: 'Holy Week', description: 'Thin, crispy, golden-brown potato pancakes that are crispy on the outside and tender on the inside.', ingredients: ['2 lbs. potatoes, peeled and grated', '1 small onion, grated', '2 eggs, lightly beaten', '1/2 cup flour', '1/2 tsp. baking powder', '1 tsp. salt', '1/4 tsp. black pepper', 'Vegetable oil, for frying'], instructions: ['In a large bowl, combine the grated potatoes, grated onion, eggs, flour, baking powder, salt, and pepper.', 'Heat a large non-stick skillet over medium-high heat.', 'Add enough vegetable oil to cover the bottom of the skillet.','Using a tablespoon, drop the potato mixture into the skillet and flatten them slightly with the back of a spoon.', 'Fry the potato pancakes until golden brown, about 2-3 minutes per side.', 'Drain on paper towels and serve hot.'], recipes_related: ['Red Cabbage Salad', 'German Apple Pancake','Rote Grütze (Red Berry Pudding)']},
                {id: 08, image:'./images/recipes/leberknodel.png', likes: '80', name: 'Leberknödel', category: 'Lunch', prep_time: '20 minutes', cook_time: '30 minutes', total_time: '50 minutes', portions: 6, complexity: 'Intermediate', occasion: 'Christmas', description: 'Soft and flavorful dumplings made with liver, bread crumbs, and spices.', ingredients: ['1 lb. beef liver', '1 onion, finely chopped', '1 cup bread crumbs', '1/2 cup milk', '1/2 cup flour', '2 eggs, beaten', '1/4 cup parsley, chopped', '1/4 tsp. nutmeg', '1/4 tsp. salt', '1/8 tsp. black pepper', '6 cups beef broth'], instructions: ['Cook the liver in boiling water for 10 minutes.', 'Remove the liver from the water and let cool.', 'Chop the liver finely and mix with the chopped onion, bread crumbs, milk, flour, eggs, parsley, nutmeg, salt, and pepper in a large bowl.', 'Shape the mixture into small balls and place on a lightly floured surface.', 'Bring the beef broth to a boil in a large pot.', 'Add the liver dumplings to the pot and simmer for 30 minutes.', 'Serve hot.'], recipes_related: ['Beef Goulash Soup', 'German Potato Soup', 'Kaiserschmarrn (Shredded Pancake)']},
                {id: 09, image:'./images/recipes/black_forest.png', likes: '90', name: 'Black Forest Cake', category: 'Desserts', prep_time: '30 minutes', cook_time: '30 minutes', total_time: '1 hour', portions: '8', complexity: 'Intermediate', occasion: 'Celebrations', description: 'A classic German cake made with layers of chocolate sponge cake, cherries, and whipped cream, topped with chocolate shavings.', ingredients: ['eggs', 'sugar', 'flour', 'cocoa powder', 'baking powder', 'cherry pie filling', 'heavy cream', 'vanilla extract', 'chocolate shavings'], instructions: 'Combine the dry ingredients and wet ingredients separately. Then mix them together to make the cake batter. Bake the cake in two layers. Once cooled, assemble the cake with cherry pie filling and whipped cream. Finally, top it with chocolate shavings.', recipes_related: ['Cherry Streusel Cake', 'Raspberry Yogurt Cake'] },
                {id: 10, image:'./images/recipes/apple_strudel.png', likes: '100', name: 'Apple Strudel', category: 'Desserts', prep_time: '45 minutes', cook_time: '30 minutes', total_time: '1 hour 15 minutes', portions: '6', complexity: 'Easy', occasion: 'Afternoon tea', description: 'A sweet pastry made with paper-thin layers of phyllo dough and filled with spiced apples, raisins, and nuts.', ingredients: ['phyllo dough', 'butter', 'apples', 'sugar', 'cinnamon', 'raisins', 'walnuts'], instructions: 'Melt the butter and brush it on the phyllo dough layers. Combine the apples, sugar, cinnamon, raisins, and walnuts to make the filling. Place the filling on the phyllo dough layers and roll them up. Bake in the oven until golden brown.', recipes_related: ['Cherry Strudel', 'Cheese Strudel'] },
                {id: 11, image:'./images/recipes/erbsensuppe.png', likes: '110', name: 'Erbsensuppe', category: 'Soups', prep_time: '15 minutes', cook_time: '1 hour', total_time: '1 hour 15 minutes', portions: 6, complexity: 'Easy', occasion: 'Birthday', description: 'A traditional pea soup made with ham hock, carrots, and potatoes.', ingredients: ['dried peas', 'ham hock', 'carrots', 'potatoes', 'onion', 'bay leaves', 'salt', 'pepper'], instructions: 'Soak the peas overnight. Drain and rinse the peas. Add the peas, ham hock, chopped vegetables, bay leaves, salt, and pepper to a pot. Cover with water and bring to a boil. Reduce heat and simmer until the peas are tender and the ham falls off the bone. Remove the ham and bay leaves. Blend the soup until smooth. Cut the ham into pieces and add it back to the soup.', recipes_related: ['Kartoffelsuppe', 'Gulaschsuppe']},
                {id: 12, image:'./images/recipes/kartoffelsuppe.png', likes: '10', name: 'Kartoffelsuppe', category: 'Soups', prep_time: '20 minutes', cook_time: '45 minutes', total_time: '1 hour 5 minutes', portions: 4, complexity: 'Intermediate', occasion: 'Lunch or dinner', description: 'A creamy potato soup with bacon, leeks, and carrots.', ingredients: ['potatoes', 'bacon', 'leeks', 'carrots', 'onion', 'garlic', 'vegetable broth', 'heavy cream', 'thyme', 'salt', 'pepper'], instructions: 'Fry the bacon until crispy. Remove from the pan and set aside. Add the onion, garlic, leeks, and carrots to the pan and cook until softened. Add the potatoes, vegetable broth, and thyme. Bring to a boil and simmer until the potatoes are tender. Remove the thyme and blend the soup until smooth. Stir in the heavy cream and season with salt and pepper. Serve with the crispy bacon on top.', recipes_related: ['Erbsensuppe', 'Linsensuppe']},
            ],
            featuredRecipes:[
                {id: 03, image:'./images/recipes/gluhwein.png', likes: '30', name: 'Glühwein',  category: 'Drinks', prep_time: '5 minutes', cook_time: '30 minutes', total_time: '35 minutes', portions: 8, complexity: 'Easy', occasion: 'Christmas', description: 'A classic hot mulled wine that is perfect for the winter season.', ingredients: ['1 bottle of red wine', '1/2 cup sugar', '1/2 cup water', '1 orange, sliced', '1/2 lemon, sliced', '1 cinnamon stick', '4 cloves', '1 star anise'], instructions: 'Combine all ingredients in a large pot and heat until the mixture is hot and the sugar is dissolved. Do not boil. Serve hot.', recipes_related: ['Spiced Apple Cider', 'Hot Toddy']},
                {id: 04, image:'./images/recipes/berliner_weisse.png', likes: '40', name: 'Berliner Weisse', category: 'Drinks', prep_time: '15 minutes', cook_time: '0 minutes', total_time: '15 minutes', portions: 2, complexity: 'Intermediate', occasion: 'Summer', description: 'A refreshing and tart wheat beer that is perfect for a hot summer day.', ingredients: ['2 cups Berliner Weisse beer', '1/2 cup raspberry syrup', '1/2 cup woodruff syrup', '1 lemon, sliced'], instructions: 'Fill two glasses with ice. Pour the beer into the glasses, then add the raspberry syrup and woodruff syrup. Stir gently. Garnish with lemon slices and serve.', recipes_related: ['Hefeweizen', 'Radler']},
                {id: 05, image:'./images/recipes/schnitzel.png', likes: '50', name: 'Schnitzel', category: 'Entrees', prep_time: '15 min', cook_time: '15 min', total_time: '30 min', portions: 4, complexity: 'Intermediate', occasion: 'Kids Day', description: 'Traditional German schnitzel made with breaded pork cutlets.', ingredients: ['4 pork cutlets', '1 cup breadcrumbs', '1/2 cup flour', '2 eggs', '1/4 cup milk', 'Salt and pepper to taste', 'Oil for frying'], instructions: ['1. Preheat the oven to 375°F.', '2. Beat the eggs and milk together in a shallow dish.', '3. Mix the breadcrumbs, flour, salt, and pepper together in another shallow dish.', '4. Dip each pork cutlet in the egg mixture, then coat with the breadcrumb mixture.', '5. Heat oil in a large skillet over medium-high heat.', '6. Fry the pork cutlets for 3-4 minutes on each side until golden brown.', '7. Transfer the pork cutlets to a baking sheet and bake in the oven for 10 minutes.', '8. Serve with your favorite sides.'], recipes_related: ['German potato salad', 'Red cabbage']},
                {id: 06, image:'./images/recipes/spatzle.png', likes: '60', name: 'Spätzle', category: 'Entrees',prep_time: '10 min', cook_time: '20 min', total_time: '30 min', portions: 4, complexity: 'Easy', occasion: 'Lunch', description: 'Homemade German egg noodles made with flour, eggs, and milk.', ingredients: ['2 cups flour', '3 eggs', '1/2 cup milk', 'Salt and pepper to taste', '1/4 cup butter'], instructions: ['1. Combine the flour, eggs, milk, salt, and pepper in a mixing bowl.', '2. Beat the mixture until it forms a smooth dough.', '3. Bring a large pot of salted water to a boil.', '4. Using a spaetzle maker or a colander with large holes, press the dough into the boiling water.', '5. Cook the spaetzle for 2-3 minutes or until they float to the surface.', '6. Remove the spaetzle with a slotted spoon and drain them in a colander.', '7. Melt the butter in a skillet over medium heat.', '8. Add the spaetzle to the skillet and cook for 2-3 minutes, stirring occasionally.', '9. Serve as a side dish with your favorite German meal.'], recipes_related: ['Sauerbraten', 'Bratwurst']},
                {id: 07, image:'./images/recipes/kartoffelpuffer.png', likes: '70', name: 'Kartoffelpuffer', category: 'Lunch', prep_time: '15 minutes', cook_time: '15 minutes', total_time: '30 minutes', portions: 4, complexity: 'Easy', occasion: 'Holy Week', description: 'Thin, crispy, golden-brown potato pancakes that are crispy on the outside and tender on the inside.', ingredients: ['2 lbs. potatoes, peeled and grated', '1 small onion, grated', '2 eggs, lightly beaten', '1/2 cup flour', '1/2 tsp. baking powder', '1 tsp. salt', '1/4 tsp. black pepper', 'Vegetable oil, for frying'], instructions: ['In a large bowl, combine the grated potatoes, grated onion, eggs, flour, baking powder, salt, and pepper.', 'Heat a large non-stick skillet over medium-high heat.', 'Add enough vegetable oil to cover the bottom of the skillet.','Using a tablespoon, drop the potato mixture into the skillet and flatten them slightly with the back of a spoon.', 'Fry the potato pancakes until golden brown, about 2-3 minutes per side.', 'Drain on paper towels and serve hot.'], recipes_related: ['Red Cabbage Salad', 'German Apple Pancake','Rote Grütze (Red Berry Pudding)']},
                {id: 08, image:'./images/recipes/leberknodel.png', likes: '80', name: 'Leberknödel', category: 'Lunch', prep_time: '20 minutes', cook_time: '30 minutes', total_time: '50 minutes', portions: 6, complexity: 'Intermediate', occasion: 'Christmas', description: 'Soft and flavorful dumplings made with liver, bread crumbs, and spices.', ingredients: ['1 lb. beef liver', '1 onion, finely chopped', '1 cup bread crumbs', '1/2 cup milk', '1/2 cup flour', '2 eggs, beaten', '1/4 cup parsley, chopped', '1/4 tsp. nutmeg', '1/4 tsp. salt', '1/8 tsp. black pepper', '6 cups beef broth'], instructions: ['Cook the liver in boiling water for 10 minutes.', 'Remove the liver from the water and let cool.', 'Chop the liver finely and mix with the chopped onion, bread crumbs, milk, flour, eggs, parsley, nutmeg, salt, and pepper in a large bowl.', 'Shape the mixture into small balls and place on a lightly floured surface.', 'Bring the beef broth to a boil in a large pot.', 'Add the liver dumplings to the pot and simmer for 30 minutes.', 'Serve hot.'], recipes_related: ['Beef Goulash Soup', 'German Potato Soup', 'Kaiserschmarrn (Shredded Pancake)']},
                {id: 09, image:'./images/recipes/black_forest.png', likes: '90', name: 'Black Forest Cake', category: 'Desserts', prep_time: '30 minutes', cook_time: '30 minutes', total_time: '1 hour', portions: '8', complexity: 'Intermediate', occasion: 'Celebrations', description: 'A classic German cake made with layers of chocolate sponge cake, cherries, and whipped cream, topped with chocolate shavings.', ingredients: ['eggs', 'sugar', 'flour', 'cocoa powder', 'baking powder', 'cherry pie filling', 'heavy cream', 'vanilla extract', 'chocolate shavings'], instructions: 'Combine the dry ingredients and wet ingredients separately. Then mix them together to make the cake batter. Bake the cake in two layers. Once cooled, assemble the cake with cherry pie filling and whipped cream. Finally, top it with chocolate shavings.', recipes_related: ['Cherry Streusel Cake', 'Raspberry Yogurt Cake'] },
                {id: 10, image:'./images/recipes/apple_strudel.png', likes: '100', name: 'Apple Strudel', category: 'Desserts', prep_time: '45 minutes', cook_time: '30 minutes', total_time: '1 hour 15 minutes', portions: '6', complexity: 'Easy', occasion: 'Afternoon tea', description: 'A sweet pastry made with paper-thin layers of phyllo dough and filled with spiced apples, raisins, and nuts.', ingredients: ['phyllo dough', 'butter', 'apples', 'sugar', 'cinnamon', 'raisins', 'walnuts'], instructions: 'Melt the butter and brush it on the phyllo dough layers. Combine the apples, sugar, cinnamon, raisins, and walnuts to make the filling. Place the filling on the phyllo dough layers and roll them up. Bake in the oven until golden brown.', recipes_related: ['Cherry Strudel', 'Cheese Strudel'] },
                {id: 11, image:'./images/recipes/erbsensuppe.png', likes: '110', name: 'Erbsensuppe', category: 'Soups', prep_time: '15 minutes', cook_time: '1 hour', total_time: '1 hour 15 minutes', portions: 6, complexity: 'Easy', occasion: 'Birthday', description: 'A traditional pea soup made with ham hock, carrots, and potatoes.', ingredients: ['dried peas', 'ham hock', 'carrots', 'potatoes', 'onion', 'bay leaves', 'salt', 'pepper'], instructions: 'Soak the peas overnight. Drain and rinse the peas. Add the peas, ham hock, chopped vegetables, bay leaves, salt, and pepper to a pot. Cover with water and bring to a boil. Reduce heat and simmer until the peas are tender and the ham falls off the bone. Remove the ham and bay leaves. Blend the soup until smooth. Cut the ham into pieces and add it back to the soup.', recipes_related: ['Kartoffelsuppe', 'Gulaschsuppe']},
                {id: 01, image:'./images/recipes/bienenstich.png', likes: '120', name: 'Bienenstich', category: 'Breakfast', prep_time: '30 min', cook_time: '25 min', total_time: '55 min', portions: 12, complexity: 'intermediate', occasion: 'Dad Day', description: 'Bienenstich, or "bee sting" cake, is a traditional German pastry that consists of a yeast dough, a vanilla custard filling, and a caramelized almond topping.', ingredients: ['flour', 'sugar', 'butter', 'milk', 'yeast', 'eggs', 'vanilla extract', 'cornstarch', 'almonds', 'honey'], instructions: ['Make the yeast dough', 'Make the custard filling', 'Caramelize the almonds', 'Assemble the cake', 'Bake the cake'], recipes_related: ['Müsli']},
            ],
        }
    },
    mounted: function(){
        this.allRecipes = this.featuredRecipes;
    },
    methods:{
        onClickLike(index){
            //console.log("btn - click");
            this.featuredRecipes[index].likes += 1;
            this.featuredRecipes[index].likes += 1;
        },
        onClickUnlike(index){
            //console.log("btn - click");
            if(this.featuredRecipes[index].likes > 0) this.featuredRecipes[index].likes -= 1;
            if(this.recipesList[index].likes > 0) this.recipesList[index].likes -= 1;
        },
        onClickCategory(category){
            if(category == "All"){
                this.featuredRecipes = this.allRecipes;
            }else{
                this.featuredRecipes = this.allRecipes;
                let recipesInCategory = this.featuredRecipes.filter(function(el){
                    return el.category === categories;
                });
                if(recipesInCategory.length > 0){
                    this.hasRecipes = true;
                    this.featuredRecipes = recipesInCategory;
                }else{
                    this.hasRecipes = false;
                }
                
            }
        },
        onClickViewRecipe(index){
            this.selectedIndex = index;
        },
        onClickPrevFeatured(){
            this.selectedIndex--;
            if(this.selectedIndex < 0) this.selectedIndex = this.featuredRecipes.length-1;
        },
        onClickNextFeatured(){
            this.selectedIndex++;
            if(this.selectedIndex > this.featuredRecipes.length-1) this.selectedIndex = 0;
        },
        onClickPrevList(){
            this.selectedIndex--;
            if(this.selectedIndex < 0) this.selectedIndex = this.recipesList.length-1;
        },
        onClickNextList(){
            this.selectedIndex++;
            if(this.selectedIndex > this.recipesList.length-1) this.selectedIndex = 0;
        }
    }
});

