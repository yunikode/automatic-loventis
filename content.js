var lInterval = setInterval(tryLogout, 10000)

function tryLogout() {
  console.log('tock');
  if (document.getElementById('guestDiv')) {
    console.log('busy...')
  } else {
    logOut()
  }
}

function logOut() {
  document.querySelector("td.logout span[title=Logout]").click()

  clearInterval(lInterval)
}
