import { defineTextStyles } from "@chakra-ui/react";
import {
  defaultBaseStyle,
  h1BaseStyle,
  h2BaseStyle,
  h3BaseStyle,
  h4BaseStyle,
  h5BaseStyle,
  largeBaseStyle,
  smallBaseStyle,
  tinyBaseStyle,
} from "./text-styles";

export const fonts = {
  body: { value: "Poppins, sans-serif" },
  heading: { value: "Poppins, sans-serif" },
};

export const fontSizes = {
  xs: { value: "11px" },
  sm: { value: "13px" },
  md: { value: "16px" },
  lg: { value: "17px" },
  xl: { value: "22px" },
  "2xl": { value: "26px" },
  "3xl": { value: "30px" },
  "4xl": { value: "34px" },
  "5xl": { value: "38px" },
  "6xl": { value: "50px" },
  "7xl": { value: "70px" },
};

export const fontWeights = {
  normal: { value: 400 },
  medium: { value: 500 },
  semibold: { value: 600 },
  bold: { value: 700 },
};

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: "md",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  h3: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "body",
      fontWeight: { base: "semibold", md: "bold" },
      fontSize: { base: "1.25rem", md: "1.875rem" },
      lineHeight: { base: "1.5rem", md: "unset" },
    },
  },
  h2: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: { base: "1.5rem", md: "2rem" },
      lineHeight: { base: "2rem", md: "unset" },
    },
  },

  //====================================== H1 STYLES ========================
  "h1-regular": {
    value: {
      ...h1BaseStyle,
      fontWeight: "normal",
    },
  },
  "h1-semibold": {
    value: {
      ...h1BaseStyle,
      fontWeight: "semibold",
    },
  },
  "h1-bold": {
    value: {
      ...h1BaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== H2 STYLES ========================
  "h2-regular": {
    value: {
      ...h2BaseStyle,
      fontWeight: "normal",
    },
  },
  "h2-semibold": {
    value: {
      ...h2BaseStyle,
      fontWeight: "semibold",
    },
  },
  "h2-bold": {
    value: {
      ...h2BaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== H3 STYLES ========================
  "h3-regular": {
    value: {
      ...h3BaseStyle,
      fontWeight: "normal",
    },
  },
  "h3-semibold": {
    value: {
      ...h3BaseStyle,
      fontWeight: "semibold",
    },
  },
  "h3-bold": {
    value: {
      ...h3BaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== H4 STYLES ========================
  "h4-regular": {
    value: {
      ...h4BaseStyle,
      fontWeight: "normal",
    },
  },
  "h4-semibold": {
    value: {
      ...h4BaseStyle,
      fontWeight: "semibold",
    },
  },
  "h4-bold": {
    value: {
      ...h4BaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== H5 STYLES ========================
  "h5-regular": {
    value: {
      ...h5BaseStyle,
      fontWeight: "normal",
    },
  },
  "h5-semibold": {
    value: {
      ...h5BaseStyle,
      fontWeight: "semibold",
    },
  },
  "h5-bold": {
    value: {
      ...h5BaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== LARGE STYLES ========================
  "large-regular": {
    value: {
      ...largeBaseStyle,
      fontWeight: "normal",
    },
  },
  "large-semibold": {
    value: {
      ...largeBaseStyle,
      fontWeight: "semibold",
    },
  },
  "large-bold": {
    value: {
      ...largeBaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== DEFAULT STYLES ========================
  "default-regular": {
    value: {
      ...defaultBaseStyle,
      fontWeight: "normal",
    },
  },
  "default-semibold": {
    value: {
      ...defaultBaseStyle,
      fontWeight: "semibold",
    },
  },
  "default-bold": {
    value: {
      ...defaultBaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== SMALL STYLES ========================
  "small-regular": {
    value: {
      ...smallBaseStyle,
      fontWeight: "normal",
    },
  },
  "small-semibold": {
    value: {
      ...smallBaseStyle,
      fontWeight: "semibold",
    },
  },
  "small-bold": {
    value: {
      ...smallBaseStyle,
      fontWeight: "bold",
    },
  },

  //====================================== TINY STYLES ========================
  "tiny-regular": {
    value: {
      ...tinyBaseStyle,
      fontWeight: "normal",
    },
  },
  "tiny-semibold": {
    value: {
      ...tinyBaseStyle,
      fontWeight: "semibold",
    },
  },
  "tiny-bold": {
    value: {
      ...tinyBaseStyle,
      fontWeight: "bold",
    },
  },
});
