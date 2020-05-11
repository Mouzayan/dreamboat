# **dreamboat**

**dreamboat** Dreamboat is a gamified dating app with a twist. A mystery dater, with a premium membership, gets to field potential matches by imagining his or her perfect dreamboat via a selection of ideal traits identified through a personality quiz. The "catches" with the closest match to the user’s desired traits get a chance to be considered for a connection. The user is always in control and the catches need to guess their way towards impressing them.

**Core Features / Goals**  
The user sets their public profile with an inspirational image (the dreamscape) and a mantra or quote. The user then fills out their desired traits by making selections via a dropdown personality quiz. Those selections remain secret. The catches can browse profiles of mystery users and attempt to impress one, but they do not have visibility of the mystery user’s personality profile answers. They can only see a mystery user’s dreamscape and mantra. If their answers match up enough to the mystery user’s they will be made available for the mystery user to consider. Only the mystery user can see actual photos of suitors and the answers to their personality quiz, and only the mystery dater can initiate contact. Every day the mystery user is served up a selection of catches that matched their criteria by answering the questions correctly.

## MVP

Each user has the ability to create, update or delete their dreamboat as well as contact their catches. The catches can update, edit and delete their profile and reactions, as well as respond to the users.

#### Client - Front End

Frontend - React  
Frontend Deployment - Netlify

**WireFrame Images**  
Landing Page - Desktop
![](https://i.imgur.com/AvlsiSv.png)
Mystery User Login Page - Desktop
![](https://i.imgur.com/bEpGfKF.png)
Catch Detail View - Desktop
![](https://i.imgur.com/5xd0xA9.png)
Catch Login Page - Desktop
![](https://i.imgur.com/FX50Zv8.png)

**Component Heirarchy**

```structure
      root
|__ client
      |__ public
            |__ index.html
      |__ src
        |__ components
              |__ shared
                    |__ Header.jsx
                    |__ Layout.jsx
                    |__ Quiz.jsx
              |__ Home.jsx
              |__ DreamBoatCreate.jsx
              |__ DreamBoatEdit.jsx
              |__ CatchesMosaic.jsx
              |__ CatchDetail.jsx
              |__ CatchProfileCreate.jsx
              |__ CatchProfileEdit.jsx
              |__ CatchReactionsCreate.jsx
              |__ CatchReactionsEdit.jsx
              |__ PersonaQuiz.jsx
              |__ SignIn.jsx
              |__ SignUp.jsx
          |__ services
              |__ api-helper.js
          |__ App.js
          |__ App.test.js
          |__ index.js
          |__ serviceWorker.js
          |__ setupTests.js
      |__ .gitignore
      |__ README.md
      |__ package-lock.json
      |__ package.json
```

**Component Breakdown**
Component | Type | State | Props | Description
------------ | ------------- | ------------ | ------------- | ------------ |
Header | Functional | No | No | Contains navigation and logo |
Layout | Functional | No | Yes | Is the main container page for all app content |
Quiz | Class | Yes | Yes | Contains users' and catches' personality quiz responses via thumbs up or thumbs down button displays |
Home | Functional | No | No | Landing page, includes logo, prompts to login or sign up, and app positioning |
DreamboatCreate | Class | Yes | Yes | Contains form to add new dreamscape photo and mantra for dreamboat |
DreamboatEdit | Class | Yes | Yes | Contains form to edit dreamboat |
DreamboatUserPage | Class | Yes | No | Greets users with their name. Displays user's dreamboat, rendered personality quiz, as well as a mosaic of their catches |
CatchesMosiac | Functional | No | Yes | Contains a grid of photos / mosaic of user's catches. On clicking a grid photo user will be directed to catch detail view page |
CatchDetail | Functional | No | Yes | This page displays details of catch profile including their photo, decription of physical attributes and what they are looking for. It includes their personality quiz responses and their reactions. It greets the user by name and tells them the percent extent of their match with the catch. It prompts the user to chat with the catch or hide them |
CatchProfilePage | Functional | No | No | Greets catch with their name and lets them know how many times they have been matched in the past 5 days as well as how many chats requests they have. They can click on the chat requests icon to access their chats and participate. The page displays catchs' rendered personality quiz and their rendered profile information. It provides an onclick icon that directs catch to the profile edit page. It also displays their personality quiz reactions |
CatchProfileCreate | Class | Yes | Yes | Contains form to add a new catch profile including photo, name, age, height, status, and what they are looking for |
CatchProfileEdit | Functional | No | Yes | Contains form to edit catch profile information|
CatchReactionsCreate | Class | Yes | Yes | Contains input form for catchs' commentary on quiz items. Displays their rendered quiz responses |
CatchReactionsEdit | Functional | No | Yes | Contains form to edit catchs' comments form |
Login | Class | Yes | No | Contains login form |
SignUp | Class | Yes | No | Contains register form |

#### Server - Back End

Backend - Ruby on Rails  
Backend Deployment - Heroku

**ERD Model**
![ERD Model Photo](./ERDModel.png)

**Data Heirarchy** - expected endpoints from API

```structure
/home
/user/:id
/user/:id/create
/user/:id/update
/user/:id/catch
/user/:id/catch/chat
/catch/:id
/catch/:id/create
/catch/:id/update
```

**Dependancies**
| Library | Description |
| :--------------: | :------------------------------------: |
| axios | _To make get requests to API_ |
| CORS | _CORS enabling middleware_ |
| framer-motion | _Page transitions_ |
| react-router-dom | _Link and Route components_ |
| REACT | _user interface rendering framework_ |
| Rails | _server-side application framework_ |
