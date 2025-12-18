# week-plannner
# week-plannner
 
## Getting Started
 
Follow these steps to set up and deploy the project:
 
### 1. Unzip the Project
 
Unzip the downloaded project archive to your desired location.
 
### 2. Change Directory
 
```Command Prompt
cd path\to\project
```
 
### 3. Install Dependencies
 
```Command Prompt
npm install
```
 
### 4. Login to Firebase
 
```Command Prompt
npx firebase login
```
 
### 5. Initialize Firebase in This Folder
 
```Command Prompt
npx firebase init
```
 
During prompts:
- **Select features:** Firestore
- **Use an existing project**
- **Choose:** <EXISTING PROJECT NAME>
- **Firestore rules file:** Press Enter
- **Firestore indexes file:** Press Enter
- **If asked to overwrite:** NO
 
This creates:
- `firebase.json`
- `.firebaserc`
 
### 6. Select the Firebase Project
 
```Command Prompt
npx firebase use <EXISTING PROJECT ID>
```
 
### 7. Deploy Firestore Indexes
 
```Command Prompt
npx firebase deploy --only firestore:indexes
```
 
Indexes are created automatically.
 
### 8. Wait for Index Creation
 
Go to **Firebase Console → Firestore → Indexes**  
Wait until the status changes from **Building** to **Ready**.
 
### 9. Deploy the Rest of the Project
 
```Command Prompt
npx firebase deploy
```
 
---
 
**Your project is now set up and deployed!**