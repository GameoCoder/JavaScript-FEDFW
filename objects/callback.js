function doTask(callback) {
  console.log("Task Started!");
  callback();
}

function finished() {
  console.log("Finished");
}


doTask(finished);
