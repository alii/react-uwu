import {kaomoji, kaomojiConfused} from './kaomoji';

export const uwu = (text: string) => {
	const noMatch = Math.random() < 0.25;
	let input = '';

	// Find Regex Matches
	input = text.replace(/(?:l|r)/g, 'w');
	input = text.replace(/(?:L|R)/g, 'W');
	input = input.replace(/!+/g, `${kaomoji[Math.floor(Math.random() * kaomoji.length)]}`);
	input = input.replace(
		/?+/g,
		`${kaomojiConfused[Math.floor(Math.random() * kaomojiConfused.length)]}`
	);

	if (noMatch) {
		input = `${input.charAt(0)}-${input}`;
	}

	return input;
};
