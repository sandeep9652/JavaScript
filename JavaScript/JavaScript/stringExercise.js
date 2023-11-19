
// is_String()
function is_string(input){
    if(Object.prototype.toString.call(input) === '[object String]')

        return true;
        else
        return false;
    
}
console.log(is_string('vinod'));
console.log(is_string([1,2,3,40]))

//is_Blank()
is_Blank = function(input){
    if(input.length ==0)
    return true;
    else
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

//String_to_array
string_to_array = function(str){
    return str.trim().split(" ");
}
console.log(string_to_array("Vinod Paidakulawar"));

// Extract a given number of character from an input string
truncate_string = function(str, length){
    if((str.constructor === String) && (length>0))
    return str.slice(0, length);
}
console.log(truncate_string("Vinod Paidakulawar", 5));

//Convert into Abbreviated form 
abbreviated_Form = function(str){
   let split_Name = str.trim().split(" ");
   if(split_Name.length > 1){
    return (split_Name[0] + " " + split_Name[1].charAt(0) + ".");
   }
   return split_Name[0];
}
console.log(abbreviated_Form("Vinod Paidakulawar"));
 
//Protecet Email
protect_Email = function(userEmail){
    let avg, splitted, part1, part2;
    splitted = userEmail.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}
console.log(protect_Email("vinodpaidakulawar@gmail.com"))
/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/
//There are 3 methods for extracting a part of a string:
/*
slice(start, end)
substring(start, end) //The difference is that start and end values less than 0 are treated as 0 in substring(). negative value treated as 0
substr(start, length) //The difference is that the second parameter specifies the length of the extracted part. 
*/

//The replace() method replaces a specified value with another value in a string: 
//By default, the replace() method replaces only the first match:
//A string is converted to upper case with toUpperCase():

//A string is converted to lower case with toLowerCase():
//concat() joins two or more strings:
/*
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
*/
//The trim() method removes whitespace from both sides of a string:

//Extracting String Characters
/*There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]
*/
/*
String Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/
//The indexOf() method returns the index (position) the first occurrence of a string in a string:
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
//The includes() method returns true if a string contains a specified value.Otherwise it returns false.


//Duplicate Characters
console.log("Duplicate Characters")
let duplicateChar = "Vinod paidakulawar";
let countChar = 0
for(let i=0; i<duplicateChar.length; i++)
{
    if(duplicateChar.charAt(i) === 'p')
    countChar++
}
console.log(countChar)