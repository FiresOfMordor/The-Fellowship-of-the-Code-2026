# The Red Book of Westmarch - Chapter IV: When Things React

“Even the wise cannot see all ends.” – Gandalf

## Summary

This chapter documents our work on Artifact IV – Logic & State: Camp Suitability Check.

In this phase, we moved from static representation to application logic. The interface from Artifact III was no longer only meant to show a recommendation, but to react to user interaction and represent a small but meaningful part of system behavior.

We continued with the same capability as before: Support Resting and Camp Decisions. The focus remained the Camp Suitability Check in the Midgewater Marshes, where the Fellowship must decide whether to rest under guard, rest here, search for a better camp, or continue the journey.

The main development in this artifact was the introduction of JavaScript state and rule-based behavior. The interface now stores values such as group condition, concealment, ground stability, danger signs, resources, confidence, selected action, and opened information panels. These values are used to explain why the system recommends “Rest under guard” in the current situation.

The result is still a focused prototype, not a full application. However, the interface now better demonstrates how state, logic, and UI updates work together to support a concrete decision.

## Learning Outcomes

- Understand the relationship between state, logic, and user interface
- Use JavaScript to make a static interface react to user interaction
- Connect concept, design, representation, and execution in one consistent capability
- Keep application logic focused without adding unnecessary new features
- Make uncertainty and decision constraints visible in the interface
- Reflect on AI support during code review, logic design, and implementation refinement

## Artifact
**File:** [artifacts/artifact-4/artifact-4-logic-state.md](../artifacts/artifact-4/artifact-4-logic-state.md)

**Supporting files:**
- [artifacts/artifact-4/src/interface.html](../artifacts/artifact-4/src/interface.html)
- [artifacts/artifact-4/src/style.css](../artifacts/artifact-4/src/style.css)
- [artifacts/artifact-4/src/logic.js](../artifacts/artifact-4/src/logic.js)


**Focus:** JavaScript state, interaction logic, UI updates, and design rationale for the Camp Suitability Check
 
- The artifact builds directly on the static interface from Artifact III.
- It adds plain JavaScript to make the existing screen react to user interaction.
- The implementation keeps the original scope of the Camp Suitability Check and does not add backend functionality, persistence, maps, or a new capability.

## AI Assistance

- We used AI mainly as support for reviewing the logic, improving the JavaScript structure, and checking alignment with the assignment.
- AI helped us distinguish between simple interaction and actual state-based behavior.
- AI helped identify that the first version was still too close to a simple “button changes text” implementation.
- One important improvement was the use of `data-action` and `data-factor` attributes.
  - This made the logic less dependent on visible button labels.
  - It also made the implementation more stable if wording changes later.
- AI also helped us discuss whether the Key Factors should be interactive.
  - We decided to make them clickable because they explain how individual state values influence the recommendation.
  - This made the logic more transparent without adding a new capability.
- Not every AI suggestion was used directly.
  - Some versions made the interface feel less interactive.
  - Some versions placed explanations too far away from the elements they referred to.
  - We adjusted the design so that explanations now appear close to Risk, Confidence, and the relevant Key Factor.

## Lessons Learned

- Adding JavaScript is not only about making buttons clickable.
- The more important challenge is deciding:
  - what the system needs to remember
  - how state changes
  - how the interface should react
- A small state model can make an interface clearer and more explainable.
- Storing values such as group condition, concealment, danger signs, and selected action made the Camp Suitability Check more consistent with the original concept.
- Interaction should support the decision instead of distracting from it.
- Clickable Risk, Confidence, and Key Factor elements help the Fellowship understand why the recommendation is “Rest under guard”.
- We deliberately avoided adding larger features such as:
  - maps
  - persistence
  - backend logic
  - route planning
- The Notice message should not be removed.
  - Incomplete information is part of the problem the Shire Guide is designed for.
  - Without the Notice, the recommendation would appear too certain.
  - With the Notice, the interface communicates that the system provides structured support while the final decision remains with the Fellowship.
- Overall, Artifact IV helped connect the earlier concept, flow, wireframe, and static interface to actual behavior.
- The Camp Suitability Check now feels more like a functional part of The Fellowship Companion while still staying focused on one clear decision situation.
