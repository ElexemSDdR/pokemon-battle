export const whatWillDoMessage = (pkmnName) => {
  return `<p>What will<br>${pkmnName} do?</p>`
}

export const moveRight = (buttonsArray, focussedButtonIndex) => {
  if (focussedButtonIndex === 0 || focussedButtonIndex === 2) {
    focussedButtonIndex += 1
    buttonsArray[focussedButtonIndex].focus()
    return focussedButtonIndex
  } else {
    return
  }
}

export const moveLeft = (buttonsArray, focussedButtonIndex) => {
  if (focussedButtonIndex === 1 || focussedButtonIndex === 3) {
    focussedButtonIndex -= 1
    buttonsArray[focussedButtonIndex].focus()
    return focussedButtonIndex
  } else {
    return
  }
}

export const moveUp = (buttonsArray, focussedButtonIndex) => {
  if (focussedButtonIndex === 2 || focussedButtonIndex === 3) {
    focussedButtonIndex -= 2
    buttonsArray[focussedButtonIndex].focus()
    return focussedButtonIndex
  } else {
    return
  }
}

export const moveDown = (buttonsArray, focussedButtonIndex) => {
  if (focussedButtonIndex === 0 || focussedButtonIndex === 1) {
    focussedButtonIndex += 2
    buttonsArray[focussedButtonIndex].focus()
    return focussedButtonIndex
  } else {
    return
  }
}
