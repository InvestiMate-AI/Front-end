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
  primaryColor: "palevioletred",
  secondaryColor: "lightgray",
  fontFamily: "Spoqa Han Sans Neo",
  spacing: "10px",
};

const fonts = {
  font_xs: createFontStyle(theme.fontFamily, 400, 0.75, 120), // 12
  font_sm: createFontStyle(theme.fontFamily, 400, 0.875, 120), // 14
  font_base: createFontStyle(theme.fontFamily, 400, 1, 130), // 16
  font_lg: createFontStyle(theme.fontFamily, 400, 1.125, 140), // 18
  font_xl: createFontStyle(theme.fontFamily, 500, 1.25, 140), // 20
};

const themes = {
  theme,
  fonts,
};

export default themes;
