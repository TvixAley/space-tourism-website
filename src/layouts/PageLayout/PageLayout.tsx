import React, {useState} from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface PageLayoutProps {
	children: React.ReactNode
}

const PageLayout = (props: PageLayoutProps) => {

	const {children} = props
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div>
			<Header setSidebarOpen={() => setSidebarOpen(true)}/>
			<Sidebar isOpen={sidebarOpen} setIsOpen={() => setSidebarOpen(false)} />

			{children}
		</div>
	);
};

export default PageLayout;