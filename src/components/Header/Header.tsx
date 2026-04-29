import styles from "./Header.module.scss"
import logoIcon from "@/assets/images/shared/logo.svg"
import Navigation from "@/components/Navigation";
import BurgerButton from "@/components/BurgerButton/BurgerButton.tsx";

interface HeaderProps {
	setSidebarOpen: () => void
}


const Header = (props: HeaderProps) => {

	const { setSidebarOpen } = props;

	return (
		<header className={styles.header}>
			<div className={styles.imageWrapper}>
				<img src={logoIcon} alt="logo" className={styles.image} width={48} height={48}/>
			</div>
			<div className={styles.navWrapper}>
				<Navigation variant={"header"}/>
			</div>
			<BurgerButton className={styles.burger} onClick={setSidebarOpen}/>
		</header>
	);
};

export default Header;