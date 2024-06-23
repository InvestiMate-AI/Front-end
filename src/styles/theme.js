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

const themes = {
  theme,
  fonts,
};

export default themes;
