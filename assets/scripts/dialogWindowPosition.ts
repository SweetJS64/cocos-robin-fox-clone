const {ccclass, property} = cc._decorator;

@ccclass
export default class dialogWindowPosition extends cc.Component {

    @property(cc.Canvas)
    canvas: cc.Canvas = null;

    private _closePosY: number;

    protected onLoad() { 
        this._setStartPos();
    }

    private _setStartPos() {
        this._closePosY = -(this.canvas.designResolution.height/2 + this.node.height/2);
        this.node.y = this._closePosY;
    }

    private _moveWindow(finalPos: cc.Vec3, activeStatus: boolean){
        cc.tween(this.node).to(0.3, {position: finalPos}).to(1, {active: activeStatus}).start();
    }

    openDialog() {
        let status = true;
        let openPos = new cc.Vec3(0, 0, 0);
        this._moveWindow(openPos, status);
    }

    closeDialog() {
        let status = false;
        let closePos = new cc.Vec3(0, this._closePosY, 0);
        this._moveWindow(closePos, status);
        this.node.active = false;
    }
}


