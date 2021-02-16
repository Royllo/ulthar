chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
    console.log(`${message}`)
    return chrome.storage.sync.get('url', async(data) =>{
      console.log(`${data.url}/link`);
      await fetch(`${data.url}/link`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: message }),
      });
    });
});