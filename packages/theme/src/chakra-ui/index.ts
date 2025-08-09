import { createSystem, defaultConfig } from "@chakra-ui/react";
import { colors, fonts, textStyles } from "./config";
import { buttonRecipe, inputRecipe } from "./recipes";

export const system = createSystem(defaultConfig, {
  cssVarsPrefix: "dataulinzi",
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "body",
      background: "rgba(255, 255, 255, 1)",
      scrollBehavior: "smooth",
    },
  },
  theme: {
    textStyles: textStyles,
    tokens: {
      fonts: fonts,
      colors: colors,
    },
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
    },
    keyframes: {
      scaleUp: {
        "0%": { transform: "scale(0.3)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
    },
    semanticTokens: {
      ...defaultConfig.theme?.semanticTokens,
      colors: {
        field: {
          border: { value: "{colors.gray.50}" },
          borderFocus: { value: "{colors.primary.500}" },
          borderError: { value: "{colors.error.500}" },
          bg: { value: "white" },
          bgDisabled: { value: "{colors.gray.50}" },
          placeholder: { value: "{colors.gray.100}" },
          text: { value: "{colors.gray.400}" },
          label: { value: "{colors.gray.300}" },
          required: { value: "{colors.error.500}" },
          errorText: { value: "{colors.error.500}" },
        },
      },
    },
  },
});
