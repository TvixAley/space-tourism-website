import styles from "./BurgerButton.module.scss"
import burgerIcon from "@/assets/images/shared/icon-hamburger.svg"

type Props = {
	className?: string,
	onClick?: () => void,
}

const BurgerButton = (props: Props) => {
	const {className, onClick} = props

	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			<img src={burgerIcon} alt="menu button"/>
		</button>
	);
};

export default BurgerButton;