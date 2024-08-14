// utils/isMobile.js
export const isMobile = () => {
  return /Mobi|Android|iPad|iPhone/i.test(navigator.userAgent);
};
