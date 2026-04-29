import styles from "./BigButton.module.scss"
import React, {useState} from "react";

interface Props {
	children?: React.ReactNode,
	onClick: () => void,
}

const BigButton = (props: Props) => {
	const { children, onClick} = props
	const [clicked, setClicked] = useState<boolean>(false)

	const animateOnClick = () => {
		onClick()
		setClicked(true)
	}

	return (
		<button className={`${styles.button} ${clicked ? styles.clicked : ''}`} onClick={() => animateOnClick()}>
			{children}
		</button>
	);
};

export default BigButton;