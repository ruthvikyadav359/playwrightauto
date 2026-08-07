

class calculator {
  add(n1, n2) {
    const result = n1 + n2;
    console.log(result);
    return result;
  }

  subtract(n1, n2) {
    const result = n1 - n2;
    console.log(result);
    return result;
  }

  multiply(n1, n2) {
    const result = n1 * n2;
    console.log(result);
    return result;
  }
}

const cal1 = new calculator();
export default cal1;