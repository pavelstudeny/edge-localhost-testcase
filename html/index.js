browser.runtime.onMessage.addListener(function (msg) {
  if (msg.type = 'body') {
    document.body.innerText = msg.data;
  }
});
