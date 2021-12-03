import {initializeApp} from "firebase/app";
import {getFirestore, collection, doc, getDocs, addDoc, setDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_NOT_FIREBASE_API_KEY ,
    authDomain: "tmathlanding.firebaseapp.com",
    projectId: "tmathlanding",
    storageBucket: "tmathlanding.appspot.com",
    messagingSenderId: "712779444986",
    appId: "1:712779444986:web:a8cf3ce7127dca004ecf43",
    measurementId: "G-8K7DXTFFQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbContext = getFirestore(app);
const getCollections = async (collectionName) => {
    const collectionRef = collection(dbContext, collectionName);
    const docsRef = await getDocs(collectionRef);
    const response = docsRef.docs.map(doc => {
        const data = doc.data()
        return {
            ...data,
            id: doc.id,
        }
    })
    return response;
}

const addDocument = async (docData, collectionName) => {
    const collectionRef = collection(dbContext, collectionName);
    const docRef = await addDoc(collectionRef, docData);
    console.log("Document added", docRef);
    return docRef;
}

const setDocument = async (docData, collectionName, docId) => {
    const docRef = doc(dbContext, collectionName, docId);
    await setDoc(docRef, docData);
    console.log("Document added", docRef);
}

const deleteDocument = async (docId, collectionName) => {
    const docRef = doc(dbContext, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted", docRef);
}

export {getCollections, addDocument, setDocument, deleteDocument}

