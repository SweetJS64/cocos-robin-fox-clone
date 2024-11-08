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
    slotBotLeftUIBlock: cc.Node = null;

    @property(cc.Prefab)
    sharingButtonPrefab: cc.Prefab = null;

    protected onLoad() {
        this.init(this.sharingButtonPrefab, this.dialogsController.sharingDialogController);
    }

    init(buttonPrefab: cc.Prefab, dialogsController: AbstractDialogsController) {
        let buttonNode = cc.instantiate(buttonPrefab);
        this.slotBotLeftUIBlock.addChild(buttonNode);

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