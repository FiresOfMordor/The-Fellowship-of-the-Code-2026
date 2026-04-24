# The Red Book of Westmarch - Chapter II: Paths & Choices

> “All we have to decide is what to do with the time that is given us.” - Gandalf

## Summary

This chapter documents our work on Artifact II – Decisions: Camp Suitability Check.

In this phase, we moved from the conceptual level of Assignment 1 to a more concrete design perspective. Instead of describing only what the system should enable, we focused on how one selected capability works step by step in a real journey situation.

Our selected capability was Support Resting and Camp Decisions. We developed it around a concrete scenario in the Midgewater Marshes, where the Fellowship must decide whether a possible resting place is suitable, whether only a cautious rest is possible, or whether the group should continue searching. The result of this phase was a decision flow, a low-fidelity wireframe, and a short design rationale that connects the design back to the intent, value, and constraints from Assignment 1.

### Learning Outcomes

- Translate a high-level system capability into a concrete decision flow
- Structure a design around one clear question and one specific journey situation
- Represent system behavior through flow and wireframe rather than implementation
- Connect design decisions back to intent, value, assumptions, and constraints
- Reflect on trade-offs, simplifications, and AI support during the design process

## Artifact

**File:** [artifacts/artifact-2/artifact-2-deciding.md](../artifacts/artifact-2/artifact-2-deciding.md)

**Supporting files:**
- [artifacts/artifact-2/src/decisions.mermaid.md](../artifacts/artifact-2/src/decisions.mermaid.md)
- [artifacts/artifact-2/src/decisions.png](../artifacts/artifact-2/src/decisions.png)

**Focus:** Selected system capability, Mermaid flowchart, wireframe, and short design rationale for Camp Suitability Check

- The artifact develops the capability Support Resting and Camp Decisions from Assignment 1 into a concrete design slice.
- The flow models a resting decision through search, danger check, group condition, environmental suitability, concealment, and possible resting outcomes.
- The wireframe translates this logic into a low-fidelity mobile screen with location, danger level, a recommendation, four key factors, and simple navigation elements.
- The artifact stays focused on one concrete decision instead of trying to cover the whole Fellowship Companion at once.

## AI Assistance

We used AI mainly to support structure, wording, and the transition from Assignment 1 into a more concrete design artifact.

- AI helped us test whether the selected capability was specific enough for Assignment 2 and still connected to the broader Fellowship Companion.
- It supported us in sharpening the wording of the selected capability, the flow logic, and the design rationale.
- We also used AI to reflect on whether the design still matched the feedback from Assignment 1, especially the shift from an individual user focus toward the Fellowship as a group.
- At the same time, we did not adopt all suggestions directly. Some ideas were stronger than what our actual wireframe finally showed, so we had to keep the documentation aligned with the artifact we really built.
- We used AI as a tool to explore potential design approaches within the scope of our previously defined artifact. Some of the suggestions were already in the form of highly detailed designs and went beyond the actual scope of our wireframe. Accordingly, they served primarily as inspiration and guidance in developing a suitable structure.
- We also used AI when preparing GitHub structure, linking, and documentation, but kept the final repository layout aligned with the course requirements.

## Lessons Learned

- A strong initial concept depends above all on clarity, focus, and a well-defined scope.
- Even in a fictional setting, users, problems, and decisions need to be described in practical and concrete terms.
- Constraints such as offline use, uncertainty, discretion, and limited expertise do not weaken a concept; they make it more credible and more robust.
- AI is most useful when it supports reflection and revision, not when it replaces our own judgment.
