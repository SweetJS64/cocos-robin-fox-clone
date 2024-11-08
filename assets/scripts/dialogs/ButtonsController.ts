import AbstractDialogsController from "./AbstractDialogsController";
import DialogsController from "./DialogsController";
const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
//@executeInEditMode
export default class ButtonsController extends cc.Component 
{
    @property(DialogsController)
    dialogsController: DialogsController = null;

    @property(cc.Node)
    slotTopRightUIBlock: cc.Node = null;
    @property(cc.Node)
    slotBotLeftUIBlock: cc.Node = null;
    @property(cc.Node)
    slotBotRightUIBlock: cc.Node = null;

    @property(cc.Node)
    cityTopRightUIBlock: cc.Node = null;
    @property(cc.Node)
    cityBotLeftUIBlock: cc.Node = null;
    @property(cc.Node)
    cityBotRightUIBlock: cc.Node = null;
    
    // @property(cc.SpriteFrame)
    // slotsButtonSprite: cc.SpriteFrame = null;
    // @property(cc.SpriteFrame)
    // cityButtonSprite: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    menuButtonSprite: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    buildButtonSprite: cc.SpriteFrame = null;    
    @property(cc.SpriteFrame)
    sharingButtonSprite: cc.SpriteFrame = null;

    protected onLoad() {
        this.init(this.menuButtonSprite, this.dialogsController.mainMenuController, this.cityTopRightUIBlock);
        this.init(this.menuButtonSprite, this.dialogsController.mainMenuController, this.slotTopRightUIBlock);

        this.init(this.buildButtonSprite, this.dialogsController.buildDialogController, this.cityBotLeftUIBlock);
        this.init(this.sharingButtonSprite, this.dialogsController.sharingDialogController,  this.slotBotLeftUIBlock);
    }

    init(buttonSprite: cc.SpriteFrame, dialogsController: AbstractDialogsController, UIBlock: cc.Node) {
        let buttonNode = cc.instantiate(new cc.Node);
        buttonNode.addComponent(cc.Sprite).spriteFrame = buttonSprite;        
        UIBlock.addChild(buttonNode);

        buttonNode.on('mousedown', function () {
            this._clickButtonAnimation(buttonNode, dialogsController);
        }, this);
    }

    private _clickButtonAnimation(node: cc.Node, dialogsController: AbstractDialogsController) {
        cc.tween(node).to(0.1, { scale: 1.2 }).to(0.1, { scale: 1})
        .call(()=>{
            dialogsController.open();
        })
        .start();
    }
}