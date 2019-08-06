let int = document.getElementById('int')
let dps = document.getElementById('dps')
let autoclick = document.getElementById('click')

let dpscheat = ''
let clickcheat = ''

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
