
const first_Title = document.querySelector(".firstTitle")
const second_Title = document.querySelector(".secondTitle")
const mainTitle = document.querySelector(".main_title")


let jsonData;

// then은 fetch(json파일을 잘 찾아왔다고 가정)가 잘되면 그럼 이걸 해줘라는 뜻
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // 구조 분해 할당 -> 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 담을 수 있게함.
    const [firstData, ...otherData] = data.data;
    jsonData = data.data;
    first_Title.innerHTML = firstData.first;
    second_Title.innerHTML = firstData.second;
    first_Title.classList.add("active");
    second_Title.classList.add("active");
  });

// 언제나 바꿔칠 수 있도록 호이스팅, 재선언, 등이 가능한 let을 사용
let i = 0;
// 슬라이드 쇼의 타이머를 저장할 변수
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
  }, 2000)
};

const startSlideShow = () => {
  // 2초마다 해당 구문을 실행함
  titleInterval = setInterval(() => {
    updateTitle(i);
    i++;
    // 초기화시켜줌
    if(i >= jsonData.length){
      i = 0;
    }
  }, 4000);
};


window.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scroll_indicator_container");
  if(window.scrollY > 120){
    scroll.classList.add("active");
  } else{
    scroll.classList.remove("active");
  }
});

startSlideShow();

const gnbToggleBtn = document.querySelector(".gnb_toggle_btn");
const M_gnbToggleBtn = document.querySelector(".gnbMobile .gnb_toggle_btn");
const lnb_close_btn = document.querySelector(".lnb_close_btn");

gnbToggleBtn.addEventListener("click", () => {
  const lnbMain = document.querySelector(".lnbMain");
  const lnb_close_btn = document.querySelector(".lnb_close_btn");
  lnbMain.classList.add("active");
})

lnb_close_btn.addEventListener("click", () => {
  const lnbMain = document.querySelector(".lnbMain");
  lnbMain.classList.remove("active");
})

M_gnbToggleBtn.addEventListener("click", () => {
  const M_Header = document.querySelector(".gnb_container");
  const lnbMain = document.querySelector(".lnbMain");
  M_Header.style.background = "#222"
  console.log("clicked");
  lnbMain.classList.toggle("active");
  // active클래스를 보유중인지 확인하는 contains 속성
  if(!lnbMain.classList.contains("active")){
    M_Header.style.background = "#111";
  }
})

document.addEventListener("DOMContentLoaded" , function(){
  const counter3 = document.querySelector(".counter-3");
  for(let i = 0; i < 2; i++){
    for(let j = 0; j < 10; j++){
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
    const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;
    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    })
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);
  
});

gsap.to(".digit", {
  top : "-200px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration : 1,
  ease: "power4.inOut"
});

gsap.from(".loader-1", {
  width : 0,
  duration : 6,
  ease : "power2.inOut",
});

gsap.from(".loader-2", {
  width : 0,
  delay : 0.5,
  duration : 6,
  ease : "power2.inOut",
});

gsap.to(".loader" , {
  background : "none",
  delay : 6,
  duration: 0.1,
})

gsap.to(".loader-1", {
  rotate : 90,
  y : -50,
  duration : 0.5,
  delay : 6,
})

gsap.to(".loader-2", {
  x: -75,
  y: -175,
  duration: 0.5,
},
"<"
);

gsap.to(".loader" , {
  scale : 200,
  duration : 1,
  delay : 7,
  ease : "power2.inOut"
});

gsap.to(".loader" , {
  rotate : 45,
  y : 500,
  x : 2000,
  duration : 1,
  delay : 7,
  ease : "power2.inOut",
});

gsap.to("#loading_screen", {
  opacity : 0,
  duration : 0.5,
  delay : 7.5,
  ease : "power1.inOut",
});