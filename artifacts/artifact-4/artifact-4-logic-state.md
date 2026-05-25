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

## 2. Add Logic & State

### Short Description
The static interface from Assignment 3 was extended with plain JavaScript. The implementation introduces an explicit state model for the current camp situation, evaluates this state through simple decision rules, and updates the visible interface when the Fellowship explores risk details, confidence details, or selects an action.

The HTML structure was kept close to the previous static interface. Only the necessary identifiers and `data-action` attributes were added so that JavaScript can update the interface without changing the overall design. The CSS remains mostly unchanged and only supports the visible states created by the logic.

Files:

- [Updated HTML interface](./src/interface.html)
- [Updated CSS stylesheet](./src/style.css)
- [JavaScript logic and state](./src/logic.js)
