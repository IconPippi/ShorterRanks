const ranksExp = new RegExp(
    "(&3\\[BUILD TEAM)|" +
    "(&b\\[MVP)|" +
    "(&6\\[MVP)|" +
    "(&6\\[MVP)|" +
    "(&9\\[HELPER)|" +
    "(&c\\[ADMIN)|" +
    "(&2\\[MOD)|" +
    "(&c\\[OWNER)|" +
    "(&c\\[&fYOUTUBE)|" +
    "(&a\\[VIP)" 
, "i");

function shortenRankInString(string) {
    let newRank = string.replace(ranksExp, (rank) => {
        let newRank = null;
        switch (rank) {
            case "&3[BUILD TEAM": newRank = "&3[BT"; break;
            case "&b[MVP": newRank = "&b[M"; break;
            case "&6[MVP": newRank = "&6[M"; break;
            case "&9[HELPER": newRank = "&9[H"; break;
            case "&c[ADMIN": newRank = "&c[A"; break;
            case "&2[MOD": newRank = "&2[M"; break;
            case "&c[OWNER": newRank = "&c[O"; break;
            case "&c[&fYOUTUE": newRank = "&c[&fYT"; break;
            case "&a[VIP": newRank = "&a[V"; break;
            default: ""; break;
        }

        return newRank;
    });

    return newRank;
}

export { ranksExp, shortenRankInString };