import { FC } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
	children: React.ReactNode;
}

const Portal: FC<Props> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector("#myportal")!)
		: null;
};

export default Portal;
