import { motion } from "motion/react";
import styles from "./Navigation.module.scss"
import {NavLink} from "react-router";

type NavProps = {
	variant: "header" | "sidebar"
}

const Navigation = (props: NavProps) => {
	const {variant} = props;

	const links = [
		{ id: "00", label: "HOME", path: "/home" },
		{ id: "01", label: "DESTINATION", path: "/destination" },
		{ id: "02", label: "CREW", path: "/crew" },
		{ id: "03", label: "TECHNOLOGY", path: "/technology" }
	]

	return (
		<nav className={styles[variant]}>
			{links.map(link => (
				<NavLink
					key={link.path}
					to={link.path}
					className={({ isActive }) =>
						`${styles.link} ${isActive ? styles.active : ""}`
					}
				>
					{({ isActive }) => (
						<>
							<b>{link.id}</b>
							<div>{link.label}</div>

							{isActive && (
								<motion.div
									layoutId={variant === "header" ? "slider-horizontal" : "slider-vertical"}
									className={styles.slider}
									transition={{ type: "spring", stiffness: 1000, damping: 100 }}
								/>
							)}
						</>
					)}
				</NavLink>
			))}
		</nav>
	);
};

export default Navigation;