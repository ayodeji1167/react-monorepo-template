import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: ".625rem",
    fontSize: "1rem",
    fontWeight: "400",
    backgroundColor: "primary",
    py: "1.625rem",
    px: "1.25rem",
  },
  variants: {
    variant: {
      primary: {
        bg: "primary.300",
        border: "none",
        textStyle: "small-regular",
        color: "white",
        px: "1.25rem",
        _hover: { bg: "primary.400" },
        _focus: {
          bg: "primary.400",
        },
        _disabled: {
          bg: "gray.50",
          color: "gray.75",
        },
      },
      secondary: {
        bg: "secondary.300",
        color: "white",
        border: "none",
        _hover: { bg: "secondary.400" },
        _focus: {
          bg: "secondary.300",
        },
        _disabled: {
          bg: "gray.50",
          color: "gray.75",
        },
      },
      outline: {
        bg: "transparent",
        color: "primary.400",
        border: "2px solid",
        borderColor: "primary.400",
        _hover: { bg: "primary.400", color: "white" },
        _focus: { bg: "primary.400", color: "white" },

        _disabled: {
          bg: "transparent",
          color: "gray.50",
          border: "2px solid",
          borderColor: "gray.50",
        },
      },
      outlineSecondary: {
        textStyle: "default-regular",
        bg: "white",
        color: "gray.200",
        border: "1px solid #EBEBEB",
        _hover: { bg: "primary.300", color: "white" },
        _focus: { bg: "transparent" },

        _disabled: {
          bg: "transparent",
          color: "gray.50",
          border: "2px solid",
          borderColor: "gray.50",
        },
      },
      ghost: {
        bg: "transparent",
        color: "primary.300",
        border: "none",
        _hover: { bg: "transparent" },
        _focus: {
          bg: "transparent",
        },
        _disabled: {
          bg: "transparent",
          color: "primary.300",
        },
      },
    },
    size: {
      sm: {
        px: "1rem",
        fontSize: "0.875rem",
      },
      md: {
        fontSize: ".875rem",
        px: "1rem",
      },
      lg: {
        px: "2rem",
        fontSize: "5rem",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
