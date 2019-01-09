# Sterblue skills test - Cloud

## Introduction

The aim of this test is to evaluate your programming and problem solving capabilities. We are not interested only in the results. Some key qualities we are looking for are:

- Your ability to comment and **document** your code. A clear and easily understandable code will be appreciated. However, make sure the documentation is not too long.
- **Quality** of your code. We want your code to be as robust as possible. You should make sure your code won't crash if given some unexpected values. If necessary (and only if necessary), unit testing is a great way to ensure your code is behaving as you want it to.
- **Clarity** of your code. The consistency of your naming, spacing and indenting conventions will be appreciated.
- Your **decision-making** and **arguing** abilities will be important. When facing a decision, try to make the best choice, but in any case, you should be able to justify your decision.

Also, we do not expect from you to create the best project ever. It should be enough for use to judge your capabilities but the project does not need to be 100 % functional. As long as what you have done is well done, we don't need you to repeat the same tasks over and over.

If you need some help, or some clarification on the subject, **do not** hesitate to contact me ( hugo.raynal@sterblue.com ). You won't score less if you have questions. It's better to make a relevant project than not asking questions.

## Subject

You are asked to create some react components representing the basic entities of Sterblue. These entities are well defined in the annexe at the end of this document, their definitions are not exhaustive, they are simplified for the aim of this exercice.

The entities are:

- Mission
- Structure
- Image
- Anomaly
- User

All entities can be represented in JSON. You should use these JSON objects as inputs for your components.
An example of a component call is:

```javascript
<Mission
  data={{
    id: "missionId1",
    structures: [{ id: "structureId1" }, { id: "structureId2" }]
  }}
  styleProp1={true}
  styleProp2={"above"}
/>
```

In this example, the property `data` represents an extract of a JSON of a mission with id `missionId1`.
There are also two more props: `styleProp1` ans `styleProp2`. They are here for the example, feel free to use your own props and to give them explicit names.

Here is a mock-up realised by Sarah, our UX designer, on how the component mission could look like:
![enter image description here](https://lh3.googleusercontent.com/LzhpVJSrwpWRP7Y-RSa4-ggwmdOuqBiGERnkkDFNDcXMTp6bZWJ1ZihbZ2uBClwxa6-cnYFA_8ci "mock-up mission component")

This is just to give you an idea. You don't need to replicate this. You don't even need to display all data shown on this mock-up. A more minimalistic component would be enough.
Furthermore, this example was sized to be in a full page. However, you are free to choose the size that you want for your components.

## The project

We set up a project for you using [creat-react-app](https://github.com/facebook/create-react-app) to create an empty react project. Then, we did add a [storybook](https://github.com/storybooks/storybook) to our project.
Storybook let you visualise your components in separated scenes called "stories".
You are asked to create some components and to create associated stories in order to display your creations.

If you want more details on how we initialised the project so far, you can look at the setup.md file at the root of the repository.

### Requirements

- Node js v8.10.0 or more
- npm (or yarn)

### Setup

- A repository with some pre-made configuration is available here: https://github.com/RaynalHugo/sterblue-skills-test-cloud.git
- Fork the project on your GitHub.
- Clone your project locally.
- `cd sterblue-skills-test-cloud`
- Install all the dependencies of the project using `npm install`. It should take a few minutes (depending on your internet connection and your computer).
- You can now use the command `npm run storybook` in order to visualise the stories we already made for you. It will be available from your web browser (we recommend using Chrome) at the address `http://localhost:9009/`.
- You should see a 5 entries, named `Anomaly`, `Image`, `Mission`, `Structure` and `User`.
  For each entry, there are 2 different stories `"with styledProp1 set to true"` and `"with styledProp1 set to false"`. Those are examples. For the moment, there should be no difference between this two stories, they should both display some text saying `I am the XXXX component`.
- While the `npm run storybook` command is running, it will listen to every change made in your code. It will automatically reload if you make any change.

  **If you did not succeed to get to this point, contact me, we can do the setup together. This is not the most interesting part.**

Note that, in the examples, we used class components but if you prefer functional components, you are free to do as you want.

### Your work

- The folder `sterblue-skills-test-cloud/src/components` contains 5 folders: `anomaly`, `image`, `mission`, `structure` and `user`. Each folder contains an `index.js` file. This file exports the component `Anomaly` for the `anomaly` folder and so on.
  You should **edit these components** in order to display data according to your wishes.

- The folder `sterblue-skills-test-cloud/src/stories` contains the definition of the stories that you can visualise in the storybook.
  There is a file for each of the component that you are asked to develop. This file imports the corresponding component and calls it in two stories.  
  You should **edit these stories** in order to properly display your components.

- You will need to give data to your components in the stories. Use the annexe below in order to get these mock-up. You can create additional mock-ups if you want.
- Now that you have data in your component, you can add a `console.log(this.props)` in the render method of your component in order to see them in the console of the inspector of your web browser.

We recommend you to do the definitions of the components and the definitions of the stories in parallel. It is quite useful to visualise what you are developing, so when you add a new feature to your components, make sure that you have a stories that lets you visualise this feature.

## Expected Results

- The expected result are the components and theirs stories.
  If your components are customisable (which we recommend, for example, if we can change some colours ...), you can create several stories of the same component in order to display some customisation possibilities.
- The components **don't need** to display every piece of data that it has access to. It should be easy to understand that your component `Mission` represents a mission. It can give some metrics but it does not need (and should not) be exhaustive.
- Send us a link to a repository with the `sterblue-skills-test-cloud` folder. It can be GitHub, GitLab, BitBucket ... (or a .zip if you prefer).
- You can join a `readme.md` file in your project in order to tell us how to run your work. Feel free to add any piece of information that you judge useful.
- Once again, I want to say that **we do not expect your project to be perfect**. We are interested in how you think and how you code. If all the entities are not implemented, it is not a problem, as soon as the component you did reflect what you are capable of.
- We do not expect from you to be a genius of graphic design either. The style does not need to be amazing.

## Some pieces of advise

1. You can use the all libraries that you want, here are some example. You **don't need** to use them, but it may help you :

   - For component styling, you may use [emotion](https://github.com/emotion-js/emotion).
   - For data manipulation and basic logic (`map` function instead of `for` loops, for example), you may use [lodash](https://lodash.com/), especially the Functional Programming part (`lodash/fp`).
   - You can use library of pre-existing components like [react-semantic-ui](https://react.semantic-ui.com/) (a lot of different libraries like this one exist, you can use whatever you want). However, sometimes, those libraries can be quite complexe to implement and to use. That's why, we will prefer some code that actually work over some beautiful components which are not functional.

2) You can modify the definitions of the entities given in annexe. If you need to add some relations or some new fields, feel free to do it. You can also add some mock-ups if you want.

3) We recommend that you **split your code**. If your components are getting big, feel free to create new files where you define some functions or some components. Then, import those components inside your main component.
   For example, if you have a component with three possible state: `"loading"`, `"error"` and `"success"`. If those three states are represented differently and it leads you to a lot of lines of code, you can create a component for each of these states and put them in separated files (i.e.: `loading.js`, `error.js` and `success.js`). Then, on your main component, you can call your components like this:

   ````javascript
   import React from "react"
   import { Loading } from "./loading"
   import { Error } from "./error"
   import { Success } from "./success"

    export class MyComp extends React.Component {
      render(){
         const dataState = this.props.dataState
         if (dataState === "success") {
           return <Success />
         } else if (dataState === "loading") {
           return <Loading />
         } else if (dataState === "error") {
           return <Error />
         } else {
           throw new Error("dataState is invalid")
         }
      }
     }
    ```
    This way, the code is more "elegant" and easier to read. Moreover, you can create independent stories for the `Success` ,`Loading` and `Error` components.
   ````

## Annexes

### Entities Definitions

Here are the simplified definitions of some entities that we use at Sterblue.

For each entity, you will find a quick definition and an example a JSON representing one entity.
This entities can be linked together. For example, a `Mission` can contain some operators that are `Users`.
In order to simplify the examples, when there is a relation between two entities, we did not always specified all the nested values, but you can add them in your mock-up if you need.

### 1. Mission

- **Definition**:

  - A mission represent an inspection that we need to do.
  - `id` represents a unique ID.
  - `executionDate` is the date at which the mission as been performed. If it has not been realised yet, it is set to `null` - It has a filed `operators` that contains an array of `User` (it can be empty if no user is assigned to this mission). The operator is the person that will fly the drone. - It also has a field `structures` which is an array of `Structure`. This represents the structures that we want to inspect in this mission. It can be empty, but the mission would be pointless.
  - The last field is `images` which is an array of `Image`. It is empty if the mission has not been performed yet. Else, it contains all the images taken during the flight of the drone.

- **Example**:
  ```JSON
  const mission1 = {
    "id": "missionId1",
    "executionDate": "2019-01-08T21:40:30",
    "operators": [
      {
        "name": "User1",
        "id": "userId1"
      }
   ],
    "structures": [
      {
        "id": "structureId1"
      },
      {
        "id": "structureId2"
      }
     ],
    "images": [
      {
        "id": "imageId1",
        "url":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g",
        "anomalies": [
          {
            "id": "anomalyId1"
          },
          {
            "id": "anomalyId2"
          }
        ],
        "structures": [{ "id": "structureId1" }]
      }
    ]
  }
  ```

### 2. Structure

- **Definition**:
  - A structure represents a structure in "real life".
  - Its `id` is unique
  - It has a `type`. For example, it can be `"MediumVoltagePylon"`, `"HighVoltagePylon"` or `"WindTurbine"`.
  - It has a field `missions` which is an array of `Mission`. It represents the missions in which the current structure is present. It can be empty if the structure has never been inspected and no inspection on it have been programmed yet.
  - The `images` fields is an array of `Image` in which the structure is visible. It can be empty if there is no picture of the structure in our database.
  - The `anomalies` field is an array of `Anomaly`. If it is empty, it means that the structure is in good health (or that it has never been inspected !).
  -
- **Example**:
  ```JSON
  const structure1 = {
    "id": "structureId1",
    "type" : "MediumVoltagePylon",
    "missions" : [
      {
        "id": "missionId1"
      }
    ],
    "images": [
      {
        "id": "imageId1",
        "url":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g",
        "anomalies": [
          {
            "id": "anomalyId1"
          },
          {
            "id": "anomalyId2"
          }
        ],
      }
    ],
    "anomalies": [
      {
        "id": "anomalyId1"
      },
      {
        "id": "anomalyId2"
      }
    ]
  }
  ```
  You can see here that the anomalies are listed twice. It is because it is linked to the structure itself but also two the images with which the structure is linked.

### 3. Image

- **Definition**:
  - An image correspond to a picture we have in our database.
  - It as a unique identifier called `id`.
  - It has a `url` field that contains the url where you can find the image.
  - The `anomalies` field is an array of the `Anomaly`. It represents all the anomalies that we can see in the picture.
  - Similarly, the `structures` field is an array of `Structure` representing the structures that we can see in the picture. There can be none or one and more.
- **Example**:
  ```JSON
  const image1 = {
    "id": "imageId1",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g",
    "anomalies": [
      {
        "id": "anomalyId1"
      },
      {
        "id": "anomalyId2"
      }
    ],
    "structures": [
      {
        "id": "structureId1"
      }
    ]
  }
  ```

### 4. Anomaly

- **Definition**:

  - An anomaly represents a problem with the structure. It can be something that should not be here (a nest in a pylon), something missing (a piece of equipment that should be here) or some damaged equipment (corrosion).
  - It has a unique `id`.
  - It also has a `type` for example `"corrosion"`.
  - It has an `images` field that is an array of `Image` in which we can see the anomaly.
  - The `structure` field is a single `Structure`. Indeed, we will say that an anomaly can only be linked to one structure.

- **Example**:
  ```JSON
  const anomaly1 = {
    "id": "anomalyId1",
    "type": "corosion",
    "images": [
      {
        "id": "imageId1",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g"
      }
    ],
    "structure": {
      "id": "structureId1"
    }
  }
  ```

### 5. User

- **Definition**:
  - An user represents one user of our solution. It can be a client, an operator, an expert ...
  - It can be identified by a unique `id`.
  - It has an `email` field. It is unique (two users cannot have the same email).
  - It has a `missions` field. It is an array of `missions` that represents all the missions done by or assigned to this user.
- **Example**:
  ```JSON
  const user1 = {
    "name": "User1",
    "email": "user1@mail.com",
    "id": "userId1",
    "missions": [
      {
        "id": "missionId1"
      }
    ]
  }
  ```
