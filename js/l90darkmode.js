const gettoggle = document.getElementById("toggle");

// ? Method 1
// gettoggle.addEventListener("change", function () {
//   if (this.checked) {
//     // console.log("Already Checked.");
//     // console.log(document);
//     // console.log(document.documentElement);
//     document.documentElement.classList.add("dark");
//   } else {
//     // console.log("Not yet check.");
//     document.documentElement.classList.remove("dark");
//   }
// });

// ? Method 2
document.addEventListener("DOMContentLoaded", () => {
  const isdarkmode = localStorage.getItem("darkmode") === "true";
  document.documentElement.classList.toggle("dark", isdarkmode);
  gettoggle.checked = isdarkmode;
});

gettoggle.addEventListener("change", function () {
  const ischecked = this.checked;
  document.documentElement.classList.toggle("dark", ischecked);
  localStorage.setItem("darkmode", ischecked);
});
