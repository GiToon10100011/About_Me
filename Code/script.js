// Preloader Event

document.addEventListener("DOMContentLoaded", function () {
  const counter3 = document.querySelector(".counter-3");
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = 0;
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
  top: "-200px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.from(".loader-2", {
  width: 0,
  delay: 0.5,
  duration: 6,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  background: "none",
  delay: 6,
  duration: 0.1,
});

gsap.to(".loader-1", {
  rotate: 90,
  y: -50,
  duration: 0.5,
  delay: 6,
});

gsap.to(
  ".loader-2",
  {
    x: -75,
    y: -175,
    duration: 0.5,
  },
  "<"
);

gsap.to(".loader", {
  scale: 200,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  rotate: 45,
  y: 500,
  x: 4000,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to("#loading_screen", {
  opacity: 0,
  duration: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
});

// Title Transition Event

const first_Title = document.querySelector(".firstTitle");
const second_Title = document.querySelector(".secondTitle");
const mainTitle = document.querySelector(".main_title");

let jsonData;

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const [firstData, ...otherData] = data.data;
    jsonData = data.data;
    first_Title.innerHTML = firstData.first;
    second_Title.innerHTML = firstData.second;
    first_Title.classList.add("active");
    second_Title.classList.add("active");
  });

let i = 0;
let titleInterval;
let isTransitioning = false;

const updateTitle = (i) => {
  first_Title.innerHTML = jsonData[i].first;
  second_Title.innerHTML = jsonData[i].second;
  first_Title.classList.add("active");
  second_Title.classList.add("active");

  setTimeout(() => {
    first_Title.classList.remove("active");
    second_Title.classList.remove("active");
  }, 2000);
};

const startSlideShow = () => {
  titleInterval = setInterval(() => {
    updateTitle(i);
    i++;
    if (i >= jsonData.length) {
      i = 0;
    }
  }, 4000);
};

// scrollIndicator event

window.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scroll_indicator_container");
  if (window.scrollY > 120) {
    scroll.classList.add("active");
  } else {
    scroll.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const menuToggle = document.querySelector(".scroll_toggle_btn");
  if (window.scrollY > 200) {
    menuToggle.classList.add("active");
    main_gnb.classList.add("unlock");
  } else {
    menuToggle.classList.remove("active");
    main_gnb.classList.remove("unlock");
  }

  if (lnbMain.classList.contains("active")) {
    main_gnb.classList.remove("unlock");
  }
});

startSlideShow();

// Lnb show Event

const lnbMain = document.querySelector(".lnbMain");
const gnbToggleBtn = document.querySelector(".gnb_toggle_btn");
const M_gnbToggleBtn = document.querySelector(".gnbMobile .gnb_toggle_btn");
const lnb_close_btn = document.querySelector(".lnb_close_btn");
const main_gnb = document.querySelector(".gnb_container");
const main_banner = document.querySelector(".main_banner");
const wrapper_filter = document.querySelector("#wrapper");
const scroll_menu_btn = document.querySelector(".scroll_toggle_btn");

gnbToggleBtn.addEventListener("click", () => {
  lnbMain.classList.add("active");
});

lnb_close_btn.addEventListener("click", () => {
  lnbMain.classList.remove("active");
  main_gnb.style.background = "#111";
});

scroll_menu_btn.addEventListener("click", () => {
  const M_Header = document.querySelector(".gnb_container");
  lnbMain.classList.add("active");
  main_gnb.classList.remove("unlock");
  M_Header.style.background = "#222";
});

M_gnbToggleBtn.addEventListener("click", () => {
  const M_Header = document.querySelector(".gnb_container");
  M_Header.style.background = "#222";
  lnbMain.classList.toggle("active");
  // active클래스를 보유중인지 확인하는 contains 속성
  if (!lnbMain.classList.contains("active")) {
    M_Header.style.background = "#111";
  }
});

// Page Scroll Show Event

const boxes = document.querySelectorAll(".scrl");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 7;
  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// Anchor Tag Repositioning Event

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const M_Header = document.querySelector(".gnb_container");
    const lnbMain = document.querySelector(".lnbMain");
    lnbMain.classList.remove("active");
    main_gnb.classList.remove("open");
    main_banner.classList.remove("open");
    if (!lnbMain.classList.contains("active")) {
      M_Header.style.background = "#111";
    }

    boxes.forEach((box) => {
      box.classList.remove("show");
    });

    targetElement.classList.add("show");

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// About_Me ToggleEvent

const mbti_toggle_btn = document.querySelectorAll(".mbti_toggle_btn");
const right_half = document.querySelector(".right_half");
const left_half = document.querySelector(".left_half");
const AM_desc = document.querySelector(".About_Me_desc");
const AM_content = document.querySelector(".About_Me_contents");
const MBTI_content = document.querySelector(".MBTI_inner");
const ani_progress = document.querySelectorAll(".progress-level");

mbti_toggle_btn.forEach((item) => {
  item.addEventListener("click", () => {
    right_half.classList.toggle("active");
    left_half.classList.toggle("active");
    AM_desc.classList.toggle("active");
    AM_content.classList.toggle("active");
    MBTI_content.classList.toggle("active");
    ani_progress.forEach((items) => {
      items.classList.toggle("active");
    });
  });
});

// AM_Mobile_toggle Event

const mobile_toggle_btn = document.querySelector(".m_mbti_toggle_btn");
const mbti_toggle_page = document.querySelector("#moblie_mbti_toggle");
const mbti_before_toggle = document.querySelector("#mobile_mbti");
const mbti_close_btn = document.querySelector(".mobile_mbti_close_btn");

mobile_toggle_btn.addEventListener("click", () => {
  mbti_before_toggle.classList.add("active");
  mbti_toggle_page.classList.add("active");
});

mbti_close_btn.addEventListener("click", () => {
  mbti_before_toggle.classList.remove("active");
  mbti_toggle_page.classList.remove("active");
});

const cards = document.querySelectorAll(".H_card");
const H_bg = document.querySelector("#Hobbies");
const card_container = document.querySelector(".H_card_container");

cards.forEach((item, index) => {
  item.addEventListener("click", () => {
    cards.forEach((card, i) => {
      if (i !== index) {
        card.classList.remove("active");
      } else {
        card.classList.add("active");
      }
    });
  });
});

// Prevent Event Bubbling

H_bg.addEventListener("click", (event) => {
  if (event.target === H_bg) {
    cards.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

card_container.addEventListener("click", (event) => {
  if (event.target === card_container) {
    cards.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

// Pagers & Arrows

const imgArrows1 = document.querySelectorAll(".first .slide_arrow");
const imgArrows2 = document.querySelectorAll(".second .slide_arrow");
const imgArrows3 = document.querySelectorAll(".third .slide_arrow");

const imgPagers1 = document.querySelectorAll(" .first .img_slide_pager span");
const imgPagers2 = document.querySelectorAll(" .second .img_slide_pager span");
const imgPagers3 = document.querySelectorAll(" .third .img_slide_pager span");

const slideImg1 = document.querySelector(".card_inner_img.first");
const slideImg2 = document.querySelector(".card_inner_img.second");
const slideImg3 = document.querySelector(".card_inner_img.third");

const pics1 = ["Game1.png", "Game2.png", "Game3.png", "Game4.png"];
const pics2 = [
  "Photo1.png",
  "Photo2.png",
  "Photo3.png",
  "Photo4.png",
  "Photo5.png",
  "Photo6.png",
  "Photo7.png",
];
const pics3 = ["Music1.png", "Music2.png", "Music3.png", "Music4.png"];

let imgIndex1 = 0;
let imgIndex2 = 0;
let imgIndex3 = 0;

slideImg1.style.backgroundImage = `url(../img/img/${pics1[imgIndex1]})`;
slideImg2.style.backgroundImage = `url(../img/img/${pics2[imgIndex2]})`;
slideImg3.style.backgroundImage = `url(../img/img/${pics3[imgIndex3]})`;

imgPagers1[0].classList.add("active");
imgPagers2[0].classList.add("active");
imgPagers3[0].classList.add("active");

const updateImg1 = (imgIndex1) => {
  imgPagers1.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg1.style.backgroundImage = `url(../img/img/${pics1[imgIndex1]})`;
  imgPagers1[imgIndex1].classList.add("active");
};

const updateImg2 = (imgIndex2) => {
  imgPagers2.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg2.style.backgroundImage = `url(../img/img/${pics2[imgIndex2]})`;
  imgPagers2[imgIndex2].classList.add("active");
};

const updateImg3 = (imgIndex3) => {
  imgPagers3.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg3.style.backgroundImage = `url(../img/img/${pics3[imgIndex3]})`;
  imgPagers3[imgIndex3].classList.add("active");
};

imgArrows1.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("sal1") ||
      e.target.classList.contains("fal1")
    ) {
      imgIndex1 = (imgIndex1 - 1 + pics1.length) % pics1.length;
    } else if (
      e.target.classList.contains("sar1") ||
      e.target.classList.contains("far1")
    ) {
      imgIndex1 = (imgIndex1 + 1) % pics1.length;
    }

    updateImg1(imgIndex1);
  });
});

imgPagers1.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    console.log("clicked");
    imgIndex1 = index;
    updateImg1(imgIndex1);
  });
});

imgArrows2.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    console.log("clicked");
    if (
      e.target.classList.contains("sal2") ||
      e.target.classList.contains("fal2")
    ) {
      imgIndex2 = (imgIndex2 - 1 + pics2.length) % pics2.length;
    } else if (
      e.target.classList.contains("sar2") ||
      e.target.classList.contains("far2")
    ) {
      imgIndex2 = (imgIndex2 + 1) % pics2.length;
    }

    updateImg2(imgIndex2);
  });
});

imgPagers2.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    imgIndex2 = index;
    updateImg2(imgIndex2);
  });
});

imgArrows3.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("sal3") ||
      e.target.classList.contains("fal3")
    ) {
      imgIndex3 = (imgIndex3 - 1 + pics3.length) % pics3.length;
    } else if (
      e.target.classList.contains("sar3") ||
      e.target.classList.contains("far3")
    ) {
      imgIndex3 = (imgIndex3 + 1) % pics3.length;
    }

    updateImg3(imgIndex3);
  });
});

imgPagers3.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    console.log("clicked");
    imgIndex3 = index;
    updateImg3(imgIndex3);
  });
});

// Mobile card Slider Event

const mCardArrows1 = document.querySelectorAll(".mFirst .slide_arrow");
const mCardArrows2 = document.querySelectorAll(".mSecond .slide_arrow");
const mCardArrows3 = document.querySelectorAll(".mThird .slide_arrow");

const mPagerDots = document.querySelectorAll(".m_card_pager span");

const cardMoveContainer = document.querySelector(".H_card_container");

let mPagerIndex = 0;

mPagerDots[mPagerIndex].classList.add("active");

mCardArrows1.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("msal1") ||
      e.target.classList.contains("mfal1")
    ) {
      cardMoveContainer.classList.add("skipRight");
      mPagerDots[0].classList.remove("active");
      mPagerDots[1].classList.remove("active");
      mPagerDots[2].classList.add("active");
    } else if (
      e.target.classList.contains("msar1") ||
      e.target.classList.contains("mfar1")
    ) {
      cardMoveContainer.classList.add("moveRight");
      mPagerDots[0].classList.remove("active");
      mPagerDots[1].classList.add("active");
      mPagerDots[2].classList.remove("active");
    }
  });
});

mCardArrows2.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("msal2") ||
      e.target.classList.contains("mfal2")
    ) {
      cardMoveContainer.classList.remove("moveRight");
      mPagerDots[0].classList.add("active");
      mPagerDots[1].classList.remove("active");
      mPagerDots[2].classList.remove("active");
    } else if (
      e.target.classList.contains("msar2") ||
      e.target.classList.contains("mfar2")
    ) {
      cardMoveContainer.classList.add("skipRight");
      mPagerDots[0].classList.remove("active");
      mPagerDots[1].classList.remove("active");
      mPagerDots[2].classList.add("active");
    }
  });
});

mCardArrows3.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("msal3") ||
      e.target.classList.contains("mfal3")
    ) {
      cardMoveContainer.classList.remove("skipRight");
      cardMoveContainer.classList.add("moveRight");
      mPagerDots[0].classList.remove("active");
      mPagerDots[1].classList.add("active");
      mPagerDots[2].classList.remove("active");
    } else if (
      e.target.classList.contains("msar3") ||
      e.target.classList.contains("mfar3")
    ) {
      cardMoveContainer.classList.remove("skipRight");
      cardMoveContainer.classList.remove("moveRight");
      cardMoveContainer.classList.remove("moveLeft");
      mPagerDots[0].classList.add("active");
      mPagerDots[1].classList.remove("active");
      mPagerDots[2].classList.remove("active");
    }
  });
});

mPagerDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    mPagerDots.forEach((dot, i) => {
      if (i !== index) {
        dot.classList.remove("active");
      } else {
        dot.classList.add("active");
      }
    });
    const pageIndex = Array.from(mPagerDots).indexOf(dot);
    if (pageIndex === 0) {
      cardMoveContainer.classList.remove("moveRight");
      cardMoveContainer.classList.remove("skipRight");
    } else if (pageIndex === 1) {
      cardMoveContainer.classList.remove("skipRight");
      cardMoveContainer.classList.add("moveRight");
      dot.classList.add("active");
    } else if (pageIndex === 2) {
      cardMoveContainer.classList.add("skipRight");
      dot.classList.add("active");
    }
  });
});

// Vision Card Event

const Vcard1 = document.querySelector(".V_card.first");
const Vcard2 = document.querySelector(".V_card.second");
const overlay1 = document.querySelector(".Discord");
const overlay2 = document.querySelector(".Nintendo");

const Vcard_img1 = document.querySelector(".V_card_inner_img.first");
const Vcard_img2 = document.querySelector(".V_card_inner_img.second");

const discordImg = ["Discord.png", "ColorDiscord.png"];
const nintendoImg = ["Nintendo.png", "ColorNintendo.png"];

Vcard_img1.style.backgroundImage = `url(../img/img/${discordImg[0]})`;
Vcard_img2.style.backgroundImage = `url(../img/img/${nintendoImg[0]})`;

Vcard1.addEventListener("mousemove", function (e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const rotateY = (-1 / 25) * x + 20;
  const rotateX = (1 / 19) * y - 20;
  Vcard1.style = `transform : perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  Vcard_img1.style.backgroundImage = `url(../img/img/${discordImg[1]})`;
});

Vcard2.addEventListener("mousemove", function (e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const rotateY = (-1 / 25) * x + 20;
  const rotateX = (1 / 19) * y - 20;
  Vcard2.style = `transform : perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  Vcard_img2.style.backgroundImage = `url(../img/img/${nintendoImg[1]})`;
});

Vcard1.addEventListener("mouseout", function () {
  Vcard1.style = "transform : perspective(350px) rotateY(0deg) rotateX(0deg)";
  Vcard_img1.style.backgroundImage = `url(../img/img/${discordImg[0]})`;
});
Vcard2.addEventListener("mouseout", function () {
  Vcard2.style = "transform : perspective(350px) rotateY(0deg) rotateX(0deg)";
  Vcard_img2.style.backgroundImage = `url(../img/img/${nintendoImg[0]})`;
});

const mediaQuery = window.matchMedia("(max-width : 1190px)");

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    Vcard1.style = "transform : none";
  }
});

if (mediaQuery.matches) {
  Vcard1.style = "transform : none";
  Vcard1.classList.add("remove");
}

// Mobile Vision Slide Event

const vContainer = document.querySelector(".V_card_container");

const vPagers = document.querySelectorAll(".V_slide_pager span");

vPagers[0].classList.add("active");

vPagers.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    vPagers.forEach((dot, i) => {
      if (i !== index) {
        dot.classList.remove("active");
      } else {
        dot.classList.add("active");
      }
    });

    const pageIndex = Array.from(vPagers).indexOf(dot);
    if (pageIndex === 0) {
      vContainer.classList.remove("move");
    } else if (pageIndex === 1) {
      vContainer.classList.add("move");
      dot.classList.add("active");
    }
  });
});
