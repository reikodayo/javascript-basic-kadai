const today = new Date();
const year = today.getUTCFullYear();
const month = today.getUTCMonth() +1;
const day = today.getDate();

console.log(year +'年' + month + '月' + day +'日')