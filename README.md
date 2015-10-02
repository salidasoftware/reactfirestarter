# reactfirestarter
Starter project for a Firebase project with a React frontend : [https://reactfirestarter.firebaseapp.com/](https://reactfirestarter.firebaseapp.com/)

## Usage

First, use the firebase dashboard to update your firebase security rules to fit you needs.  Here's a simple example that allows full access only to authenticated users :

    {
        "rules": {
            ".read": "auth != null",
            ".write": "auth != null"
        }
    }
    
Next, enable email and password authentication in the firebase dashboard.

Install dependencies

    npm install

Copy the firebase config file and add your app's name to it

    cp src/constants/firebaseConfig.sample.js src/constants/firebaseConfig.js
	
Run Gulp

    gulp
	
The example project will be running at http://localhost:9005/