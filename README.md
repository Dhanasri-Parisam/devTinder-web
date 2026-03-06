# DevTinder

- create a vite + react project
- Remove unneccessary files and create a sample app component with a simple "Hello World" message
- Add Tailwind CSS to the project and configure it properly
- checking if everything is working fine by running the development server and seeing the "Hello World" message styled with Tailwind CSS in the browser.

- install daisyUI, a Tailwind CSS component library, and configure it in the tailwind.config.js file
- create a simple navbar using daisyUI components to ensure that the library is working correctly

- install react-router-dom to manage routing in the application and set up basic routes for the home page, profile page, and settings page
- Create BrowserRouter, Routes, and Route components to define the routes and render the appropriate components for each route

- creating outlet in the Body component to render the child components based on the defined routes

- create a footer component using daisyUI components and add it to the main App component to ensure that it is displayed on all pages of the application.

- create login page
- install axios and create a login form that captures the user's email and password, and sends a POST request to the backend API to authenticate the user. Handle the response from the API and display appropriate messages based on the success or failure of the login attempt.
- CORS - install cors package in the backend and configure it to allow requests from the frontend domain. This will enable the frontend to communicate with the backend API without any CORS issues.
- whenever you're making API call pass axios => {withCredentials: true} if not token doesn't send back in cookies

- install redux toolkit and react-redux to manage the application's state. Create a Redux store and define slices for user authentication, profile information, and any other relevant data. Use the useSelector and useDispatch hooks to access and update the state in your components.
- Login and see if your data is coming properly in the redux store
- NavBar should be updated as soon as user logs in and should show the user's name and profile picture instead of the login button
- Refactor the code to add constants files - create a components folder and move all the components into it 
- create a utils folder and move all the utility functions and constants into it 
- create a services folder and move all the API calls into it. 
This will help in organizing the code better and making it more maintainable.

- you should not be access other routes without login
- if token is not present in the cookies then it should redirect to the login page
- logout
- profile page
- get the feed and and the feed in the store
- build the user card feed

- Edit profile page
- create a form to edit the user's profile information, including name, bio, skills, and profile picture. Use the useState hook to manage the form state and handle input changes. When the form is submitted, send a PUT request to the backend API to update the user's profile information. Handle the response from the API and display appropriate messages based on the success or failure of the update attempt.
- show a toast message when the profile is updated successfully and hide it after 3 seconds.