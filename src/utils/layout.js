import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// base dimensions for android  w: 414, h: 896

const widthBaseScale = width / 414;
const heightBaseScale = height / 896;

export const normalize = (size, based) => {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for screen height

const heightPixel = (size) => {
  return normalize(size, "height");
};

// for screen width

const widthPixel = (size) => {
  return normalize(size, "width");
};

// vertical padding and margin

const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

// horizontal padding and margin

const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};

// fonts

const fontPixel = (size) => {
  return heightPixel(size);
};

const fontSize = {
  h1: normalize(24),
  h2: normalize(19),
  h3: normalize(16),
  h4: normalize(13),
  h5: normalize(10),
  h6: normalize(7),
};

export const layout = {
  width,
  height,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  size: {
    h1: fontSize.h1,
    h2: fontSize.h2,
    h3: fontSize.h3,
    h4: fontSize.h4,
    h5: fontSize.h5,
    h6: fontSize.h6,
    isSmallDevice: width <= 375,
  },
};
