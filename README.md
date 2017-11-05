Labstep Test
=================

The purpose of this exercise is to create a timeline with posts and experiments along with some comments.

What you need to do
-------------------
1. Install and run the provided server

    ```
    npm install 
    npm start
    ```

or if you are using yarn:

    ```
    yarn
    yarn start
    ```
2. Complete all the TO-DOs. Search for 'TO-DO:' to quickly find them. They all live under /src. They are also summarised below:
  (a) In `Experiment.js`: 
    - Write some code to show only verified comments (comments have a verified field of type boolean)
    - Write some code to show the total number of times the verified comments 
    have been shared (use the timesShared field to calculate the total)
    - Append a fullName ( concatenation of first and second name ) field to the author of your verified comments
    - Style the comment-bar according to specs
  (b) In `Posts.js`:
    - Write the HTML and CSS to display the post according to specs
  (c) In `Navigation.js`:
    - Fix the code to show the timelines that are associated with the above userId
3. Write tests to test your code. An example can be found in '/src/__tests__/example.test.js'. To run your tests:
  ```npm test```
  or
  ```yarn test``` 
4. *You should deliver your solution as a `git` repository, preferably hosted on GitHub.*

Things you should know
-------------------
1. All css lives under scss. You may use sass/scss styles.
2. The specs (designs) can be found under folder /specs. There are 2 views; one for desktop screen and another for mobile.
The styling should be close to the designs but it doesn't have to be pixel perfect or use the exact same colors. 
3. All images needed (icon-edit.svg and icon-user.svg) live under /public
4. All data used lives in /src/api/index.js. You can view this file but you can't change the data in it.
5. The two things you need to know about React and are different than normal HTML is that instead of using ‘class’ on the html elements you should use ‘className’. Also if you want to use javascript (e.g. to display a variable) in the html you should use curly brackets {} (e.g. ```<div>{ user.name }</div> Or <div>{ numberOfComments(user) }</div>```

What we are looking for:
-------------------
1. Correctness
2. Readability
3. Good code design

Libraries:
-------------------
You may not use any external libraries
