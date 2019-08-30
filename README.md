# FriendFinder

#### Short Descriptioin

This app is meant to pair up the user with a new best friend. You are given a servey to fill out with 10 questions, each having a option of 1-5. 1 Being not important to you 5 Being very important you. You will need to Enter your name, a photo of yourself, and fill out __ALL__ questions in order for the app to show you who your new BFF is.

#### Technologies Used

* JavaScript, Node.js
* HTML, Bootstrap
* Express

#### Code Break Down

* This project is based around _express_ which allows us to create servers
* When the app is deployed it listens to process.env.PORT when im using it locally it listens to a port I assigned it
* You'll notice there are several .js files. (friends, apiRoutes, htmlRoutes, and server)
* Each file has a specific job
    * friends - Acts as the database. Aslong as the server is running, any data that gets input into the html will be saved there.
    * apiRoutes - Everytime you click the submit button or a link, you are making a API call. Each button/link having a specific route to follow that can be found there
    * htmlRoutes - Same thing as apiRoutes, except here anytime you click enter in the URL your request is filtered through the htmlRoutes file
    * server - This file ties in all 3 .js files into one to make it all work together.