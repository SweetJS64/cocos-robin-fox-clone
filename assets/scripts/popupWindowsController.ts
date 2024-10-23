//po suti dubliruyu mainMenu. hz, mb nado bilo nasledovat'sya ot kakogo to classa "popup windows"
//if ob'edenit' in one script

const {ccclass, property} = cc._decorator;

@ccclass
export default class popupWindowsController extends cc.Component {

    @property(cc.Node)
    buildDialog: cc.Node = null;

    private _canvas: cc.Canvas;
    private _closePos: cc.Vec3;
    private _openPos: cc.Vec3;

    protected onLoad() {
        this._getCanvas(); 
        this._setPosValue();
        this._setStartProperties();     
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

    private _setPosValue() {
        let closePosY = -(this._canvas.designResolution.height/2 + this.buildDialog.height/2);
        this._closePos = new cc.Vec3(0, closePosY, 0);
        this._openPos = new cc.Vec3(0, 0, 0);
    }

    private _setStartProperties() {
        this.buildDialog.active = false;
        this.buildDialog.position = this._closePos;
    }

    private _openWindow(windowNode: cc.Node) {
        windowNode.active = true;
        cc.tween(windowNode).to(0.3, { position: this._openPos }).start();        
    }

    private _closeWindow(windowNode: cc.Node) {
        cc.tween(windowNode).to(0.3, { position: this._closePos })
        .call(() => {
            windowNode.active = false;
        }).start();
    }

    openBuildWindow(){
        this._openWindow(this.buildDialog);
    }

    closeBuildWindow(){
        this._closeWindow(this.buildDialog);
    }
}


