// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to reverse a string
function reverseString(string) {
    return string.split("").reverse().join("");
}

// Function to count the number of words in a string
function countWords(string) {
    return string.trim().split(/\s+/).length;
}

// Function to remove whitespace from the beginning and end of a string
function trimString(string) {
    return string.trim();
}

// Function to convert a string to title case
function toTitleCase(string) {
    return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(); });
}

// Function to truncate a string to a specified length
function truncateString(string, maxLength) {
    if (string.length > maxLength) {
        return string.substring(0, maxLength) + "...";
    } else {
        return string;
    }
}

// Function to check if a string contains another string
function containsString(string, searchValue) {
    return string.includes(searchValue);
}

// Function to replace all occurrences of a substring with another string
function replaceAll(string, searchValue, replaceValue) {
    return string.split(searchValue).join(replaceValue);
}

// Export the functions as a module
module.exports = {
    capitalizeFirstLetter,
    reverseString,
    countWords,
    capitalizeFirstLetter,
    reverseString,
    countWords,
    trimString,
    toTitleCase,
    truncateString,
    containsString,
    replaceAll,
};