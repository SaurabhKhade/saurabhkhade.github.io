

// typed_js_lite
let blink = document.getElementById('forth');
let blink_array = ['Front End Developer', 'ReactJS Developer', 'CS Student'];
typed_js_lite(blink, blink_array);


// fetch git repos
async function git_fetch() {
  let res = await fetch('https://api.github.com/users/saurabhkhade');
  let data = await res.json();
  return data;
}
git_fetch().then(data=> {
  document.getElementById('git-repos').innerHTML = data.public_repos;
}).catch(()=> {
  document.getElementById('git-repos').innerHTML = 'Failed to fetch';
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch(() => {});
  });
}