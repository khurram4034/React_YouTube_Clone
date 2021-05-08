import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCD9Y35awN5i7ZJFuOBe4YFkLO1K5j5NZc",
    authDomain: "clone-3-3d2e9.firebaseapp.com",
    projectId: "clone-3-3d2e9",
    storageBucket: "clone-3-3d2e9.appspot.com",
    messagingSenderId: "408490025029",
    appId: "1:408490025029:web:62f36bd00fc68d235cc32c"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
