import React from "react";

interface PageLayoutProps {
	children: React.ReactNode
}

const PageLayout = (props: PageLayoutProps) => {

	const {children} = props

	return (
		<div>
			{children}
		</div>
	);
};

export default PageLayout;