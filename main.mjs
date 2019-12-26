import randomSplash from './splashes.mjs'
document.querySelector('small').innerHTML = randomSplash()

const int = document.getElementById('int')
const dps = document.getElementById('dps')
const loot = document.getElementById('loot')
const autoclick = document.getElementById('click')
const strength = document.getElementById('strength')

document.querySelector('a').addEventListener('click', e => {
  e.preventDefault()
}) // prevent click

function update () {
  document.querySelector('a').href = `javascript:
  let int=${+int.value || 1};
  ${dps.checked ? 'setInterval(dogeminer.bonus.addSpecialBonus, int)' : ''};
  ${autoclick.checked ? 'setInterval(dogeminer.rock.mineRock, int)' : ''};
  ${loot.checked ? 'setInterval(dogeminer.loot.devLoot, int)' : ''};
  ${
    strength.checked
      ? 'setInterval(()=>{dogeminer.game.extrastrength++}, int)'
      : ''
  };
  void 0;`
}

document.querySelectorAll('input').forEach(e => {
  e.addEventListener('input', update)
})

update()
