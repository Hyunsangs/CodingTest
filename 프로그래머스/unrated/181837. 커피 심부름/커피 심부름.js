function solution(o) {
  let priceToPay = 0;

  for (let i = 0; i < o.length; i++) {
    o[i].includes('cafelatte') ?
    priceToPay += 5000 : priceToPay += 4500
  }

  return priceToPay;
}