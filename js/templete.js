// $('.project-list li').click(function(){
//   $(this).addClass('on')
// })


// section scroll
const sections = document.querySelectorAll('section')
const header = document.querySelector('header')

console.log(document.documentElement.scrollHeight);

// sections.forEach((section, i) => {
//   section.addEventListener('wheel', function (e) {
//     e.preventDefault()
//     let delta = e.deltaY
//     if (delta < 0 && i === 0) {
//       return;
//     }

//     //3항 연산자 = 조건식? 참:거짓
//     let sectSibling = delta < 0 && i === 1 ? section.previousElementSibling : section.nextElementSibling
//     if (sectSibling) {
//       sectTop = sectSibling.offsetTop
//       window.scrollTo({ top: sectTop, behavior: 'smooth' })
//     }

//     // // header 이동
//     // if (delta > 0 && i > 0) {
//     //   header.classList.add('on')
//     // }

//     // else {
//     //   header.classList.remove('on')
//     // }

//   })
// })

window.addEventListener('wheel', function (e) {

  let scrollLocation = document.documentElement.scrollTop;
  // console.log(scrollLocation);

  if (e.deltaY < 0 && scrollLocation <= innerHeight) {
    header.classList.remove('on')
  }

  else {
    header.classList.add('on')
  }


  // if (e.deltaY > 0 && scrollLocation > 0) {
  //   header.classList.add('on')
  // }

  // else {
  //   header.classList.remove('on')
  // }
})
