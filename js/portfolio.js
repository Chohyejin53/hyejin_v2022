
// 책꽂이 레이아웃
const buttons = document.querySelectorAll('.menuBtn');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// const lastBtn = document.querySelector('.book_list').lastElementChild;
// // let targetRight = lastBtn.parentNode.lastElementChild.getBoundingClientRect().right;

// lastBtn.addEventListener('click',function(){
//   // var targetRight = lastBtn.parentNode.lastElementChild.offsetX;
//   // lastBtn.parentNode.firstElementChild.moveBy(targetRight, 0);;
//   lastBtn.parentNode.firstElementChild.style.marginRight = '70' + 'px';
// });

//svg 대응
// 위에서 만든 img 태그를 변수로 담음
const svgBox = document.getElementsByClassName("main_title_svg");
const img = document.createElement('img');
// modernizer-customer.js를 이용하여 svg 파일형식을 지원하는 브라우저인지 체크
if(!Modernizr.svg) {
    // svg 파일형식을 지원하지 않을 경우 img 태그에 png 파일 삽입
    // svgBox.appendChild(img);
  //  document.svgBox.appendChild(img);
    img.setAttribute("src","img/main_title_v2.png");
}



//클릭시 이벤트

// 1. 문서객체 선택

const skills = document.querySelector('.skill_area .skills');
const skillsItem = document.querySelectorAll ('.skill_area .skills li');
// const progressBg = document.querySelector('.progress_bg');
const bookItemLeft = document.querySelector('.book_item.left .menuBtn');

// 2. 클릭이벤트 처리 
bookItemLeft.addEventListener('click',function(){
 
  for(let i=0;i<skillsItem.length;i++){ //for in 문은 여백도 모두 포함시켜 for문으로 작성!!
    const progressBg = this.nextElementSibling.getElementsByClassName('progress_bg');
    progressBg[i].classList.add('on');
} 
});



//탭바


//1. 문서객체 선택 
const btn = document.querySelectorAll('.tabbox .tabbtn a');
const contents = document.querySelectorAll('.tabbox .contents_wrap .contents');

//2. 초기실행 - 첫번째 버튼과 컨텐츠가 활성/보이게 처리 
btn[0].classList.add('active');
contents[0].style.display = 'block';
btn[0].parentNode.style.borderBottom = 'none';
btn[0].parentNode.style.backgroundColor = '#4de68e';
//3.클릭이벤트 
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click', function(e){
        //a링크 클릭시 페이지 최상단으로 가는 것 방지
        //e : 이벤트 객체 - 이벤트 발생시 생기는 정보를 담는 객체
        e.preventDefault(); //기본메서드제거 - #임시링크 클릭시 페이지 상단으로 가는 기본 이벤트 제거

        //모든 버튼의 클래스 제거 
        for(let j=0; j<btn.length; j++){
            btn[j].classList.remove('active');
            contents[j].style.display = 'none'; //컨텐츠 모두 안보이게 처리
            btn[j].parentNode.style.borderBottom = '2px solid #000';
            btn[j].parentNode.style.backgroundColor = '#fff';
          }

        //클릭한 버튼에  active 클래스 추가
        this.classList.add('active');
        btn[i].parentNode.style.borderBottom = 'none';
        btn[i].parentNode.style.backgroundColor = '#4de68e';

        //클릭한 버튼과 배열과 배열번호가 같은 컨텐츠만 보이게 처리
        contents[i].style.display = 'block';
    });
}



// e-mail form
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('Kcb4_p-udSI_pf3NH');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('hyejin2338', 'template_nelqkh9', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
