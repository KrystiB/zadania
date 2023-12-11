function extrectCompanyEmail(email) {
    const regex = /[a-zA-Z0-9]+@([a-zA-Z]+)\.com/g
    return regex.exec(email)[1];
}
const email = 'username@companyname.com';
console.log(extrectCompanyEmail(email));