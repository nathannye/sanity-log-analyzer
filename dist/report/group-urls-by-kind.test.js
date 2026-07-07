import assert from "node:assert/strict";
import test from "node:test";
import { groupUrlsByKind } from "./group-urls-by-kind.js";
test("groupUrlsByKind partitions rows by URL kind", () => {
    const rows = [
        {
            label: "https://cdn.sanity.io/images/p/d/a.jpg",
            requests: 1,
            responseBytes: 100,
        },
        {
            label: "https://cdn.sanity.io/files/p/d/doc.pdf",
            requests: 1,
            responseBytes: 200,
        },
        {
            label: "https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*",
            requests: 1,
            responseBytes: 50,
        },
        { label: "https://example.com/page", requests: 1, responseBytes: 25 },
    ];
    const groups = groupUrlsByKind(rows);
    assert.equal(groups.image.length, 1);
    assert.equal(groups.file.length, 1);
    assert.equal(groups.query.length, 1);
    assert.equal(groups.other.length, 1);
    assert.equal(groups.image[0]?.label, rows[0]?.label);
});
//# sourceMappingURL=group-urls-by-kind.test.js.map