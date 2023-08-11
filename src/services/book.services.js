import { db } from "../firebase-config.js";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const bookCollectionRef = collection(db, "books");
class BookDataService {
  addSubjects = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateSubject = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteSubject = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getAllSubjects = () => {
    return getDocs(bookCollectionRef);
  };

  getSubject = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

// const bookCollectionRef = collection(db, "books");
// class BookDataService {
//   addSubjects = (newBook) => {
//     return addDoc(bookCollectionRef, newBook);
//   };

//   updateSubject = (id, updatedBook) => {
//     const bookDoc = doc(db, "books", id);
//     return updateDoc(bookDoc, updatedBook);
//   };

//   deleteSubject = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return deleteDoc(bookDoc);
//   };

//   getAllSubjects = () => {
//     return getDocs(bookCollectionRef);
//   };

//   getSubject = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return getDoc(bookDoc);
//   };
// }
// const subjectCollectionRef = collection(db, "books");
// class SubjectDataService {
//   addSubjects = (newBook) => {
//     return addDoc(subjectCollectionRef , newBook);
//   };

//   updateSubject = (id, updatedBook) => {
//     const subjectDoc = doc(db, "Subjects", id);
//     return updateDoc(subjectDoc, updatedBook);
//   };

//   deleteSubject = (id) => {
//     const subjectDoc = doc(db, "Subjects", id);
//     return deleteDoc(subjectDoc);
//   };

//   getAllSubjects = () => {
//     return getDocs(subjectCollectionRef );
//   };

//   getSubject = (id) => {
//     const subjectDoc = doc(db, "Subjects", id);
//     return getDoc(subjectDoc);
//   };
// }
export default new BookDataService();