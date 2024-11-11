import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const [done, setDone] = useState(true);
	const [active, setActive] = useState(true);
	const [first, setFirst] = useState(true);
	const [last, setLast] = useState(false);

	const handleAhead = () => {
		setActiveIndex(activeIndex + 1);
		steps.length - 1 === activeIndex + 1 ? setLast(true) : setLast(false);
		setFirst(false);
	};
	const handleBack = () => {
		setActiveIndex(activeIndex - 1);
		last ? setLast(false) : activeIndex === 1 ? setFirst(true) : setFirst(false);
	};
	const handleAgain = () => {
		setActiveIndex(0);
		setLast(false);
		setFirst(true);
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
											id === 0 ? setFirst(true) : setFirst(false);
											id === steps.length - 1
												? setLast(true)
												: setLast(false);
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
