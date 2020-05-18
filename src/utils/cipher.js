const getStartCode = (n) => (n > 64 && n < 91) ? 65 : 97; // 65 = A, 97 = a
const getEndCode = (n) => (n > 64 && n < 91) ? 91 : 123; // 91 = Z+1, 123 = z+1

export const encrypt = (str, shift) => {
  return str.replace(/[A-Za-z]/g, (c) => {
    const code = c.charCodeAt();
    const startCode = getStartCode(code);
    return String.fromCharCode(((code - startCode + shift) %26) + startCode);
  });
};

export const decrypt = (str, shift) => {
  return str.replace(/[A-Za-z]/g, (c) => {
    const code = c.charCodeAt();
    const endCode = getEndCode(code);
    const remainder = Math.abs(code - endCode - shift)%26;
    return String.fromCharCode(endCode - (remainder === 0 ? 26 : remainder));
  });
};

export const parseStr = (str) => str.replace(/[^A-Za-z ]/g,'');
