var startInitialInterval = window.setInterval(startTimer, 60000)

function startTimer() {
  var today = new Date()
  var time = today.getHours()
  var timeMin = today.getMinutes()

  if (time == 1 && timeMin < 40) {
    isRunning()
  }

  if (time == 12 && timeMin <= 1) {
    isRunning()
  }

  if (time == 16 && timeMin <= 1) {
    isRunning()
  }

  if (time == 20 && timeMin <= 1) {
    isRunning()
  }
}

function isRunning() {
  chrome.windows.getAll(
    {populate: true},
    function (windows) {
      var foundSelected = false;
      for (var i = 0; i < windows[0].tabs.length; i++) {
        console.log(windows[0].tabs[i].url)
        if (windows[0].tabs[i].title == 'Loventis - Ottawa Backpackers Inn') {
          id = windows[0].tabs[i].id
          chrome.tabs.update(id, {active: true}, () => {})
          chrome.tabs.executeScript(id,
            {
              file: "content.js"
            },
            () => {}
          )
        }
      }
    }
  )
}
