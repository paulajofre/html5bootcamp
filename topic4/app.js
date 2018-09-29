var websocket;
var wsUrl = "wss://echo.websocket.org/";

function onLoad() {
    let text = localStorage.getItem('text');
    if (text) {
        document.getElementById('text').value = text;
    }
    console.log('onLoad');

    createWebSocket();
}

function saveContent() {
    let text = document.getElementById("text").value;
    localStorage.setItem('text', text);
    console.log('saveContent', text);
}

function clearContent() {
    let text = document.getElementById("text").value;
    localStorage.clear(text);
    document.getElementById('text').value = "";
}

function dropHandler(ev) {
    
    console.log('dropHandler');
    ev.preventDefault();
    if(ev.dataTransfer.items) {
        if(ev.dataTransfer.items[0].kind === 'file') {
            let file = ev.dataTransfer.items[0].getAsFile();
            let reader = new FileReader();
            reader.onload = () => {
                document.getElementById("text").value = reader.result;
            };
            reader.readAsText(file);
        }
    }
}

function dragOverHandler(ev) {
    console.log('dragOverHandler'); 
    ev.preventDefault();
}

function createWebSocket() {
    websocket = new WebSocket(wsUrl);
    websocket.onopen = () => console.log('CONNECTION OPEN');
    websocket.onclose = () => console.log('CONNECTION CLOSED');
    websocket.onmessage = (e) => {
        document.getElementById('logs').value += 'Mensaje recibido: ' + e.data + '\n';
    };
}

function sendMsg() {
    console.log('sendMsg');
    let text = document.getElementById("msg").value;
    websocket.send(text);
    document.getElementById("msg").value = '';
}