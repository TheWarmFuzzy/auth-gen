const crypto = require('crypto');

//Valid characters to prevent confusion between 0/O and l/I/1
const validChars = "23456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";

var id = () => {
    return "".concat(uniqId(10), "-", uniqId(10), "-", uniqId(10))
}

var password = (length) =>{

    //Add symbols to the list of valid characters
    return uniqId(length, validChars + "!@#$%^&*()-_=+[{]}?.,><")

}

var uniqId = (length, chars) => {
    
    //Overwrite the character list if provided
    var charList = chars || validChars;

    //Create a random buffer of the correct length
    var buf = crypto.randomBytes(length);

    //Create the return string
    var str = "";

    //Map the values to the valid character string
    for (var value of buf.values())
        str += charList[value % charList.length];

    //Return the string
    return str;
}

exports = {
    id: id,
    password: password,
    uniqueStr: uniqId
}



