## Pokedex

... Description


## Technology 

Here are the technologies used in this project.

* Typescript version  ~3.8.2
* React version ^16.13.1


## Javascript libs

* axios
* react-router-dom
* react-bootstrap
* styled-components
* styled-icons
* react-js-pagination


## Getting started

* To install libs:
>    $ yarn install
* To run the project:
>    $ yarn start

## Features
- I used @media queries and flexbox to make a responsive layout
  - The navbar has two differents views depending the size of screen
  - The evolutions of pokemon is horizontal when large screen and vertical on a small screen
  - The cards of each pokemon is responsive for large and small screens
  
- To favorite a pokemon, the application saves the favored pokemon in the localStorage of browser.
  - If the pokemon is already favored, then It get removed

- When using pagination, the application uses sessionStorage to save the current page, e.g: you are in the page 5 and open the pikachu details, when you go back to Home page, the pagination are open in the page 5 instead of page 1.
  - The data only get downloaded from API according the changing page
  - When the page changes a new request is made

- The search only let the searching if the input is filled
  - You can search by writting the pokemon's name or its number
  - To search you can press Enter key or clicking on the button

## How to use

### Home Page

![Home page](https://raw.githubusercontent.com/lucasgrocha/pokedex/documentation/public/readmeImages/home.png)

### Details Page

![Details page](https://raw.githubusercontent.com/lucasgrocha/pokedex/documentation/public/readmeImages/details.png)<br />

### Favorites Page

![Favorites page](https://raw.githubusercontent.com/lucasgrocha/pokedex/documentation/public/readmeImages/favorites.png)

### Not found Page

![Not found page](https://raw.githubusercontent.com/lucasgrocha/pokedex/documentation/public/readmeImages/notFoundPokemon.png)

### PWA install

![PWA intall](https://raw.githubusercontent.com/lucasgrocha/pokedex/documentation/public/readmeImages/pwa.png)




## Links

- Link of deployed application: https://musing-swartz-7c8aef.netlify.app/
- Repository: https://github.com/lucasgrocha/pokedex


## Author

* **Lucas G Rocha**: @lucasgrocha (https://github.com/lucasgrocha)
