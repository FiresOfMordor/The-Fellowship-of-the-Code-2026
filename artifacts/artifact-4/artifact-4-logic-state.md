# Artifact IV: Logic and State – Camp Suitability Check

## 1. Selected System Capability

### The system capability we are implementing

The system capability we are implementing remains Support Resting and Camp Decisions.

This capability helps the Fellowship evaluate whether a possible resting place is suitable for a short stop during the journey. In this artifact, the capability is implemented as a functional logic slice of the Camp Suitability Check in the Midgewater Marshes. The interface no longer only represents a static recommendation; it now keeps track of the current camp situation as state, evaluates that state through simple decision rules, and updates the interface when the Fellowship explores or selects an action.

### The state this capability depends on or modifies

This capability depends on state values that describe the current camp situation and the Fellowship’s condition. These include the group’s fatigue level, concealment level, ground stability, danger signs, available resources, confidence level, and the currently selected action.

In the current situation, the state describes a tired group, partial concealment, unstable ground, unclear danger signs, limited resources, and low-medium confidence. Based on these values, the system derives the recommendation “Rest under guard”. The state is also modified when the user opens additional risk or confidence details, or when the Fellowship selects one of the available actions.

### Why this capability matters for the Fellowship at this stage of the journey

This capability matters because the Fellowship is moving through the Midgewater Marshes, an unfamiliar and risky area on the way to Weathertop. A resting decision cannot be made safely from intuition alone, because the group must balance fatigue, concealment, ground conditions, danger signs, and uncertainty.

The system gives the Fellowship a shared and explainable basis for deciding whether to rest, rest under guard, search for a better camp, or continue the journey. This reduces the risk of poor decisions under incomplete information while keeping the final decision with the group.

## 2. Logic & State

### Short Description
The static interface from Assignment 3 was extended with plain JavaScript. The implementation introduces an explicit state model for the current camp situation, evaluates this state through simple decision rules, and updates the visible interface when the Fellowship explores risk details, confidence details, or selects an action.

The HTML structure was kept close to the previous static interface. Only the necessary identifiers and `data-action` attributes were added so that JavaScript can update the interface without changing the overall design. The CSS remains mostly unchanged and only supports the visible states created by the logic. The CSS also adds a subtle attention cue to the Overall Risk and Confidence cards, because these two values are central for understanding the recommendation before selecting an action.

Files:

- [Updated HTML interface](./src/interface.html)
- [Updated CSS stylesheet](./src/style.css)
- [JavaScript logic and state](./src/logic.js)

## 3. Design Rationale

### How the logic supports the intent and value from Assignment 1

The logic supports the original intent of the Shire Guide by helping the Fellowship make safer resting decisions under uncertainty. Instead of showing a fixed recommendation only, the interface now uses state values such as group condition, concealment, ground stability, danger signs, resources, and confidence to derive the recommendation shown to the group.

This reflects the value defined in Assignment 1: reducing poor decisions when information is incomplete. The recommendation “Rest under guard” is not treated as a decorative label, but as the result of a simple rule-based evaluation. The interface also keeps uncertainty visible through the confidence level, notice text, and risk explanation.

### How the implemented behavior reflects the flow and wireframe from Assignment 2

The implemented behavior follows the same decision situation as the flow and wireframe from Assignment 2: the Fellowship evaluates whether a possible resting place in the Midgewater Marshes is suitable for rest.

The main interface structure remains based on the previous wireframe: location, recommendation, risk and confidence summary, key factors, notice, and next actions. JavaScript now connects these elements to state. When the user opens the risk or confidence information, the interface explains why the current recommendation is cautious. When the user selects an action, the system checks that choice against the recommendation and gives feedback. The subtle pulse animation on Overall Risk and Confidence is used as a visual cue to guide the Fellowship toward the most decision-relevant state information without adding a new feature or changing the interaction flow.

### What constraints or assumptions shaped the logic

The logic is intentionally simple and local to this screen. It assumes that the Fellowship is currently tired, that the location is only partly concealed, that the ground is unstable, that danger signs are unclear, and that the confidence level is low-medium. These assumptions match the Midgewater Marshes context and keep the implementation focused on one concrete decision.

The implementation also reflects earlier constraints from the concept: the tool must work without a backend, must make uncertainty visible, and must support quick and discreet decision-making. For that reason, the logic uses plain JavaScript, explicit state variables, and direct UI updates without external libraries, persistence, maps, or network access.

### What we deliberately did not implement yet

We deliberately did not add new capabilities, backend logic, saved decisions, live map data, real navigation, or a complete route-planning system. The Back button only resets the local interaction state of this screen instead of navigating to another page.

We also did not implement a complex scoring model or dynamic sensor data. The goal of this artifact is not to simulate the whole journey, but to make the existing Camp Suitability Check functional through understandable state, simple rules, and visible UI changes.
