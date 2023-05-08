const apiKey = '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';
const model = 'text-davinci-002';
const maxTokens = 50;



//create a context menu item
chrome.contextMenus.create({
    id:"uniqueId1",
    title:"explain",
    contexts:["selection"],
});
chrome.contextMenus.create({
    id:"uniqueId2",
    title:"Ask",
    contexts:["selection"],
});


//this will send the text to open ai if user asks a question about selected text
chrome.contextMenus.onclicked.addlistener(function askText(info)
    {
        if(info.menuItemId==="uniqueId1"&& info.selectionText){
        const prompt=info.selectionText;
        const apiUrl = 'https://api.openai.com/v1/engines/' + model + '/completions';

        fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
            },
        body: JSON.stringify(
        {prompt: prompt, max_tokens: maxTokens})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const generatedText = data.choices[0].text;
            console.log(generatedText);
            const win=window.open('','_blank',"width=500,height=400");
            win.document.write(`<html><body><p>${generatedText}</p></body></html>`)
        })
        .catch(error=>console.error(error));
    }}
)

//this will send the text to a open ai for explaining the text
chrome.contextMenus.onclicked.addlistener(function askText(info)
{
    if(info.menuItemId==="uniqueId2"&& info.selectionText){
    {
        const prompt=info.selectionText;
        const apiUrl = 'https://api.openai.com/v1/engines/' + model + '/completions';

        fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
            },
        body: JSON.stringify(
        {prompt: prompt, max_tokens: maxTokens})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const generatedText = data.choices[0].text;
            console.log(generatedText);
            const win=window.open('','_blank',"width=500,height=400");
            win.document.write(`<html><body><p>${generatedText}</p></body></html>`)
        })
        .catch(error=>console.error(error));
    }}})




