export const randomValue = function(length) {
  return Math.floor(Math.random() * length);
};

export const randomValues = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
