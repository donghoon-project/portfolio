const profile = document.querySelector(".container_wrap .header_profil");
const targetMenuItem = document.querySelectorAll(".sidebar .icons ul li")[1];

console.log(targetMenuItem)
let isHidden = false;
targetMenuItem.addEventListener("click", () => {
  console.log('click')
  if (!isHidden) {
    profile.classList.add("show");
  } else {
    profile.classList.remove("show");
  }
  isHidden = !isHidden;
});
