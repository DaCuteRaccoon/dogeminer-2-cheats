/**
 * @file Dogeminer 2 Cheats - Main
 * @author Jack <hello@5079.ml> (5079.ml)
 * @version 4.0.1
 */

const {
  rock,
  bonus,
  loot,
  game,
  tweens,
  helperfunctions: helper,
  news,
  player,
} = dogeminer;

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
  dogeminer.player = new Proxy(player, {
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
