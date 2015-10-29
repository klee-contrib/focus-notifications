export default function shorten(text, maxLength) {
    return text.length > maxLength ? `${text.substr(0,maxLength-3)} ...` : `${text}`;
}
