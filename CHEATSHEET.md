# Cheatsheet

## Setup

```sh
$ npx create-expo-app app
Need to install the following packages:
create-expo-app@4.0.0
Ok to proceed? (y) y
√ Select an Expo SDK version: » Latest (SDK 57)
Creating app using the default template.

Tip:
  • npx create-expo-app --template  to pick from other templates
  • npx create-expo-app --example   to explore https://github.com/expo/examples


✔ Downloaded and extracted project files.
> npm install
⠧

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

cd app

npx eas-cli@latest login

npx eas-cli@latest init
√ Which account should own this project? » 2gbeh
√ Would you like to create a project for @2gbeh/app? ... yes
✔ Created @2gbeh/app: https://expo.dev/accounts/2gbeh/projects/app
√ Project successfully linked (ID: fdb0e40a-165c-420b-adad-ee491457736f) (modified app.json)

npx expo start
```


## EAS Dev Build

```sh
npx expo install expo-dev-client
eas build --profile development --platform android

- This uploads your project to Expo's servers and builds the APK there
- Once done, you'll get a QR code/download link — scan it or download directly on your phone to install the APK

npx expo start --dev-client

- Open the installed dev client app on your phone and connect to the dev server (scan QR or enter URL manually)
- If eas.json doesn't have a "development" profile yet, run this first to set it up:

eas build:configure

You only need to run eas build again if you:
- Add/change a native module (e.g., new native dependency)
- Change native config (app permissions, icons, etc.)
- Want to generate a new distributable build (production/testing with others)
```
