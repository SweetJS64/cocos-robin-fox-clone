import AbstractDialogsController from "./AbstractDialogsController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DialogsController extends cc.Component {

    @property(cc.Node)
    darkeningBg: cc.Node = null;
    @property(AbstractDialogsController)
    mainMenuController: AbstractDialogsController = null;
    @property(AbstractDialogsController)
    buildDialogController: AbstractDialogsController = null;
    @property(AbstractDialogsController)
    sharingDialogController: AbstractDialogsController = null;

    private _canvas: cc.Canvas;

    protected onLoad() {
        this._getCanvas();
        console.log("BIBA I BOBA");
        [
            this.mainMenuController,
            this.buildDialogController, 
            this.sharingDialogController
        ].forEach((d) => {d.init(this._canvas, this.darkeningBg)});
        console.log("DVA DOLBOEBA");
    }

    private _getCanvas() { 
        let checkedNode = this.node;
        let canvas = checkedNode.getComponent(cc.Canvas);
        while (!canvas) {
            checkedNode = checkedNode.parent;
            canvas = checkedNode.getComponent(cc.Canvas);
        }
        this._canvas = canvas;
    } 
}
