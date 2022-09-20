const images = [
  `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby1.png?alt=media&token=ad7f5a9a-b62c-4b20-bd09-afb85b09f762`,
  `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby2.png?alt=media&token=042d428a-29d2-438a-93cc-a53a7bc56769`,
  `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby3.png?alt=media&token=065b06f5-27b7-460b-92bd-e3d00f74d83e`,
  `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby4.png?alt=media&token=aeaf5d7d-2370-40d6-9f67-fd6f0aff4558`,
];
const randomImage = Math.floor(Math.random() * images.length);

export const babyImage = images[randomImage];
