# dashboard-rpi
Display last submitted Urls/Youtube video's. Updates realtime using Cloud Firestore Database from Firebase.

## Project setup
```
npm install
firebase init
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Deploy to production
```
npm run deploy
```

Note: make sure a .firebaserc and .env file exists

.env should contain:
```
VUE_APP_FIREBASE_PROJECT=my_firebase_project_id
```
.firebaserc should contain:
```
{
  "projects": {
    "default": "my_firebase_project_id"
  }
}
```
### Firebase

Create a Cloud Firestore Database and create an urls collection.

![Cloud Firestore Database](https://raw.githubusercontent.com/TimvdEijnden/dashboard-rpi/master/cloud_firestore_example.png)

To allow read and write update the rules, note that this example allows EVERYONE to write to it!

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write;
    }
  }
}
```