chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.type === 'getWords') {
        chrome.storage.sync.get(['words'], result => sendResponse(result.words));
        // Returning true tells chrome that sendResponse will run async
        return true;
    }

    if(request.type === 'saveWords') {
        chrome.storage.sync.set({ words: request.words });
    }
});
