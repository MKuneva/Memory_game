const header = document.querySelector("nav");
const sectionOne = document.querySelector(".grid");

let element = document.querySelectorAll(".black");


const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      for(let i=0;i<element.length;i++){
        element[i].classList.add("color");}
      document.getElementById("profile").src = "img/profile.png";  
      document.getElementById("bag").src = "img/bagB.png";  
    } else {
      header.classList.remove("nav-scrolled");
      for(let i=0;i<element.length;i++){
        element[i].classList.remove("color");}
        document.getElementById("profile").src = "img/account.png"; 
        document.getElementById("bag").src = "img/bag.png";  
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


