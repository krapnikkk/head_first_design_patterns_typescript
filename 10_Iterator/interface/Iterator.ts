import MenuItem from "../MenuItem ";

export default interface Iterator {
    hasNext(): boolean;
    next(): MenuItem;
}