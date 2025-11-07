const admin = require("firebase-admin");
require("dotenv").config();


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);

    const {  } = body;

    const docRef = db.collection("users").doc(username);
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: false }),
        };
    } 

   
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: ref.id || id }),
    };

} catch (err) {
    console.error("addUser error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message, stack: err.stack }),
    };
  }
};
