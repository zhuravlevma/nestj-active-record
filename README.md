## Description
This is an example that was inspired by Vlad Kononov's book **[Learning DDD](https://learning.oreilly.com/library/view/learning-domain-driven-design/9781098100124/)**. This is an attempt to make a small piece with a layered architecture and Active Recording.
![decision_tree](https://user-images.githubusercontent.com/44276887/234344566-9febf11d-347f-4fe0-98be-6e6cd878e596.png)


## Schema
```mermaid

  flowchart TD
    subgraph module1[module]
    subgraph web[web]
    controllers1(controllers) -- uses -->dtos1(dtos)
    end
    controllers1 -- uses --> services1(service </br> use case layer)
    end

    subgraph module2[module]
    subgraph web2[web]
    controllers2(controllers) -- uses -->dtos2(dtos)
    end
    controllers2 -- uses --> services2(service </br> use case layer)
    end


    services1 -- uses --> respoitory1(repositories </br> dal)
    services1 -- uses --> model1(models </br> with domain logic)
    respoitory1 -- uses --> model1

    services2 -- uses --> respoitory2(repositories </br> dal)
    respoitory2 -- uses --> model2
    services2 -- uses --> model2(models </br> with domain logic)
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
