gdjs.GOOD_32JOBCode = {};
gdjs.GOOD_32JOBCode.localVariables = [];
gdjs.GOOD_32JOBCode.GDNewTiledSpriteObjects1= [];
gdjs.GOOD_32JOBCode.GDNewTiledSpriteObjects2= [];
gdjs.GOOD_32JOBCode.GDNewSpriteObjects1= [];
gdjs.GOOD_32JOBCode.GDNewSpriteObjects2= [];
gdjs.GOOD_32JOBCode.GDNewTiledSprite2Objects1= [];
gdjs.GOOD_32JOBCode.GDNewTiledSprite2Objects2= [];
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];


gdjs.GOOD_32JOBCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level scene", false);
}}

}


};

gdjs.GOOD_32JOBCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GOOD_32JOBCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GOOD_32JOBCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GOOD_32JOBCode.GDNewSpriteObjects1.length = 0;
gdjs.GOOD_32JOBCode.GDNewSpriteObjects2.length = 0;
gdjs.GOOD_32JOBCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GOOD_32JOBCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;

gdjs.GOOD_32JOBCode.eventsList0(runtimeScene);
gdjs.GOOD_32JOBCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GOOD_32JOBCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GOOD_32JOBCode.GDNewSpriteObjects1.length = 0;
gdjs.GOOD_32JOBCode.GDNewSpriteObjects2.length = 0;
gdjs.GOOD_32JOBCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GOOD_32JOBCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GOOD_32JOBCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;


return;

}

gdjs['GOOD_32JOBCode'] = gdjs.GOOD_32JOBCode;
