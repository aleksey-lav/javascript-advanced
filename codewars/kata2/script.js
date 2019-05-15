//Format a string of names like 'Bart, Lisa & Maggie'.

/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand. */

//my solution


    function list(names){
    return names.map(function(person) {
        return person.name;
    

    })
    .join(", ")
    .replace(/, (?!.*, )/, " & ");
      }
      
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))