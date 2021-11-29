export const YearsToNow = (year, month, day) => {
    var dateNow = new Date()
    var dateFind = new Date(String(year) + "/" + String(month) + "/" + String(day))
    var dateResult = Math.abs(dateNow - dateFind)
    return (Number(dateResult) / (1000 * 3600 * 24 * 365)).toFixed(1)
}

export const HowMonth = (month, languages) => {
    if(month === 1) var textMonth =  languages === 'SPANISH' ? 'ENERO': 'JANUARY'
    if(month === 2) textMonth =  languages === 'SPANISH' ? 'FEBRERO': 'FEBRUARY'
    if(month === 3) textMonth =  languages === 'SPANISH' ? 'MARZO': 'MARCH'
    if(month === 4) textMonth =  languages === 'SPANISH' ? 'ABRIL': 'APRIL'
    if(month === 5) textMonth =  languages === 'SPANISH' ? 'MAYO': 'MAY'
    if(month === 6) textMonth =  languages === 'SPANISH' ? 'JUNIO': 'JUNE'
    if(month === 7) textMonth =  languages === 'SPANISH' ? 'JULIO': 'JULY'
    if(month === 8) textMonth =  languages === 'SPANISH' ? 'AGOSTO': 'AUGUST'
    if(month === 9) textMonth =  languages === 'SPANISH' ? 'SEPTIEMBRE': 'SEPTEMBER'
    if(month === 10) textMonth =  languages === 'SPANISH' ? 'OCTUBRE': 'OCTOBER'
    if(month === 11) textMonth =  languages === 'SPANISH' ? 'NOVIEMBRE': 'NOVEMBER'
    if(month === 12) textMonth =  languages === 'SPANISH' ? 'DICIEMBRE': 'DECEMBER'
    return textMonth
}