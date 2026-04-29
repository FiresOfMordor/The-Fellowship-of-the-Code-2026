# Artifact III: Representation – Camp Suitability Check

## 1. Selected System Capability

**Support Resting and Camp Decisions**

This capability helps the Fellowship evaluate whether a possible resting place is suitable for a short stop. In this artifact, we implement the capability as a static interface for the Camp Suitability Check in the Midgewater Marshes, where the group must assess risk, environmental conditions, and the need for rest before deciding whether to rest, rest briefly with caution, or move on.

### Why this capability matters for the Fellowship at this stage of the journey

At this stage of the journey, the Fellowship is moving through unfamiliar terrain and cannot rely on complete or fully reliable information. The group therefore needs a clear and shared way to assess whether a location is safe enough for rest, instead of relying only on intuition or hurried judgment.

---

## 2. Static Interface Implementation

**HTML:** [src/interface.html](./src/interface.html)  
**CSS:** [src/style.css](./src/style.css)

### Short Description

This static interface represents the **Camp Suitability Check** as a clear and structured screen for the Fellowship. It focuses on one concrete decision: whether the group should rest here, rest briefly with caution, or move on.

The implementation follows the wireframe from Assignment 2, while also addressing the feedback received on that design. In particular, it makes the overall system identity more visible, includes a back button, and gives the main recommendation a stronger visual priority.

---

## 3. Design Rationale

### How our design supports the intent and value from Assignment 1

This interface supports the intent of the Shire Guide by helping the Fellowship make safer resting decisions in unfamiliar terrain. The static page makes the current decision, the recommendation, and the most relevant supporting factors visible at a glance. This supports the value from Assignment 1 by reducing poor decisions under uncertainty and by giving the group a shared basis for judgment.

### How it reflects the wireframe from Assignment 2

The implementation keeps the core structure of the wireframe: location, recommendation, key factors, notice, and next actions. At the same time, we improved the hierarchy based on the feedback from Assignment 2 by making the system identity visible, adding a back button, and giving the main recommendation much stronger visual emphasis. The result stays consistent with the earlier design, but expresses it more clearly as an interface.

### What we deliberately did not implement yet

We deliberately did not implement any behavior, search logic, scoring logic, or dynamic updates. We also left out interactive map behavior and more complex flows, because this assignment focuses on static representation through HTML and CSS rather than functionality. The page therefore communicates structure and intent without pretending to be a finished application.

### Which assumptions and constraints shaped our decisions

We assumed that the Fellowship needs to understand the situation quickly and under uncertainty. The main constraints were static implementation only, no JavaScript, no backend, and a strong focus on structure, readability, and semantic grouping. For that reason, the interface uses a compact mobile-like layout, highlights the recommendation clearly, and keeps uncertainty visible through the notice and confidence summary.
