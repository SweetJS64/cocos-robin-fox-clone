const {ccclass, property} = cc._decorator;

@ccclass
export default class UpgradeConstruction extends cc.Component {

    @property(cc.Prefab)
    smokePrefab: cc.Prefab = null;
    @property(cc.SpriteFrame)
    firstGrade: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    secondGrade: cc.SpriteFrame = null;
    @property(cc.Label)
    balanceLabel: cc.Label = null;

    private _spriteComponent: cc.Sprite = null;
    private _gradeId: number;
    private _price: number = 1000;
    private _canvas: cc.Canvas;

    start () {
        this._spriteComponent = this.getComponent(cc.Sprite);
        if (this._spriteComponent.spriteFrame == null) {
            this._gradeId = 0;//TODO: add updateGrade(cc.Model)
        }
        this._getCanvas();
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

    private _checkGrade(){
        if(this._gradeId>1) return null;

        let nextSprite: cc.SpriteFrame;

        switch(this._gradeId){
            case 0:
                nextSprite = this.firstGrade;
                break;
            case 1:
                nextSprite = this.secondGrade;
                break;
        }        
        return nextSprite;
    }

    upgradeConstruction () {
        if (Number(this.balanceLabel.string) < this._price) return;
        if (this._gradeId > 1) return;

        const prefabInstance = cc.instantiate(this.smokePrefab);
        this.node.addChild(prefabInstance);
        
        let nextSprite = this._checkGrade();
        
        cc.tween(this.node).to(1, { scale: 0 })
        .call(() => {
            this._spriteComponent.spriteFrame = nextSprite;
        }).to(1, { scale: 1 }).call(() => {
            prefabInstance.destroy();
        }).start();

        this._gradeId++;
        this.balanceLabel.string = (Number(this.balanceLabel.string) - this._price).toString();
    }
}
