export const DateFormatter = (newNum:number) => {
    //const newNum = Number(dateString)
    const convertDate = new Date(newNum * 1000)
    const date = convertDate.toUTCString()
    const splitDate = date.split(" ");
    console.log(splitDate)
    const result = `${splitDate[0]} ${splitDate[1]} ${splitDate[2]}`
    return result
}