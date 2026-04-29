import styles from "./Sidebar.module.scss"
import closeIcon from "@/assets/images/shared/icon-close.svg"
import Navigation from "@/components/Navigation";

type Props = {
	isOpen: boolean;
	setIsOpen: () => void;
}

const Sidebar = (props: Props) => {
	const {isOpen, setIsOpen} = props;

	return (
		<aside className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
			<button className={styles.closeButton} onClick={() => setIsOpen()}>
				<img src={closeIcon} alt="close icon"/>
			</button>
			<Navigation variant={"sidebar"}/>
		</aside>
	);
};

export default Sidebar;