import bcrypt from "bcrypt";


const pasoword = "1234"
const hash = await bcrypt.hash(pasoword, 10);

console.log("hash", hash);

console.log("confere 0000:", await bcrypt.compare("0000", hash))