////////////////////////////////////////////////
// Part 1: Working With Data Structures
////////////////////////////////////////////////

const album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label:    "Sire",
    formats:  ["LP"]
  }
}  

// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.


let albumLabel = album1.albumDetails.label; 
console.log("1. " ,albumLabel)
// class review notes
// const labelName = album1.albumDetails.label
//console.log(album1.albumDetails.label)

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"

album1.title = "Talking Heads: 77"
console.log("2." , album1.title)

const album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: new Date("July 14, 1978"),
    label:    "Sire",
    formats:  ["LP", "8-track"]
  }
}  

const album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: "August 3, 1979",
    label:    "Sire",
    formats:  ["Cassette"]
  }
}  

// 3. Access album2's formats array and use an array method to add "LP" to
//    album3's formats
// Check out the Array.push method!


album3.albumDetails.formats.push("LP")
console.log("3. " , album3.albumDetails.formats)

// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!

let relDate = album3.albumDetails.released;
relDate = new Date("August 13, 1979");
relDate = new Date(album3.albumDetails.released);

console.log("4. " , relDate)



const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
}  

// 5. Add the label "Sire" to album4's details

album4.albumDetails.label = "Sire"
console.log("5." , album4.albumDetails)

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
}  


// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"

album5.albumDetails.formats = ["CD", "Cassette", "LP"]
console.log("6.", album5.albumDetails)

const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
}  

// 7. Make the label "emi" in album6 all uppercase
// google how to make a string uppercase in js!

album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase()
console.log("7.", album6.albumDetails.labels[1])

const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
}  

// 8. Convert album7's 'labels' property from the string value
//    "Sire, EMI" into the array: ["Sire", "EMI"]
// google js array split!

album7.albumDetails.labels =
album7.albumDetails.labels.split(', ')
console.log("8. ", album7.albumDetails.labels)

/////////////////////////////////////////////////////
// Part 2: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

const album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    labels:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
}  

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
]  

// 1. Create an object literal called `band`.

const band = {}

// 2. Give it the property `name` and set it to "Talking Heads"

band.name = "Talking Heads"
console.log("2.", band.name)
// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.

band.members = ["David Byrne"]
console.log("3.", band.members)

// 4. Give it the property `albums` and set it to the array stored in the
//    variable talkingHeadsAlbums

band.albums = talkingHeadsAlbums
console.log("4.", band.albums)

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.

band.members.push("Tiny Weymouth")
band.members.push("Chris Franz") 
band.members.push("Jerry Harrison")
// band.members.push("Tiny Weymouth","Chris Franz", "Jerry Harrison")
console.log("5.", band.members)

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////

// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    talkingHeadsAlbums above.

if (talkingHeadsAlbums.length >= 6) {
console.log("1. Talking Heads were a prolific band") 
} else {
console.log("1. Talking heads didn't have much output.")
}

// 2. Write a conditional to check if the number of albums in
//    talkingHeadsAlbums is odd or even, and then console.log
//    "The number X is odd" or "The number X is even" with X being
//    the number of albums.


if (talkingHeadsAlbums.length % 2 == 0) {
console.log("2. The number " + talkingHeadsAlbums.length + " is even") 
} else {
console.log("2. The number " + talkingHeadsAlbums.length + " is odd")
}


// 3. Write conditionals to check if the number of albums in
//    talkingHeadsAlbums is divisible by either 2 or 3, and then
//    console.log one of:
//    - "The number Y is divisible by 2",
//    - "The number Y is divisible by 3",
//    - "The number Y is divisible by 2 and 3", or
//    - "The number Y is not divisible by 2 or 3",
//
//    with Y being the number of albums.

// note: in class a variable was created let numAlbums = talkingHeadsAlbums.lenth
let numAlbums = talkingHeadsAlbums.length
//numAlbums = 9

if (numAlbums === 0){
 console.log("3. The number " + numAlbums + " is NOT divisible by 2 or 3")
} else if (numAlbums % 3 === 0 && numAlbums % 2 === 0) {
console.log("3. The number " + numAlbums + " is divisible by 2 and 3")
} else if (numAlbums % 3 === 0) {
console.log("3. The number " + numAlbums + " is divisible by 3")
} else if (numAlbums % 2 === 0) {
console.log("3. The number " + numAlbums + " is divisible by 2") 
} else {
  console.log("3. The number " + numAlbums + " is NOT divisible by 2 or 3")
}




// 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.
//    Make sure it always works!

//NOTE to check this I manually altered the talkingHeadsAlbums and re-ran the above code to validate
//IN REVIEW a variable was created and that variable was assigned a number for testing this 


/////////////////////////////////////////////////////
// Part 4: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album


for (let i = 0; i < talkingHeadsAlbums.length; i++) {
  console.log(talkingHeadsAlbums[i].title);
}

// 2. Create a variable called `sireTally`, and set it to the integer value 0.
//    Then use a for-loop to go through all the Talking Heads albums,
//    incrementing sireTally if the album was released under the "Sire" label.
//
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!

let sireTally = 0

for (let i = 0; i < talkingHeadsAlbums.length; i++) {
 if (talkingHeadsAlbums[i].albumDetails.hasOwnProperty('label'))
 {
  if (talkingHeadsAlbums[i].albumDetails.label == "Sire"){
    sireTally++
    } 
  } else if (talkingHeadsAlbums[i].albumDetails.hasOwnProperty('labels'))
 {
       if (talkingHeadsAlbums[i].albumDetails.labels[0] == "Sire" ){
    sireTally++
    } 
 }
}  
console.log(sireTally)

//NOTE: class solution
// let sireTally = 0
//for (let i = 0; i < talkingHeadsAlubums.length; i++){
//if (talkingHeadsAlbums[i].albumDetails.label === "Sire") || talkingHeadsAlbums[i].albumDetails.labels.includes("Sire")){
//sireTally++
//}
//

/////////////////////////////////////////////////////
// Part 5: More Tasks With Conditionals and Iteration
/////////////////////////////////////////////////////

// 1. There is a Talking Heads concert at DAR Constitutional Hall, and
//    the attending dignitaries will be sitting in three sections:
//    "left", "center", and "right".
//
//    The event is "open seating" (guests can choose any seat they want),
//    however they must have a *premium ticket* to sit in first 3 rows of
//    their section. *Standard ticket*-holders must sit behind row 3.
//    Using the hardcoded list of dignitaries below, print out
//    appropriate seating instructions.
//
//    Example:
//    const ticket1 = {
//      name: "Madeline Albright",
//      section: "right",
//      type: "premium",
//      seats: 1
//    }  
//    const ticket1 = {
//      name: "Newt Gingrich",
//      section: "center",
//      type: "standard",
//      seats: 4
//    }  
//
//    Messages:
//    "Welcome, Madeline Albright! You may sit anywhere in the first 3 rows of the right section."
//    "Welcome, Newt Gingrich! You and your party may sit anywhere except first 3 rows of the center section.
//     Please be sure to leave no seats between you."

const ticketSections = [
  {name: "Boutros Boutros-Ghali", section: "center", type: "premium",  seats: 1},
  {name: "Ann Richards",          section: "left",   type: "premium",  seats: 2},
  {name: "George Will",           section: "left",   type: "standard", seats: 2},
  {name: "Marion Barry",          section: "center", type: "standard", seats: 8},
  {name: "Warren Christopher",    section: "right",  type: "standard", seats: 1},
  {name: "Bob Dole",              section: "center", type: "premium",  seats: 3}
]  



for (let i=0 ; i < ticketSections.length ; i++ ){
  if (ticketSections[i].seats === 1){
    if (ticketSections[i].type === "premium"){
          console.log("Welcome, " + ticketSections[i].name + "! You may sit anywhere in the first 3 rows of the " + ticketSections[i].section + " section.")
    } else if (ticketSections[i].type === "standard"){
           console.log("Welcome, " + ticketSections[i].name + "! You may sit anywhere except the first 3 rows of the " + ticketSections[i].section + " section.")     
    }
  } else if (ticketSections[i].seats > 1){
        if (ticketSections[i].type === "premium"){
          console.log("Welcome, " + ticketSections[i].name + "! You and your party may sit anywhere in the first 3 rows of the " + ticketSections[i].section + " section. Please be sure to leave no seats between you.")
    } else if (ticketSections[i].type === "standard"){
           console.log("Welcome, " + ticketSections[i].name + "! You and your party may sit anywhere except the first 3 rows of the " + ticketSections[i].section + " section. Please be sure to leave no seats between you.")     
    }
  }
}


// 2. There is a concert at the LA County Fairgrounds by the Southland's
//    hottest Talking Heads tribute band for zombie afficianados,
//    "The Wailing Deads" (known as "The Walking Deads" until they received
//    a cease-and-desist). Ticket prices are $50, $65, or $90 for
//    standard, premier, and premier plus seating. Premier plus tickets
//    receive free drinks.
//
//    Discounted patrons (seniors, veterans, and students) receive a free
//    $10 drinks voucher, while regular patrons receive none. Premier
//    plus seats only cost $80 for discounted patrons.
//
//    Everyone who dresses as a zombie in a giant business suit will
//    receive a $10 drinks voucher.
//
//    Based on a ticket request in the form of an object, print out
//    a message for the given ticket.
//
//    Treat missing data as an automatic false.
//
//    Examples:
//    - {amount: 50.00, discount: true,  zombie: false}  => "STANDARD $10 DRINKS"
//    - {amount: 65.00, discount: false, zombie: false}  => "PREMIER NO DRINKS"
//    - {amount: 80.00, discount: false}                 => "ERROR: INVALID TICKET"
//    - {amount: 80.00, discount: true}                  => "PREMIER PLUS"
//    - {amount: 90.00}                                  => "PREMIER PLUS"
//    - {amount: 50.00, discount: true,  zombie: true}   => "STANDARD $20 DRINKS"

const tickets = [
  {amount: 50.00, discount: false, zombie: true},
  {amount: 60.00, discount: true,  zombie: false},
  {amount: 50.00},
  {amount: 65.00, discount: true,  zombie: true},
  {amount: 90.00, discount: false},
  {amount: 50.00, discount: true,  zombie: false},
  {amount: 50.00, zombie:   true},
  {amount: 80.00, discount: true},
  {amount: 90.00},
  {amount: 50.00, discount: true}
]  



for (let i = 0; tickets.length > i ; i++ ){
if (tickets[i].amount === 90.00 || tickets[i].amount === 80.00 ){
  console.log(JSON.stringify(tickets[i]) + " => PREMIER PLUS")
} else if (tickets[i].amount === 65.00 ){
    if (tickets[i].discount === true && tickets[i].zombie === true) {
     console.log(JSON.stringify(tickets[i]) + " => PREMIER $20 DRINKS") 
    } else if (tickets[i].discount === true || tickets[i].zombie === true ) {
      console.log(JSON.stringify(tickets[i]) + " => PREMIER $10 DRINKS") 
      } else {console.log(JSON.stringify(tickets[i]) + " => PREMIER NO DRINKS")}
  } else if (tickets[i].amount === 50.00 ){
    if (tickets[i].discount === true && tickets[i].zombie === true) {
     console.log(JSON.stringify(tickets[i]) + " => STANDARD $20 DRINKS") 
    } else if (tickets[i].discount === true || tickets[i].zombie === true ) {
      console.log(JSON.stringify(tickets[i]) + " => STANDARD $10 DRINKS") 
      }  else  {console.log(JSON.stringify(tickets[i]) + " => STANDARD NO DRINKS")}
  } else {console.log(JSON.stringify(tickets[i]) + " => INVALID TICKET")}
}

  