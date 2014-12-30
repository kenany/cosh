module.exports = Math.cosh || function cosh(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
};