import findAndReplaceDOMText from 'findandreplacedomtext';


chrome.runtime.sendMessage({ type: 'getWords' }, words => {
    console.log({words});

    if (Object.keys(words).length === 0) return;

    for (var key in words) {
        if (words.hasOwnProperty(key)) {
            findAndReplaceDOMText(document.body, {
                find: new RegExp(key),
                replace: words[key],
            });
        }
    }
});


