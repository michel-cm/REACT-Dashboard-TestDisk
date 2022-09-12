import "firebase/compat/firestore";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { database, firebase } from "./firebase";

const IDDOCCONFIGGIRO = "RR3QwMBMngLk66XUkNEX";

export const Api = {
  getAllQuestions: async () => {
    console.log("req: getAllQuestions()");

    const list = [];

    let results = await getDocs(collection(database, "questions"));
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

  addNewQuestion: async (question) => {
    await database.collection("questions").doc().set(
      {
        title: question.title,
        a: question.a,
        b: question.b,
        c: question.c,
        d: question.d,
        active: question.active,
      },
      { merge: true }
    );
  },

  updateQuestion: async (question, id) => {
    const questionRef = doc(database, "questions", id);
    await updateDoc(questionRef, {
      title: question.title,
      a: question.a,
      b: question.b,
      c: question.c,
      d: question.d,
      active: question.active,
    });
  },

  disableQuestion: async (id) => {
    await database.collection("questions").doc(id).set(
      {
        active: false,
      },
      { merge: true }
    );
  },

  deleteQuestion: async (id) => {
    await deleteDoc(doc(database, "questions", id)).catch(() => {
      alert("eroor");
    });
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
        timer: data.timer,
        timerUsed : data.timerUsed,
        tempoEnd: data.tempoEnd,
        totalCadaLetra: [data.totalCadaLetra],
        valoresQuestionsUser: data.valoresQuestionsUser,
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
        emailRecebimentoTeste: data.emailRecebimentoTeste,
        subject: data.subject,
      });
    });
    return list;
  },

  updateConfig: async (timer, msg, subject,emailRecebimentoTeste ) => {
    timer = timer * 60;
    const testRef = doc(database, "configuracaoGiro", IDDOCCONFIGGIRO);
    await updateDoc(testRef, {
      timerTeste: timer,
      emailRecebimentoTeste: emailRecebimentoTeste,
      mensagemEmail: msg,
      subject: subject,
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
      alert("eroor");
    });
  },

  addNewCandidateForTest: async (email, listQuestions, timer) => {
    const created = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
    timer = timer * 60;
    await database.collection("testes").doc(email).set(
      {
        timer: timer,
        timerUsed: 0,
        name: "",
        email: email,
        currentQuestion: 0,
        questionsList: listQuestions,
        qtdQuestions: listQuestions.length,
        valoresQuestionsUser: [],
        totalCadaLetra: [],
        idUser: "",
        finalizado: false,
        tempoExcedido: false,
        predominancia: "",
        dateCreatedCandidate: created,
        favorite: false,
      },
      { merge: true }
    );
  },
};
