- Create a repository 
- Initialize the repository 
- node_modules,package.json ,package-lock.json 
- Install express
- Create a server
- Listen the port 7777
- Write request handlers for /test ,/hello
- Install nodemon and update scripts inside package.json
- What are dependencies 
- what is the use of "-g" while npm install 
- Difference between caret and tilde ( ^ vs ~)

- What is a Middleware
- How express Js basically handles requests  behind the scenes 


- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database Server "Connection-url"/devTinder
- Call the connectDB function and connect to the database before starting application on 7777 

- Create a userSchema & Model
- Create  POST /signup API to add data to database
- Push some documents using API calls from postman

- JS object vs JSON (difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user.

- User.findOne with duplicate email ids ,which object returned 
- API - Get user by email 
- API - Feed API - GET /feed - get all the users from the database
- API - Get user by ID
- Create a delete User API
- Difference between PATCH and PUT
- API - Craete a Update User api 
- Explore the Mongoose Documentation specially for Model API
- What are options in a Model.findOneAndUpdate method,explore more about it.
- API - Update the User with email ID

- Explore schematype options from the documention
- add required ,unique, lowercase , min , minlength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropiate validations on each field in schema
- Add timestamps to the userSchema
- Add Api level validations on patch request & Signup post api
- Addd API validations for each field.

- Data Sanitizing - Add API validation for each field
- Install validator
- Explore validator library function and Use vlidator funcs for password ,email and photoUrl 

- Validate data in Signup API
- Install bcrypt package
- Created PasswordHash using bcrypt.hash & save the user with encrypted password

- Create Login Api
- Compare password and throw errors if email or password is invalid.

- install cookie-parse
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back
- install jsonwebtoken
- IN login API , after email and password validation ,create a JWT token and send it to user in 
- read the cookies inside your profile API and fine the logged in user

- userAuth Middleware
- Add the userAuth middle ware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days.

- Explore tinder APIs
- Create a list of All API you can think in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create routes folder for managing auth,profile,request routers
- Create authRouter ,profileRouter,requestRouter
- Import these routers in app.js