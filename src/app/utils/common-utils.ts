export function validateCardNumber(value: string) {
  const regex = new RegExp('^[0-9]{16}$');
  if (!regex.test(value)) return false;

  return luhnCheck(value);
}

function luhnCheck(value: string) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    let intVal = parseInt(value.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}
