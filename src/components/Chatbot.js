import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! 👋 How can I help you today? Choose a topic below to get started!' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    'What recipes can I try?',
    'What ingredients do you have?',
    'Looking for a quick recipe?',
    'Which cuisine do you prefer?',
    'Any dietary restrictions?',
    'Are you looking for something spicy?',
    'Looking for healthy meals?',
    'What about a vegetarian recipe?',
    'Craving dessert?',
    'Want a beginner recipe?',
    'Need help with advanced recipes?',
    'How about a recipe for lunch?',
    'Can you suggest a dinner recipe?',
    'Looking for a recipe under 30 minutes?',
    'Can I get a gluten-free recipe?',
    'Do you want a meal for a family?',
    'Can you suggest a budget-friendly recipe?',
    'How about a recipe with chicken?',
    'What about a vegan recipe?',
    'Got any suggestions for snacks?',
  ]);
  const [waitingForIngredients, setWaitingForIngredients] = useState(false);

  useEffect(() => {
    document.getElementById('user-input').focus();
  }, []);

  // Handle sending messages
  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: getBotResponse(userInput) },
      ];
      setMessages(newMessages);
      setUserInput(''); // Clear input field
    }
  };

  // Simulate bot response based on user input
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Bot's initial greeting and options
    if (lowerInput.includes('recipe')) {
      return 'I can suggest a recipe for you! What ingredients do you have?';
    } else if (lowerInput.includes('ingredients')) {
      setWaitingForIngredients(true);
      return 'Please list the ingredients you have, and I’ll find a recipe for you.';
    } else if (lowerInput.includes('quick')) {
      return 'How much time do you have for cooking? I can suggest a quick recipe!';
    } else if (lowerInput.includes('cuisine')) {
      return 'Which cuisine are you interested in? For example, Italian, Indian, or Mexican.';
    } else if (lowerInput.includes('diet')) {
      return 'Do you have any dietary preferences? For instance, vegan, vegetarian, gluten-free, etc.';
    } else if (lowerInput.includes('spicy')) {
      return 'Would you like a spicy dish? Let me know your spice tolerance!';
    } else if (lowerInput.includes('healthy')) {
      return 'I can suggest healthy recipes! Are you looking for something light and nutritious?';
    } else if (lowerInput.includes('vegetarian')) {
      return 'Do you prefer a vegetarian recipe? I can suggest something based on your preferences.';
    } else if (lowerInput.includes('dessert')) {
      return 'Are you looking for a sweet dessert? Let me know if you want something light or indulgent!';
    } else if (lowerInput.includes('beginner')) {
      return 'I can recommend simple and easy recipes for beginners! Would you like a beginner-friendly dish?';
    } else if (lowerInput.includes('advanced')) {
      return 'Looking for an advanced recipe? I can suggest something challenging for experienced chefs!';
    } else if (waitingForIngredients) {
      return 'Got it! Let me find a recipe for you with those ingredients.';
    }

    // Default response for unrecognized input
    else {
      return 'I’m not sure how to respond to that. Can you please ask something related to recipes or cuisines?';
    }
  };

  // Handle user click on suggested questions
  const handleSuggestedQuestion = (question) => {
    const newMessages = [
      ...messages,
      { sender: 'user', text: question },
      { sender: 'bot', text: getBotResponse(question) },
    ];
    setMessages(newMessages);
  };

  return (
    <Box
      sx={{
        padding: 3,
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>
        Chatbot Assistant
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          marginBottom: 2,
          padding: '10px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 1,
            }}
          >
            <Box
              sx={{
                padding: '12px',
                backgroundColor: message.sender === 'user' ? '#B2D8B2' : '#D8D8D8',
                borderRadius: '12px',
                maxWidth: '80%',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body2" sx={{ textAlign: 'center', marginBottom: 1 }}>
          Need help? Choose from these questions:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {suggestedQuestions.map((question, index) => (
            <Chip
              key={index}
              label={question}
              onClick={() => handleSuggestedQuestion(question)}
              sx={{
                cursor: 'pointer',
                backgroundColor: '#B2D8B2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4CAF50',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <TextField
          id="user-input"
          label="Type your message"
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          sx={{
            marginRight: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{
            borderRadius: '12px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#4CAF50',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
