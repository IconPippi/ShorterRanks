// Chat handler

TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);

    var newMsg = msg.replace(/&3\[BUILD TEAM/i, "&3\[BT");
    newMsg = newMsg.replace(/&b\[MVP/i, "&b\[M");
    newMsg = newMsg.replace(/&6\[MVP/i, "&6\[M");
    newMsg = newMsg.replace(/&a\[VIP/i, "&a\[V");
    newMsg = newMsg.replace(/&9\[HELPER/i, "&9\[H");
    newMsg = newMsg.replace(/&c\[ADMIN/i, "&c\[A");
    newMsg = newMsg.replace(/&2\[MOD/i, "&2\[M");
    newMsg = newMsg.replace(/&c\[OWNER/i, "&c\[O");
    newMsg = newMsg.replace(/&c\[&fYOUTUBE/i, "&c\[&fYT");

    ChatLib.chat(newMsg);
    cancel(event);
}).setPriority(Priority.LOWEST);