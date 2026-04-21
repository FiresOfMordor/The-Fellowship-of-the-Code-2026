# Artifact II: Decisions – Camp Suitability Check

## 1. Selected System Capability

**Support Resting and Camp Decisions**

This capability helps the Fellowship evaluate whether a possible resting place is suitable for a short stop. In this artifact, the capability is designed around a concrete resting decision in the Midgewater Marshes, where the group must assess risk under uncertainty.
At the same time, the flow is intended as a reusable decision pattern within The Fellowship Companion. The same structure can support future resting and risk decisions throughout the journey whenever the Fellowship needs to compare safety, concealment, environmental risks, available resources, and information uncertainty before deciding whether to rest, rest briefly with caution, or move on.

### Why this capability?

Resting in the Midgewater Marshes is not a simple comfort decision. A poor resting place can expose the Fellowship, slow down the journey, weaken the group, or increase the risk of being discovered. This capability gives the group a structured way to assess a risky situation before committing to rest.

### Why is it meaningful for the Fellowship at this stage of the journey?

At this stage, the Fellowship is moving through unfamiliar terrain and cannot rely on complete or fully reliable information. The group needs a shared basis for deciding whether a location is safe enough for rest, instead of relying only on individual intuition, unclear assumptions, or hurried judgment.

---

## 2. Flow

**File:** [`src/decisions.mermaid.md`](./src/decisions.mermaid.md)

### Sequence of Steps

1.	**Search for a potential resting place.**
2.	**Check whether a resting place was found. If no candidate is available, return to Step 1 and keep searching. If a candidate is found, proceed.**
3.	**Check for immediate danger at the candidate location. If danger is present, discard the location and return to Step 1. If no danger is present, proceed.**
4.	**Assess the group's condition by evaluating fatigue level. Determine whether the group is stable, tired, or critical.**
5.	**Act on the fatigue assessment:**
   - If stable: conclude that there is no urgent need to rest, and go to Step 10 
   - If tired: note that rest should be considered, and proceed to Step 6.
   - If critical: note that rest is required if a viable site can be confirmed, and proceed to Step 6.
7.	**Evaluate whether the environment is usable. If it is not usable, return to Step 1. If it is usable, proceed.**
8.	**Evaluate the level of concealment the location offers. Classify it as good, partial, or poor.**
9.	**Act on the concealment assessment:**
   -	If good: take a Normal Rest, then go to Step 10.
   -	If partial: take a Cautious Rest, then go to Step 10.
   -	If poor: proceed to Step 9.
11.	**Check whether fatigue is critical (only reached when concealment is poor):**
   -	If yes: accept the exposure risk, take a Cautious Rest, and go to Step 10.
   -	If no: reject the location and return to Step 1.
12.	**Continue the journey.**

---

## 3. Wireframe

**File:** [`src/decisions.jpeg`](./src/decisions.jpeg)

---

## 4. Design Rationale

###How our design supports the intent and value from Assignment 1###
Our design supports the Shire Guide’s intent by helping the Fellowship make safer resting decisions in unfamiliar terrain. The flow structures this decision around immediate danger, group condition, environmental suitability, and concealment. This supports the value from Assignment 1 by reducing poor decisions that could slow the journey, weaken the group, or increase the risk of being discovered.

###What we deliberately left out###
We deliberately left out tactical combat support, long-distance communication, full route planning, and detailed resource analysis. These elements are outside the selected capability and would make the artifact too broad. We also left out technical implementation details, because this assignment focuses on decision structure and interface design.

###Which assumptions and constraints shaped our design###
Our design assumes that the Fellowship must make resting decisions quickly and under uncertainty. The main constraints are limited time, incomplete information, and the need for a simple mobile interface that is easy to understand at a glance. For that reason, the design focuses on a small number of key factors and a clear recommendation rather than a complex multi-screen process.
