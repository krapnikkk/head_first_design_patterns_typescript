import Iterator from "./Iterator";
export default interface Menu {
    createIterator(): Iterator;
}