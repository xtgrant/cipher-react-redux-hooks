import c from '../constants';

/* SHIFT */
export const OnShiftChange = (data) => ({
  type: c.SHIFT_UPDATE,
  value: data,
});

/* CIPHERTEXT */
export const OnCipherTextChange = (str, shiftValue) => (dispatch) => {
  dispatch(UpdateCipherText(str));
  dispatch(DecryptPlainText(str, shiftValue));
};
export const UpdateCipherText = (str) => ({
  type: c.CIPHERTEXT_UPDATE,
  str,
});
export const EncryptCipherText = (str, shiftValue) => ({
  type: c.CIPHERTEXT_ENCRYPT,
  str,
  shiftValue,
});

/* PLAINTEXT */
export const OnPlainTextChange = (str, shiftValue) => (dispatch) => {
  dispatch(UpdatePlainText(str));
  dispatch(EncryptCipherText(str, shiftValue));
};
export const UpdatePlainText = (str) => ({
  type: c.PLAINTEXT_UPDATE,
  str,
});
export const DecryptPlainText = (str, shiftValue) => ({
  type: c.PLAINTEXT_DECRYPT,
  str,
  shiftValue,
});
