/**
 * Task 1 — Replace strings
 */

/**
 * Given some sentence, replaces the search term with a replacement string.
 * Subsequent replacements replace previous versions of the string.
 *
 * Example:
 *   sentence: "Hello, World!"
 *   replacements: [["Hello", "Hey"], ["Hey", "Hi"]]
 *   return: "Hi, Universe!"
 *
 * @param {String} sentence
 * @param {[string, string][]} replacements
 * @return {String}
 */
function replaceStr(sentence, ...replacements) {
    for(let replacement of replacements) {
        sentence = sentence.replaceAll(replacement[0], replacement[1]);
    }
    return sentence;
}
