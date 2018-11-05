import findAndReplaceDOMText from 'findandreplacedomtext';



function replaceWords(words) {
    if (Object.keys(words).length === 0) return;

    for (let key in words) {
        if (words.hasOwnProperty(key)) {
            findAndReplaceDOMText(document.body, {
                find: new RegExp(key),
                replace: words[key],
            });
        }
    }
}

chrome.runtime.sendMessage({ type: 'getWords' }, replaceWords);
