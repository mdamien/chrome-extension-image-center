function getContentType(headers) {
  for (var i = 0; i < headers.length; i++) {
    var name = headers[i].name.toLowerCase();
    if (name.indexOf("content-type") !== -1) {
      return headers[i].value.toLowerCase();
    }
  }
  return '';
}

chrome.webRequest.onHeadersReceived.addListener((info) => {
    var type = getContentType(info.responseHeaders);
    if (type.indexOf('image/') === 0) {
      chrome.tabs.insertCSS(info.tabId, {
        file: 'main.css',
        runAt: 'document_start'
      });
    }
  }, {
    urls: ['<all_urls>'],
    types: ['main_frame']
  }, ['responseHeaders']);
