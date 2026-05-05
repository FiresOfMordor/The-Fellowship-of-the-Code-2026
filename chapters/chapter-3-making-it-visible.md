# The Red Book of Westmarch - Chapter III: Making It Visible

> “I like less than half of you half as well as you deserve.” - Bilbo

## Summary

This chapter documents our work on Artifact III – Representation: Camp Suitability Check.

In this phase, we moved from design to representation. Instead of refining the flow or wireframe further, we translated the selected capability into a static HTML + CSS interface that expresses structure, hierarchy, and intent without adding behavior or implementation logic.

We continued with the same capability from Assignment 2, Support Resting and Camp Decisions, and implemented it as a mobile-like screen for the Fellowship in the Midgewater Marshes. During this step, we also refined parts of the interface to better match the updated decision logic: the location was made more prominent and the recommendation was made more concrete as “Rest under guard”. These changes helped us make the screen clearer both as a decision interface and as part of a larger system.

### Learning Outcomes

- Translate a wireframe into a concrete static interface using HTML and CSS
- Use semantic HTML to express structure and hierarchy clearly
- Implement one system capability consistently across concept, design, and interface
- Improve an earlier design by incorporating feedback into the visual structure
- Reflect on what a static interface can communicate before any logic or behavior is added

## Artifact

**File:** [artifacts/artifact-3/artifact-3-representation.md](../artifacts/artifact-3/artifact-3-representation.md)  
**Supporting files:**  
- [artifacts/artifact-3/src/interface.html](../artifacts/artifact-3/src/interface.html)  
- [artifacts/artifact-3/src/style.css](../artifacts/artifact-3/src/style.css)

**Focus:** Selected system capability, static HTML interface, CSS styling, and short design rationale for Camp Suitability Check

- The artifact reuses the capability Support Resting and Camp Decisions from Assignment 2.
- The interface represents one clear decision situation: whether the Fellowship should rest under guard, rest here, continue the journey, or search for a better camp.
- The HTML implementation uses semantic structure such as `header`, `main`, `section`, headings, a definition list for key factors, and buttons for the visible actions.
- The CSS implementation strengthens hierarchy and readability through a compact mobile-like layout, a prominent recommendation card, grouped factors, and a Shire-inspired visual style.

## AI Assistance

We used AI mainly to support structure, wording, and the transition from wireframe to static implementation.

- AI helped us decide how to translate the wireframe into a clearer and more consistent HTML structure.
- We also used AI directly to help generate and refine parts of the HTML and CSS code for the static interface.
- It supported us in reflecting on the feedback from Assignment 2, especially the need for stronger system identification, a back button, and a more prominent recommendation.
- During later revisions, AI also helped us think through how to refine the wording of the recommendation
- Some AI suggestions were visually more ambitious than necessary, so we had to keep the implementation aligned with the assignment requirement of a static, structured interface rather than a fully designed application.
- AI was also useful when refining labels, navigation wording, and design rationale, but the final decisions about hierarchy, scope, and consistency were made by us.

## Lessons Learned

- A static interface can already communicate a lot about purpose, hierarchy, and decision support, even before any behavior is implemented.
- Semantic HTML matters because it makes the structure of the interface clearer both technically and conceptually.
- Good CSS for this task is not mainly about decoration, but about grouping, emphasis, readability, and visual priority.
- Feedback from the previous assignment can improve the implementation significantly when it is treated as a design correction rather than only as a cosmetic change.
- We also learned that small wording and navigation changes, such as making the recommendation more concrete or adding a clear route back to the Shire Guide menu, can improve the usability of the interface without changing the underlying capability.
