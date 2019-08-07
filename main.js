let wittySentences = ['hackeing!', 'Not approved by rkn!', 'Hacks by Jack5079!']
document.querySelector('h2').innerText = wittySentences[Math.floor(Math.random() * wittySentences.length)]

let int = document.getElementById('int')
let dps = document.getElementById('dps')
let autoclick = document.getElementById('click')

let dpscheat = '' // Init the dps cheat
let clickcheat = '' // Init the autoclick cheat

document.querySelector('a').onclick = (e) => { e.preventDefault(); window.alert('Use it on the Dogeminer 2 website, not here.') } // Alert user if they try to use the cheat on the cheat website, instead of the real game.

function update () {
  if (dps.checked) {
    dpscheat = 'setInterval(dogeminer.bonus.addSpecialBonus, int);'
  } else dpscheat = ''
  if (autoclick.checked) {
    clickcheat = 'setInterval(dogeminer.rock.mineRock, int);'
  } else clickcheat = ''
  document.getElementsByTagName('a')[0].href = `javascript: let int=${int.value ? int.value : 1};${dpscheat}${clickcheat}void 0;`
}

int.addEventListener('input', update)
dps.addEventListener('click', update)
autoclick.addEventListener('click', update)

update()
