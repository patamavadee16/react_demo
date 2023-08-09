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

// const bookCollectionRef = collection(db, "books");
// class BookDataService {
//   addBooks = (newBook) => {
//     return addDoc(bookCollectionRef, newBook);
//   };

//   updateBook = (id, updatedBook) => {
//     const bookDoc = doc(db, "books", id);
//     return updateDoc(bookDoc, updatedBook);
//   };

//   deleteBook = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return deleteDoc(bookDoc);
//   };

//   getAllBooks = () => {
//     return getDocs(bookCollectionRef);
//   };

//   getBook = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return getDoc(bookDoc);
//   };
// }
const subjectCollectionRef = collection(db, "Subjects");
class SubjectDataService {
  addSubjects = (newBook) => {
    return addDoc(subjectCollectionRef , newBook);
  };

  updateSubject = (id, updatedBook) => {
    const subjectDoc = doc(db, "Subjects", id);
    return updateDoc(subjectDoc, updatedBook);
  };

  deleteSubject = (id) => {
    const subjectDoc = doc(db, "Subjects", id);
    return deleteDoc(subjectDoc);
  };

  getAllSubjects = () => {
    return getDocs(subjectCollectionRef );
  };

  getSubject = (id) => {
    const subjectDoc = doc(db, "Subjects", id);
    return getDoc(subjectDoc);
  };
}
export default new SubjectDataService();