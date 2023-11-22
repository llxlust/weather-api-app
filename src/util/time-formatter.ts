export const TimeFormatter = (dateNum:number) =>{
    const convertTime = new Date(dateNum * 1000)
    const dateTime = convertTime.toLocaleTimeString()
    const time = dateTime.split(":")
    const result = `${time[0]}:${time[1]}`
    return result
}