chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.type === 'getWords') {
        chrome.storage.sync.get(['words'], result => sendResponse(result.words));
    }

    if(request.type === 'saveWords') {
        chrome.storage.sync.set({ words: request.words });
    }
});
