# Frontend Boilerplate
_Work in progress_!
A boilerplate to quick start frontend projects.  
Powered by React and Webpack.  
No SSR by design.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Objectives:

- Modern frontend tools
  - [x] Npm as build tool
  - [x] Use Hot Module Replacement (HMR)
  - [x] Create React App as development experience
    - [x] Webpack as build tool and development server
    - [x] Eslint with Create React App preset
    - [x] Babel to transpile ECMA features to modern browsers
    - [x] Modern ECMA features
    - [ ] Jest as test framework
  - [ ] React Storybook for easy ui components development and showcase
  - [x] React as view layer
  - [x] Google Material as UI
    - Don't use ui library directly on project.
    - Define project specific ui componentes that wraps it instead.
  - [ ] React Router
  - [ ] Redux as state management tool
  - [ ] Redux dev tool for time travel
- Focus on developer experience
  - Keep it simple when possible.
  - No local configuration. Just works.
  - [x] "npm start" is the developer entry point, not "npm run dev".
  - Let other environments (production, staging, CI) do the hard lifting.
    - [ ] Online Example as demonstration
- Focus on "serverless" architectures.
  - No server side rendering (no SSR), it must be deployable to static services, like AWS S3.
  - Serverless architecure avoids server management. For example this AWS stack: S3 + API Gateway + Lambda + RDS.
    - [ ] Integrate Online Example with an Online Stateless Architecture API as demonstration
