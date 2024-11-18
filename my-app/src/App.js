import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const [done, setDone] = useState(true);
	const [active, setActive] = useState(true);
	const first = activeIndex === 0;
	const last = activeIndex === steps.length - 1;

	const handleAhead = () => {
		setActiveIndex(activeIndex + 1);
	};
	const handleBack = () => {
		setActiveIndex(activeIndex - 1);
	};
	const handleAgain = () => {
		setActiveIndex(0);
	};
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((it, id) => {
							return (
								<li
									key={String(Date.now()) + String(Math.random())}
									className={
										done && id <= activeIndex
											? active && id === activeIndex
												? styles['steps-item'] +
													' ' +
													styles.done +
													' ' +
													styles.active
												: styles['steps-item'] + ' ' + styles.done
											: styles['steps-item']
									}
								>
									<button
										onClick={() => {
											setDone(true);
											setActive(true);
											setActiveIndex(id);
										}}
										className={styles['steps-item-button']}
									>
										{Number(it.id)}
									</button>
									{it.title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={handleBack}
							className={styles.button}
							disabled={first}
						>
							Назад
						</button>
						<button
							onClick={last ? handleAgain : handleAhead}
							className={styles.button}
						>
							{last ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
