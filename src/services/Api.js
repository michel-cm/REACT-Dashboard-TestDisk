import { deleteUser, getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
  deleteDoc,
} from "firebase/firestore";

import { database, firebase } from "./firebase";

const IDDOCCONFIGGIRO = "RR3QwMBMngLk66XUkNEX";

const auth = getAuth();
const user = auth.currentUser;

export const Api = {

  getAllQuestions: async () => {
    console.log("req: getAllQuestions()");

    const list = [];

    let results = await getDocs(collection(database, 'questions'));
    results.forEach((result) => {
      let data = result.data();
      list.push({
        id: result.id,
        title: data.title,
        a: data.a,
        b: data.b,
        c: data.c,
        d: data.d,
        active: data.active,
      });
    });
    return list;
  },

  
  addNewQuestion: async(question) => {
    await database
    .collection("questions")
    .doc()
    .set(
      { 
        title: question.title,
        a : question.a,
        b: question.b,
        c: question.c,
        d: question.d,
        active: question.active
      },
      { merge: true }
    );
  },

  updateQuestion: async (question, id) => {    
    console.log('boraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    const questionRef = doc(database, "questions", id);
    await updateDoc(questionRef, {
      title: question.title,
      a : question.a,
      b: question.b,
      c: question.c,
      d: question.d,
      active: question.active
    });
  },
  
  disableQuestion: async(id) => {
    await database
    .collection("questions")
    .doc(id)
    .set(
      {        
        active: false
      },
      { merge: true }
    );
  },

  deleteQuestion: async (id) => {
    await deleteDoc(doc(database, "questions", id)).catch(() => {
      alert('eroor')
    })
  },

  getAllCandidatesTests: async () => {
    console.log("req: getAllCandidatesTests()");
    const candidates = [];

    let testes = await database.collection("testes").get();
    testes.forEach((result) => {
      let data = result.data();

      candidates.push({
        name: data.name,
        email: data.email,
        favorite: data.favorite,
        finalizado: data.finalizado,
        idUser: data.idUser,
        predominancia: data.predominancia,
        qtdQuestionsc: data.qtdQuestions,
        questionsList: [data.questionsList],
        tempoExcedido: data.tempoExcedido,
        tempoStart: data.tempoStart,
        tempoEnd: data.tempoEnd,
        totalCadaLetra: [data.totalCadaLetra],
        valoresQuestionsUser: [data.valoresQuestionsUser],
      });
    });

    return candidates;
  },

  getConfigs: async () => {
    console.log("req: getConfigs()");

    const list = [];

    let results = await database.collection("configuracaoGiro").get();
    results.forEach((result) => {
      let data = result.data();
      list.push({
        timer: data.timerTeste,
        msg: data.mensagemEmail,
      });
    });
    return list;
  },

  updateConfig: async (timer, msg) => {
    timer = timer * 60;
    const testRef = doc(database, "configuracaoGiro", IDDOCCONFIGGIRO);
    await updateDoc(testRef, {
      timerTeste: timer,
      mensagemEmail: msg,
    });
  },

  updateFavoriteCandidate: async (idUser, value) => {
    const candidateRef = doc(database, "testes", idUser);
    await updateDoc(candidateRef, {
      favorite: value,
    });
  },

  deletUser: async (id) => {
    await deleteDoc(doc(database, "testes", id)).catch(() => {
      alert('eroor')
    })
  },

};
