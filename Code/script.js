
const main_Title = document.querySelector(".main_title");
console.log(main_Title);

const first_Title = document.querySelector(".firstTitle")
const second_Title = document.querySelector(".secondTitle")

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
    first_Title.innerText = firstData.first;
    second_Title.innerText = firstData.second;
    startSlideShow();
  });

// 언제나 바꿔칠 수 있도록 호이스팅, 재선언, 등이 가능한 let을 사용
let i = 0;
// 슬라이드 쇼의 타이머를 저장할 변수
let titleInterval;
let isTransitioning = false;

const updateTitle = (i) => {
  first_Title.innerText = jsonData[i].first;
  second_Title.innerText = jsonData[i].second;
};

// startSlideShow가 호출될 때 마다 titleInterval이 생성됨. 이때문에 전에 있던 titleInterval을 제대로 지워줄 필요가 있음. 또한 resetSlideShow를 통해 슬라이드를 2번 시작하게 됨.
const startSlideShow = () => {
  titleInterval = setInterval(() => {
    updateTitle(i);
    i++;
    // 초기화시켜줌
    if(i >= jsonData.length){
      i = 0;
    }
  }, 3000);
};



