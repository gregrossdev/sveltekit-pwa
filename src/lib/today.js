const date = new Date(); 
const month = ("0" + (date.getMonth() + 1))
const day = date.getDate()
export const today = `${month}-${day}`
