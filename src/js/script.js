//Portifolio item filter

const filterContainer = document.querySelector('.portifolio-filter'),
  filterBtns = filterContainer.children,
  //   totalFilterBtn = filterBtns.length
  portifolioItems = document.querySelectorAll('.portifolio-item'),
  totalPortifolioItem = portifolioItems.length

for (let btn of filterBtns) {
  btn.addEventListener('click', function () {
    filterContainer.querySelector('.active').classList.remove('active')
    this.classList.add('active')

    const filterValue = this.getAttribute('data-filter')
    for (let k = 0; k < totalPortifolioItem; k++) {
      if (filterValue === portifolioItems[k].getAttribute('data-category')) {
        portifolioItems[k].classList.remove('hide')
        portifolioItems[k].classList.add('show')
      } else {
        portifolioItems[k].classList.remove('show')
        portifolioItems[k].classList.add('hide')
      }
      if (filterValue === 'tudo') {
        portifolioItems[k].classList.add('show')
      }
    }
  })
}

// Portifolio lightbox
const lightbox = document.querySelector('.lightbox'),
  lightboxImg = lightbox.querySelector('.lightbox-img'),
  lightboxClose = lightbox.querySelector('.closed-lightbox'),
  lightboxText = lightbox.querySelector('.caption-text'),
  lightboxCounter = lightbox.querySelector('.caption-counter')

let itemIndex = 0

for (let i = 0; i < totalPortifolioItem; i++) {
  portifolioItems[i].addEventListener('click', function () {
    itemIndex = i
    changeItem()
    toggleLightbox()
  })
}

function changeItem() {
  imgSrc = portifolioItems[itemIndex]
    .querySelector('.portifolio-img img')
    .getAttribute('src')

  lightboxImg.src = imgSrc
  lightboxText.innerHTML =
    portifolioItems[itemIndex].querySelector('h4').innerHTML
  lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalPortifolioItem
}

function toggleLightbox() {
  lightbox.classList.toggle('open')
}

function nextItem() {
  if (itemIndex == totalPortifolioItem - 1) {
    itemIndex = 0
  } else {
    itemIndex++
  }
  changeItem()
}
function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalPortifolioItem - 1
  } else {
    itemIndex--
  }
  changeItem()
}

//close lightbox

lightbox.addEventListener('click', function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox()
  }
})

// Aside Navbar
const nav = document.querySelector('ul'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSections = document.querySelectorAll('.section'),
  totalSection = allSections.length

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a')
  a.addEventListener('click', function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active')

    showSection(this)
  })
}

function showSection(element) {
  for (let k = 0; k < totalSection; k++) {
    allSections[k].classList.remove('active')
  }
  const target = element.getAttribute('href').split('#')[1]

  document.querySelector('#' + target).classList.add('active')
}

// nav-Toggler

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('aside')
console.log(aside)

navTogglerBtn.addEventListener('click', function () {
  asideSectionTogglerBtn()
})

function asideSectionTogglerBtn() {
  aside.classList.toggle('open')
  navTogglerBtn.classList.toggle('open')
}
