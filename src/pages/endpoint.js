import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./data";

async function getContent(section, storeIn) {

const docRef = doc(db, "websiteData", section);

const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {

    const data = docSnap.data()
    storeIn(data)

  } else {
    console.log("No such document!");
  }
}

async function updateContent(section, newData) {
  const docRef = doc(db, "websiteData", section);
  try {
    await updateDoc(docRef, newData);
    console.log("Document updated");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export { getContent, updateContent }