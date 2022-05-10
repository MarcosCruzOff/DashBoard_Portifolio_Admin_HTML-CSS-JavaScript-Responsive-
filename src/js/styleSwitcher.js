const links = document.querySelectorAll('.alternate-style'),
  totalLinks = links.length

console.log(links)

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color == links[i].getAttribute('title')) {
      links[i].removeAttribute('disabled')
    } else {
      links[i].setAttribute('disabled', 'true')
    }
  }
}

// Body skin
const bodySkin = document.querySelectorAll('.body-skin'),
  totalBodySkin = bodySkin.length

console.log(bodySkin)

for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener('change', function () {
    if (this.value === 'Dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })
}

document
  .querySelector('.toggle-style-switcher')
  .addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('openStyle')
  })
