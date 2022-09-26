export const WEAPON_PROPERTIES = {
    label:"RME",
    weapons:[
        {
            label:"battleaxe",
            type:"axes",
            untrained:{
                properties:["two","mel","awk"],
                range:{ value:5, long:""},
                damage: "d8",
                versatile: "",
                master_perk:""

            },
            basic:{
                properties:["one","mel","trp","ver"],
                range:{ value:5, long:""},
                damage: "d8",
                versatile: "d10",
                master_perk:""
            },
            master:{
                properties:["one","mel","trp","ver"],
                range:{value:5, long:""},
                damage: "d10",
                versatile: "d12",
                master_perk:"You may reroll any result of 1 or 2 on any damage die caused by this weapon or attachers. If you are wielding the Battle Axe with two hands, it gains Thrown d12 (20/60)."
            },
        },
        {
            label:"greataxe",
            type:"axes",
            untrained:{
                properties:["two","mel","awk","hvy"],
                range:{ value:5, long:""},
                damage: "d10",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["two","mel","dis","hvy","trp"],
                range:{ value:5, long:""},
                damage: "d12",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["two","mel","dis","hvy","trp","kno"],
                range:{value:5, long:""},
                damage: "2d8",
                versatile: "",
                master_perk:"When you score a mighty blow you can roll all damage and any attachers twice and take the better result."
            },
        },
        {
            label:"halberd",
            type:"axes",
            untrained:{
                properties:["two","mel","awk","hvy","bra"],
                range:{ value:5, long:""},
                damage: "d10",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["two","mel","hvy","bra","rch","trp"],
                range:{ value:5, long:""},
                damage: "2d6",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["two","mel","hvy","bra","rch","ent","trp"],
                range:{value:5, long:""},
                damage: "2d8",
                versatile: "",
                master_perk:"Your trip attacks impose disadvantage to saving throws made to resist them."
            },
        },
        {
            label:"handaxe",
            type:"axes",
            untrained:{
                properties:["one","mel","thr"],
                range:{ value:10, long:30},
                damage: "d6",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["one","mel","thr","lgt"],
                range:{ value:20, long:60},
                damage: "d6",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["one","mel","thr","lgt","dis"],
                range:{value:20, long:60},
                damage: "d6",
                versatile: "",
                master_perk:"If you miss with a disarm attack, you may reroll but must take the new result."

            },
        },
        {
            label:"hooksword",
            type:"axes",
            untrained:{
                properties:["one","mel","awk"],
                range:{ value:5, long:""},
                damage: "d6",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["one","mel","def","dis","fin","lgt","trp"],
                range:{ value:5, long:""},
                damage: "d6",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["one","mel","def","dis","fin","lgt","trp","lng","ent"],
                range:{value:5, long:""},
                damage: "d6",
                versatile: ""
            },
            master_perk:"When you are hit with a melee weapon attack, as a reaction you can make a disarm or entangle attack against that enemy."
        },
        {
            label:"khopesh",
            type:"axes",
            untrained:{
                properties:["one","mel","awk","dis"],
                range:{ value:5, long:""},
                damage: "d8",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["one","mel","dis","kee","lgt","trp"],
                range:{ value:5, long:""},
                damage: "2d4",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["one","mel","dis","kee","lgt","trp"],
                range:{value:5, long:""},
                damage: "2d4",
                versatile: "",
                master_perk:"If you hit with a trip attack, your enemy's speed is reduced by 10ft until the end of their next turn. While they have this penalty, they suffer disadvantage to Strength saving throws."
            },
        },
        {
            label:"poleaxe",
            type:"axes",
            untrained:{
                properties:["two","mel","awk","hvy","pun","sta"],
                range:{ value:5, long:""},
                damage: "d10",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["two","mel","bra","def","hvy","pen","pun","sta","trp"],
                range:{ value:5, long:""},
                damage: "d10",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["two","mel","bra","def","hvy","pen","pun","sta","trp"],
                range:{value:5, long:""},
                damage: "2d6",
                versatile: "",
                master_perk:"You gain +1 weapon AC and you may add your proficiency bonus to deflect rolls."
            },
        },
        {
            label:"tomahawk",
            type:"axes",
            untrained:{
                properties:["one","mel","awk","thr"],
                range:{ value:10, long:30},
                damage: "",
                versatile: "",
                master_perk:""
            },
            basic:{
                properties:["one","mel","thr","fin","lgt","trp"],
                range:{ value:40, long:120},
                damage: "d4",
                versatile: "",
                master_perk:""
            },
            master:{
                properties:["one","mel","thr","fin","lgt","trp","dis"],
                range:{value:40, long:120},
                damage: "d4",
                versatile: "",
                master_perk:"If you score a mighty blow, your enemy has disadvantage on its next attack roll."
            },
        }
    ]
}
