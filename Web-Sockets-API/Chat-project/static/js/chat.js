// Open websocket connection from the browser to the server
const socket = new WebSocket('ws://localhost:3000/chat/people');
const username = prompt('Enter your username (no spaces):');

socket.onopen = (evt) => {
  console.log('WEB SOCKET OPENED!');
  const data = { type: 'join', name: username };
  socket.send(JSON.stringify(data));
};

socket.onmessage = (evt) => {
  const msg = JSON.parse(evt.data);
  if (msg.type === 'note') {
    const item = document.createElement('li');
    const text = document.createElement('i');
    text.textContent = msg.text;
    item.appendChild(text);
    document.querySelector('#messages').appendChild(item);
  }
};

socket.onerror = (evt) => {
  console.log('SOMETHING WENT WRONG!');
  console.log(evt);
};

socket.onclose = (evt) => {
  console.log('WEB SOCKET HAS BEEN CLOSED!');
};

// Do stuff eventually
