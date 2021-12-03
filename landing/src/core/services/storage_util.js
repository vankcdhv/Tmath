import {initializeApp} from "firebase/app";
import {getStorage, ref, up} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCQb8MAkt0v89KXiB3Qe508WZPFEBQXXGA",
    authDomain: "tmathlanding.firebaseapp.com",
    projectId: "tmathlanding",
    storageBucket: "tmathlanding.appspot.com",
    messagingSenderId: "712779444986",
    appId: "1:712779444986:web:a8cf3ce7127dca004ecf43",
    measurementId: "G-8K7DXTFFQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const updateImage = async (path, url) => {
    const storageRef = ref(storage, path)


}


