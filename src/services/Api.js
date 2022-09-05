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

import { database, firebase } from "./firebase";

const IDDOCCONFIGGIRO = "RR3QwMBMngLk66XUkNEX";

export const Api = {
  getAllQuestions: async () => {
    console.log("req: getAllQuestions()");

    const list = [];

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

  getAllCandidatesTests: async () => {
    console.log("req: getAllCandidatesTests()");
    const candidates = [];

    let testes = await database.collection("testes").get();
    testes.forEach((result) => {
      let data = result.data();

      candidates.push({
        name: data.nome,
        email: data.email,
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
    })
    },

};
