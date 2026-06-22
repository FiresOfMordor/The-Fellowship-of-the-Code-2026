flowchart TD
    A([Neuer Abschnitt steht bevor]) --> B[Quiz starten\nAlle Mitglieder antworten]
    B --> C{Level bestanden?}

    C -- Ja --> D[Abschnitt freigeschalten]
    D --> E([Reise geht weiter])

    C -- Nein --> H[Schwache Mitglieder\nWiederholungsfragen & Hinweis]
    H -- Erneut versuchen (bis zu 3x) --> B
    H -- 3 Versuche aufgebraucht --> J[Warnung: unvorbereitet]
    J --> E

    style A fill:#E1F5EE,stroke:#0F6E56,color:#085041
    style E fill:#E1F5EE,stroke:#0F6E56,color:#085041
    style D fill:#E1F5EE,stroke:#0F6E56,color:#085041
    style B fill:#EEEDFE,stroke:#534AB7,color:#26215C
    style H fill:#FAECE7,stroke:#993C1D,color:#4A1B0C
    style J fill:#FCEBEB,stroke:#A32D2D,color:#501313
    style C fill:#FAEEDA,stroke:#854F0B,color:#412402
