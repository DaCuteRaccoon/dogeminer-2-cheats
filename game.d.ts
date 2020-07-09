enum Planet {
  Earth = 1,
  Moon,
  Mars,
  Jupiter,
  Titan,
}

interface Root {
    hex2int: (e: string) => number;
    testa: () => void;
    coinsMinedWhileAway: number;
    news: {
      initNews: () => void
      // Show a news ticker. The ID must be different every time.
      showNews: (text: string, id: any) => void 
      isReady: () => boolean
      // Fade out the news ticker.
      removeNews: () => void 
      // Is the news ticker on the screen?
      isShowingNews: () => boolean 
    };
  loot: {
    isThereABag: () => boolean
    dropBag: () => void
    dropDiamond: () => void
    dropMap: () => void
    devLoot: () => void
    bagIsOpen: () => boolean
    };
    bonus: {
      bonuscoin_active: boolean
      createBonuscoin: () => void
      createCateMiner: () => void
      addSpecialBonus: () => void
    };
    tweens: {
      [key: string]: function
    };
  helperfunctions: {
    // Pause the dogecoin counter from going up.
    pauseCoins: () => void
    // Revert pauseCoins.
    unpauseCoins: () => void
    // Overwrite an array with a shuffled version.
    shuffle: (arr: any[]) => void
    removeCoins: (coins: number) => void
    // Get the DPS of the player.
    getPersec: () => number
    // Convert a number to roman
    romanize: (e: number) => string;
    // Convert a ms value to minute:seconds. Will not function somewhere above 59_999_999_999_999_990_999_999_999
    msToMinsSecs: (e: number) => string;
    // Add commas every 3 digits.
    beautify: (e: number) => string;
    // Add commas every 3 digits, and add billion (B), million (M), and trillion (T) prefixes.
    beautifyCoins: (e: number) => string;
    // Add commas every 3 digits, and add a billion (Billiion) prefix.
    beautifyCost:(e: number) => string;
  };
  controller: {
      // Move between planets.
      switchLevel: (level: Planet) => void 
    };
    // todo: document these
    player: any;
    rock: any;
    game: any;
    gamecanvas: any;
  };

const dogeminer: Root
