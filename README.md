## Synopsis

A translation tool that leverages Google's speech recognition and translation APIs.

## Requirements

You will need to install the Google Cloud SDK on your system to use Google Cloud services - visit https://cloud.google.com/sdk/docs/ for more information. 

Once you've installed the SDK, you will need to create a set of application credentials. Run the following:
- gcloud auth application-default login

Next, you will need to create a Google Cloud project to obtain a projectID. Visit https://console.cloud.google.com/home/dashboard to do so.

README to do:
- enable translation api
  - enable billing on your project

## Installation

- npm install
- copy and rename ENV_template.js to ENV.js, fill in the appropriate values.

## Execution
- npm start
