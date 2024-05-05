Number input Accordion

```js
<InputAccordion
  inputType='Number'
  inputs={{
    periodic: true,
    infinite: true,
    subscript: false,
    fontSize: true,
    buttons: null,
  }}
/>
```

Variable input Accordion

```js
<InputAccordion
  inputType='Veriable'
  inputs={{
    periodic: false,
    infinite: false,
    subscript: true,
    fontSize: true,
    buttons: null,
  }}
/>
```

Math buttons input Accordion

```js
<InputAccordion
  inputType='mathButton'
  inputs={{
    periodic: false,
    infinite: false,
    subscript: false,
    fontSize: false,
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
  }}
/>
```
