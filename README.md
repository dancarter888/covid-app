# Covid App

## [LIVE SITE HERE](https://eager-golick-d1f261.netlify.app/)

This project was setup using create-react-app.
After the the necessary modules and plugins (tailwind craco etc) were installed I started working on fetching data from the API.

I chose to install and use axios as it makes fetching data from an API simple. I started by querying every country in Oceania from the API as it offers a country query (/cases?country=). This revealed some errors within the API as some countries did not return any data and instead were undefined. I then saw there was a was to query by continent (/cases?continent=) so querying with Oceania fixed this issue.

I used the useEffect react hook within the App component to fetch the data asynchronously after the component had mounted and then I stored that data within the components state. To make sure this only happened once, I only fetched the data when the state was empty otherwise every time the state were to be updated, the component would re-render.

The data was returned as a JSON object so I parsed that object to create an array of JSON objects all with the fields: 
name - country name
confirmed - number of confirmed cases in that country
lat - latitude of country’s location
long - longitude of country’s location

In the case of Australia, the API did not return its location so I figured the best thing to do would be to manually provide the coordinates of Australia’s centre so it looked consistent when all the counters were displayed on the map.

I then moved to creating a Table component to display this data in a simple table. Next, the MapContainer was created. I found a module called google-maps-react which sits onto of Google’s JavaScript API. After creating my Google Cloud API key I read a bit of the google-maps-react and Google JavaScript API documentation and created a simple map which is centred at Oceania’s coordinates. I then passed the data received from the covid API to the MapContainer component as a prop.
A marker was mapped to every country and was placed on the map using its lat and long properties. And InfoWindow was then setup to display the number of cases for a country when it is clicked.

Next I used tailwind and react-reveal to style the website. I chose to go with the same colours and theme as are displayed in a lot of covid posters around New Zealand. I chose the same chose the same colours for the table and added a little animation. I created a toggle to toggle between the map and table which does this by changing the state within the App component and then sets the class of either the map or the table to “active” or “inactive”. A few custom utilities and styles were created within index.css.

Lastly I deployed the website to netlify from my GitHub.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
