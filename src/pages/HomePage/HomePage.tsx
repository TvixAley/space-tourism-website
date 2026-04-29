import styles from "./HomePage.module.scss";
import BigButton from "@/components/BigButton";
import {useNavigate} from "react-router";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<section className={styles.container}>
			<div className={styles.hero}>
				<div className={styles.textContainer}>
					<h2 className={styles.title}>SO, YOU WANT TO TRAVEL TO</h2>
					<div className={styles.bigTitle}>SPACE</div>
					<p className={styles.paragraph}>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
						experience!
					</p>
				</div>
				<div className={styles.buttonContainer}>
					<BigButton onClick={() => navigate("/destination")}>EXPLORE</BigButton>
				</div>
			</div>
		</section>
	);
};

export default HomePage;