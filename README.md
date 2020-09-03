
# Raisely app
This is my job application for the Front-End engineer position at Raisely :star:

It is a simple sign up application made with the [React-Boilerplate](https://github.com/react-boilerplate/react-boilerplate) template and hosted on an AWS EC2 instance.

All components were painstakingly made by hand hahah so no design system is used. Creating components is  my favorite part of front end development after all.

### Running the project locally
To run this application locally just follow the simple steps to setup any node application.
After cloning the project, enter the project folder and run `yarn install` and after correctly installing all dependencies then run `yarn start`

## Why React-Bolierplate
Sooo, here's the fun fact, at some point during development I read the application wrong. I though I would have to run the email validation and the sign up request at the same time, and then deal with the condition that if the email validation failed and the sign up didn't I couldn't continue with the sign up. It makes no sense, I know haha but it was what I believed at the time.

In order to deal with 2 asynchronous requests, my best thought was to use Redux and Saga, so I would send 2 dispatches that would run the API calls, and then save in the Redux the responses and then only when both said OK the view would update. But, in the end it was not necessary, I decided to keep it though because I think it is a way to show I know my way around Redux.

## What happened to the git history
Here's another funny story, I stated coding the site with the create-react-app template, because at first I read everything correctly, so I thought React-Boilerplate was a bit too much for what I was trying to accomplish. But then, as written above, one night I read the prompt incorrectly and decided to change to Boilerplate so I started a whole new project and simply migrated the code. It was not too bad because, since I use Boilerplate a lot, I tend to structure my project based on the boilerplate folder structure, so it was really easy to make the change.

Unfortunately, changing projects meant changing git folders. Even though I could easily just change the .git and keep the other code, I wasn't 100% if I really wanted to change from create-react-app so I opted to keep the create-react-app history safe and lose the start of the history in this project. I still have the original create-react-app project though, so if you want it I can send you.

## Why Github
I do prefer other platforms, such as BitBucket and Gitlab, BUT I had entered some job applications that would not allow any link except from github links to be submited, so I'm not taking that risk.

## Issues
I am aware that the project has some issues, they are all described in the issues tab of github, I would like submit a perfect project, but since the position will only be open until you guys find a suitable professional I want to send my submission as soon as possible, so I decided to forgo some code quality in order to be faster. After submitting I will be working on testing and responsiveness and creating a pipeline and all that fun stuff, so if you are seeing this after some time, maybe it is a way prettier code, who knows
