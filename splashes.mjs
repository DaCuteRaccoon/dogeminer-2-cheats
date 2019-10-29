const splashes = [ // The splashes at the top of the page.
  'Not approved by rkn!',
  'Hacks by Jack5079!',
  'Why does this need splashes?',
  'I was bored...'
]

export default () => splashes[Math.floor(Math.random() * splashes.length)] // Export the default function, which randomly chooses a splash.
