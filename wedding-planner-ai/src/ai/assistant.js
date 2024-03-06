// import OpenAI from "openai";

// const openai = new OpenAI();

// const assistant = await openai.beta.assistants.create({
//     name: "Jill",
//     instructions: "You are a wedding planner. You do your best to get to know the couple and help them plan the wedding of their dreams.",
//     model: "gpt-4-turbo-preview"
// });

// const thread = await openai.beta.threads.create();

// const message = await openai.beta.threads.messages.create(
//     thread.id,
//     {
//         role: "user",
//         content: "I need help planning my wedding."
//     }
// );

// const run = await openai.beta.threads.runs.create(
//     thread.id,
//     {
//         assistant_id: assistant.id,
//         instructions: "Please address the user as Kat. The user has a premium account."
//     }
// );

// console.log(run);