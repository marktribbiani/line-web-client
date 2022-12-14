let e = null;
chrome.browserAction.onClicked.addListener(function () {
  if (e)
    chrome.windows.update(e.id, { focused: !0 }, (o) => {
      o || (e = null);
    });
  else {
    var o = {
        left: screen.availLeft + screen.availWidth / 2 - 367.5,
        top: screen.availTop + screen.availHeight / 2 - 290,
      },
      n = chrome.runtime.getURL('index.html');
    chrome.windows.create(
      {
        url: n + '#popout',
        focused: !0,
        left: Math.floor(o.left),
        top: Math.floor(o.top),
        width: 735,
        height: 580,
        type: 'panel',
      },
      function (o) {
        (e = o),
          chrome.windows.onRemoved.addListener(function (o) {
            e &&
              e.id === o &&
              (chrome.browserAction.setIcon(
                {
                  path: {
                    32: 'res/img/line_logo_48x48_off.png',
                    48: 'res/img/line_logo_48x48_off.png',
                    64: 'res/img/line_logo_128x128_off.png',
                    96: 'res/img/line_logo_128x128_off.png',
                    128: 'res/img/line_logo_128x128_off.png',
                  },
                },
                function () {},
              ),
              chrome.browserAction.setBadgeText({ text: '' }),
              (e = null));
          });
      },
    );
  }
});
