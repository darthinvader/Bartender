<h1>Bartender</h1>

A Bartender app that searches a drink based on an input ingredient.

---

<h2>Search</h2>

The search takes one drink ingredient as input and returns a random drink that contain that ingredient. The drink is chosen from a list of drinks that are available in the thecocktaildb API.

The search is done by first querying the API for all drinks that contain the input ingredient. Then we select a random drink from that list of drinks.

![Search Screen](https://i.imgur.com/7vmQhgVh.png)

<h2>Cocktail Screen</h2>

The drink information contains the name of the drink, an image, a description, a list of ingredients and instructions as well as the serving glass.

![Cocktail Screen](https://i.imgur.com/RP3Z2GJh.png)

---

<h2>Technologies</h2>

- [React](https://facebook.github.io/react/)
- [Scss](http://sass-lang.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [SPA](https://en.wikipedia.org/wiki/Single-page_application)

---

<h2>Setup</h2>
Clone this repo and run `npm install` to install the dependencies.

---

<h2>Usage</h2>

After installing the dependencies run `npm start` to start the app.

If you want to deploy the app run `npm run build`.
