# Decisions Flowchart

This file contains the Mermaid flowchart for **Artifact II: Decisions – Camp Suitability Check**.

```mermaid

flowchart TB
    A["Search for a potential resting place"] --> B{"Resting place found?"}
    B -- No --> A
    B -- Yes --> C["Check immediate danger"]
    C -- Danger present --> A
    C -- No danger --> D["Assess group condition"]
    D --> D1{"Fatigue level?"}
    D1 -- Stable --> E1["No urgent need to rest"]
    D1 -- Tired --> E2["Rest should be considered"]
    D1 -- Critical --> E3["Rest is required if viable"]
    E1 --> O["Continue Journey"]
    E2 --> G["Evaluate environment suitability"]
    E3 --> G
    G --> H{"Environment usable?"}
    H -- No --> A
    H -- Yes --> I["Evaluate concealment"]
    I --> J{"Concealment level?"}
    J -- Good --> K["Normal Rest"]
    J -- Partial --> L["Cautious Rest"]
    J -- Poor --> M{"Fatigue critical?"}
    M -- Yes --> L
    M -- No --> A
    K --> O
    L --> O
