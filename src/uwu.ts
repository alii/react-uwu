import {kaomoji, kaomojiConfused} from './kaomoji';

export const uwu = (text: string) => {
	const noMatch = Math.random() < 0.25;

	// Find Regex Matches
	text = text.replace(/(?:l|r)/g, 'w');
    text = text.replace(/(?:L|R)/g, 'W');
	text = text.replace(/!+/g, ` ${kaomoji[Math.floor(Math.random() * kaomoji.length)]}`);
	text = text.replace(
		new RegExp("\\?", "g"),
		`${kaomojiConfused[Math.floor(Math.random() * kaomojiConfused.length)]}`
	);

	if (noMatch) {
		text = `${text.charAt(0)}-${text}`;
	}

	return text;
};
