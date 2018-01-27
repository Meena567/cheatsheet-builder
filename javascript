//JavaScript
function Cheatsheet () {
    // main class (x)
    // contains an array of modules
    this.mod_array = [];
}

function module (name) {
    // contains an array of chapters
		this.name = name;
    this.chap_array = [];
}


function chapter (number) {
    // contains an array of note_box
    // should include a custom variable of data type note_box that allows you take in input from the user
    
    this.number = number;
    this.notes_array = [];
}

function note_box (string, popularity, str_length) {
    // data type of note_box is String
    // the individual notes that we want to tick and choose
    // should include a boolean variable to know whether we want to include it in the cheatsheet
    // should include a popularity counter to sort
    // should include an int to count the number of characters in the Strings
    
    this.string = string;
    this.popularity = popularity;
    this.str_length = str_length;
    
}

