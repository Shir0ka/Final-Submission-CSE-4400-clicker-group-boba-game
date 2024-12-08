gdjs.level_32sceneCode = {};
gdjs.level_32sceneCode.localVariables = [];
gdjs.level_32sceneCode.GDNewSpriteObjects1= [];
gdjs.level_32sceneCode.GDNewSpriteObjects2= [];
gdjs.level_32sceneCode.GDLevel1Objects1= [];
gdjs.level_32sceneCode.GDLevel1Objects2= [];
gdjs.level_32sceneCode.GDLevel2Objects1= [];
gdjs.level_32sceneCode.GDLevel2Objects2= [];
gdjs.level_32sceneCode.GDLevel3Objects1= [];
gdjs.level_32sceneCode.GDLevel3Objects2= [];
gdjs.level_32sceneCode.GDBackObjects1= [];
gdjs.level_32sceneCode.GDBackObjects2= [];
gdjs.level_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.level_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.level_32sceneCode.GDNewSprite2Objects1= [];
gdjs.level_32sceneCode.GDNewSprite2Objects2= [];
gdjs.level_32sceneCode.GDNewTiledSprite2Objects1= [];
gdjs.level_32sceneCode.GDNewTiledSprite2Objects2= [];
gdjs.level_32sceneCode.GDStoryObjects1= [];
gdjs.level_32sceneCode.GDStoryObjects2= [];
gdjs.level_32sceneCode.GDNewTiledSprite3Objects1= [];
gdjs.level_32sceneCode.GDNewTiledSprite3Objects2= [];
gdjs.level_32sceneCode.GDtutorialObjects1= [];
gdjs.level_32sceneCode.GDtutorialObjects2= [];


gdjs.level_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.level_32sceneCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32sceneCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.level_32sceneCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32sceneCode.GDBackObjects1[k] = gdjs.level_32sceneCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.level_32sceneCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.level_32sceneCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32sceneCode.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.level_32sceneCode.GDLevel1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32sceneCode.GDLevel1Objects1[k] = gdjs.level_32sceneCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.level_32sceneCode.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.level_32sceneCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32sceneCode.GDLevel2Objects1.length;i<l;++i) {
    if ( gdjs.level_32sceneCode.GDLevel2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32sceneCode.GDLevel2Objects1[k] = gdjs.level_32sceneCode.GDLevel2Objects1[i];
        ++k;
    }
}
gdjs.level_32sceneCode.GDLevel2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.level_32sceneCode.GDLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32sceneCode.GDLevel3Objects1.length;i<l;++i) {
    if ( gdjs.level_32sceneCode.GDLevel3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32sceneCode.GDLevel3Objects1[k] = gdjs.level_32sceneCode.GDLevel3Objects1[i];
        ++k;
    }
}
gdjs.level_32sceneCode.GDLevel3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Story"), gdjs.level_32sceneCode.GDStoryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32sceneCode.GDStoryObjects1.length;i<l;++i) {
    if ( gdjs.level_32sceneCode.GDStoryObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32sceneCode.GDStoryObjects1[k] = gdjs.level_32sceneCode.GDStoryObjects1[i];
        ++k;
    }
}
gdjs.level_32sceneCode.GDStoryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "story", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.level_32sceneCode.GDtutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32sceneCode.GDtutorialObjects1.length;i<l;++i) {
    if ( gdjs.level_32sceneCode.GDtutorialObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32sceneCode.GDtutorialObjects1[k] = gdjs.level_32sceneCode.GDtutorialObjects1[i];
        ++k;
    }
}
gdjs.level_32sceneCode.GDtutorialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.level_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.level_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.level_32sceneCode.GDLevel1Objects1.length = 0;
gdjs.level_32sceneCode.GDLevel1Objects2.length = 0;
gdjs.level_32sceneCode.GDLevel2Objects1.length = 0;
gdjs.level_32sceneCode.GDLevel2Objects2.length = 0;
gdjs.level_32sceneCode.GDLevel3Objects1.length = 0;
gdjs.level_32sceneCode.GDLevel3Objects2.length = 0;
gdjs.level_32sceneCode.GDBackObjects1.length = 0;
gdjs.level_32sceneCode.GDBackObjects2.length = 0;
gdjs.level_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.level_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.level_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.level_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.level_32sceneCode.GDStoryObjects1.length = 0;
gdjs.level_32sceneCode.GDStoryObjects2.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.level_32sceneCode.GDtutorialObjects1.length = 0;
gdjs.level_32sceneCode.GDtutorialObjects2.length = 0;

gdjs.level_32sceneCode.eventsList0(runtimeScene);
gdjs.level_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.level_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.level_32sceneCode.GDLevel1Objects1.length = 0;
gdjs.level_32sceneCode.GDLevel1Objects2.length = 0;
gdjs.level_32sceneCode.GDLevel2Objects1.length = 0;
gdjs.level_32sceneCode.GDLevel2Objects2.length = 0;
gdjs.level_32sceneCode.GDLevel3Objects1.length = 0;
gdjs.level_32sceneCode.GDLevel3Objects2.length = 0;
gdjs.level_32sceneCode.GDBackObjects1.length = 0;
gdjs.level_32sceneCode.GDBackObjects2.length = 0;
gdjs.level_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.level_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.level_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.level_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.level_32sceneCode.GDStoryObjects1.length = 0;
gdjs.level_32sceneCode.GDStoryObjects2.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.level_32sceneCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.level_32sceneCode.GDtutorialObjects1.length = 0;
gdjs.level_32sceneCode.GDtutorialObjects2.length = 0;


return;

}

gdjs['level_32sceneCode'] = gdjs.level_32sceneCode;
