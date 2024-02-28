import { useState } from 'react';
import './App.css';

import FlipNumbers from 'react-flip-numbers';
import CounterUpdating from './CounterUpdating';

function App() {
	const [rickCounter, setRickCounter] = useState(0);
	const [usersCounter, setUsersCounter] = useState(0);

	return (
		<>
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
		</>
	);
}

export default App;
