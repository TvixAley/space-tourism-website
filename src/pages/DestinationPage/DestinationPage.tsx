import styles from "./DestinationPage.module.scss"
import PlanetSwitcher from "@/components/PlanetSwitcher";

const DestinationPage = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<div className={styles.titleContainer}>
					<b className={`${styles.pageNumber} text-preset-5`}>01</b>
					<h2 className={`${styles.title} text-preset-5`}>PICK YOUR DESTINATION</h2>
				</div>
				<PlanetSwitcher />
			</div>
		</section>
	);
};

export default DestinationPage;