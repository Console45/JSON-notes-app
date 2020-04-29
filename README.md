# DOCUMENTATION
run the test.js with the "add" command followed by "--title:'[title]'" and "--body:'[body]'" to automatically a new json note with the tile and body appended

Commands
"add" command adds a title and a body to a new note NB:title and Body are required.NB:duplicate notes cant be added
example (
test.js add --title="title" --body="body"
//when running for the first time creates automatically a new json note file and appends the title and body
//after first run, loads the existing files and appends the title and the body
)
 "list" command  lists the notes in titles.
 example(
 test.js list
 //list all notes in the json note file in title
 )
 "read" command displays a note by title in the console for you to read NB: call this command with a title to read a specific note
 example(
 test.js read --title="title"
 //loop through the notes and display the note with specified title
)
"remove" command removes a note by title
example(
test.js remove --title="title"
//removes a note with the specified title
)
