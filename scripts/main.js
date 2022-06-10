// typed_js_lite
let blink = document.getElementById("forth");
let blink_array = [
  "Full Stack Developer",
  "ReactJS Developer",
  "MERN Stack Developer",
  "Data Science Enthusiast",
];
typed_js_lite(blink, blink_array);

// fetch git repos
async function git_fetch() {
  let res = await fetch("https://api.github.com/users/saurabhkhade");
  let data = await res.json();
  return data;
}
git_fetch()
  .then((data) => {
    document.getElementById("git-repos").innerHTML = data.public_repos;
  })
  .catch(() => {
    document.getElementById("git-repos").innerHTML = "Failed to fetch";
  });

document.getElementById("age").innerText = (
  (new Date() - new Date("2000-10-26")) /
  (1000 * 60 * 60 * 24 * 365)
).toPrecision(2);

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .catch(() => {});
//   });
// }
