# 🧑‍💻 About Me - 자기소개 웹페이지

![About Me 메인 이미지](https://aboutme-397ce.web.app/img/img/Profile.png)

## 📋 프로젝트 소개

이 프로젝트는 개인 소개 웹사이트로, HTML, CSS, JavaScript를 활용하여 제작되었습니다. 사용자의 정보, 취미, 비전 및 연락처 정보를 시각적으로 보여주는 반응형 웹사이트입니다.

## 📋 프로젝트 정보

- **개발 기간**: 2023.09 ~ 2023.10
- **개발자**: Toon
- **배포 주소**: [https://aboutme-397ce.web.app](https://aboutme-397ce.web.app)

## 🛠️ 사용 기술
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## ✨ 주요 기능

### 1. 다국어 지원
한국어, 영어, 일본어로 콘텐츠를 표시하는 기능을 구현했습니다.

```javascript
const languageSelector = document.querySelector('.language-selector');
languageSelector.addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  document.documentElement.lang = selectedLanguage;
  
  // 언어별 텍스트 변경
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translations[selectedLanguage][key];
  });
});
```

### 2. 인터랙티브 카드 슬라이더
취미와 관심사를 보여주는 카드 슬라이더를 구현했습니다.

```javascript
const slider = document.querySelector('.card-slider');
const cards = slider.querySelectorAll('.card');
let currentIndex = 0;

function slideCards() {
  cards.forEach((card, index) => {
    card.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
}

document.querySelector('.next-btn').addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    slideCards();
  }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideCards();
  }
});
```

### 3. MBTI 정보 표시
사용자의 MBTI 성격 유형 정보를 시각적으로 표현했습니다.

```javascript
const mbtiChart = document.querySelector('.mbti-chart');
const mbtiData = {
  extraversion: 65,
  sensing: 40,
  thinking: 75,
  judging: 80
};

Object.entries(mbtiData).forEach(([trait, value]) => {
  const bar = document.createElement('div');
  bar.className = 'mbti-bar';
  bar.style.width = `${value}%`;
  
  const label = document.createElement('span');
  label.textContent = trait.toUpperCase();
  
  const container = document.createElement('div');
  container.className = 'mbti-trait';
  container.appendChild(label);
  container.appendChild(bar);
  
  mbtiChart.appendChild(container);
});
```

### 4. 반응형 디자인
다양한 디바이스에 최적화된 반응형 레이아웃을 구현했습니다.

```css
/* 모바일 디바이스 */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
  
  .card-slider {
    height: 300px;
  }
  
  .navigation {
    flex-direction: column;
  }
}

/* 태블릿 디바이스 */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    width: 90%;
  }
  
  .card-slider {
    height: 350px;
  }
}
```

### 5. 스크롤 애니메이션
스크롤 위치에 따라 요소가 나타나는 애니메이션을 구현했습니다.

```javascript
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('visible');
    }
  });
});
```

## 📁 프로젝트 구조

```
About_Me/
├── index.html              # 메인 페이지
├── style.css               # 스타일시트
├── reset.css               # 리셋 CSS
├── script.js               # 메인 JavaScript
├── Fonts/                  # 폰트 파일
│   └── kiona-regular-webfont.svg
└── img/                    # 이미지 파일
    ├── Photo1.png
    ├── Photo2.png
    └── ...
```

## 💡 배운 점

### 기술적 측면

- **인터랙티브 UI 개발**: 사용자 경험을 향상시키는 인터랙티브 요소 구현 방법을 익혔습니다.
- **SVG 폰트 활용**: 커스텀 폰트를 SVG 형식으로 적용하는 방법을 학습했습니다.
- **스크롤 이벤트 처리**: 스크롤 위치에 따른 애니메이션 구현 방법을 배웠습니다.

### 디자인 측면

- **일관된 디자인 시스템**: 색상, 타이포그래피, 여백 등을 일관되게 적용하는 방법을 연구했습니다.
- **시각적 계층 구조**: 정보의 중요도에 따른 시각적 계층 구조 설계 방법을 배웠습니다.
- **사용자 중심 UI**: 사용자의 니즈를 고려한 인터페이스 설계 방법을 익혔습니다.

## 🚀 설치 및 실행 방법

1. 저장소를 클론합니다:
   ```
   git clone https://github.com/GiToon10100011/About_Me.git
   ```
2. 프로젝트 폴더로 이동합니다:
   ```
   cd About_Me
   ```
3. 웹 브라우저에서 `index.html` 파일을 엽니다.

## 🔗 관련 링크

- [GitHub 저장소](https://github.com/GiToon10100011/About_Me)
- [개발자 GitHub](https://github.com/GiToon10100011)

---

© 2024 Toon. All Rights Reserved.
