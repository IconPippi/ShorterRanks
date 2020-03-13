TriggerRegister.registerStep(() => {
    World.getAllPlayers().forEach((player) => {
        let displayName = player.getDisplayName().getText();

        if (displayName.startsWith("§7")) return; // non
        
        var newName = displayName.replace(/§3\[BUILD TEAM/i, "§3\[BT");
        newName = newName.replace(/§b\[MVP/i, "§b\[M");
        newName = newName.replace(/§6\[MVP/i, "§6\[M");
        newName = newName.replace(/§a\[VIP/i, "§a\[V");
        newName = newName.replace(/§9\[HELPER/i, "§9\[H");
        newName = newName.replace(/§c\[ADMIN/i, "§c\[A");
        newName = newName.replace(/§2\[MOD/i, "§2\[M");
        newName = newName.replace(/§c\[OWNER/i, "§c\[O");
        newName = newName.replace(/§c\[§fYOUTUBE/i, "§c\[§fYT");

        player.setTabDisplayName(new TextComponent(newName));
    });
}).setDelay(1);