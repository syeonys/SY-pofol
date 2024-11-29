// menu
document.querySelectorAll('.main-menu a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const subMenu = this.querySelector('.sub-menu');
    const parent = this.parentElement;
    const siblings = Array.from(parent.parentElement.children).filter(function (child) {
      return child !== parent;
    });

    // Remove 'on' class from sibling elements
    siblings.forEach(function (sibling) {
      sibling.classList.remove('on');
      const siblingSubMenu = sibling.querySelector('.sub-menu');
      if (siblingSubMenu) {
        siblingSubMenu.classList.remove('on');
      }
    });

    // Toggle 'on' class for the clicked element
    parent.classList.toggle('on');
    if (subMenu) {
      subMenu.classList.toggle('on');
    }
  });
});


// section scroll
const sections = document.querySelectorAll('section')
const frame = document.querySelector('.frame') //하단 영역
const scene = document.querySelector('.scene') //불러들일 파일 공간


sections.forEach((section, i) => {
  section.addEventListener('wheel', function (e) {
    e.preventDefault()

    let delta = e.deltaY
    if (delta < 0 && i === 0) {
      return;
    }

    //3항 연산자 = 조건식? 참:거짓
    let sectSibling = delta < 0 ? section.previousElementSibling : section.nextElementSibling
    if (sectSibling) {
      sectTop = sectSibling.offsetTop
      window.scrollTo({ top: sectTop, behavior: 'smooth' })
    }
  })



  section.addEventListener('click', function (e) {
    e.preventDefault()

    const href = this.getAttribute('data-link')

    location.href = href   


    // frame.style.top = 0
    // // fetch api 자료 불러오기
    // fetch(href)
    //   .then(res => res.text()) //res = response (요청)
    //   .then(data => { scene.innerHTML = data })
    // document.body.style.overflowY = 'auto'
  })


})