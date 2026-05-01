import styles from "./PlanetSwitcher.module.scss"
import data from "@/data"
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";

const images = import.meta.glob<{ default: string }>(
	"@/assets/images/destination/*.{png,webp}",
	{ eager: true }
);

function getPlanetImages(name: string) {
	const key = name.toLowerCase();

	return {
		png: images[`/src/assets/images/destination/image-${key}.png`]?.default,
		webp: images[`/src/assets/images/destination/image-${key}.webp`]?.default,
	};
}

const PlanetSwitcher = () => {

	const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]);

	const planetImages = getPlanetImages(selectedPlanet.name);

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<div className={styles.switcher}>
			<div className={styles.imageWrapper}>
				<AnimatePresence mode="wait">
					<motion.picture
						key={selectedPlanet.name}
						initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{ opacity: 0, rotate: 15, scale: 0.8 }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
					>
						<source srcSet={planetImages.webp} type="image/webp" />
						<img src={planetImages.png} alt={selectedPlanet.name} className={styles.image} />
					</motion.picture>
				</AnimatePresence>
			</div>
			<div className={styles.destination}>
				<div className={styles.destinationWrapper}>
					<ul className={styles.tabs}>
						{data.destinations.map((planet) => (
							<li key={planet.name}
									className={`${styles.tab} ${planet.name == selectedPlanet.name ? styles.active : ""}`}
									onClick={() => setSelectedPlanet(planet)}
							>
								{planet.name.toUpperCase()}
								{planet.name == selectedPlanet.name && (
									<motion.div
										layoutId={"planetSwitcher"}
										className={styles.slider}
										transition={{ type: "spring", stiffness: 1000, damping: 100 }}
									/>
								)}
							</li>
						))}
					</ul>
					<AnimatePresence mode="wait">
						<motion.div
							layout={"y"}
							className={styles.animatedWrapper}
							key={selectedPlanet.name}
							variants={container}
							initial="hidden"
							animate="show"
							exit="hidden"
						>
								<motion.h3 variants={item} className={styles.title}>
									{selectedPlanet.name.toUpperCase()}
								</motion.h3>
								<motion.p variants={item} className={styles.description}>
									{selectedPlanet.description}
								</motion.p>

							<motion.hr variants={item} className={styles.line} />

							<motion.div variants={item} className={styles.statistics}>
								<div className={styles.column}>
									<div className={styles.statisticsLabel}>AVG. DISTANCE</div>
									<div className={styles.statisticsValue}>
										{selectedPlanet.distance.toUpperCase()}
									</div>
								</div>

								<div className={styles.column}>
									<div className={styles.statisticsLabel}>EST. TRAVEL TIME</div>
									<div className={styles.statisticsValue}>
										{selectedPlanet.travel.toUpperCase()}
									</div>
								</div>
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default PlanetSwitcher;