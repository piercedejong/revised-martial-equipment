import { MODULE_TITLE, MODULE_TITLE_SHORT } from "./scripts/const.mjs";
import { patchWeapons } from "./scripts/patches/rme-config.mjs";
import { patchItemDisplayCard } from "./scripts/patches/item-display-card.mjs";

Hooks.on("setup", () => {
    console.log(`${MODULE_TITLE_SHORT} | Initializing ${MODULE_TITLE}`);

    patchWeapons();
    patchItemDisplayCard();

});
