const {ccclass, property} = cc._decorator;

@ccclass
export default class mainMenu extends cc.Component {

    @property(cc.Node)
    menuNode: cc.Node = null;

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
        let closePosX = this._canvas.designResolution.width/2 + this.menuNode.width/2;
        let openPosX = this._canvas.designResolution.width/2 - this.menuNode.width/2;
        this._closePos = new cc.Vec3(closePosX, 0, 0);
        this._openPos = new cc.Vec3(openPosX, 0, 0);
    }

    private _setStartProperties() {
        this.menuNode.active = false;
        this.menuNode.position = this._closePos;
        this.menuNode.height = this._canvas.designResolution.height;
    }

    openMainMenu() {
        this.menuNode.active = true;
        cc.tween(this.menuNode).to(0.2, { position: this._openPos }).start();        
    }

    closeMainMenu() {
        cc.tween(this.menuNode).to(0.2, { position: this._closePos })
        .call(() => {
            this.menuNode.active = false;
        }).start();
    }
}

