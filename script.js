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
}

const giveName = () => {
  let currentName = {}
  const random = Math.random()
  const top30 = Math.floor(tempNames.length * .7)
  const mid40 = Math.floor(tempNames.length * .3)
  const highRoll = .25
  const midRoll = .1
  if (replace && highs === null) {
    currentName = tempNames[Math.floor(Math.random() * tempNames.length)]
  }
  else if (!replace && highs === null) {
    currentName = tempNames.splice(Math.floor(Math.random() * tempNames.length), 1)[0];
    checkTempName()
  }
  else if (replace && highs) {
    if (random >= highRoll) {
      currentName = tempNames[Math.floor(Math.random() * (tempNames.length - top30) + top30)]
    }
    else if (random >= midRoll) {
      currentName = tempNames[Math.floor(Math.random() * (top30 - mid40) + mid40)]
    }
    else {
      currentName = tempNames[Math.floor(Math.random() * mid40)]
    } 
  }
  else if (replace && !highs) {
    if (random >= highRoll) {
      currentName = tempNames[Math.floor(Math.random() * mid40)]
    }
    else if (random >= midRoll) {
      currentName = tempNames[Math.floor(Math.random() * (top30 - mid40) + mid40)]
    }
    else {
      currentName = tempNames[Math.floor(Math.random() * (tempNames.length - top30) + top30)]
    }
  }
  else if (!replace && highs) {
    if (random >= highRoll) {
      currentName = tempNames.splice(Math.floor(Math.random() * (tempNames.length - top30) + top30), 1)[0]
    }
    else if (random >= midRoll) {
      currentName = tempNames.splice(Math.floor(Math.random() * (top30 - mid40) + mid40), 1)[0]
    }
    else {
      currentName = tempNames.splice(Math.floor(Math.random() * mid40), 1)[0]
    }
    checkTempName()
  }
  else if (!replace && !highs) {
    if (random >= highRoll) {
      currentName = tempNames.splice(Math.floor(Math.random() * mid40), 1)[0]
    }
    else if (random >= midRoll) {
      currentName = tempNames.splice(Math.floor(Math.random() * (top30 - mid40) + mid40), 1)[0]
    }
    else {
      currentName = tempNames.splice(Math.floor(Math.random() * (tempNames.length - top30) + top30), 1)[0]
    }
    checkTempName()
  }
  console.log("current pick", currentName)
  console.log(tempNames)
  console.log("**********************************************")
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
  names.sort((a, b) => { return a.score - b.score  })
  tempNames.sort((a, b) => { return a.score - b.score  })
}

const pointsUp = () => {
  names.find(person => {
    if (person.name === nameButton.innerHTML) {
      person.score += 1
    }
  })
  names.sort((a, b) => { return a.score - b.score  })
  tempNames.sort((a, b) => { return a.score - b.score  })
}

const handleShuffle = (clicked) => {
  if (clicked.value === "true") {
    tempNames = [...names]
    replace = true
  }
  else replace = false
}

const handlePick = (clicked) => {
  if (clicked.value === "true") highs = true
  else if (clicked.value === "false") highs = false
  else highs = null
}
