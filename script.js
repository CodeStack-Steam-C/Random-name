let names = []
let replace = false
let highs = null
let tempNames = []

let nameButton = document.getElementsByClassName("button")[1]
nameButton.innerHTML = "fun"

const changeLoad = (text) => {
  let words = text.value
  names = words.split("\n")
  names = names.map((name, index) => {
    return {name: name, score: 0}
  })
  tempNames = [...names]
  console.log(names)
}

const giveName = () => {
  let currentName = {}
  if (replace && highs === null) {
    currentName = names[Math.floor(Math.random() * names.length)]
    console.log(currentName)
  }
  else if (!replace && highs === null) {
    currentName = tempNames.splice(Math.floor(Math.random()*tempNames.length), 1)[0];
    checkTempName()
  }
  else if (replace && highs) {

  }
  else if (replace && !highs) {

  }
  else if (!replace && highs) {

  }
  else if (!replace && !highs) {

  }

  nameButton.innerHTML = currentName.name
}

const checkTempName = () => {
  if (tempNames.length === 0) {
    tempNames = [...names]

  }
}

const pointsDown = () => {
  names.find(person => {
    if (person.name === nameButton.innerHTML) {
      person.score -= 1
    }
  })
}

const pointsUp = () => {
  names.find(person => {
    if (person.name === nameButton.innerHTML) {
      person.score += 1
    }
  })
}

const handleShuffle = (clicked) => {
  if (clicked.value === "true") replace = true
  else replace = false
}

const handlePick = (clicked) => {
  if (clicked.value === "true") highs = true
  else if (clicked.value === "false") highs = false
  else highs = null
}