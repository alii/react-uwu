import {kaomoji, kaomojiConfused} from './kaomoji';

export const uwu = (text: string) => {
	const randomIndex = Math.floor(Math.random() * kaomoji.length);
	const noMatch = Math.random() < 0.25;
	let input;

	// Find Regex Matches
	input = text.replace(/(?:l|r)/g, 'w');
	input = text.replace(/(?:L|R)/g, 'W');
	input = input.replace(/!+/g, `${kaomoji[randomIndex]}`);
	input = input.replace(/?+/g, `${kaomojiConfused[randomIndex]}`);

	if (noMatch) {
		input = `${input.charAt(0)}-${input}`;
	}

	return input;
}