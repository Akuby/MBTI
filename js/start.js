const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const q = document.querySelector('.qBox');
const a = document.querySelector('.aBox');
const sb = document.querySelector('.statusBar');
const resultNB = document.querySelector('.resultName');
const resultIG = document.querySelector('.color');
const resultDB = document.querySelector('.resultDesc');
const endPoint = 12;
const select = [0,0,0,0,0,0,0,0,0,0,0,0];

function setResult() {
  let b = select.indexOf(Math.max(...select));
  resultNB.innerHTML = infoList[b].name;
  resultDB.innerHTML = infoList[b].desc;
  const imgURL = './img/image-' + b + '.png';
  resultIG.src = imgURL;
  resultIG.alt - b;
}

function goResult(){ //결과 화면으로 이동
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = 'fadeIn 1s';
    qna.style.display = 'none';
    result.style.display = 'block';
  }, 950);
  setResult();
}

function addAnswer(ac, qIdx, idx) { //버튼 만들고 내용 넣기
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
      var target = qnaList[qIdx].a[idx].type;
      console.log(target);
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }
      console.log(select);
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450);
  }, false)
}

function goNext(qIdx) { // 다음 질문으로 넘어가며 addAnswer 호출
  if(qIdx === endPoint){
    goResult();
    return;
  }
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) { //for ... in 문
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  sb.style.width = ((100/endPoint) * (qIdx+1)) + '%';
}

function begin() { //시작 화면에서 질문 화면으로 넘어가며 goNext 함수를 호출함.
  document.querySelector('button').disabled = true;
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
