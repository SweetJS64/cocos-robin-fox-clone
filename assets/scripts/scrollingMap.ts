const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollingMap extends cc.Component {
    private _onSlots: Boolean = false;

    goToSlots(){
        if(this._onSlots) return;
        let wrapMode = cc.WrapMode.Normal; 
        this._playScroll(wrapMode);
        this._onSlots = true;
    }

    goToHome(){
        if(!this._onSlots) return;
        let wrapMode = cc.WrapMode.Reverse; 
        this._playScroll(wrapMode);
        this._onSlots = false;
    }
    
    private _playScroll(wrapMode: cc.WrapMode){
        const anim = this.getComponent(cc.Animation);
        anim.play('scrollingMainMap').wrapMode = wrapMode; 
        anim.play('scrollingMainMap');
    }
}
