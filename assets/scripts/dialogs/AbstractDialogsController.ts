const {ccclass} = cc._decorator;

@ccclass
export default abstract class AbstractDialogsController extends cc.Component {
    canvas: cc.Canvas;
    darkeningBg: cc.Node;
    openPos: cc.Vec3;
    closePos: cc.Vec3;

    init(canvas: cc.Canvas, darkeningBg: cc.Node) {
        this.canvas = canvas;
        this.darkeningBg = darkeningBg;
        this.node.active = false;
    }

    open() {
        this.darkeningBg.active = true;
        this.node.active = true;
        cc.tween(this.node)
        .to(0.3, { position: this.openPos })
        .start();
    }

    close() {
        cc.tween(this.node)
        .to(0.3, { position: this.closePos })
        .call(() => {
            this.node.active = false;
            this.darkeningBg.active = false;
        })
        .start();
    }
}
