export const tabsContent = [
  {
    name: "Algebra",
    inputs: {
      numbers: {
        periodic: true,
        infinite: true,
        fontSize: true,
      },
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "({\\square})",
        name: "Round Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "[{\\square}]",
        name: "Square Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "[" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "]" },
        ],
      },
      {
        latex: "\\{{\\square}\\}",
        name: "Curly Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "{" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "}" },
        ],
      },
      {
        latex: "-{\\square}",
        name: "Negative Value",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "-" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\pm{\\square}",
        name: "Plus-Minus Value",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "±" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}+{\\square}",
        name: "Addition",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "+" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}-{\\square}",
        name: "Subtraction",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "-" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\times{\\square}",
        name: "Multiplication",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "•" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\div{\\square}",
        name: "Division",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "÷" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\frac{{\\square}}{\\square}",
        name: "Fraction",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 0, y: 27, fontSize: 24, value: "—" },
          { type: "hole", x: 0, width: 16, y: 52, height: 24 },
        ],
      },
      {
        latex: "{\\square}={\\square}",
        name: "Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "=" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\approx{\\square}",
        name: "Approximately Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "≈" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\neq{\\square}",
        name: "Not Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "≠" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}>{\\square}",
        name: "Greater Than",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: ">" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}<{\\square}",
        name: "Less Than",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "<" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\leq{\\square}",
        name: "Less Than or Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "≤" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\geq{\\square}",
        name: "Greater Than or Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "≥" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "|{\\square}|",
        name: "Absolute Value",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "|" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "|" },
        ],
      },
      {
        latex: "⌊{\\square}⌋",
        name: "Floor",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "⌊" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "⌋" },
        ],
      },
      {
        latex: "⌈{\\square}⌉",
        name: "Ceil",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "⌈" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "⌉" },
        ],
      },
      {
        latex: "{\\square}^{\\square}",
        name: "Power",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 8, height: 24 },
          { type: "hole", x: 18, width: 16, y: 0, height: 16 },
        ],
      },
      {
        latex: "\\sqrt[\\square]{\\square}",
        name: "Root",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 16 },
          { type: "text", x: 14, y: 11, fontSize: 36, value: "√" },
          {
            type: "line",
            linePoints: { x1: 32.2, y1: 13.6, x2: 63, y2: 13.6 },
            lineStrokeWidth: 3,
          },
          { type: "hole", x: 40, width: 16, y: 18, height: 24 },
        ],
      },
      {
        latex: "\\log_{\\square}{\\square}",
        name: "Logarithm",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "log" },
          { type: "hole", x: 38, width: 16, y: 29, height: 16 },
          { type: "hole", x: 53, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\ln{\\square}",
        name: "Natural Logarithm",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "ln" },
          { type: "hole", x: 38, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\:!",
        name: "Factorial",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "!" },
        ],
      },
      {
        latex: "{\\square}\\:\\text{mod}\\:{\\square}",
        name: "Modulo",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 23, y: 0, fontSize: 24, value: "mod" },
          { type: "hole", x: 73, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\:\\text{rem}\\:{\\square}",
        name: "Remainder",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 23, y: 0, fontSize: 24, value: "rem" },
          { type: "hole", x: 73, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\sum_{\\square = \\square}^{\\square}{\\square}",
        name: "Sum From-To",
        pieces: [
          { type: "hole", x: 18, width: 14, y: 0, height: 14 },
          { type: "text", x: 13, y: 18, fontSize: 36, value: "Σ" },
          { type: "hole", x: 0, width: 14, y: 53, height: 14 },
          { type: "text", x: 18, y: 48, fontSize: 24, value: "=" },
          { type: "hole", x: 38, width: 14, y: 53, height: 14 },
          { type: "hole", x: 43, width: 16, y: 21, height: 24 },
        ],
      },
      {
        latex: "\\sum_{\\square}{\\square}",
        name: "Sum Of",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 36, value: "Σ" },
          { type: "hole", x: 5, width: 14, y: 33, height: 14 },
          { type: "hole", x: 28, width: 16, y: 4, height: 24 },
        ],
      },
      {
        latex: "\\prod_{\\square = \\square}^{\\square}{\\square}",
        name: "Product From-To",
        pieces: [
          { type: "hole", x: 21, width: 14, y: 0, height: 14 },
          { type: "text", x: 13, y: 18, fontSize: 36, value: "∏" },
          { type: "hole", x: 3, width: 14, y: 63, height: 14 },
          { type: "text", x: 21, y: 58, fontSize: 24, value: "=" },
          { type: "hole", x: 41, width: 14, y: 63, height: 14 },
          { type: "hole", x: 46, width: 16, y: 26, height: 24 },
        ],
      },
      {
        latex: "\\prod_{\\square}{\\square}",
        name: "Product Of",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 36, value: "∏" },
          { type: "hole", x: 8, width: 14, y: 43, height: 14 },
          { type: "hole", x: 31, width: 16, y: 9, height: 24 },
        ],
      },
    ],
  },
  {
    name: "Linear Algebra",
    inputs: {
      numbers: {
        periodic: true,
        infinite: true,
        fontSize: true,
      },
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "({\\square})",
        name: "Round Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "{\\square}={\\square}",
        name: "Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "=" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\lVert{\\square}\\rVert",
        name: "Magnitude",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "||" },
          { type: "hole", x: 31, width: 16, y: 0, height: 24 },
          { type: "text", x: 52, y: 0, fontSize: 24, value: "||" },
        ],
      },
      {
        latex: "{\\square}\\:\\times\\:{\\square}",
        name: "Cross Product",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "x" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\:\\cdot\\:{\\square}",
        name: "Dot Product",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "•" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}^{T}",
        name: "Transpose",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 8, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 12, value: "T" },
        ],
      },
      {
        latex: "{\\square}^{-1}",
        name: "Inverse",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 8, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 12, value: "-1" },
        ],
      },
      {
        latex: "\\vec{\\square}",
        name: "Vector",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 23, height: 24 },
          { type: "text", x: 0, y: 0, fontSize: 24, value: "→" },
        ],
      },
      {
        latex: "\\det{\\square}",
        name: "Determinant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "det" },
          { type: "hole", x: 48, width: 16, y: 0, height: 24 },
        ],
      },
    ],
  },
  {
    name: "Calculus",
    inputs: {
      numbers: {
        periodic: true,
        infinite: true,
        fontSize: true,
      },
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "({\\square})",
        name: "Round Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "{\\square}={\\square}",
        name: "Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "=" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\lim_{\\square \\to \\square}{\\square}",
        name: "Limit",
        pieces: [
          { type: "text", x: 4, y: 0, fontSize: 24, value: "lim" },
          { type: "hole", x: 0, width: 16, y: 29, height: 16 },
          { type: "text", x: 19, y: 24, fontSize: 24, value: "→" },
          { type: "hole", x: 38, width: 16, y: 29, height: 16 },
          { type: "hole", x: 58, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\lim_{\\square \\to \\square^{+}}{\\square}",
        name: "Right Limit",
        pieces: [
          { type: "text", x: 4, y: 0, fontSize: 24, value: "lim" },
          { type: "hole", x: 0, width: 16, y: 29, height: 16 },
          { type: "text", x: 19, y: 24, fontSize: 24, value: "→" },
          { type: "hole", x: 38, width: 16, y: 29, height: 16 },
          { type: "text", x: 52, y: 22, fontSize: 12, value: "+" },
          { type: "hole", x: 61, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\lim_{\\square \\to \\square^{-}}{\\square}",
        name: "Left Limit",
        pieces: [
          { type: "text", x: 4, y: 0, fontSize: 24, value: "lim" },
          { type: "hole", x: 0, width: 16, y: 29, height: 16 },
          { type: "text", x: 19, y: 24, fontSize: 24, value: "→" },
          { type: "hole", x: 38, width: 16, y: 29, height: 16 },
          { type: "text", x: 52, y: 22, fontSize: 12, value: "-" },
          { type: "hole", x: 61, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}^{'}",
        name: "Derivative",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 8, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "'" },
        ],
      },
      {
        latex: "\\sup_{\\square}{\\square}",
        name: "Supremum",
        pieces: [
          { type: "text", x: 4, y: 0, fontSize: 24, value: "sup" },
          { type: "hole", x: 19, width: 16, y: 29, height: 16 },
          { type: "hole", x: 58, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\inf_{\\square}{\\square}",
        name: "Infimum",
        pieces: [
          { type: "text", x: 4, y: 0, fontSize: 24, value: "inf" },
          { type: "hole", x: 19, width: 16, y: 29, height: 16 },
          { type: "hole", x: 58, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\int_{\\square}^{\\square}\\square\\:\\text{d}\\:\\square",
        name: "Integral with Limits",
        pieces: [
          { type: "hole", x: 0, width: 14, y: 0, height: 18 },
          { type: "text", x: 0, y: 25, fontSize: 36, value: "∫" },
          { type: "hole", x: 0, width: 14, y: 63, height: 18 },
          { type: "hole", x: 21, width: 16, y: 31, height: 24 },
          { type: "text", x: 43, y: 31, fontSize: 24, value: "d" },
          { type: "hole", x: 63, width: 16, y: 31, height: 24 },
        ],
      },
      {
        latex: "\\int\\square\\:\\text{d}\\:\\square",
        name: "Integral",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 36, value: "∫" },
          { type: "hole", x: 21, width: 16, y: 6, height: 24 },
          { type: "text", x: 43, y: 6, fontSize: 24, value: "d" },
          { type: "hole", x: 63, width: 16, y: 6, height: 24 },
        ],
      },
      {
        latex: "\\infty",
        name: "Infinity",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "∞" }],
      },
      {
        latex: "\\nabla\\:\\square",
        name: "Gradient",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "∇" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
        ],
      },
    ],
  },
  {
    name: "Constants",
    inputs: {
      numbers: false,
      variables: false,
      buttons: true,
    },
    buttons: [
      {
        latex: "e",
        name: "Euler's Number",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "e" }],
      },
      {
        latex: "i",
        name: "Imaginary Unit",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "i" }],
      },
      {
        latex: "\\pi",
        name: "PI",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "π" }],
      },
      {
        latex: "\\phi",
        name: "Golden Ratio",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ϕ" }],
      },
      {
        latex: "\\infty",
        name: "Infinity",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "∞" }],
      },
    ],
  },
  {
    name: "Set Theory",
    inputs: {
      numbers: {
        periodic: true,
        infinite: true,
        fontSize: true,
      },
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "(\\square)",
        name: "Round Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "\\{\\square\\}",
        name: "Curly Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "{" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "}" },
        ],
      },
      {
        latex: "{\\square}={\\square}",
        name: "Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "=" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "[\\:\\square\\:,\\:\\square\\:]",
        name: "Closed Interval",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "[" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 63, width: 16, y: 0, height: 24 },
          { type: "text", x: 84, y: 0, fontSize: 24, value: "]" },
        ],
      },
      {
        latex: "(\\:\\square\\:,\\:\\square\\:)",
        name: "Open Interval",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 63, width: 16, y: 0, height: 24 },
          { type: "text", x: 84, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "(\\:\\square\\:,\\:\\square\\:]",
        name: "Half-Open Interval Left",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 63, width: 16, y: 0, height: 24 },
          { type: "text", x: 84, y: 0, fontSize: 24, value: "]" },
        ],
      },
      {
        latex: "[\\:\\square\\:,\\:\\square\\:)",
        name: "Half-Open Interval Right",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "[" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 63, width: 16, y: 0, height: 24 },
          { type: "text", x: 84, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "\\square\\:|\\:\\square",
        name: "Such That",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "|" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\in\\square",
        name: "Member",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∈" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\notin\\square",
        name: "Not Member",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∉" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\subset\\square",
        name: "Subset",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊂" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\subseteq\\square",
        name: "Subset Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊆" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\not\\subset\\square",
        name: "Not Subset",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊄" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\nsubseteq\\square",
        name: "Not Subset Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊈" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\supset\\square",
        name: "Superset",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊃" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\supseteq\\square",
        name: "Superset Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: " ⊇" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\not\\supset\\square",
        name: "Not Superset",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊅" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\nsupseteq\\square",
        name: "Not Superset Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊋" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\cap\\square",
        name: "Intersection",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∩" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\cup\\square",
        name: "Union",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∪" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\bigcap_{\\square = \\square}^{\\square}{\\square}",
        name: "Intersection From-To",
        pieces: [
          { type: "hole", x: 18, width: 14, y: 0, height: 14 },
          { type: "text", x: 13, y: 18, fontSize: 36, value: "∩" },
          { type: "hole", x: 0, width: 14, y: 53, height: 14 },
          { type: "text", x: 18, y: 48, fontSize: 24, value: "=" },
          { type: "hole", x: 38, width: 14, y: 53, height: 14 },
          { type: "hole", x: 43, width: 16, y: 21, height: 24 },
        ],
      },
      {
        latex: "\\bigcup_{\\square = \\square}^{\\square}{\\square}",
        name: "Union From-To",
        pieces: [
          { type: "hole", x: 18, width: 14, y: 0, height: 14 },
          { type: "text", x: 13, y: 18, fontSize: 36, value: "∪" },
          { type: "hole", x: 0, width: 14, y: 53, height: 14 },
          { type: "text", x: 18, y: 48, fontSize: 24, value: "=" },
          { type: "hole", x: 38, width: 14, y: 53, height: 14 },
          { type: "hole", x: 43, width: 16, y: 21, height: 24 },
        ],
      },
      {
        latex: "{\\square}^{C}",
        name: "Set Complement",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 8, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 12, value: "C" },
        ],
      },
      {
        latex: "{\\square}\\setminus{\\square}",
        name: "Set Difference",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∖" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\:\\triangle\\:{\\square}",
        name: "Set Symmetric Difference",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "△" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\:\\times\\:{\\square}",
        name: "Cartesian Product",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "x" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "|{\\square}|",
        name: "Set Cardinality",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "|" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: "|" },
        ],
      },
      {
        latex: "\\exists\\:\\square",
        name: "Exists",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∃" },
        ],
      },
      {
        latex: "\\forall\\:\\square",
        name: "For All",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∀" },
        ],
      },
      {
        latex: "\\varnothing",
        name: "Empty Set",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "∅" }],
      },
      {
        latex: "\\mathbb{P}(\\square)",
        name: "Power Set",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "ℙ(" },
          { type: "hole", x: 31, width: 16, y: 0, height: 24 },
          { type: "text", x: 48, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "\\mathbb{N}",
        name: "Natural Numbers",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ℕ" }],
      },
      {
        latex: "\\mathbb{N}^{+}",
        name: "Natural Numbers +",
        pieces: [
          { type: "text", x: 0, y: 8, fontSize: 24, value: "ℕ" },
          { type: "text", x: 15, y: 0, fontSize: 12, value: "+" },
        ],
      },
      {
        latex: "\\mathbb{Z}",
        name: "Integer Numbers",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ℤ" }],
      },
      {
        latex: "\\mathbb{Q}",
        name: "Rational Numbers",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ℚ" }],
      },
      {
        latex: "\\mathbb{R}",
        name: "Real Numbers",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ℝ" }],
      },
      {
        latex: "\\mathbb{I}",
        name: "Irrational Numbers",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "𝕀" }],
      },
      {
        latex: "\\mathbb{C}",
        name: "Complex Numbers",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ℂ" }],
      },
    ],
  },
  {
    name: "Formal Logic",
    inputs: {
      numbers: false,
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "({\\square})",
        name: "Round Brackets",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 21, width: 16, y: 0, height: 24 },
          { type: "text", x: 42, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "\\top",
        name: "True",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "⊤" }],
      },
      {
        latex: "\\bot",
        name: "False",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "⊥" }],
      },
      {
        latex: "\\neg\\:{\\square}",
        name: "Negation",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "¬" },
          { type: "hole", x: 19, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\wedge{\\square}",
        name: "And",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∧" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\vee{\\square}",
        name: "Or",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∨" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\oplus{\\square}",
        name: "Exclusive Or",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "⊕" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },

      {
        latex: "{\\square}\\rightarrow{\\square}",
        name: "Implication",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "→" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\leftrightarrow{\\square}",
        name: "Co-Implication",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "↔" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\equiv{\\square}",
        name: "Equivalent",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "≡" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}\\not\\equiv{\\square}",
        name: "Not Equivalent",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "≢" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
    ],
  },
  {
    name: "Greek Letters",
    inputs: {
      numbers: false,
      variables: false,
      buttons: true,
    },
    buttons: [
      {
        latex: "\\alpha",
        name: "Alpha",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "π" }],
      },
      {
        latex: "\\beta",
        name: "Beta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "β" }],
      },
      {
        latex: "\\gamma",
        name: "Gamma",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "γ" }],
      },
      {
        latex: "\\delta",
        name: "Delta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "δ" }],
      },
      {
        latex: "\\epsilon",
        name: "Epsilon",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ε" }],
      },
      {
        latex: "\\zeta",
        name: "Zeta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ζ" }],
      },
      {
        latex: "\\eta",
        name: "Eta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "η" }],
      },
      {
        latex: "\\theta",
        name: "Theta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "θ" }],
      },
      {
        latex: "\\iota",
        name: "Iota",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ι" }],
      },
      {
        latex: "\\kappa",
        name: "Kappa",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "κ" }],
      },
      {
        latex: "\\lambda",
        name: "Lambda",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "λ" }],
      },
      {
        latex: "\\mu",
        name: "Mu",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "μ" }],
      },
      {
        latex: "\\nu",
        name: "Nu",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ν" }],
      },
      {
        latex: "\\xi",
        name: "Xi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ξ" }],
      },
      {
        latex: "\\omicron",
        name: "Omicron",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ℴ" }],
      },
      {
        latex: "\\pi",
        name: "Pi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "π" }],
      },
      {
        latex: "\\rho",
        name: "Rho",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ρ" }],
      },
      {
        latex: "\\sigma",
        name: "Sigma",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "σ" }],
      },
      {
        latex: "\\tau",
        name: "Tau",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "τ" }],
      },
      {
        latex: "\\upsilon",
        name: "Upsilon",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "υ" }],
      },
      {
        latex: "\\phi",
        name: "Phi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ϕ" }],
      },
      {
        latex: "\\chi",
        name: "Chi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "χ" }],
      },
      {
        latex: "\\psi",
        name: "Psi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ψ" }],
      },
      {
        latex: "\\omega",
        name: "Omega",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "ω" }],
      },
      {
        latex: "Α",
        name: "Capital Alpha",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Α" }],
      },
      {
        latex: "Β",
        name: "Capital Beta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Β" }],
      },
      {
        latex: "\\Gamma",
        name: "Capital Gamma",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Γ" }],
      },
      {
        latex: "\\Delta",
        name: "Capital Delta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Δ" }],
      },
      {
        latex: "Ε",
        name: "Capital Epsilon",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ε" }],
      },
      {
        latex: "Ζ",
        name: "Capital Zeta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ζ" }],
      },
      {
        latex: "Η",
        name: "Capital Eta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Η" }],
      },
      {
        latex: "\\Theta",
        name: "Capital Theta",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Θ" }],
      },
      {
        latex: "Ι",
        name: "Capital Iota",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ι" }],
      },
      {
        latex: "Κ",
        name: "Capital Kappa",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Κ" }],
      },
      {
        latex: "\\Lambda",
        name: "Capital Lambda",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Λ" }],
      },
      {
        latex: "Μ",
        name: "Capital Mu",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Μ" }],
      },
      {
        latex: "Ν",
        name: "Capital Nu",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ν" }],
      },
      {
        latex: "\\Xi",
        name: "Capital Xi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ξ" }],
      },
      {
        latex: "Ο",
        name: "Capital Omicron",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ο" }],
      },
      {
        latex: "\\Pi",
        name: "Capital Pi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Π" }],
      },
      {
        latex: "Ρ",
        name: "Capital Rho",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ρ" }],
      },
      {
        latex: "\\Sigma",
        name: "Capital Sigma",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Σ" }],
      },
      {
        latex: "Τ",
        name: "Capital Tau",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Τ" }],
      },
      {
        latex: "Υ",
        name: "Capital Upsilon",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Υ" }],
      },
      {
        latex: "\\Phi",
        name: "Capital Phi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Φ" }],
      },
      {
        latex: "Χ",
        name: "Capital Chi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Χ" }],
      },
      {
        latex: "\\Psi",
        name: "Capital Psi",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ψ" }],
      },
      {
        latex: "\\Omega",
        name: "Capital Omega",
        pieces: [{ type: "text", x: 0, y: 0, fontSize: 24, value: "Ω" }],
      },
    ],
  },
  {
    name: "Trigonometry",
    inputs: {
      numbers: {
        periodic: true,
        infinite: true,
        fontSize: true,
      },
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "{\\square}={\\square}",
        name: "Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "=" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\sin{\\square}",
        name: "Sine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "sin" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\cos{\\square}",
        name: "Cosine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "cos" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\tan{\\square}",
        name: "Tangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "tan" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\cot{\\square}",
        name: "Cotangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "cot" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\sec{\\square}",
        name: "Secant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "sec" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\csc{\\square}",
        name: "Cosecant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "csc" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\arcsin{\\square}",
        name: "Arcsine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arcsin" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\arccos{\\square}",
        name: "Arccosine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arccos" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\arctan{\\square}",
        name: "Arctangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arctan" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arccot}\\:{\\square}",
        name: "Arccotangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arccot" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arcsec}\\:{\\square}",
        name: "Arcsecant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arcsec" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arccsc}\\:{\\square}",
        name: "Arccosecant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arccsc" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\sinh{\\square}",
        name: "Hyperbolic Sine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "sinh" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\cosh{\\square}",
        name: "Hyperbolic Cosine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "cosh" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\tanh{\\square}",
        name: "Hyperbolic Tangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "tanh" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\coth{\\square}",
        name: "Hyperbolic Cotangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "coth" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{sech}\\:{\\square}",
        name: "Hyperbolic Secant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "sech" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{csch}\\:{\\square}",
        name: "Hyperbolic Cosecant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "csch" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arcsinh}\\:{\\square}",
        name: "Hyperbolic Arcsine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arcsinh" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arccosh}\\:{\\square}",
        name: "Hyperbolic Arccosine",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arccosh" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arctanh}\\:{\\square}",
        name: "Hyperbolic Arctangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arctanh" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arccoth}\\:{\\square}",
        name: "Hyperbolic Arccotangent",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arccoth" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arcsech}\\:{\\square}",
        name: "Hyperbolic Arcsecant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arcsech" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\text{arccsch}\\:{\\square}",
        name: "Hyperbolic Arccosecant",
        pieces: [
          { type: "text", x: 0, y: 0, fontSize: 24, value: "arccsch" },
          { type: "hole", x: 52, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square^{\\circ}",
        name: "Degrees",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "°" },
        ],
      },
      {
        latex: "\\square\\:\\text{rad}",
        name: "Radians",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "rad" },
        ],
      },
    ],
  },
  {
    name: "Functions",
    inputs: {
      numbers: {
        periodic: true,
        infinite: true,
        fontSize: true,
      },
      variables: {
        subscript: true,
        fontSize: true,
      },
      buttons: true,
    },
    buttons: [
      {
        latex: "{\\square}={\\square}",
        name: "Equal",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "=" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "\\square\\:(\\:\\square\\:)",
        name: "Function with 1 parameter",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
          { type: "text", x: 58, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "\\square\\:(\\:\\square\\:,\\:\\square\\:)",
        name: "Function with 2 parameters",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
          { type: "text", x: 59, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 78, width: 16, y: 0, height: 24 },
          { type: "text", x: 97, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "\\square\\:(\\:\\square\\:,\\:\\square\\:,\\:\\square\\:)",
        name: "Function with 3 parameters",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "(" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
          { type: "text", x: 59, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 78, width: 16, y: 0, height: 24 },
          { type: "text", x: 97, y: 0, fontSize: 24, value: "," },
          { type: "hole", x: 116, width: 16, y: 0, height: 24 },
          { type: "text", x: 135, y: 0, fontSize: 24, value: ")" },
        ],
      },
      {
        latex: "{\\square}\\:\\circ\\:{\\square}",
        name: "Function Composition",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 0, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 24, value: "∘" },
          { type: "hole", x: 40, width: 16, y: 0, height: 24 },
        ],
      },
      {
        latex: "{\\square}^{-1}",
        name: "Inverse",
        pieces: [
          { type: "hole", x: 0, width: 16, y: 8, height: 24 },
          { type: "text", x: 21, y: 0, fontSize: 12, value: "-1" },
        ],
      },
    ],
  },
];
