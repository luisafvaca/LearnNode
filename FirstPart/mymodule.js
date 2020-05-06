function underlined (string, character) {
    console.log(string);
    console.log(underlineCreator(character, string.length));
}

function underlineCreator(caracter, length){
    return new Array(length + 1 ).join(caracter)
}

module.exports = {
    underlined
}