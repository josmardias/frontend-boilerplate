# react-redux-boilerplate
_Work in progress_! A boilerplate to start with React and Redux, no SSR.

### Objectives:

- Modern frontend tools
  - [x] Npm as build tool
  - [x] Webpack as build tool and development server
  - [x] Use Hot Module Replacement (HMR)
  - [x] Eslint with airbnb preset
  - [ ] Google Material as UI
  - [x] Babel to transpile ECMA features to modern browsers
  - [x] React as view layer
  - [ ] React Router
  - [ ] Redux as state management tool
  - [ ] Redux dev tool for time travel
  - [ ] Mocha as test framework
  - [ ] Chai as assertion library (use "expect" flavor)
- Focus on developer experience
  - Keep it simple when possible.
  - No local configuration. Just works.
  - [x] "npm start" is the developer entry point, not "npm run dev". The developer is the rock star, not the production environement.
  - Let other environments (production, staging, CI) do the hard lifting.
    - [ ] Online Example as demonstration
- [x] Stage-2 ECMA features
  - The [TC39 process document](https://tc39.github.io/process-document/) calls stage 2 as "Draft" and states that the committee expects an eventual inclusion on the especification with only incremental changes.
- Focus on "serverless" architectures.
  - No server side rendering (no SSR), it must be deployable to static services, like AWS S3.
  - Serverless architecure avoids server management. For example this AWS stack: S3 + API Gateway + Lambda + RDS.
    - [ ] Integrate Online Example with an Online Stateless Architecture API as demonstration
