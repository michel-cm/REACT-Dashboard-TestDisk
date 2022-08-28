import "firebase/compat/firestore";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import { database } from "../services/firebase";

export const Api = {
  getAllQuestions: async () => {
    console.log("req: getAllQuestions()");

    const list = []
    
    let results = await database.collection("questions").get();
    results.forEach((result) => {
      let data = result.data();
      list.push({
        title: data.title,
        a: data.a,
        b: data.b,
        c: data.c,
        d: data.d,
      });
    });
    return list;
  },

};
