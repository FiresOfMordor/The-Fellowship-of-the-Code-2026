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

This interface supports the intent of the Shire Guide by helping the Fellowship make safer resting decisions in unfamiliar terrain. The recommendation card is the most visually prominent element on the page, ensuring the group sees the suggested action first; the Key Factors and Notice sections then expose the reasoning and the limits of that reasoning. Surfacing both the recommendation and the uncertainty around it reflects the value from Assignment 1: reducing poor decisions under incomplete information by giving the Fellowship a shared, structured basis for action rather than relying on individual intuition.

### How it reflects the wireframe from Assignment 2

The implementation keeps the core structure of the wireframe: location, recommendation, key factors, notice, and next actions. At the same time, we refined the hierarchy based on the feedback from Assignment 2 by making the system identity clearer, adding a back button, giving the location more visual weight, and making the main recommendation more prominent. The wording “Rest under guard” also reflects the improved flow logic more directly than the earlier phrasing.

### What we deliberately did not implement yet

We deliberately did not implement any dynamic behavior, scoring logic, or navigation between screens. The recommendation, risk and confidence levels, factor values, and gauge fill angles are all hardcoded for the Midgewater Marshes scenario rather than computed from inputs — the gauges visualize what would be scored output in the full capability. The wireframe also includes a tappable info marker on each gauge that would expose the underlying score breakdown; we kept this concept in our design intent but did not render it visually, since without the dynamic content it would point to, it would only add visual noise. This keeps the artifact aligned with the assignment, which focuses on static representation through HTML and CSS rather than functionality.

### Which assumptions and constraints shaped our decisions

We assumed that the Fellowship needs to understand the situation quickly and under uncertainty, on a small screen, with limited time to read. The main constraints were static implementation only — no JavaScript, no backend, no libraries — and a focus on structure, hierarchy, and readability over functionality. For that reason, the interface uses a compact mobile-like layout, a highly visible recommendation card, grouped factors with consistent visual treatment, and a small set of clearly labeled actions. 
