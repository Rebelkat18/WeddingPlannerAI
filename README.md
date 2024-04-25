# WeddingPlannerAI
This is my Spring 2024 semester project for COSC 345 - Multimedia Communications. It is a wedding planner AI. It uses OpenAI and React.

## Local Set Up
Clone the repository.
I recommend using Visual Studio Code.

### Set up Node and NPM

[Install Node](https://nodejs.org/en)

#### Set up NPM
Run this in your terminal
```
npm install -g npm
```

### Server Side
In the server directory, create a .env file and add your API key using:
```
REACT_APP_OPENAI_API_KEY=your_api_key
```
You can get an API key at [OpenAI](https://platform.openai.com/docs/introduction)
#### Install the needed packages
Run in your project terminal:
```
npm install nodemon openai express body-parser cors
```

### Client Side
#### Install the needed packages
Run in your project terminal:
```
npm install bootstrap react-bootstrap axios react-router-dom @mui/material @emotion/react @emotion/styled
```

## Run Application
### Server Side
Open a terminal and run:
```
cd server
npm run dev
```
### Client Side
Open a second terminal and run:
```
cd wedding-planner-ai
npm start
```
The application should open on your default browser.
