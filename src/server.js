const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors');  


const app = express();
app.use(bodyParser.json());


app.use(cors({
    origin: 'http://localhost:3000'
  }));


// Initialize OpenAI
const openai = new OpenAI({
  // apiKey:"enter your key"
});


app.post('/ask', async (req, res) => {
    const { question } = req.body;


    try {
      // ChatGPT call structure with prompt
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are AI chatbot that takes the input from the user about their meal preference, the date, day, and if it's breakfast/lunch/dinner, dietary restrictions, likes/dislikes, diet style, and cultural cuisne. You are an assistant for a diet calendar app. When user clicks on a date and a meal time, you will take in input from the user and give the ingredient list WITHOUT QUANTITY. Then give a comprehensive recipe with measurements",
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 1,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
 
      // Extracting the response from OpenAI
      const aiResponse = response.choices[0].message.content;
      //console.log(`AI Response: ${aiResponse}`);

      function parseIngredients(response) {
        const ingredientsSection = response.split("Ingredients:")[1].split("Recipe:")[0];
        const ingredients = ingredientsSection.trim().split('\n').filter(line => line.startsWith('-'));
        return ingredients.map(ingredient => ingredient.replace('-', '').trim());
      }
      
      // Function to parse the recipe instructions
      function parseInstructions(response) {
        const instructionsSection = response.split("Recipe:")[1].trim();
        const instructions = instructionsSection.split('\n').filter(line => line.match(/^\d\./));
        return instructions.map(instruction => instruction.trim());
      }
      
      // Parse ingredients and instructions
      const ingredients = parseIngredients(aiResponse);
      const instructions = parseInstructions(aiResponse);
      
      console.log('Ingredients:', ingredients);
      console.log('Instructions:', instructions);
 
      // Sending the response back as JSON
      res.status(200).json({ answer: aiResponse });
 
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      res.status(500).json({ error: 'Something went wrong with OpenAI API.' });
    }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
