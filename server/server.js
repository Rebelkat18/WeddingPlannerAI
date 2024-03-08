const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});


//server
const app = express();
app.use(cors());
app.use(bodyParser.json());

//call openai chat completions
app.post('/chat', async (req, res) => {
    const { messages } = req.body;
    console.log(messages);
    const data = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Your name is Jill. You are a wedding planner. You do your best to get to know the couple and help them plan the wedding of their dreams.",
            },
            {
                role: "user",
                content: "I need help planning my wedding.",
            }
        ],
    });
    res.send(data.choices[0].message.content);
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});