const p1 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("P1 successful");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 successful");
  }, 2000);
});

const p3 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("P3 successful");
  }, 5000);
});

const p5 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("P5 failed");
  }, 5000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

Promise.allSettled([p1, p3, p5])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

Promise.race([p1, p2, p5])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
