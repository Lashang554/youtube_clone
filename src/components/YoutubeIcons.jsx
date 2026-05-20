function IconBase({ children, className = "h-6 w-6", fill = "none", ...props }) {
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			fill={fill}
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.8"
			aria-hidden="true"
			{...props}
		>
			{children}
		</svg>
	);
}

export function MenuIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M4 7h16" />
			<path d="M4 12h16" />
			<path d="M4 17h16" />
		</IconBase>
	);
}

export function YouTubeLogo({ className = "h-7 w-auto" }) {
	return (
		<svg viewBox="0 0 110 24" className={className} aria-label="YouTube">
			<path
				fill="#ff0033"
				d="M22.5 4.2a4 4 0 0 0-2.8-2.8C17.2.8 7.2.8 7.2.8s-10 0-12.5.6a4 4 0 0 0-2.8 2.8A41 41 0 0 0-8.7 12a41 41 0 0 0 .6 7.8 4 4 0 0 0 2.8 2.8c2.5.6 12.5.6 12.5.6s10 0 12.5-.6a4 4 0 0 0 2.8-2.8A41 41 0 0 0 23.1 12a41 41 0 0 0-.6-7.8Z"
				transform="translate(8.7)"
			/>
			<path fill="#fff" d="m8.7 16.9 8.3-4.9-8.3-4.9v9.8Z" />
			<path
				fill="currentColor"
				d="M38.9 7.1 35.7 18h-2.5l-3.2-10.9h2.3l2.2 8.1 2.2-8.1h2.2Zm7.2 3.2V18h-2l-.2-.9c-.6.7-1.3 1-2.2 1-1.6 0-2.4-1-2.4-3v-4.8h2.2V15c0 .8.3 1.2.9 1.2.5 0 1-.3 1.4-.8v-5.1h2.3Zm6.1-.2c1.1 0 2 .4 2.6 1.1.6.7.9 1.7.9 2.9v.3c0 1.2-.3 2.1-.9 2.8-.6.7-1.5 1-2.6 1s-2-.3-2.6-1c-.6-.7-.9-1.6-.9-2.8v-.3c0-1.2.3-2.2.9-2.9.6-.7 1.5-1.1 2.6-1.1Zm0 1.8c-.9 0-1.3.7-1.3 2.2v.3c0 1.4.4 2.1 1.3 2.1.8 0 1.3-.7 1.3-2.1v-.3c0-1.5-.5-2.2-1.3-2.2Zm8.7-4.8V18h-2.2V8.9h-2.4V7.1h7v1.8h-2.4Zm9.8 3.2V18h-2l-.2-.9c-.6.7-1.3 1-2.2 1-1.6 0-2.4-1-2.4-3v-4.8h2.2V15c0 .8.3 1.2.9 1.2.5 0 1-.3 1.4-.8v-5.1h2.3Zm5.3-.2c.9 0 1.6.4 2.1 1.1.5.7.8 1.7.8 2.9v.3c0 1.2-.3 2.2-.8 2.9-.5.6-1.2 1-2.1 1-.8 0-1.4-.3-1.9-.9L74 18h-1.9V6.6h2.2v4.1c.5-.4 1.1-.6 1.7-.6Zm-.7 1.8c-.4 0-.7.1-1 .4v3.6c.3.3.7.5 1.1.5.8 0 1.2-.7 1.2-2.1v-.3c0-1.4-.5-2.1-1.3-2.1Zm8.5-1.8c1.1 0 1.9.3 2.5 1 .6.7.9 1.6.9 2.8v1H82c.1 1 .7 1.5 1.7 1.5.8 0 1.5-.2 2.2-.7l.8 1.4c-.8.7-1.9 1-3.1 1s-2.2-.3-2.9-1c-.7-.7-1-1.6-1-2.8V14c0-1.2.4-2.1 1.1-2.8.7-.7 1.7-1.1 3-1.1Zm-.1 1.7c-.9 0-1.4.5-1.5 1.5h3c0-1-.5-1.5-1.5-1.5Z"
			/>
		</svg>
	);
}

export function SearchIcon(props) {
	return (
		<IconBase {...props}>
			<circle cx="11" cy="11" r="6.5" />
			<path d="m16 16 4 4" />
		</IconBase>
	);
}

export function MicIcon(props) {
	return (
		<IconBase {...props}>
			<rect x="9" y="3" width="6" height="11" rx="3" />
			<path d="M5 11a7 7 0 0 0 14 0" />
			<path d="M12 18v3" />
		</IconBase>
	);
}

export function CreateIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h8A2.5 2.5 0 0 1 17 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 4 16.5v-9Z" />
			<path d="m17 10 4-2.5v9L17 14" />
			<path d="M10.5 9v6" />
			<path d="M7.5 12h6" />
		</IconBase>
	);
}

export function BellIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
			<path d="M10 20a2 2 0 0 0 4 0" />
		</IconBase>
	);
}

export function HomeIcon(props) {
	return (
		<IconBase {...props}>
			<path d="m3 10 9-7 9 7" />
			<path d="M5 9.5V20h5v-6h4v6h5V9.5" />
		</IconBase>
	);
}

export function ShortsIcon(props) {
	return (
		<IconBase {...props}>
			<path d="m10.4 3.2 5.8 3.3a2.2 2.2 0 0 1 0 3.8l-2.8 1.6 2.8 1.6a2.2 2.2 0 0 1 0 3.8l-5.8 3.3A2.2 2.2 0 0 1 7 18.7l2.2-1.3-1.4-.8a2.2 2.2 0 0 1 0-3.8l2.8-1.6-2.8-1.6a2.2 2.2 0 0 1 0-3.8l2.2-1.3a2.2 2.2 0 0 1 .4-.3Z" />
			<path d="m11 9 4 2.3-4 2.3V9Z" fill="currentColor" stroke="none" />
		</IconBase>
	);
}

export function SubscriptionsIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M5 7h14" />
			<rect x="4" y="10" width="16" height="10" rx="2" />
			<path d="m10 13.3 4.5 2.7-4.5 2.7v-5.4Z" fill="currentColor" stroke="none" />
		</IconBase>
	);
}

export function UserIcon(props) {
	return (
		<IconBase {...props}>
			<circle cx="12" cy="8" r="4" />
			<path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
		</IconBase>
	);
}

export function LikeIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M7 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3" />
			<path d="M7 11 11 3a2.2 2.2 0 0 1 2.2 2.7L12.5 9H19a2 2 0 0 1 2 2.3l-1.2 7A3.2 3.2 0 0 1 16.6 21H7V11Z" />
		</IconBase>
	);
}

export function ShareIcon(props) {
	return (
		<IconBase {...props}>
			<path d="m16 6 5 5-5 5" />
			<path d="M21 11H9a6 6 0 0 0-6 6v1" />
		</IconBase>
	);
}

export function SaveIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-4-7 4V5Z" />
		</IconBase>
	);
}

export function MoreVerticalIcon(props) {
	return (
		<IconBase {...props} fill="currentColor" stroke="none">
			<circle cx="12" cy="5" r="1.6" />
			<circle cx="12" cy="12" r="1.6" />
			<circle cx="12" cy="19" r="1.6" />
		</IconBase>
	);
}

export function TuneIcon(props) {
	return (
		<IconBase {...props}>
			<path d="M4 7h10" />
			<path d="M18 7h2" />
			<circle cx="16" cy="7" r="2" />
			<path d="M4 17h2" />
			<path d="M10 17h10" />
			<circle cx="8" cy="17" r="2" />
		</IconBase>
	);
}
