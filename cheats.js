/* global dogeminer */

/**
 * @typedef Bonus
 * @type {object}
 * @property {boolean} bonuscoin_active
 * @property {()=>void} createBonuscoin - Make a new bonus coin
 * @property {()=>void} createCateMiner - Make a cate thief
 * @property {()=>void} addSpecialBonus
 */

/**
 * @typedef Loot
 * @type {object}
 * @property {()=>boolean} bagIsOpen
 * @property {()=>void} devLoot
 */
/**
 * @typedef Game
 * @type {object}
 * @property {Loot} loot
 * @property {Bonus} bonus
 * @property {Rock} rock
 * @property {GameObj} game
 */

/** @type {Game} */
const doge = dogeminer
const { rock, bonus, loot, game } = doge


let hacks = [{
  name: 'Increase your DPS',
  hack: ()=>setInterval(bonus.addSpecialBonus)
}, {
  name: 'Autoclicker',
  hack: ()=>setInterval(rock.mineRock)
}, {
  name: 'More loot',
  hack: ()=>setInterval(loot.devLoot)
}, {
  name: 'Increase your click strength',
  hack: ()=>setInterval(()=>{
    game.extrastrength++
  })
}, {
  name: 'Cover your screen with bonus coins',
  hack: ()=>setInterval(bonus.createBonuscoin)
}]
function random (length) {
  return Array(length)
    .fill()
    .map(() =>
      Math.random()
        .toString(36)
        .replace(/\.|[0-9]/g, '')
        .substr(1, 1)
    )
    .join('')
}
const hackmenu = document.createElement('details')
hackmenu.style = `
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  color: black;
  border-radius: 1em;
  padding: 1em;
  max-width: 100vw;
  z-index: 5;
`
const summary = document.createElement('summary')
summary.innerText = 'Dogeminer 2 Hack'
hackmenu.appendChild(summary)

hacks = hacks.map(hack => {
  const container = document.createElement('article')
  const checkbox = document.createElement('input')
  checkbox.id = random(26)
  checkbox.type = 'checkbox'
  let id = 0
  checkbox.addEventListener('input', ()=>{
    if (id && !checkbox.checked) {
      // alert('off')
      clearInterval(id)
    } else {
      // alert('on')
      id = hack.hack()
    }
  })
  container.appendChild(checkbox)
  const label = document.createElement('label')
  label.htmlFor = checkbox.id
  label.innerText = hack.name
  container.appendChild(label)
  return container
})
hacks.forEach(hackmenu.appendChild.bind(hackmenu))
document.body.appendChild(hackmenu)
