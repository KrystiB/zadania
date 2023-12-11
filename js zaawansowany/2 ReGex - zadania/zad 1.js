function orAlphanumeric(value) {
    const regex = /\w/g

    return regex.test(value)
}
const string = 'dsgfdsgdfcvdfvgbrgtf erdgfvergvrfe 2342GFGBFBNHF'

console.log(orAlphanumeric(string))