import { libWrapper } from "../../lib/libWrapper/shim.js";
// import { MODULE_TITLE, MODULE_TITLE_SHORT } from "./scripts/const.mjs";
const MODULE_NAME = "mre-dnd5e";

// When I create an Item chat card, replace the damage buttons with our custom ones.
export function patchItemDisplayCard() {
    console.log(`RME | Patching Item Display Card`);

    libWrapper.register(MODULE_NAME, "CONFIG.Item.documentClass.prototype.displayCard", async function patchedDisplayCard(wrapped, options, ...rest) {
        // If the caller above us set createMessage to false, we should not create a chat card and instead just return our message data.
        const shouldCreateMessage = options?.createMessage ?? true;

        // we create the message ourselves, don't want the original method to create
        const wrappedOptions = {...options, createMessage: false };

        // Call the original Item5e#roll and get the resulting message data
        const messageData = await wrapped(wrappedOptions, ...rest);

        // User quit out of the dialog workflow early (or some other failure)
        if (!messageData) return;

        // inject spell level as a flag on the messageData
        const spellLevel = this.data.data.level;
        messageData.flags[MODULE_NAME] = {
            ...messageData.flags[MODULE_NAME],
            spellLevel
        };

        if (this.hasDamage) _replaceDamageButtons(messageData, this);

        const result = shouldCreateMessage ? await ChatMessage.create(messageData) : messageData;

        return result;
    }, "WRAPPER");
}

/**
 * Replace stock damage buttons with our buttons for each damage group
 * Mutates input messageData
 */
function _replaceDamageButtons(messageData, item) {
    const content = $(messageData.content);
    _removeButtons(content, item)
    messageData.content = content.prop("outerHTML");
}


function _removeButtons(content, item){
    const buttons = content.find("[data-action=formula-group]");
    const untrained = item.data.data.properties.unt
    const basic = item.data.data.properties.bsc;
    const expert = item.data.data.properties.exp;
    for(let i=0; i<buttons.length;i++){
        // console.log(buttons[i])
        if(!untrained && buttons[i].innerText.toLowerCase().includes("untrained")){
            buttons[i].style.display="none";
            // console.log("Unt / Hide "+ buttons[i])
        }if(!basic && buttons[i].innerText.toLowerCase().includes("basic")){
            buttons[i].style.display="none";
            // console.log("Bsc / Hide" +buttons[i])
        }if(!expert && buttons[i].innerText.toLowerCase().includes("exper")){
            buttons[i].style.display="none";
            // console.log("Exp / Hide " +buttons[i])
        }
    }

    return content

}
