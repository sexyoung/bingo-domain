const RandChar = [
  ...[...Array(10).keys()].map(v => v + 48),
  ...[...Array(26).keys()].map(v => v + 65)
];

export const getRandomChar = (len = 1) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(
      RandChar[~~(RandChar.length * Math.random())]
    );
  }
  return result;
};

export const makeID = (len = 32) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += getRandomChar();
    if(i % 8 === 7) result += '-';
  }
  return result.slice(0, result.length - 1);
};

/**
 *
 * @param size => `,n,n,n,|,n,n,n,|...`
 */
export const genWinStr = size => {
  const result = [];
  const serial = [...Array(size).keys()];
  const serialPow = [...Array(size ** 2).keys()];

  /** 直線 與 橫線 */
  for (let i = 0; i < size; i++) {
    result.push(serial.map(v => v * size + i));
    result.push(serialPow.slice(i * size, (i + 1) * size));
  }

  /** 交叉線 */
  result.push(serial.map(v => v * (size + 1)));
  result.push(serial.map(v => (v + 1) * (size - 1)));
  return result.map(line => `,${line.join(',')},`).join('|');
};

export const randMatrix = size => {
  const matrix = [...Array(size ** 2).keys()].map(v => v + 1);
  matrix.sort(() => .5 - Math.random());
  return matrix;
};
