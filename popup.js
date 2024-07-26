document.addEventListener('DOMContentLoaded' , () => {
    const langSelect = document.getElementById
    ('language');
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = lang.name;
        langSelect.appendChild(option);
    });

    document.getElementById('translate').addEventListener
    ('click',() =>{
        const language = langSelect.value;
        chrome.tabs.query({ active: ture, currentWindow: ture}, (tabs) =>{
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files:['tanslate.js']
            }, () =>{
                chrome.tabs.sendMessage(tabs[0].id,{
                    language});
            });
        });
    });
});
