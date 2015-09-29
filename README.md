# reactfirestarter
Starter project for a Firebase project with a React frontend.

## Usage

First, update your firebase security rules to fit you needs.  Here's a simple example that allows full access to authenticated users :

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
	
That's it!
