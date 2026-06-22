# Artifact 5: Integration & Extension – Knowledge Challenge

## 1. Selected System Capability

The selected system capability for this final artifact is **Make uncertain knowledge transparent**.

This capability means that The Fellowship Companion should help the Fellowship understand where knowledge is reliable, incomplete, or uncertain before important decisions are made. In earlier artifacts, uncertainty was mainly visible through confidence levels and warning notices in the Camp Suitability Check. In this final artifact, uncertainty is addressed through a new capability slice: **The Fellowship Knowledge Challenge**.

The Knowledge Challenge is a short preparation round before a new journey section. It checks whether the Fellowship has enough shared knowledge about the next area, such as dangers, terrain, plants, routes, or local clues. The goal is not to create a competitive quiz, but to make collective knowledge gaps visible before they affect decisions during the journey.

The Knowledge Challenge is separate from the Camp Suitability Check. The Camp Suitability Check supports a concrete resting decision. The Knowledge Challenge supports preparation by showing whether the group is confident, uncertain, or unprepared before moving into the next section.

## 2. System Flow

The system flow shows how the Knowledge Challenge works at a system level.

Supporting file: [System flow](./src/flowchart-system.mermaid.md)

The flow begins when a new journey section is about to start. The system opens a quiz round and checks whether the Fellowship passes the current level. If the level is passed, the next section is unlocked and the journey can continue.

If the level is not passed, the system shows weak areas, repetition questions, and a hint. The Fellowship can try again up to three times. If all attempts are used, the system marks the group as unprepared and shows a warning before the journey continues.

This is not a detailed click-by-click interaction flow. It shows how the capability fits into the larger Companion: knowledge is checked, uncertainty becomes visible, and the result can affect the wider journey context.

## 3. System Wireframe

The system wireframe shows where the Knowledge Challenge lives inside The Shire Guide and how the user moves through the challenge screen.

Supporting file: [System wireframe](./src/wireframe-system.png)

The wireframe focuses on the main elements needed for this capability: the journey section, current question, answer options, progress, attempts, hint, warning, and Knowledge State. It shows the Knowledge Challenge as a focused preparation screen rather than a separate application.

## 4. Implementation Snapshot

The implementation snapshot lightly repeats the approach from earlier artifacts: a basic HTML structure, CSS styling, and minimal JavaScript logic.

Supporting implementation files:

- [HTML interface](./src/interface.html)
- [CSS stylesheet](./src/style.css)
- [JavaScript logic](./src/logic.js)

The implemented screen demonstrates the core behavior of the Knowledge Challenge: selecting an answer, receiving feedback, using limited attempts, revealing hints, showing a warning state, and storing the final Knowledge State. The implementation is intentionally small and focused, because the goal is to show the system pattern rather than build a complete quiz platform.

## 5. Meaningful Extension

The meaningful extension in this artifact is the **Web Storage API**, used through `localStorage`.

The Web Storage API allows the browser to store small pieces of data locally. In this artifact, it stores the result of the Knowledge Challenge as a local knowledge state. This means that the result does not disappear immediately when the page is reloaded.

The new interface element **Knowledge State** shows the stored result:

- **Not recorded yet** means that no challenge result has been saved.
- **Prepared · confidence stable** means that the Fellowship passed the challenge.
- **Unprepared · confidence lowered** means that the Fellowship failed after the available attempts.

This extension changes the meaning of the challenge. Without the Web Storage API, the quiz would only show temporary feedback on the current screen. With the API, the result becomes a stored signal about the Fellowship’s preparedness.

A passed challenge records stable knowledge. A failed challenge records uncertainty and lowered confidence. This connects the Knowledge Challenge to the wider Fellowship Companion because the stored Knowledge State could later be read by related decision-support screens, such as camp, route, or risk assessments.

## 6. Design Rationale

### How the integrated system still reflects the original intent and value

### How individual slices connect meaningfully

### Why our chosen extension makes sense

### What we intentionally did not build
