const splashes = [ // The splashes at the top of the page.
  'hackeing!',
  'Not approved by rkn!',
  'Hacks by Jack5079!'
]

export default () => splashes[Math.floor(Math.random() * splashes.length)] // Export the default function, which randomly chooses a splash.
