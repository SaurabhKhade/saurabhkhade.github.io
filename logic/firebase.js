let firebaseConfig = {
    apiKey: "XXXX XXXX XXXX",
    authDomain: "XXXX XXXX XXXX",
    projectId: "XXXX XXXX XXXX",
    storageBucket: "XXXX XXXX XXXX",
    messagingSenderId: "XXXX XXXX XXXX",
    appId: "XXXX XXXX XXXX"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

async function addData(name, email, subject, message) {
    let res = await db.collection("contact").doc(email).set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
    return res;
}