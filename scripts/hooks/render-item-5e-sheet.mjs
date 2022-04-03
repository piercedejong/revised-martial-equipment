import { MODULE_NAME } from "../const.mjs";

Hooks.on("renderItemSheet5e", (itemSheet, html, _) => {

    // Add Weapon Training Levels
    html.find("[name='data.properties.exp']").parent().after("<label>Weapon Properties</label>")
});
