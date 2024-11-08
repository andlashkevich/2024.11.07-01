import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const [done, setDone] = useState(false);
	const [active, setActive] = useState(false);

	const handleClick = (event) => {
		setActive(!active);
		setActiveIndex(event.target.textContent - 1);
		// event.target.parentElement.styles += ' ' + styles.active;

	};

	const handleAhead = () => {
		setActiveIndex(activeIndex + 1);
	};
	const handleBack = () => {
		setActiveIndex(activeIndex - 1);
	};
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li
							className={
								active
									? styles['steps-item'] + ' ' + styles.active: styles['steps-item']
							}
						>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button
								onClick={handleClick}
								className={styles['steps-item-button']}
							>
								1
							</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							{steps[activeIndex].title}
						</li>
						<li
							className={
								active
									? styles['steps-item'] + ' ' + styles.active:
									styles['steps-item']
							}
						>
							<button
								onClick={handleClick}
								className={styles['steps-item-button']}
							>
								2
							</button>
							Шаг 2
						</li>
						<li
							className={
								active
									? styles['steps-item'] + ' ' + styles.active
									: styles['steps-item']
							}
						>
							<button
								onClick={handleClick}
								className={styles['steps-item-button']}
							>
								3
							</button>
							Шаг 3
						</li>
						<li
							className={
								active
									? styles['steps-item'] + ' ' + styles.active
									: styles['steps-item']
							}
						>
							<button
								onClick={handleClick}
								className={styles['steps-item-button']}
							>
								4
							</button>
							Шаг 4
						</li>
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={handleBack}
							className={styles.button}
							disabled={false}
						>
							Назад
						</button>
						<button onClick={handleAhead} className={styles.button}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
