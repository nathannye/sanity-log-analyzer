import { classifyUrl } from "./classify-url.js";
const EMPTY_GROUPS = {
    image: [],
    file: [],
    query: [],
    other: [],
};
export function groupUrlsByKind(rows) {
    const groups = {
        image: [],
        file: [],
        query: [],
        other: [],
    };
    for (const row of rows) {
        const kind = classifyUrl(row.label);
        if (kind === "image") {
            groups.image.push(row);
        }
        else if (kind === "file" || kind === "video") {
            groups.file.push(row);
        }
        else if (kind === "query") {
            groups.query.push(row);
        }
        else {
            groups.other.push(row);
        }
    }
    return groups;
}
export function defaultUrlTab(groups) {
    const order = ["image", "file", "query", "other"];
    for (const tab of order) {
        if (groups[tab].length > 0)
            return tab;
    }
    return "image";
}
export { EMPTY_GROUPS };
//# sourceMappingURL=group-urls-by-kind.js.map