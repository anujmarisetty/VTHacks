import React, { useState } from 'react';

function ChatBot() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setResponse(data.answer);
  };


  return (
    <div>
      <h1>AI Q&A Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything!"
        />
        <button type="submit">Ask</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}


export default ChatBot;


