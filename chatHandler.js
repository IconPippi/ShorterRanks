import { ranksExp, shortenRankInString } from "./util.js";

// Chat handler

TriggerRegister.registerChat((event) => {
    let msg = ChatLib.getChatMessage(event, true);

    if (ranksExp.test(msg)) {
        cancel(event);
        ChatLib.chat(shortenRankInString(msg));
    }
}).setPriority(Priority.LOWEST);