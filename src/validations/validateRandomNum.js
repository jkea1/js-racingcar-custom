const RANDOM_NUM_THRESHOLD = 4

export const validateRandomNum = (randomNum) => {
  if (randomNum >= RANDOM_NUM_THRESHOLD) {
    return true
  } else {
    return false
  }
}
