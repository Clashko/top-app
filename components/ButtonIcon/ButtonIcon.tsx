import styles from "./ButtonIcon.module.css";
import { ButtonIconProps } from "./ButtonIcon.props";
import cn from "classnames";
import React from "react";
import UpIcon from "./up.svg";
import CloseIcon from "./close.svg";
import MenuIcon from "./menu.svg";

export const ButtonIcon = ({
	appearance,
	icon,
	className,
	...props
}: ButtonIconProps): JSX.Element => {
	const projectIcon = () => {
		switch (icon) {
			case "up":
				return <UpIcon />;
			case "close":
				return <CloseIcon />;
			case "menu":
				return <MenuIcon />;
		}
	};

	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == "primary",
				[styles.white]: appearance == "white",
			})}
			{...props}>
			{projectIcon()}
		</button>
	);
};
