import { useState } from 'react';
import './App.css';

import FlipNumbers from 'react-flip-numbers';
import CounterUpdating from './CounterUpdating';

// import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
// import { db } from '../firebase/client';

// const fetchFirebase = async () => {
// 	const docRickRollCounter = doc(db, 'rickCounter', 'rickRollCounter');
// 	const docSnapCounter = await getDoc(docRickRollCounter);

// 	await setDoc(docRickRollCounter, {
// 		...docSnapCounter.data(),
// 		rollCounter: docSnapCounter.data().rollCounter + 1,
// 	});

// 	const existingVisitorId = localStorage.getItem('visitorId');

// 	if (!existingVisitorId) {
// 		const uuid = crypto.randomUUID();
// 		const newVisitorId = uuid;
// 		localStorage.setItem('visitorId', newVisitorId);

// 		await setDoc(doc(db, 'rickCounter', uuid), {
// 			uuid,
// 		});

// 		await setDoc(docRickRollCounter, {
// 			...docSnapCounter.data(),
// 			usersCounter: docSnapCounter.data().usersCounter + 1,
// 		});
// 	}
// };

// fetchFirebase();

function App() {
	const [rickCounter, setRickCounter] = useState(0);
	const [usersCounter, setUsersCounter] = useState(0);
	const [showVideo, setShowVideo] = useState(false);

	// onSnapshot(doc(db, 'rickCounter', 'rickRollCounter'), (doc) => {
	// 	setRickCounter(doc.data().rollCounter);
	// 	setUsersCounter(doc.data().usersCounter);
	// });

	return (
		<>
			{showVideo ? (
				<div className='new-body'>
					<CounterUpdating
						setRickCounter={setRickCounter}
						setUsersCounter={setUsersCounter}
					/>
					<div className='grid-container'>
						<div className='stat-clock'>
							<div className='container__visits'>
								<h4 className='visits__text-1'>TROLL</h4>
								<h4 className='visits__text-2'>COUNT</h4>
								<div className='visits'>
									<FlipNumbers
										height={58}
										width={24}
										color='black'
										background='none'
										play
										perspective={100}
										numbers={rickCounter.toString() ?? '0'}
										duration={0.3}
									/>
								</div>
								<img
									className='visits-count'
									src='blue-stat-clock.webp'
									alt=''
								/>
							</div>
							<div className='container__users'>
								<h4 className='users__text-1'>USERS</h4>
								<h4 className='users__text-2'>COUNT</h4>
								<div className='users'>
									<FlipNumbers
										height={58}
										width={24}
										color='black'
										background='none'
										play
										perspective={100}
										numbers={usersCounter.toString() ?? '0'}
										duration={0.3}
									/>
								</div>
								<img
									className='users-count'
									src='stat-clock.webp'
									alt=''
								/>
							</div>
						</div>
						<iframe
							className='player'
							width='560'
							height='315'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=cLHTy7vSMwOgnplV&autoplay=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
						<img
							className='doge'
							src='doge-computer.webp'
							alt=''
						/>
					</div>
				</div>
			) : (
				<div className='button-container'>
					<button
						className='outpulser'
						onClick={() => setShowVideo(true)}
					>
						<span className='test'>Click to go to my channel</span>
					</button>
				</div>
			)}
		</>
	);
}

export default App;
