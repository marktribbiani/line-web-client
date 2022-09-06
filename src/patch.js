(async () => {
  waitFor(() => document.querySelector('#login_btn')).then(() => {
    document.querySelector('#login_btn').removeAttribute('disabled');
  });
})();

function createTimeout(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

async function waitFor(fn, delay = 50, f = 1.1) {
  let t = delay;
  while (!fn()) {
    await createTimeout(t);
    t *= f;
  }
}
