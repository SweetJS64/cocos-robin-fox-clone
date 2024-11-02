import AbstractDialogsController from "./AbstractDialogsController";

const {ccclass} = cc._decorator;

@ccclass
export default class MainMenuController extends AbstractDialogsController {

    protected onLoad() {
        this._setStartProperties();
    }

    private _setStartProperties() {
        let closePosMenuX = this.canvas.designResolution.width / 2 + this.node.width / 2;
        let openPosMenuX = this.canvas.designResolution.width / 2 - this.node.width / 2;
        this.closePos = new cc.Vec3(closePosMenuX, 0, 0);
        this.openPos = new cc.Vec3(openPosMenuX, 0, 0);
        this.node.position = this.closePos;
        this.node.height = this.canvas.designResolution.height;
    }
}
