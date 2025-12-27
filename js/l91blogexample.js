const getmenubtn = document.getElementById("menu-btn");
const getmobilemenu = document.getElementById("mobilemenu");

getmenubtn.addEventListener("click", function () {
  getmenubtn.classList.toggle("crossx");
  getmobilemenu.classList.toggle("hidden");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    getmobilemenu.classList.add("hidden");
    getmenubtn.classList.remove("crossx");
  }
});

// scroll loader

window.addEventListener("scroll", function () {
  let getbar = document.querySelector("#progressbar");
  let getscrolltop = document.documentElement.scrollTop;
  //   console.log(getscrolltop); // 2067
  let getscrollheight = document.documentElement.scrollHeight;
  //   console.log(getscrollheight); // 2710
  let clientheight = document.documentElement.clientHeight;
  //   console.log(clientheight); // 643

  let calheight = getscrollheight - clientheight;
  //   console.log(calheight);

  // let result = Math.round((getscrolltop * 100) / calheight);
  let result = Math.round((getscrolltop / calheight) * 100);
  // console.log(result);
  getbar.style.width = `${result}%`;
});

// Dropdown contact menu

const getcontactbtn = document.getElementById("contactbtn");
const getcontactmenu = document.getElementById("contactmenu");

getcontactbtn.addEventListener("click", function () {
  getcontactmenu.classList.toggle("hidden");
});
