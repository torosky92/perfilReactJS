export const YearsToNow = (year, month, day) => {
    var dateNow = new Date()
    var dateFind = new Date(String(year) + "/" + String(month) + "/" + String(day))
    var dateResult = Math.abs(dateNow - dateFind)
    return (Number(dateResult) / (1000 * 3600 * 24 * 365)).toFixed(1)
}