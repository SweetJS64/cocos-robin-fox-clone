const {ccclass, property} = cc._decorator;

@ccclass
export default class upgradeConstruction extends cc.Component {

    @property(cc.Prefab)
    smokePrefab: cc.Prefab = null;
    @property(cc.SpriteFrame)
    firstGrade: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    secondGrade: cc.SpriteFrame = null;

    private _spriteComponent: cc.Sprite = null;
    private _grade: number;
    private _canvas: cc.Canvas;

    start () {
        this._spriteComponent = this.getComponent(cc.Sprite);
        if (this._spriteComponent.spriteFrame == null) {
            this._grade = 0;
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

    upgradeConstruction () {
        

        const prefabInstance = cc.instantiate(this.smokePrefab);
        prefabInstance.position = this.node.position;
        this._canvas.node.addChild(prefabInstance);
        
        let nextSprite
        
        cc.tween(this.node).to(1, { scale: 0 })
        .call(() => {
            this._spriteComponent.spriteFrame = nextSprite;
        }).to(1, { scale: 1 }).call(() => {
            prefabInstance.destroy();
        }).start();

        this._grade++;
    }

    checkGrade(){
        if(this._grade>1) return null;

        let nextSprite: cc.SpriteFrame;

        switch(this._grade){
            case 0:
                nextSprite = this.firstGrade;
                break;
            case 1:
                nextSprite = this.secondGrade;
                break;
        }        
        return nextSprite;
    }
}
