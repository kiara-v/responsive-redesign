// const IsMobile = () => {
//     let width =
//         window.innerWidth ||
//         document.documentElement.clientWidth ||
//         document.getElementsByTagName("body")[0].clientWidth;
//         console

//     if (width <= 736) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const ResizeHeader = () => {
//     let width =
//         window.innerWidth ||
//         document.documentElement.clientWidth ||
//         document.getElementsByTagName("body")[0].clientWidth;
//         console.log(width);

//     if (width <= 815 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         // console.log("here");
//         if (document.getElementsByClassName("hamburger").length <= 0) {
//             let header = document.getElementsByClassName("header")[0];
//             let main_nav = header.getElementsByClassName("main-nav")[0];
//             // let right_nav = header.getElementsByClassName("right-nav")[0];

//             let hamburger = document.createElement("div");
//             hamburger.classList.add("hamburger");
//             hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
// </svg>`;
//             main_nav.remove();
//             // right_nav.remove();

//             let bottom_header = document.createElement("div");
//             bottom_header.classList.add("header-bottom");
//             bottom_header.append(main_nav);
//             bottom_header.style.display = "none";

//             hamburger.addEventListener("click", function () {
//                 if (bottom_header.style.display == "none") {
//                     bottom_header.style.display = "flex";
//                     header.style.paddingBottom = "9px";
//                     header.style.paddingTop = "9px";
//                 } else {
//                     bottom_header.style.display = "none";
//                     header.style.paddingBottom = "0px";
//                     header.style.paddingTop = "0px";
//                 }
//             });

//             header.classList.add("header-change");

//             let top_header = document.createElement("div");
//             top_header.classList.add("header-top");
//             top_header.append(header.children[0], hamburger);

//             header.innerHTML = "";
//             header.append(top_header, bottom_header);
//         }
//     } else {
//         if (document.getElementsByClassName("hamburger").length > 0) {
//             let header = document.getElementsByClassName("header")[0];
//             let main_nav = header.getElementsByClassName("main-nav")[0];
//             // let right_nav = header.getElementsByClassName("right-nav")[0];
//             let brand = header.getElementsByClassName("brand")[0];

//             header.classList.remove("header-change");
//             header.children[0].remove();
//             header.children[0].remove();
//             header.append(brand, main_nav);
//         }
//     }
// };

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const Load = () => {
    document.querySelector('.loader').style.display = "none";
}

const ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop >= 1) {
        header.style.backgroundColor = "black";
        header.style.boxShadow = "0px 2px 10px black";
        header.classList.add("nav-active");
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        header.classList.remove("nav-active");
    }
};


const MakeJumbotron = () => {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    document.getElementsByClassName("top")[0].style.height = `${height}px`;
};

const SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
};


