const progressbar = document.querySelector(".progressbar");
let progress = 0;

function enableProgessBar() {
  /* if JS is working, we'll enable the progess bar */
  /* all the styling for it comes from the role="progressbar" */
  /* and having that removes the no-js message */
  /* min of 0 and max of 100 are defaults, so we don't need aria-valuemin or -valuemax */
  progressbar.setAttribute("role", "progressbar");
  progressbar.setAttribute("aria-valuenow", progress);
  progressbar.setAttribute("aria-live", "polite");
}

enableProgessBar();

// for simulating stuff when we click the buttons
const testingGround = document.querySelector(".testing-ground");
let interval = null;

function simulateProgress(newProgressValue) {
  clearInterval(interval);
  if (newProgressValue === "fake-upload") {
    simulateUpload();
  } else {
    updateProgress(newProgressValue);
  }
}

testingGround.addEventListener("click", (e) => {
  if (!e.target.closest("button")) return;

  progress = e.target.dataset.progress;
  simulateProgress(progress);
});

function updateProgress(progress) {
  progressbar.setAttribute("aria-valuenow", progress);
  progressbar.style.setProperty("--progress", progress + "%");
}

function simulateUpload() {
  // aria-busy prevents it from announcing every change as it keeps updating the progress
  // make sure to set it false once the progress is finished
  progressbar.setAttribute("aria-busy", "true");
  let progress = 0;
  updateProgress(progress);

  intervalTimer = setInterval(() => {
    progress += 5;
    updateProgress(progress);
    if (progress === 100) {
      // probably want something to catch errros and also have this set to false then too
      progressbar.setAttribute("aria-busy", "false");
      clearInterval(intervalTimer);
    }
  }, 500);
}
