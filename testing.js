const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes.js');

// add command with yargs
yargs
	.command({
		command: 'add',
		describe: 'Add a new note',
		builder: {
			title: {
				describe: 'Note Title',
				demandOption: true,
				type: 'string'
			},
			body: {
				describe: 'Note Body',
				demandOption: true,
				type: 'string'
			}
		},
		handler(yargs) {
			// console.log('Adding a new note...');
			// console.log('Title: ' + yargs.title);
			// console.log(`Body: ${yargs.body}`);
			notes.addNotes(yargs.title, yargs.body);
		}
	})
	.help().agrv;

// removing notes
yargs
	.command({
		command: 'remove',
		describe: 'Remove a note',
		builder: {
			title: {
				describe: 'Note Title',
				demandOption: true,
				type: 'string'
			}
		},

		handler(yargs) {
			notes.removeNotes(yargs.title);
		}
	})
	.help().argv;
//  creating a list command
yargs.command('list', 'List a note', (yargs) => notes.listNotes()).help().argv;

// creating a read command
yargs
	.command({
		command: 'read',
		describe: 'Read a note',
		builder: {
			title: {
				describe: 'Note Title',
				demandOption: true,
				type: 'string'
			}
		},
		handler: (yargs) => notes.readNotes(yargs.title)
	})
	.help().argv;
