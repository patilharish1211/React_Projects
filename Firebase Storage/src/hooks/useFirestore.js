import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const useFirestore = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(items);
  };

  const addData = async (newData) => {
    await addDoc(collection(db, "users"), newData);
    fetchData();
  };

  const updateData = async (id, updatedData) => {
    await updateDoc(doc(db, "users", id), updatedData);
    fetchData();
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, addData, updateData, deleteData };
};

export default useFirestore;
 