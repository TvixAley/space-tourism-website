import styles from "./PageLayout.module.scss";
import {useLocation} from "react-router";
import Header from "@/components/Header";
import {AnimatePresence, motion} from "motion/react";
import Sidebar from "@/components/Sidebar";
import React, {useState} from "react";

interface PageLayoutProps {
	children: React.ReactNode;
}

function PageLayout(props: PageLayoutProps) {
	const {children} = props;
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [lockOverflow, setLockOverflow] = useState(true);


	return (
		<div className={styles.layout} style={{ overflow: lockOverflow ? "clip" : "auto" }}>
			<Header setSidebarOpen={() => setSidebarOpen(true)}/>
			<Sidebar isOpen={sidebarOpen} setIsOpen={() => setSidebarOpen(false)} />

			<AnimatePresence mode="wait">
				<motion.div
					key={location.pathname}
					className={`${styles.bg} ${styles[location.pathname.slice(1)]}`}
					initial={{opacity: 0, scale: 1.05}}
					animate={{opacity: 1, scale: 1}}
					exit={{opacity: 0, scale: 1.05}}
					transition={{duration: 0.7, ease: "easeOut"}}
				/>
			</AnimatePresence>


			<div className={styles.pageWrapper}>
				<AnimatePresence mode="wait">
					<motion.main
						className={styles.main}
						key={location.pathname}
						initial={{opacity: 0, y: 100}}
						animate={{opacity: 1, y: 0, transition: {duration: 0.7, delay: 0.7, ease: "easeOut"}}}
						exit={{opacity: 0, transition: {duration: 0.7, delay: 0, ease: "easeOut"}}}
						onAnimationStart={() => setLockOverflow(true)}
						onAnimationComplete={() => setLockOverflow(false)}
					>
						{children}
					</motion.main>
				</AnimatePresence>
			</div>


		</div>
	)
}

export default PageLayout;