chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
    console.log(`${message}`)
    const response = await fetch('http://localhost:3000/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: message }),
    });
    return response.json();
})