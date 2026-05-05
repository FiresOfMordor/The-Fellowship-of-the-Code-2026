# Artifact III: Representation – Camp Suitability Check

## 1. Selected System Capability

**Support Resting and Camp Decisions**

This capability helps the Fellowship evaluate whether a possible resting place is suitable for a short stop. In this artifact, we implement the capability as a static interface for the Camp Suitability Check in the Midgewater Marshes, where the group must assess risk, environmental conditions, and the need for rest before deciding whether to rest, rest under guard, search for a better camp or continue the journey.

### Why this capability matters for the Fellowship at this stage of the journey

At this stage of the journey, the Fellowship is moving through unfamiliar terrain and cannot rely on complete or fully reliable information. The group therefore needs a clear and shared way to assess whether a location is safe enough for rest, instead of relying only on intuition or hurried judgment.

---

## 2. Static Interface Implementation

**HTML:** [src/interface.html](./src/interface.html)  
**CSS:** [src/style.css](./src/style.css)

### Short Description

This static interface represents the Camp Suitability Check as a clear and structured screen for the Fellowship. It focuses on one concrete decision: whether the group should rest here, rest under guard, search for a better camp or continue the journey.

The implementation follows the wireframe from Assignment 2, while also addressing the feedback received on that design. In particular, it makes the overall system identity more visible, includes a back button, and gives the main recommendation a stronger visual priority.

---

## 3. Design Rationale

### How our design supports the intent and value from Assignment 1

This interface supports the intent of the Shire Guide by helping the Fellowship make safer resting decisions in unfamiliar terrain. The page makes the decision context, the recommendation, and the most relevant supporting factors visible at a glance, so the group can judge whether rest is appropriate. This supports the value from Assignment 1 by reducing poor decisions under uncertainty and by giving the Fellowship a shared basis for action.

### How it reflects the wireframe from Assignment 2

The implementation keeps the core structure of the wireframe: location, recommendation, key factors, notice, and next actions. At the same time, we refined the hierarchy based on the feedback from Assignment 2 by making the system identity clearer, adding a back button, giving the location more visual weight, and making the main recommendation more prominent. The wording “Rest under guard” also reflects the improved flow logic more directly than the earlier phrasing.

### What we deliberately did not implement yet

We deliberately did not implement any dynamic behavior, scoring logic, search functionality, or route logic. This keeps the artifact aligned with the assignment, which focuses on static representation through HTML and CSS rather than functionality.

### Which assumptions and constraints shaped our decisions

We assumed that the Fellowship needs to understand the situation quickly and under uncertainty. The main constraints were static implementation only, no JavaScript, no backend, and a strong focus on structure, hierarchy, and readability. For that reason, the interface uses a compact mobile-like layout, a highly visible recommendation card and grouped factors.
