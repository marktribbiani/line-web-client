const createTimeout = (t) => new Promise((resolve) => setTimeout(resolve, t));

export default async function waitFor(fn, delay = 50, f = 1.1) {
  let t = delay;
  while (!fn()) {
    await createTimeout(t);
    t *= f;
  }
}
