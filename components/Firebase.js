import * as Firebase from 'firebase'; // Do not import original package elsewhere
import config from 'expo-config'; // Our credentials should only stay at local repo

// We should use our initialized Firebase object. 
Firebase.initializeApp(config.FIREBASE);

export default Firebase;