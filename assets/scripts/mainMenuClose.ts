const {ccclass, property} = cc._decorator;

@ccclass
export default class mainMenuClose extends cc.Component {

    private _canvasNode: cc.Canvas;

    closeMainMenu() {

        let node = this.node;
        let canvas = node.getComponent(cc.Canvas);
        while (!canvas) {
            node = node.parent;
            canvas = node.getComponent(cc.Canvas);
        }
        this._canvasNode = canvas;
        let _closePosX =  this._canvasNode.designResolution.width/2 + this.node.width/2;
        let closePos = new cc.Vec3(_closePosX, 0, 0);
        cc.tween(this.node).to(0.2, { position: closePos })
        .call(() => {
        this.node.destroy();
    })
    .start();
    }
}
