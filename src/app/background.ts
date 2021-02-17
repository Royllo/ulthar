chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
    console.log(`${message}`)
    return chrome.storage.sync.get('url', async(urlData) => {
      return chrome.storage.sync.get('password', async(passwordData) => {
        console.log(`${urlData.url}/link with password ${passwordData.password}`);
        await fetch(`${urlData.url}/link`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`user:${passwordData.password}`)}`
          },
          body: message,
        });
      });
    });
});