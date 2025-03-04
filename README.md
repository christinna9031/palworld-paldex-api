<h1 align="center">
  <img alt="Palworld Paldex" title="Palworld Paldex" src=".github/pal.png" width="200px" />
</h1>

<h3 align="center">
  Palworld Paldex API
</h3>
<h6 align="center"><i>First Palworld API</i></h6>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mlg404/palworld-paldex-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mlg404/palworld-paldex-api.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mlg404/palworld-paldex-api.svg">
  <a href="https://github.com/mlg404/palworld-paldex-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mlg404/palworld-paldex-api.svg">
  </a>

  <a href="https://github.com/mlg404/palworld-paldex-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/mlg404/palworld-paldex-api.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/mlg404/palworld-paldex-api.svg">
</p>
<p align="center"><a href="https://www.buymeacoffee.com/mlg404"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mlg404&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a></p>

<p align="center">
  <a href="#rocket-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to">How to</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mag_right-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#busts_in_silhouette-contribute">Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Info

This is the first Palworld API, it's a simple API to get all Palworld Paldex data.

<details>
  <summary>This is what final data looks like</summary>

```json
{
  "content": [
    {
      "id": 85,
      "key": "085",
      "image": "/public/images/paldeck/085.png",
      "name": "Relaxaurus",
      "wiki": "https://palworld.fandom.com/wiki/Relaxaurus",
      "types": ["dragon", "water"],
      "imageWiki": "https://static.wikia.nocookie.net/palworld/images/0/01/Relaxaurus_menu.png/",
      "suitability": [
        {
          "type": "watering",
          "image": "/public/images/works/watering.png",
          "level": 2
        },
        {
          "type": "transporting",
          "image": "/public/images/works/transporting.png",
          "level": 1
        }
      ],
      "drops": ["high_quality_pal_oil", "ruby"],
      "aura": {
        "name": "hungry_missile",
        "description": "Can be ridden. Can rapidly fire a missile launcher while mounted.",
        "tech": null
      },
      "description": "Contrary to its blasé appearance, it's quite ferocious.\nIt perceives everything in its sight as prey and will stop at nothing to devour it.",
      "skills": [
        {
          "level": 1,
          "name": "dragon_cannon",
          "type": "dragon",
          "cooldown": 2,
          "power": 30,
          "description": "Hurls an energy ball imbued with draconic energy at an enemy.\n"
        },
        {
          "level": 7,
          "name": "aqua_gun",
          "type": "water",
          "cooldown": 4,
          "power": 40,
          "description": "Hurls a ball of water straight at an enemy.\n"
        },
        {
          "level": 15,
          "name": "dragon_burst",
          "type": "dragon",
          "cooldown": 10,
          "power": 55,
          "description": "Quickly discharges draconic energy, damaging those around it.\n"
        },
        {
          "level": 22,
          "name": "bubble_blast",
          "type": "water",
          "cooldown": 13,
          "power": 65,
          "description": "Fires numerous bubbles that slowly pursue an enemy.\n"
        },
        {
          "level": 30,
          "name": "draconic_breath",
          "type": "dragon",
          "cooldown": 15,
          "power": 70,
          "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.\n"
        },
        {
          "level": 40,
          "name": "aqua_burst",
          "type": "water",
          "cooldown": 30,
          "power": 100,
          "description": "Creates a giant ball of water and hurls it at an enemy.\n"
        },
        {
          "level": 50,
          "name": "dragon_meteor",
          "type": "dragon",
          "cooldown": 55,
          "power": 150,
          "description": "Calls down numerous small meteorites and launches them at an enemy.\n"
        }
      ],
      "stats": {
        "hp": 110,
        "attack": {
          "melee": 110,
          "ranged": 100
        },
        "defense": 70,
        "speed": {
          "ride": 800,
          "run": 650,
          "walk": 60
        },
        "stamina": 100,
        "support": 100
      },
      "asset": "LazyDragon",
      "genus": "monster",
      "rarity": 8,
      "price": 10240,
      "size": "xl"
    }
  ],
  "page": 1,
  "limit": 10,
  "count": 1,
  "total": 1
}
```

</details>

## :computer: Technologies

This project was developed following this technologies:

- [bun](https://bun.sh/)
- [Prettier](https://prettier.io/)
- [ElysiaJS](https://elysiajs.com/)
- [VS Code][vc]
- [Typescript](https://www.typescriptlang.org/)
- [elasticlunr](https://github.com/weixsong/elasticlunr.js)

## :information_source: How To

To clone this application you will need [Git](https://git-scm.com) + [bun](https://bun.sh/). Run in terminal:

```bash
##### Clone this repo #####

# https
$ git clone https://github.com/mlg404/palworld-paldex-api.git

# ssh
$ git clone git@github.com:mlg404/palworld-paldex-api.git

##### Access this repo #####
$ cd palworld-paldex-api

##### Install dependencies #####
$ bun install

##### Run the application #####
$ bun start
```

You also can run it easily with Docker:

```bash
docker-compose up
```

After that, just choose your favorite API client and make a request to `http://localhost:3000`.

You can pass some query params to the request, like `http://localhost:3000?page=1&limit=10&name=Relaxaurus`.

All query params are optional, but you can use them to filter the results.

| Param       | Type   | Description                                           |
| ----------- | ------ | ----------------------------------------------------- |
| page        | number | The page number you want to get. Default is 1.        |
| limit       | number | The number of results you want to get. Default is 10. |
| name        | string | The name of the Pal you want to get.                  |
| types       | string | The type of the Pal you want to get.                  |
| suitability | string | The suitability of the Pal you want to get.           |
| drops       | string | The drop of the Pal you want to get.                  |
| key         | string | The key of the Pal you want to get.                   |
| **term\***  | string | The term you want to search.                          |

\***_This api provides full text search with Elasticlunr, so you can search for any term in the Palworld Paldex._**

## :mag_right: Functionalities

See the current features!

- ElysiaJS for fast and easy API development;
- Elasticlunr for fast and easy full text search;
- useCase's structure for better code organization;
- typescript for better code quality;
- typesafety for better code quality;
- Docker

## :stars: Upcoming features

- Error handling
- Eslint and Prettier
- Tests

## :test_tube: Testing

Testing is a crucial part of maintaining the quality and reliability of the Palworld Paldex API. This section explains how to run the tests and provides a brief overview of the testing setup.

### Running the Tests

To ensure that the API functions as expected, follow these steps to run the tests:

```bash
$ bun test
```

This will run all the automated tests and display the results.

### Types of Tests (WIP)

The testing suite includes the following types of tests:

- **Unit Tests**: These tests cover individual functions and components to ensure they behave as expected in isolation.

### Test Coverage

We aim to cover as much of the codebase as possible with our tests to maintain high standards of quality and reliability. Test coverage metrics are regularly updated and can be viewed in the test reports.

### Continuous Integration

WIP

### Contributing to Tests

Contributions to improve or add tests are always welcome. If you're interested in contributing, please follow the guidelines in the [Contribute](#busts_in_silhouette-contribute) section.

## :busts_in_silhouette: Contribute

- Fork this repository;
- Create one branch with your feature: `git checkout -b my-feature`;
- Commit your alterations: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Open a pull request with your branch. After pull request merge, you should delete your branch.
<br />

## :memo: License

This project is under MIT license. See [LICENSE](https://github.com/mlg404/palworld-paldex-api/blob/master/LICENSE) for more information.

---

Made with 💙 by Victor Eyer :wave: [Get in touch!](https://www.linkedin.com/in/victoreyer/)

[vc]: https://code.visualstudio.com/

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Contributions

- [Discord Bot Using this API](https://github.com/nibalizer/palbot-rs/)
- [Mobile APP - PalPad](https://github.com/Juanvic/PalPad)
