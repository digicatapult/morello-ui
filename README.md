# Morello UI
A GUI for executing binaries on morello board


## Integration E2E testing
This repository uses Cypress for testing UI. Specs can be found in `cypress/integration`.
**Test Types**
- `smoke` - checks if renders root component

### Local development
Pretty much a standard one as for every other ReactJS app. There will be some .env that will require to be added/updated, but for time being it's to early.

1. Start with installing dependencies
```
npm i
```
2. Start the development webpack
```
npm run dev
```
#### Production
For production and a web service we will utilise webpack to bundle everything together by running the below command
```
npm build
```
This will create a `build/` folder where bundled .js files will live which can be served by the web service.


### Project Insights
> Web Assets like images fonts and etc
- loaders are configured in `webpack.config` and also would need to be installed, however in the newer versions of webpack they have changed to `type: asset/....`
- fonts are stored in `src/assets/fonts`
- fonts are imported globally in `index.js` and it also has fonts.js in `src/assets/fonts`
- images are also stored in `src/assets/images` and loaders configured in `webpack.config`

> Folder structure
```
├── build
│   ├── bundle.e66156fa8b5d5561d0f8.js
│   ├── bundle.e66156fa8b5d5561d0f8.js.map
│   └── index.html
├── cypress
│   ├── downloads
│   ├── integration
│   │   └── smoke-test.spec.js
│   ├── screenshots
│   │   └── smoke-test.spec.js
│   │       └── smoke test -- renders DOM -- before each hook (failed).png
│   └── videos
│       └── smoke-test.spec.js.mp4
├── cypress.config.js
├── package-lock.json
├── package.json
├── scripts
│   └── check-version.sh
├── src
│   ├── assets
│   │   ├── fonts
│   │   │   ├── AktivGrotesk.woff
│   │   │   ├── AktivGrotesk.woff2
│   │   │   └── fonts.js
│   │   └── images
│   │       ├── card-arrow.png
│   │       └── logo.png
│   ├── components
│   │   ├── App.js
│   │   ├── Card.js
│   │   ├── Common.js
│   │   ├── Header.js
│   │   ├── MainMenu.js
│   │   └── Router.js
│   ├── fixtures
│   │   └── demos.js
│   ├── index.html
│   ├── index.js
│   └── utils
│       ├── context.js
│       └── morello-api.js
└── webpack.config.js
```

> Environment variable
- at the moment we don;'t check types, but looks like in the future we will implement envalid
- all env vars are loaded via webpack and mapped to `priocess.env`
- also .env is not in gitignore just yet
