const {ccclass, property} = cc._decorator;

@ccclass
export default class mainMenu extends cc.Component {

    @property(cc.Prefab)
    menuPrefab: cc.Prefab = null;

    private _closePosX: number;
    private _openPosX: number;
    private _menuNode: cc.Node;
    private _canvas: cc.Canvas;

    protected onLoad() {
        this._getCanvas(); 
        this._setPosValue();
        this._setPrefabParameters();     
    }

    private _getCanvas(){
        let node = this.node;
        let canvas = node.getComponent(cc.Canvas);
        while (!canvas) {
            node = node.parent;
            canvas = node.getComponent(cc.Canvas);
        }
        this._canvas = canvas;
    }

    private _setPosValue() {
        this._closePosX = this._canvas.designResolution.width/2 + this.menuPrefab.data.width/2;
        this._openPosX = this._canvas.designResolution.width/2 - this.menuPrefab.data.width/2;
    }

    private _setPrefabParameters(){
        this.menuPrefab.data.position = new cc.Vec3(this._closePosX, 0, 0);
        this.menuPrefab.data.height = this._canvas.designResolution.height;
    }

    openMainMenu() {
        this._menuNode = cc.instantiate(this.menuPrefab);
        this.node.addChild(this._menuNode);

        let openPos = new cc.Vec3(this._openPosX, 0, 0);
        cc.tween(this._menuNode).to(0.3, { position: openPos }).start();        
    }
}

