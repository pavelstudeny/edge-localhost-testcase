browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({ url: 'http://localhost:23117/' });


  Promise.all([
    fetch('http://localhost:23117/')
      .then(resp => {
        return resp.text().then(body => resp.status + ' ' + resp.statusText + '\r\n' + body);
      })
      .catch(err => Promise.resolve(err)),
    new Promise(resolve => browser.tabs.create({ url: browser.runtime.getURL('html/index.html') }, resolve))
  ])
    .then(values => {
      const bodyText = values[0].toString();

      // this should rather wait until the in-page script announces that it is ready 
      setTimeout(function () {
        browser.tabs.sendMessage(values[1].id, { type: 'body', data: bodyText });      
      }, 1000);      
    });
});
