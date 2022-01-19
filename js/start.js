const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const q = document.querySelector('.qBox');
const a = document.querySelector('.aBox');
const sb = document.querySelector('.statusBar');
const endPoint = 12;

function addAnswer(ac, qIdx) { //버튼 만들고 내용 넣기
  var button = document.createElement('button');
  button.classList.add('buttonList');
  button.style.animation = "fadeIn 0.5s"
  button.style.WebkitAnimation = "fadeIn 0.5s"
  a.appendChild(button)
  button.innerHTML = ac;

  button.addEventListener('click', function() { //클릭 시 사라지기
    let buttons = document.querySelectorAll('.buttonList')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      buttons[i].style.WebkitAnimation = 'fadeOut 1s';
      buttons[i].style.animation = 'fadeOut 1s';
    }
    setTimeout(() => {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450);
  }, false)
}

function goNext(qIdx) { // 다음 질문으로 넘어가며 addAnswer 호출
  q.innerHTML = qnaList[qIdx].q;
  sb.style.width = ((100/endPoint) * (qIdx+1)-3) + '%';
  for (let i in qnaList[qIdx].a) { //for ... in 문
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
}

function begin() { //시작 화면에서 질문 화면으로 넘어가며 goNext 함수를 호출함.
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = 'fadeIn 1s';
    main.style.display = 'none';
    qna.style.display = 'block';
  }, 950);
  let qIdx = 0;
  goNext(qIdx);
}
