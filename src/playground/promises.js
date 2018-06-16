const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    /*    resolve("this is my resolved data");
    resolve("this is my other resolved data"); */
    resolve({ name: "Osama Mohammad Najjar" });
  }, 1500);
});

promise
  .then(data => {
    console.log("1", data);
    return { age: 26 };
  })
  .then(resolveData => {
    console.log("after resolve", resolveData);
  })
  .catch(error => {
    console.log(error);
  });
