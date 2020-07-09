/**
 * @file Dogeminer 2 Cheats - Main
 * @author Jack <hello@5079.ml> (5079.ml)
 * @version 4.0.1
 */
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
 * @property {function} driveKitler - Spolier alert!
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
 * @property {()=>void} dropMap
 * @property {()=>void} dropDiamond
 * @property {()=>void} dropBag
 * @property {()=>boolean} isThereABag
 */
/**
 * Utility functions
 * @typedef Helper
 * @type {object}
 * @property {()=>void} unpauseCoins Revert pauseCoins.
 * @property {()=>void} pauseCoins Stop the dogecoin count from increasing. Note that Loot.devLoot is not affected.
 * @property {(e: number)=>string} romanize Convert a number to roman
 * @property {(e: number)=>string} msToMinsSecs Convert a ms value to minute:seconds. Will not function somewhere above 59_999_999_999_999_990_999_999_999
 * @property {(e: number)=>string} beautify Add commas every 3 digits.
 * @property {(e: number)=>string} beautifyCoins Add commas every 3 digits, and add billion (B), million (M), and trillion (T) prefixes.
 * @property {(e: number)=>string} beautifyCost Add commas every 3 digits, and add a billion (Billiion) prefix.
 * @property {(e: number)=>void} removeCoins Remove coins from the counter. Ex: dogeminer.helperfunctions.removeCoins(Infinity) will remove all coins
 * @property {()=>number} getPersec Get the DPS of the player.
 * @property {(e: any[])=>void} shuffle Overwrite an array with a shuffled version.
 */

/**
 * @typedef News
 * @type {object}
 * @property {()=>void} initNews
 * @property {(text: string, id: any)=>void} showNews Show a news ticker with text. The id must be unique.
 * @property {()=>boolean} isReady
 * @property {()=>void} removeNews Fade out the news ticker.
 * @property {()=>void} isShowingNews Is the news ticker on the screen?
 */

/**
 * @typedef Controller
 * @type {object}
 * @property {(e: number)=>void} switchLevel Move between planets. 1 = Earth, 2 = Moon, 3 = Mars, 4 = Jupiter, 5 = Titan
 */

/**
 * @typedef GameDev
 * @type {object}
 * @property {()=>HTMLCanvasElement} switchLevel Get the <canvas> element the game is in
 */

/**
 * @todo Document rock, game, and player
 * @typedef Game
 * @type {object}
 * @property {Loot} loot
 * @property {Bonus} bonus
 * @property {any} rock
 * @property {any} game
 * @property {any} player
 * @property {Tweens} tweens
 * @property {Helper} helperfunctions
 * @property {()=>void} testa
 * @property {(e: string)=>number} hex2int
 * @property {number} coinsMinedWhileAway
 * @property {News} news
 * @property {Controller} controller
 * @property {GameCav} gamecanvas
 */

/** @type {Game} */
const doge = window.dogeminer;
const {
  rock,
  bonus,
  loot,
  game,
  tweens,
  helperfunctions: helper,
  news,
  player,
} = doge;

news.showNews(
  "Thanks for using Dogeminer 2 Cheats!",
  Symbol("Dogeminer 2 Cheats Startup"),
);

// Remove the previous version
function removeCheats() {
  document.querySelectorAll('details input[type="checkbox"]:checked').forEach(
    (checkbox) => checkbox.click()
  ); // Disable every cheat
  document.querySelectorAll('details input[type="number"]').forEach((e) =>
    e.blur()
  ); // Unpause every edit cheat
  document.querySelector("details")?.remove(); // Remove the hack menu
  document.getElementById("cheatid")?.remove(); // remove the stying
}

removeCheats();

const css = document.createElement("style");
css.id = "cheatid";

css.appendChild(document.createTextNode(`
  details {
    position: fixed;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    background-size: cover;
    border-top-left-radius: 1em;
    color: white;
    padding: 1em;
    max-width: 100vw;
    z-index: 5;
  }
  
  summary a {
    color: skyblue
  }
  [type="checkbox"] {
    margin-right: 1em;
  }
  details article input[type="number"] {
    width: 100%;
  }

  /* Block ads as they cover the cheat menu */
  .img_ad {
    display: none
  }
`));
document.head.appendChild(css);
const hackmenu = document.createElement("details");

const summary = document.createElement("summary");
summary.innerHTML = `Dogeminer 2 Cheats by 
<a href="https://jack5079.github.io">Jack</a>`;
hackmenu.appendChild(summary);

/**
 * The interval cheats.
 * @todo #5 More cheats! 
 * @type {Object.<string, ()=>number>} 
 * */
const hacks = {
  "Increase your dogecoin per second": () => setInterval(bonus.addSpecialBonus),
  Autoclicker: () => setInterval(rock.mineRock),
  "Dev loot": () => setInterval(loot.devLoot),
  "Stop all animations": () => setInterval(tweens.stopEverything),
  "🦀 THE ROCK IS GONE 🦀": () => setInterval(() => rock.doRockDamage(100)),
  "Bonuscoin spam": () => setInterval(bonus.createBonuscoin),
  "Map spam": () => setInterval(loot.dropMap),
  "Diamond spam": () => setInterval(loot.dropDiamond),
  "Bag spam": () => setInterval(loot.dropBag),
  "Dogecoin Black Hole": () =>
    setInterval(() => {
      helper.removeCoins(player.coins / 5);
    }),
};

Object.entries(hacks).map(([name, hack]) => {
  const container = document.createElement("article");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let id = 0;
  checkbox.addEventListener("input", () => {
    if (id && !checkbox.checked) {
      clearInterval(id);
    } else {
      id = hack();
    }
  });
  const label = document.createElement("label");
  container.appendChild(label);
  label.appendChild(checkbox);
  label.innerHTML += name;
  return container;
}).forEach(Element.prototype.appendChild.bind(hackmenu));

AddDogecoinNumber: {
  const container = document.createElement("article");
  const coin = document.createElement("input");
  doge.player = new Proxy(player, {
    set(obj, prop, value) {
      if (prop === "coins") {
        coin.value = Math.round(value).toString();
      }
      return Reflect.set(obj, prop, value);
    },
  });
  coin.type = "number";
  coin.title = "Dogecoin count";
  coin.placeholder = "Coin count...";
  coin.addEventListener("input", () => {
    if (coin.value.length - 1) {
      player.coins = Number(coin.value);
    }
  });
  coin.addEventListener("focus", helper.pauseCoins);
  coin.addEventListener("blur", helper.unpauseCoins);
  container.appendChild(coin);
  hackmenu.appendChild(container);
  break AddDogecoinNumber;
}

document.body.appendChild(hackmenu);
