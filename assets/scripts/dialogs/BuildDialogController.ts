import AbstractDialogsController from "./AbstractDialogsController";

const {ccclass} = cc._decorator;

@ccclass
export default class BuildDialogController extends AbstractDialogsController {

    protected onLoad() {
        this._setPositionValue();
    }

    private _setPositionValue() {
        let closePosDialogsY = -(this.canvas.designResolution.height / 2 + this.node.height / 2);
        this.closePos = new cc.Vec3(0, closePosDialogsY, 0);
        this.openPos = new cc.Vec3(0, 0, 0);
        this.node.position = this.closePos;
    }
}
