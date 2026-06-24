# The Red Book of Westmarch - Chapter V: The Tale Continues

## Summary

This chapter documents our work on **Artifact V – Integration & Extension: Knowledge Challenge**.

In this final phase, we moved from working on one isolated capability to thinking about **The Fellowship Companion** as a more connected system. Earlier artifacts focused mainly on the **Camp Suitability Check**, which helped the Fellowship evaluate whether a place was suitable for rest. In Artifact V, we added a new capability slice: **The Fellowship Knowledge Challenge**.

The selected system capability is **Make uncertain knowledge transparent**. The Knowledge Challenge checks whether the Fellowship is prepared for a new journey section before moving forward. It asks a short question about the upcoming area and makes visible whether the group is prepared, uncertain, or unprepared.

The main extension in this artifact is the **Web Storage API**, used through `localStorage`. This allows the system to store the final Knowledge State locally in the browser. A successful challenge is stored as **Prepared · confidence stable**. A failed challenge is stored as **Unprepared · confidence lowered**.

This means that the result of the challenge is no longer only temporary screen feedback. It becomes a small stored system state that could later influence related decision-support screens.

## Learning Outcomes

- Understand how multiple system capabilities can fit into one coherent Companion
- Distinguish between a selected capability and supporting design effects
- Create a system-level flow instead of a detailed interaction flow
- Extend an existing system in a controlled way
- Use a browser API to store meaningful state beyond the current screen
- Reflect on how uncertainty can be represented before a decision situation occurs

## Artifact

- File: [Artifact 5: Integration & Extension](../artifacts/artifact-5/artifact-5-integration-extension.md)
- Supporting files:
  - `artifacts/artifact-5/src/flowchart-system.mermaid.md`
  - `artifacts/artifact-5/src/wireframe-system.png`
  - `artifacts/artifact-5/src/interface.html`
  - `artifacts/artifact-5/src/style.css`
  - `artifacts/artifact-5/src/logic.js`
- Focus: final system synthesis, Knowledge Challenge, uncertainty, stored Knowledge State, and Web Storage API
- The artifact adds a new capability slice instead of expanding the Camp Suitability Check again.
- It keeps the implementation small and focused, following the same HTML, CSS, and JavaScript pattern used in earlier artifacts.
- The Knowledge Challenge remains part of **The Shire Guide** and does not become a separate application.

## AI Assistance

- We used AI to compare possible directions for the final assignment and to check which capability would fit best with the previous artifacts.
- AI helped us clarify that the selected capability should be clearly separate from the Camp Suitability Check while still fitting into the wider Fellowship Companion.
- We used AI to refine the system flow and distinguish system-level logic from detailed interaction steps.
- AI also helped us compare possible extensions.
  - A sunset/time API would have added atmosphere and context.
  - The Web Storage API was stronger because it stores the actual Knowledge State.
- Not every suggestion was used directly.
  - Some early ideas were too close to previous capabilities.
  - Some explanations were too long or too focused on the assignment wording.
  - We adjusted the final artifact to stay closer to our previous writing style.

## Lessons Learned

- A final system artifact is not only about adding another screen.
- The more important task is to explain how the system fits together.
- A new capability should be clearly separate from previous work, but still connected to the overall Companion.
- The Knowledge Challenge helped us think about uncertainty before a decision happens.
- The Camp Suitability Check supports a decision in the moment.
- The Knowledge Challenge supports preparation before the next journey section.
- This distinction made the final system view clearer.
- The Web Storage API showed how a small technical extension can change the meaning of an interface.
- Without storage, the quiz result would only be temporary feedback.
- With storage, the result becomes a Knowledge State that remains available after reloading the page.
- We deliberately avoided building:
  - a full multiplayer quiz system
  - a large question database
  - backend storage
  - user accounts
  - real-time synchronization
- These limits helped keep the artifact focused.
- Overall, Artifact V helped us understand The Fellowship Companion less as a collection of separate artifacts and more as a connected decision-support system.
