# Fedora

Personal Finance Ledger App

![TypeScript](https://img.shields.io/badge/TypeScript-6.x-007ACC.svg)
![React](https://img.shields.io/badge/React-19.x-61DAFB.svg)
![Expo](https://img.shields.io/badge/Expo-57.x-1C1E24.svg)

![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

## Setup

```sh
git clone https://github.com/expo-cbt/app.git
cd app
```

```sh
npm install
npx expo start

# npx expo start -c --web
```

## Build

#### EAS Development Build (Android)

```sh
eas build --profile development --platform android
npx expo start --dev-client
```

## Documentation

#### Modules

- Contacts
- Transactions
- - Categories
- - Wallets
- Projects
- Settings

#### Screens

- Auth
- - Log in
- - Forgot Password
- Home (Dashboard)
- Analytics
- \<Manage Modules\>

#### Entity Relationship Diagram

```mermaid
erDiagram
    BASE {
        string id PK
        int createdBy
        int updatedBy
        int deletedBy
    }

   TRANSACTION {        
        string receipt
        number amount
        string narration
        boolean isDraft
        boolean isIncognito
        boolean isTemp
        string entryDate
        
        %% Foreign Keys (FK)
        string contactId FK
        string[] categoryIds FK
        string walletId FK
        string projectId FK
    }

   CONTACT {
        string avatar
        string name
        string displayName
        string tel
        string email
        string notes
        boolean isFavorite
        boolean isTemp
    }

    TRANSACTION ||--o| CONTACT : "belongs to"
    TRANSACTION ||--o| PROJECT : "belongs to"
    TRANSACTION ||--o| WALLET : "paid to/from"
    TRANSACTION }o--o{ CATEGORY : "tagged as"
```

## Resources

- https://expo.dev/new/develop

<!--
# Settings

- Toggle Debug
- Toggle Incognito
- [Clear TempData]
 -->
