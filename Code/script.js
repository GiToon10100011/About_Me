
const first_Title = document.querySelector(".firstTitle")
const second_Title = document.querySelector(".secondTitle")
const mainTitle = document.querySelector(".main_title")

console.log(first_Title, second_Title);

let jsonData;

// then은 fetch(json파일을 잘 찾아왔다고 가정)가 잘되면 그럼 이걸 해줘라는 뜻
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // 구조 분해 할당 -> 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 담을 수 있게함.
    const [firstData, ...otherData] = data.data;
    jsonData = data.data;
    console.log(firstData);
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
