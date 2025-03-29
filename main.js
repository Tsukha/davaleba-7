// 1.setTimeout function
function mySetTimeout(deley) {
  return new Promise((res) => setTimeout(res, deley));
}

// mySetTimeout(1000).then(() => console.log("working"));

//Toy shop function from lecture
function makeToys(deley = 0) {
  return new Promise((resolve, reject) => {
    mySetTimeout(deley).then(() => {
      if (Math.random() > 0.1) {
        resolve("Undefected");
      } else {
        reject("Defected");
      }
    });
  });
}

function deliverToys(status, deley = 0) {
  return new Promise((resolve, reject) => {
    mySetTimeout(deley).then(() => {
      if (status === "Undefected") {
        resolve("Toy has been delivered");
      }
    });
  });
}

function sellToys(status, deley = 0) {
  return new Promise((resolve, reject) => {
    mySetTimeout(deley).then(() => {
      if (status === "Toy has been delivered") {
        if (Math.random() > 0.7) {
          resolve("Toy has been sold");
        } else {
          reject("Toy was unsuccessful");
        }
      }
    });
  });
}

// then().catch() version
makeToys(3000)
  .then((stat) => deliverToys(stat, 2000))
  .then((status) => sellToys(status, 1000))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Async/await version
async function promisify() {
  try {
    const status = await makeToys(3000);
    const deliver = await deliverToys(status, 2000);
    const result = await sellToys(deliver, 1000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
promisify();
