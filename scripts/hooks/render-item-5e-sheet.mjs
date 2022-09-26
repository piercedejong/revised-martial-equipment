import { MODULE_NAME } from "../const.mjs";
import { WEAPON_PROPERTIES } from "./weapon-properties.js";

Hooks.on("renderItemSheet5e", (itemSheet, html, data) => {
    // console.log(`${WEAPON_PROPERTIES}`)
    // Add Weapon Training Levels
    html.find("[name='system.properties.mst']").parent().after("<label>Weapon Properties</label>")
    // html.find("[name='data.proficient']")[0].disabled = true

    const unt = html.find("[name='system.properties.unt']")[0]
    const bsc = html.find("[name='system.properties.bsc']")[0]
    const mst = html.find("[name='system.properties.mst']")[0]

    unt.onclick = function() {updateWeaponTrainingLevel(data, unt.checked, html, "unt", WEAPON_PROPERTIES.weapons)};
    bsc.onclick = function() {updateWeaponTrainingLevel(data, bsc.checked, html, "bsc", WEAPON_PROPERTIES.weapons)};
    mst.onclick = function() {updateWeaponTrainingLevel(data, mst.checked, html, "mst", WEAPON_PROPERTIES.weapons)};
});



/**
*   item - the item that is being changed
*   checked - if the training level is being turnd on or off
*   weapons - all weapons in RME properties
*   html - the html page
*   level - the weapon trianing level
*/
function updateWeaponTrainingLevel(item, checked, html, level, weapons){
    const type = item.system.baseItem;
    console.log("RME | Updating Weapon Training Level - "+ type + " " +level)
    var weapon = null
    var weapon_props = null
    if (type){
        for(var i=0; i<weapons.length; i++){
            if(weapons[i].label === type){
                weapon = weapons[i]
                break;
            }
        }
        clearWeaponProps(html)
        if(level=="unt"){
            weapon_props = weapon.untrained
            html.find("[name='system.properties.bsc']")[0].checked = false
            html.find("[name='system.properties.mst']")[0].checked = false
            html.find("[name='system.proficient']")[0].checked = true
        }else if (level=="bsc"){
            weapon_props = weapon.basic
            html.find("[name='system.properties.unt']")[0].checked = false
            html.find("[name='system.properties.mst']")[0].checked = false
            html.find("[name='system.proficient']")[0].checked = true
        }else if (level =="mst"){
            weapon_props = weapon.master
            html.find("[name='system.properties.unt']")[0].checked = false
            html.find("[name='system.properties.bsc']")[0].checked = false
            html.find("[name='system.proficient']")[0].checked = true
        }

        if(checked){
            var prop = ""
            for(let i=0; i<weapon_props.properties.length; i++){
                prop = weapon_props.properties[i]
                html.find("[name='system.properties."+prop+"']")[0].checked = true
                if(prop == "awk"){
                    html.find("[name='system.proficient']")[0].checked = false
                }
            }
            html.find("[name='system.range.value']")[0].value = weapon_props.range.value
            html.find("[name='system.range.long']")[0].value = weapon_props.range.long
            html.find("[name='system.damage.parts.0.0']")[0].value = weapon_props.damage+"+@mod"
            if(weapon_props.versatile!=""){
                html.find("[name='system.damage.versatile']")[0].value = weapon_props.versatile+"+@mod"
            }else{
                html.find("[name='system.damage.versatile']")[0].value = ""

            }
            html.find("[name='system.chatFlavor']")[0].value = weapon_props.master_perk
        }else{
            html.find("[name='system.range.value']")[0].value = ""
            html.find("[name='system.range.long']")[0].value = ""
            html.find("[name='system.damage.parts.0.0']")[0].value = ""
            html.find("[name='system.damage.versatile']")[0].value = ""
            html.find("[name='system.chatFlavor']")[0].value = ""
        }
    }
}


function clearWeaponProps(html){
    const props = ["aff","amm","awk","bar","bal","bra","con","def","dis","dbl","ent","fir","fin","hip","hvy","kee","lgt","lng","mel","mgc","nim","one","pen","pun","rng","rch","rel","sta","sun","thr","trp","two","ver"]
    var x = ""
    for(let i=0;i<props.length;i++){
        x = "[name='system.properties."+props[i]+"']"
        html.find(x)[0].checked = false
    }

}
