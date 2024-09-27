export default function replaceChar(str) {
    if (str) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str.replaceAll("-", " ");
    }
    return "";
}
