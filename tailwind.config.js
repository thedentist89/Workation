module.exports = {
  theme: {
    extend: {
      padding: {
        "5/6": "83.333333%"
      },
      spacing: {
        "72": "18rem",
        "80": "20rem"
      }
    },
    customForms: theme => ({
      default: {
        select: {
          borderRadius: theme("borderRadius.lg"),
          backgroundColor: theme("colors.gray.700"),
          border: "transparent",
          boxShadow: theme("boxShadow.default"),
          color: theme("colors.white"),
          iconColor: theme("colors.white"),
          lineHeight: theme("lineHeight.snug")
        },
        checkbox: {
          width: theme("spacing.6"),
          height: theme("spacing.6"),
          backgroundColor: theme("colors.gray.900"),
          border: "transparent"
        },
        radio: {
          width: theme("spacing.6"),
          height: theme("spacing.6"),
          backgroundColor: theme("colors.gray.900"),
          border: "transparent"
        }
      }
    })
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
