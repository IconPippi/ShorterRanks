import { shortenRankInString } from "./util.js";

// Tablist handler

TriggerRegister.registerStep(() => {
    World.getAllPlayers().forEach((player) => {
        let displayName = player.getDisplayName().getText()
            .replace("§", "&"); // temporary change to allow the regular expression to work
        
        // check if the player is a non
        if (!displayName.startsWith("&7")) {
            let newDisplayName = shortenRankInString(displayName).replace("&", "§") // back to the old symbol
            player.setTabDisplayName(new TextComponent(newDisplayName));
        }
    });
}).setDelay(1);