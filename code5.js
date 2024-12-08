gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1= [];
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects2= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects1= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level_Sector_button"), gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1[k] = gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level scene", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1.length = 0;
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects1.length = 0;
gdjs.GameOverCode.GDLevel_9595Sector_9595buttonObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
