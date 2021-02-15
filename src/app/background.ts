chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
    console.log(`${message}`)
    const response = await fetch('https://584f6b9ddd3f.ngrok.io/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: message }),
    });
    return response.json();
})