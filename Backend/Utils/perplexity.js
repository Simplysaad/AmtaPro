const response = await fetch('https://api.perplexity.ai/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'sonar-pro',
    messages: [
      {
        role: 'user',
        content: "What are the major AI developments and announcements from today across the tech industry?"
      }
    ]
  })
});

const data = await response.json();
console.log(data);