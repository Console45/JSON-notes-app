const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
	return 'Your Notes';
};
// add notes
const addNotes = (title, body) => {
	const notes = loadFile();
	const duplicateNote = notes.filter((note) => {
		return note.title === title;
	});
	switch (duplicateNote.length) {
		case 0:
			notes.push({
				title,
				body
			});

			saveNotes(notes);
			console.log('New notes added');

			break;

		default:
			console.log('Notes title taken');
			break;
	}
};
// remove notes
const removeNotes = (title) => {
	const notes = loadFile();
	const keepNotes = notes.filter((note) => {
		return note.title !== title;
	});

	switch (keepNotes.length) {
		case notes.length:
			console.log(chalk.bgRed.black('Failed, no note has title: ' + title));
			break;

		default:
			console.log(chalk.bgGreen.black(`Succes, note with title: ${title} has been remove`));
			saveNotes(keepNotes);
			break;
	}
};
// list notes
const listNotes = () => {
	const notes = loadFile();
	const dataJson = JSON.stringify(notes);
	console.log(chalk.white.inverse(`Your notes : `));
	for (let index of notes) {
		console.log(index.title);
	}
};

// read notes
const readNotes = (title) => {
	const notes = loadFile();
	const readFile = notes.find((note) => {
		return note.title === title;
	});
	if (readFile) {
		console.log(chalk.white.inverse(readFile.title));
		console.log(readFile.body);
	} else {
		console.log(chalk.red.inverse('File does not exist'));
	}
};
const saveNotes = (notes) => {
	const jsonData = JSON.stringify(notes);
	fs.writeFileSync('notes.json', jsonData);
};
const loadFile = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJson = dataBuffer.toString();
		return JSON.parse(dataJson);
	} catch (error) {
		return [];
	}
};

module.exports = {
	getNotes,
	addNotes,
	removeNotes,
	listNotes,
	readNotes
};
