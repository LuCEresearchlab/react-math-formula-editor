export const mathInputReducer = (state, action) => {
  switch (action.type) {
    case "setCurrentTab":
      return {
        ...state,
        currentTab: action.payload,
        mathButtonData: "",
        currentAddingType: "",
      };
    case "setNumberValue":
      return {
        ...state,
        numberData: {
          ...state.numberData,
          value: action.payload,
          periodicIndex: "",
          isIrrationalNumber: "",
          latex:
            action.payload === ""
              ? "\\text{Write a Number}"
              : (action.payload.startsWith(".") ? "0" : "") + action.payload,
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setPeriodicIndex":
      const numberValue = state.numberData.value;
      return {
        ...state,
        numberData: {
          ...state.numberData,
          periodicIndex: action.payload,
          isIrrationalNumber: false,
          latex:
            action.payload !== ""
              ? numberValue.substring(
                  0,
                  numberValue.length - Number(action.payload),
                ) +
                "\\overline{" +
                numberValue.substring(
                  numberValue.length - Number(action.payload),
                ) +
                "}"
              : numberValue,
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setIsIrrationalNumber":
      const valueNumber = state.numberData.value;
      return {
        ...state,
        numberData: {
          ...state.numberData,
          periodicIndex: "",
          isIrrationalNumber: action.payload,
          latex: valueNumber + (action.payload ? "…" : ""),
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setNumberFontSize":
      return {
        ...state,
        numberData: {
          ...state.numberData,
          fontSize: action.payload,
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setVariableValue":
      const indexValue = state.variableData.subscriptIndex;
      return {
        ...state,
        variableData: {
          ...state.variableData,
          value: action.payload,
          subscriptIndex: action.payload !== "" ? indexValue : "",
          latex:
            action.payload === ""
              ? "\\text{Write a Variable}"
              : "\\text{" + action.payload + "}_{" + indexValue + "}",
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setSubscriptIndex":
      const variableValue = state.variableData.value;
      return {
        ...state,
        variableData: {
          ...state.variableData,
          subscriptIndex: action.payload,
          latex: "\\text{" + variableValue + "}_{" + action.payload + "}",
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setVariableFontSize":
      return {
        ...state,
        variableData: {
          ...state.variableData,
          fontSize: action.payload,
        },
        mathButtonData: {
          latex: "",
          pieces: [],
        },
        currentAddingType: "",
      };
    case "setCurrentAddingType":
      const { buttonType, mathButtonData } = action.payload;
      const addingType = state.currentAddingType;
      const mathButtonLatex = state.mathButtonData.latex;
      return {
        ...state,
        currentAddingType:
          buttonType === addingType
            ? mathButtonLatex === mathButtonData.latex
              ? ""
              : buttonType
            : buttonType,
        mathButtonData: mathButtonData,
      };
    default:
      return { ...state };
  }
};
