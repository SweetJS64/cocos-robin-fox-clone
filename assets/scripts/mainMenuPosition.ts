const {ccclass, property} = cc._decorator;

@ccclass
export default class mainMenuPosition extends cc.Component {

    @property(cc.Canvas)
    canvas: cc.Canvas = null;

    private _closePosX: number;
    private _openPosX: number;

    protected onLoad() { 
        this._setStartPos();
    }

    private _setStartPos() {
        this._closePosX = this.canvas.designResolution.width/2 + this.node.width/2;
        this._openPosX = this.canvas.designResolution.width/2 - this.node.width/2;
        this.node.x = this._closePosX;        
    }

    private _moveMainMenu(finalPos: cc.Vec3){
        cc.tween(this.node).to(0.3, {position: finalPos}).start();
    }

    openMainMenu() {
        let openPos = new cc.Vec3(this._openPosX, 0, 0);
        this._moveMainMenu(openPos);
    }

    closeMainMenu() {
        let closePos = new cc.Vec3(this._closePosX, 0, 0);
        this._moveMainMenu(closePos);
            }
}

