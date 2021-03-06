# Boilerplate for using Create React App with SSR (Server side rendering), TypeScript and MobX.
This project is boilerplate for starting a new app via CRA (create react app) with SSR (server side rendering), great documentation and some other modern useful stuff.
The only reason for creating this boilerplate is that CRA doesn't support SSR out of the box.

> Ultimately server-side rendering is very hard to add in a meaningful way without also taking opinionated decisions. We don’t intend to make such decisions at this time. — [Dan Abramov](https://github.com/facebook/create-react-app/issues/990#issuecomment-257172453)

I hope, someday it will change.   
 

## Technology stack
* [React](https://reactjs.org/) for building interfaces.
* [Typescript](https://www.typescriptlang.org/) for happy coding.
* [MobX](https://mobx.js.org/) for state management.
* [Express](https://expressjs.com/) as a web server for SSR (server side rendering).
* [React Router](https://github.com/ReactTraining/react-router) for client side routing.
* [React Helmet](https://github.com/nfl/react-helmet) for SEO (search engine optimization).
* [React Loadable](https://github.com/jamiebuilds/react-loadable) for component-based code splitting.
* [React i18next](https://react.i18next.com/) for localization.
* [Styled Components](https://www.styled-components.com/) for styling.
* [React Hydrate](https://reactjs.org/docs/react-dom.html#hydrate) for performance optimization after initial page render.  
* [React Styleguidist](https://react-styleguidist.js.org/) for components documentation.
* [EditorConfig](https://editorconfig.org/) maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

## Install dependencies
To install dependencies simply run ``sudo yarn install``.

## Developing client app
When developing client app you can run ``yarn start:client`` and use the standard development server that CRA provides.

## Developing SSR app
Before running the server, you must build client and server app first.
```bash
# build client
yarn build:client

# build server
yarn build:server

# run server
yarn start:server
```

## Deploy with docker
Run ```docker-compose up -d```
It will be run on: ```localhost:4089```

## Building documentation
Run ``yarn start:docs`` to start a style documentation dev server.
Run ``yarn build:docs`` to build a production HTML version.

## PS
- Please use ```yarn``` for avoiding conflict version between library.
- If you're developing, you should only run on client side for hot reload instead of server side.

## Contact
- Thanh Tran: quocthanh2694@gmail.com
