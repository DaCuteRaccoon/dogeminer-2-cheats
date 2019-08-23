const wittySentences = ['hackeing!', 'Not approved by rkn!', 'Hacks by Jack5079!']
document.querySelector('h2').innerText = wittySentences[Math.floor(Math.random() * wittySentences.length)]

const int = document.getElementById('int')
const dps = document.getElementById('dps')
const loot = document.getElementById('loot')
const autoclick = document.getElementById('click')

document.querySelector('a').onclick = e => { e.preventDefault(); window.alert('Use it on the Dogeminer 2 website, not here.') } // Alert user if they try to use the cheat on the cheat website, instead of the real game.

function update () {
  document.querySelector('a').href = `javascript: let int=${int.value ? int.value : 1};${dps.checked ? 'setInterval(dogeminer.bonus.addSpecialBonus, int);' : ''}${autoclick.checked ? 'setInterval(dogeminer.rock.mineRock, int);' : ''}${loot.checked ? 'setInterval(dogeminer.loot.devLoot, int);' : ''}void 0;`
}

int.addEventListener('input', update)
dps.addEventListener('click', update)
loot.addEventListener('click', update)
autoclick.addEventListener('click', update)

update()
