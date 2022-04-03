import { MODULE_TITLE_SHORT } from "../const.mjs";

export function patchWeapons(){
    console.log(`${MODULE_TITLE_SHORT} | Patching Weapons and Armor`);
     _patchWeapons();


}


function _patchWeapons(){
    // Override DND5E weapon properties with RME Weapon Properties
    CONFIG.DND5E.weaponProperties = {
        unt: game.i18n.localize("RME.WeaponPropertiesUnt"),
        bsc: game.i18n.localize("RME.WeaponPropertiesBsc"),
        exp: game.i18n.localize("RME.WeaponPropertiesExp"),
        aff: game.i18n.localize('RME.WeaponPropertiesAff'),
        amm: game.i18n.localize("RME.WeaponPropertiesAmm"),
        awk: game.i18n.localize("RME.WeaponPropertiesAwk"),
        bar: game.i18n.localize("RME.WeaponPropertiesBar"),
        bal: game.i18n.localize("RME.WeaponPropertiesBal"),
        bra: game.i18n.localize("RME.WeaponPropertiesBra"),
        con: game.i18n.localize("RME.WeaponPropertiesCon"),
        def: game.i18n.localize("RME.WeaponPropertiesDef"),
        dis: game.i18n.localize("RME.WeaponPropertiesDis"),
        dbl: game.i18n.localize("RME.WeaponPropertiesDbl"),
        ent: game.i18n.localize("RME.WeaponPropertiesEnt"),
        fir: game.i18n.localize("RME.WeaponPropertiesFir"),
        fin: game.i18n.localize("RME.WeaponPropertiesFin"),
        hip: game.i18n.localize("RME.WeaponPropertiesHip"),
        hvy: game.i18n.localize("RME.WeaponPropertiesHvy"),
        kee: game.i18n.localize("RME.WeaponPropertiesKee"),
        lgt: game.i18n.localize("RME.WeaponPropertiesLgt"),
        lng: game.i18n.localize("RME.WeaponPropertiesLng"),
        mel: game.i18n.localize("RME.WeaponPropertiesMel"),
        mgc: game.i18n.localize("RME.WeaponPropertiesMgc"),
        nim: game.i18n.localize("RME.WeaponPropertiesNim"),
        one: game.i18n.localize("RME.WeaponPropertiesOne"),
        pen: game.i18n.localize("RME.WeaponPropertiesPen"),
        pun: game.i18n.localize("RME.WeaponPropertiesPun"),
        rea: game.i18n.localize("RME.WeaponPropertiesRea"),
        rel: game.i18n.localize("RME.WeaponPropertiesRel"),
        sta: game.i18n.localize("RME.WeaponPropertiesSta"),
        sun: game.i18n.localize("RME.WeaponPropertiesSun"),
        thr: game.i18n.localize("RME.WeaponPropertiesThr"),
        trp: game.i18n.localize("RME.WeaponPropertiesTrp"),
        two: game.i18n.localize("RME.WeaponPropertiesTwo"),
        ver: game.i18n.localize("RME.WeaponPropertiesVer")
    };

    // Override basic DND5E martial and simple weapon proficiencies with RME weapon groups
    CONFIG.DND5E.weaponProficiencies = {
        amb: game.i18n.localize("RME.WeaponAmbushProficiency"),
        axe: game.i18n.localize("RME.WeaponAxesProficiency"),
        bld: game.i18n.localize("RME.WeaponBludgeonsProficiency"),
        bow: game.i18n.localize("RME.WeaponBows&SlingsProficiency"),
        cmb: game.i18n.localize("RME.WeaponCombateBladesProficiency"),
        xbo: game.i18n.localize("RME.WeaponCrosbowsProficiency"),
        dul: game.i18n.localize("RME.WeaponDuelingBladesProficiency"),
        gun: game.i18n.localize("RME.WeaponFirearmsProficiency"),
        fla: game.i18n.localize("RME.WeaponFlails&WhipsProficiency"),
        hmr: game.i18n.localize("RME.WeaponHammers&PicksProficiency"),
        pol: game.i18n.localize("RME.WeaponPolearmsProficiency"),
        spr: game.i18n.localize("RME.WeaponSpearsProficiency"),
        thr: game.i18n.localize("RME.WeaponThrowingWeaponsProficiency")
    }

    // Override DND5E weapon types with RME Weapon Types
    CONFIG.DND5E.weaponTypes = {
        // simpleM: "DND5E.WeaponSimpleM",
        // simpleR: "DND5E.WeaponSimpleR",
        // martialM: "DND5E.WeaponMartialM",
        // martialR: "DND5E.WeaponMartialR",
        natural: game.i18n.localize("RME.WeaponNatural"),
        improv: game.i18n.localize("RME.WeaponImprov"),
        siege: game.i18n.localize("RME.WeaponSiege"),
        ambush: game.i18n.localize("RME.WeaponAmbushProficiency"),
        axes: game.i18n.localize("RME.WeaponAxesProficiency"),
        bludgeons: game.i18n.localize("RME.WeaponBludgeonsProficiency"),
        bows: game.i18n.localize("RME.WeaponBows&SlingsProficiency"),
        combat: game.i18n.localize("RME.WeaponCombateBladesProficiency"),
        xbows: game.i18n.localize("RME.WeaponCrosbowsProficiency"),
        dueling: game.i18n.localize("RME.WeaponDuelingBladesProficiency"),
        firearms: game.i18n.localize("RME.WeaponFirearmsProficiency"),
        flails: game.i18n.localize("RME.WeaponFlails&WhipsProficiency"),
        hammer: game.i18n.localize("RME.WeaponHammers&PicksProficiency"),
        polearms: game.i18n.localize("RME.WeaponPolearmsProficiency"),
        spears: game.i18n.localize("RME.WeaponSpearsProficiency"),
        throwing: game.i18n.localize("RME.WeaponThrowingWeaponsProficiency")
    };

    /**
     * A mapping between `DND5E.weaponTypes` and `DND5E.weaponProficiencies` that
     * is used to determine if character has proficiency when adding an item.
     * @enum {(boolean|string)}
     */
    CONFIG.DND5E.weaponProficienciesMap = {
        natural:true,
        simpleM: "sim",
        simpleR: "sim",
        martialM: "mar",
        martialR: "mar",
        ambush: "amb",
        axes: "axe",
        bludgeons: "bld",
        bows: "bow",
        combat: "cmb",
        xbows: "xbo",
        dueling: "dul",
        firearms: "gun",
        flails: "fla",
        hammer: "hmr",
        polearms: "pol",
        spears: "spr",
        throwing: "thr"
    };

    CONFIG.DND5E.weaponIds = {
        // whipdagger: "Hvgz6D3bmBxQmC7K"
    }

    CONFIG.DND5E.armorIds = {
        // chainshirt: "0zbDdPBcDERj2RmH",
        // studdedleather: "8SkScjqkRJgno4KP"

    }

    CONFIG.DND5E.shieldIds = {}
}
