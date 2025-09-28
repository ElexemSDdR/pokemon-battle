export const whatWillDoMessage = (pkmnName: string) => {
  return `<p>What will<br>${pkmnName} do?</p>`
}

export const moveRight = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 0 || focussedButtonIndex === 2) {
    focussedButtonIndex += 1
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const moveLeft = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 1 || focussedButtonIndex === 3) {
    focussedButtonIndex -= 1
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const moveUp = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 2 || focussedButtonIndex === 3) {
    focussedButtonIndex -= 2
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const moveDown = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 0 || focussedButtonIndex === 1) {
    focussedButtonIndex += 2
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}
