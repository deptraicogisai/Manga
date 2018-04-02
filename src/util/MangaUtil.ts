export function WordSubstring(word: string, displayLength: number): string {
    if (word && word.length > displayLength) {
        return word.substr(0, displayLength) + '...';
    }
    return word;
}

export function WordReplace(word: string, wordNeedReplace: string, wordReplace): string {
    if (word) {
        var reRegex = new RegExp(wordNeedReplace, 'g');
        return word.replace(reRegex, wordReplace);
    }
    return word;
}