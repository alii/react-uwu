// This is directly stolen from https://github.com/senguyen1011/UwUinator/blob/master/js/uwuinate.js
// thanks x

const kaomojiJoy = [' (* ^ ω ^)', ' (o^▽^o)', ' (≧◡≦)', ' ☆⌒ヽ(*"､^*)chu', ' ( ˘⌣˘)♡(˘⌣˘ )', ' xD'];

const kaomojiEmbarassed = [
	' (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)..',
	' (*^.^*)..,',
	'..,',
	',,,',
	'... ',
	'.. ',
	' mmm..',
	'O.o',
];

const kaomojiConfuse = [' (o_O)?', ' (°ロ°) !?', ' (ーー;)?', ' owo?'];
const kaomojiSparkles = [' *:･ﾟ✧*:･ﾟ✧ ', ' ☆*:・ﾟ ', '〜☆ ', ' uguu.., ', '-.-'];

export function uwu(text: string) {
	const split = text.split(' ');

	return (
		split
			// eslint-disable-next-line complexity
			.map(word => {
				let uwu = '';

				const lastChar = word[word.length - 1];
				let end = '';
				let random = 0;

				if (lastChar === '.' || lastChar === '?' || lastChar === '!' || lastChar === ',') {
					word = word.slice(0, -1);
					end = lastChar;

					if (end === '.') {
						random = Math.floor(Math.random() * 3);

						if (random === 0) {
							random = Math.floor(Math.random() * kaomojiJoy.length);
							end = kaomojiJoy[random];
						}
					} else if (end === '?') {
						random = Math.floor(Math.random() * 2);

						if (random === 0) {
							random = Math.floor(Math.random() * kaomojiConfuse.length);
							end = kaomojiConfuse[random];
						}
					} else if (end === '!') {
						random = Math.floor(Math.random() * 2);

						if (random === 0) {
							random = Math.floor(Math.random() * kaomojiJoy.length);
							end = kaomojiJoy[random];
						}
					} else if (end === ',') {
						random = Math.floor(Math.random() * 3);

						if (random === 0) {
							random = Math.floor(Math.random() * kaomojiEmbarassed.length);
							end = kaomojiEmbarassed[random];
						}
					}

					random = Math.floor(Math.random() * 4);
					if (random === 0) {
						random = Math.floor(Math.random() * kaomojiSparkles.length);
						end = kaomojiSparkles[random];
					}
				}

				if (word.includes('l')) {
					if (word.endsWith('le') || word.endsWith('ll')) {
						uwu +=
							word.slice(0, -2).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-2) + end + ' ';
					} else if (word.endsWith('les') || word.endsWith('lls')) {
						uwu +=
							word.slice(0, -3).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-3) + end + ' ';
					} else {
						uwu += word.replace(/l/g, 'w').replace(/r/g, 'w') + end + ' ';
					}
				} else if (word.includes('r')) {
					if (word.endsWith('er') || word.endsWith('re')) {
						uwu += word.slice(0, -2).replace(/r/g, 'w') + word.slice(-2) + end + ' ';
					} else if (word.endsWith('ers') || word.endsWith('res')) {
						uwu += word.slice(0, -3).replace(/r/g, 'w') + word.slice(-3) + end + ' ';
					} else {
						uwu += word.replace(/r/g, 'w') + end + ' ';
					}
				} else {
					uwu += word + end + ' ';
				}

				uwu = uwu.replace(/you're/g, 'ur');
				uwu = uwu.replace(/youre/g, 'ur');
				uwu = uwu.replace(/fuck/g, 'fwickk');
				uwu = uwu.replace(/shit/g, 'poopoo');
				uwu = uwu.replace(/bitch/g, 'meanie');
				uwu = uwu.replace(/asshole/g, 'b-butthole');
				uwu = uwu.replace(/dick/g, 'peenie');
				uwu = uwu.replace(/penis/g, 'peenie');
				uwu = uwu.replace(/\bcum\b/g, 'cummies');
				uwu = uwu.replace(/\bsemen\b/g, ' cummies ');
				uwu = uwu.replace(/\bass\b/g, ' boi pussy ');
				uwu = uwu.replace(/\bdad\b/g, 'daddy');
				uwu = uwu.replace(/\bfather\b/g, 'daddy');

				if (uwu.length > 2 && /[a-z]/i.exec(uwu[0])) {
					random = Math.floor(Math.random() * 6);
					if (random === 0) {
						uwu = uwu[0] + '-' + uwu;
					}
				}

				return uwu;
			})
			.join(' ')
	);
}
