const createFontStyle = (
  family, // string
  weight, // number
  size, // number
  lineHeight // number
) => `
    font-family: "${family}";
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}%;
  `;

const theme = {
  primaryColor: "#003366",
  secondaryColor: "#444444",
  fontFamily: "NanumSquareNeo",
  spacing: "10px",
};

const fonts = {
  font_xs: createFontStyle(theme.fontFamily, 400, 0.75, 120), // 12px
  font_sm: createFontStyle(theme.fontFamily, 400, 0.875, 120), // 14px
  font_base: createFontStyle(theme.fontFamily, 400, 1, 130), // 16px
  font_lg: createFontStyle(theme.fontFamily, 400, 1.125, 140), // 18px
  font_xl: createFontStyle(theme.fontFamily, 500, 1.25, 140), // 20px
};

const colors = {
  white: "#fff",
  black: "#000",
  gray_50: "#f9f9f9",
  gray_75: "#f0f0f0",
  gray_100: "#ececec",
  gray_200: "#e3e3e3",
  gray_300: "#cdcdcd",
  gray_400: "#b4b4b4",
  gray_500: "#9b9b9b",
  gray_600: "#676767",
  gray_700: "#424242",
  gray_750: "#2f2f2f",
  gray_800: "#212121",
  gray_900: "#171717",
  gray_950: "#0d0d0d",
};

const themes = {
  theme,
  fonts,
  colors,
};

export default themes;
