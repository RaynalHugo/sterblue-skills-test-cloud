# Setup

## Introduction

This file details how I proceeded to create this repo. If you want to redo it by yourself, you can follow this tutorial. Else, you don't need to read this file.

## Steps

1. Create the project using `creat-react-app`. It is a tool used to start a new react project from scratch. It will set the correct dependencies and make the default configuration.
   - On a new folder, install `create-react-app` using the command `npm install create-react-app`.
   - Then use the command `npm init react-app sterblue-skills-test-cloud`. It will create a new folder named `sterblue-skills-test-cloud` that contains everything needed to launch a basic react project.
   - Now move to the newly created folder using the command `cd sterblue-skills-test-cloud`.
   - If you need more information on `create-react-app`, you can visit their github : https://github.com/facebook/create-react-app

2) Install Storybook. Storybook is a tool that let you visualise your components in individual scenes called `stories`.

   - Use the command `npm install @storybook/react @storybook/addon-actions @storybook/addon-links @babel/core babel-loader @babel/plugin-syntax-class-properties` to install storybook and all its dependencies.
   - Now use the command `npx -p @storybook/cli sb init`. It will create its own config file and some demonstration stories in the folder `sterblue-skills-test-cloud/src/stories/`.
   - The default config only loads the stories from `sterblue-skills-test-cloud/src/stories/index.js`. We will edit this config in order to load everything in the `sterblue-skills-test-cloud/src/stories/` folder.
     Edit the config file located in `sterblue-skills-test-cloud/.storybook/config.js`.
     Replace its content with:

   ```javascript
   import { configure } from "@storybook/react";

   const req = require.context("../src/stories");
   function loadStories() {
     req.keys().forEach(req);
   }
   configure(loadStories, module);
   ```

   - You can now use the command `npm run storybook` in order to visualise your stories. It will be available from your web browser (we recommend using Chrome) at the address `http://localhost:9009/`. You will see the three examples made by Storybook.
   - If you need more informations about storybook, you can visit: https://github.com/storybooks/storybook

3) Now, we will create the template of our components and stories.

   - In the `sterblue-skills-test-cloud/src/` folder, create a new folder named `components`.
   - You will create 5 folders, named `mission`, `structure`, `user`, `image` and `anomaly`.
   - In each of this folder, you will create a fill named `index.js`.
   - This file will export the related component, for example:

   ```javascript
   import React from "react";

   export class Mission extends React.Component {
     render() {
       /* your code here */

       return <div>I am the mission component</div>;
     }
   }
   ```

   Note that, if you prefer functional components instead of class components, you are free to do as you want.

   - On the `sterblue-skills-test-cloud/src/stories/` folder, you will create a file for each type of entity (`mission.js`, `structure.js`). For example, the `mission.js` file should look like this:

   ```javascript
   import React from "react";
   import { storiesOf } from "@storybook/react";
   import { Mission } from "../components/mission";

   const mockData1 = {
     /* some mock data */
   };

   storiesOf("Mission", module)
     .add("with styledProp1 set to true", () => (
       <Mission data={mockData1} styleProp1={true} />
     ))
     .add("with styledProp1 set to false", () => (
       <Mission data={mockData1} styleProp1={false} />
     ));
   ```

   - While the `npm run storybook` command is running, it will listen to every change made in your code. It will automatically reload if you make any change. Thus, on the `http://localhost:9009/` page, you should see a new entry, named `Mission`. There are 2 different stories for this entry: `"with styledProp1 set to true"` and `"with styledProp1 set to false"` as we defined them earlier. For the moment, there should be no difference between this two stories, they should both display some text saying `I am the mission component`.
