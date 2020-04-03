/* global dogeminer */
if (location.host !== 'dogeminer2.com') {
  alert('This hack only works on dogeminer2.com')
}
/**
 * @typedef Bonus
 * @type {object}
 * @property {boolean} bonuscoin_active
 * @property {()=>void} createBonuscoin - Make a new bonus coin
 * @property {()=>void} createCateMiner - Make a cate thief
 * @property {()=>void} addSpecialBonus
 */

/**
 * @typedef Tweens
 * @type {object}
 * @property {function} autoLootFly
 * @property {function} safeDestroy
 * @property {function} animateButton
 * @property {function} animateRocket
 * @property {function} beginLootDespawning
 * @property {function} bounceIn
 * @property {function} bounceInShop
 * @property {function} changePickaxe
 * @property {function} coinsClick
 * @property {function} containerEnter
 * @property {function} containerExit
 * @property {function} driveKitler
 * @property {function} rotateFX
 * @property {function} enterFromTeleport
 * @property {function} fadeIn
 * @property {function} fadeInDelay
 * @property {function} fadeInSafe
 * @property {function} fadeOutSafe
 * @property {function} fadeOut
 * @property {function} fadeOut2
 * @property {function} fadeOutDelay
 * @property {function} fadeOutDown
 * @property {function} fadeOutUp
 * @property {function} fadeOutRight
 * @property {function} fadeOutLeft
 * @property {function} fadeInLeft
 * @property {function} fadeInRight
 * @property {function} fadeTo
 * @property {function} fallIn
 * @property {function} flash
 * @property {function} flashInfinite
 * @property {function} float
 * @property {function} floatPrecise
 * @property {function} floatSafe
 * @property {function} flyArrowTo
 * @property {function} flyByItem
 * @property {function} glowSafe
 * @property {function} grabItem
 * @property {function} growIn
 * @property {function} growInBounce
 * @property {function} growInBounceFriendly
 * @property {function} growShrinkFade
 * @property {function} hideLevel
 * @property {function} justFadeOutAndUp
 * @property {function} moveTo
 * @property {function} moveX
 * @property {function} moveY
 * @property {function} pick
 * @property {function} pivot
 * @property {function} popFadeContinual
 * @property {function} rgbwow
 * @property {function} scale
 * @property {function} scaleFadeInSafe
 * @property {function} scaleFadeOutSafe
 * @property {function} scaleX
 * @property {function} scaleInSafe
 * @property {function} shockwave
 * @property {function} shrinkOut
 * @property {function} shrinkOutX
 * @property {function} shrinkOutY
 * @property {function} shootProjectile
 * @property {function} slashMove
 * @property {function} slideInRight
 * @property {function} slideInRightGeneric
 * @property {function} slideNews
 * @property {function} slideOutLeft
 * @property {function} slideOutLeftAndDestroy
 * @property {function} slightFadeSafe
 * @property {function} spawnLoot
 * @property {function} specialPick
 * @property {function} specialUnpick
 * @property {function} spinX
 * @property {()=>void} stopEverything
 * @property {function} switchPage
 * @property {function} tada
 * @property {function} tadaDelay
 * @property {function} triggered
 * @property {function} unpick
 * @property {function} mysteryBoxReady
 * @property {function} shakeX
 * @property {function} jumpUp
 */
/**
 * @typedef Loot
 * @type {object}
 * @property {()=>boolean} bagIsOpen
 * @property {()=>void} devLoot
 * @property {(e)=>void} dropMap
 * @property {()=>void} dropDiamond
 * @property {()=>void} dropBag
 */
/**
 * @typedef Game
 * @type {object}
 * @property {Loot} loot
 * @property {Bonus} bonus
 * @property {Rock} rock
 * @property {GameObj} game
 * @property {Tweens} tweens
 * @property {()=>void} testa
 * @property {(e: string)=>number} hex2int
 */

/** @type {Game} */
const doge = dogeminer

const { rock, bonus, loot, game, tweens} = doge

/** @type {Object.<string, ()=>number>} */
let hacks = {
  'Increase your DPS': ()=>setInterval(bonus.addSpecialBonus),
  Autoclicker: ()=>setInterval(rock.mineRock),
  'More loot': ()=>setInterval(loot.devLoot),
  'Increase your click strength': ()=>setInterval(()=>{
    game.extrastrength++
  }),
  'F*** up the animations': ()=>setInterval(tweens.stopEverything),
  'Bonuscoin spam': ()=>setInterval(bonus.createBonuscoin),
  'Map spam': ()=>setInterval(loot.dropMap),
  'Diamond spam': ()=>setInterval(loot.dropDiamond),
  'Bag spam': ()=>setInterval(loot.dropBag)
}

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
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 1em;
  padding: 1em;
  max-width: 100vw;
  z-index: 5;
`
const summary = document.createElement('summary')
summary.innerHTML = 'Dogeminer 2 Hack by <a href="https://jack5079.github.io">jack5079</a>'
hackmenu.appendChild(summary)

Object.entries(hacks).map(([name, hack]) => {
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
      id = hack()
    }
  })
  container.appendChild(checkbox)
  const label = document.createElement('label')
  label.htmlFor = checkbox.id
  label.innerText = name
  container.appendChild(label)
  return container
}).forEach(hackmenu.appendChild.bind(hackmenu))
document.body.appendChild(hackmenu)
