import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/client';
import { useEffect } from 'react';

const CounterUpdating = ({ setRickCounter, setUsersCounter }) => {
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const docRickRollCounter = doc(db, 'rickCounter', 'rickRollCounter');
	// 		const docSnapCounter = await getDoc(docRickRollCounter);
	// 		const existingVisitorId = localStorage.getItem('visitorId');

	// 		await setDoc(docRickRollCounter, {
	// 			...docSnapCounter.data(),
	// 			rollCounter: docSnapCounter.data().rollCounter + 1,
	// 		});

	// 		if (!existingVisitorId) {
	// 			const uuid = crypto.randomUUID();
	// 			const newVisitorId = uuid;
	// 			localStorage.setItem('visitorId', newVisitorId);

	// 			await setDoc(doc(db, 'rickCounter', uuid), {
	// 				uuid,
	// 			});

	// 			await setDoc(docRickRollCounter, {
	// 				...docSnapCounter.data(),
	// 				usersCounter: docSnapCounter.data().usersCounter + 1,
	// 			});
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	// onSnapshot(doc(db, 'rickCounter', 'rickRollCounter'), (doc) => {
	// 	setRickCounter(doc.data().rollCounter);
	// 	setUsersCounter(doc.data().usersCounter);
	// });

	return;
};

export default CounterUpdating;
