/* Admin */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&c[ADMIN]", "&c[A]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[ADMIN]").setPriority(Priority.LOWEST);

/* Build team */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&3[BUILD TEAM]", "&3[BT]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&3[BUILD TEAM]").setPriority(Priority.LOWEST);

/* Helper */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&9[HELPER]", "&9[H]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&9[HELPER]").setPriority(Priority.LOWEST);

/* Mod */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&2[MOD]", "&2[M]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&2[MOD]").setPriority(Priority.LOWEST);

/* Mvp */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&b[MVP]", "&b[M]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&b[MVP]").setPriority(Priority.LOWEST);

/* Mvp+ */
TriggerRegister.registerChat((color, suffix, event) => {
    var msg = ChatLib.getChatMessage(event, true);
    if (suffix.length != 2) return;
    
    ChatLib.chat(msg.replace("&b[MVP" + color + "+" + suffix + "]", "&r&b[M" + color + "+&b]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&b[MVP${color}+${suffix}]").setPriority(Priority.LOWEST);

/* Mvp++ */
TriggerRegister.registerChat((prefix, color, suffix, event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&" + prefix + "[MVP" + color + "++" + suffix + "]", "&r&" + prefix + "[M" + color + "++" + suffix + "]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&${pefix}[MVP${color}++${suffix}]").setPriority(Priority.LOWEST);

/* Owner */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&c[OWNER]", "&c[O]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[OWNER]").setPriority(Priority.LOWEST);

/* Vip */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&a[VIP]", "&a[V]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&a[VIP]").setPriority(Priority.LOWEST);

/* Vip plus */
TriggerRegister.registerChat((color, suffix, event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&a[VIP" + color + "+" + suffix + "]", "&r&a[V" + color + "+&a]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&a[VIP${color}+${suffix}]").setPriority(Priority.LOWEST);

/* YT */
TriggerRegister.registerChat((event) => {
    var msg = ChatLib.getChatMessage(event, true);
    ChatLib.chat(msg.replace("&c[&fYOUTUBE&c]", "&c[&fYT&c]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[&fYOUTUBE&c]").setPriority(Priority.LOWEST);