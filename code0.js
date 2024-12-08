gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.localVariables = [];
gdjs.Main_32menuCode.GDNewSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewSpriteObjects2= [];
gdjs.Main_32menuCode.GDPlay_9595buttonObjects1= [];
gdjs.Main_32menuCode.GDPlay_9595buttonObjects2= [];
gdjs.Main_32menuCode.GDNewTiledSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewTiledSpriteObjects2= [];
gdjs.Main_32menuCode.GDNewTiledSprite2Objects1= [];
gdjs.Main_32menuCode.GDNewTiledSprite2Objects2= [];
gdjs.Main_32menuCode.GDblue_9595rulerObjects1= [];
gdjs.Main_32menuCode.GDblue_9595rulerObjects2= [];
gdjs.Main_32menuCode.GDTitleObjects1= [];
gdjs.Main_32menuCode.GDTitleObjects2= [];
gdjs.Main_32menuCode.GDnew_9595titleObjects1= [];
gdjs.Main_32menuCode.GDnew_9595titleObjects2= [];
gdjs.Main_32menuCode.GDquitObjects1= [];
gdjs.Main_32menuCode.GDquitObjects2= [];
gdjs.Main_32menuCode.GDsettingsObjects1= [];
gdjs.Main_32menuCode.GDsettingsObjects2= [];
gdjs.Main_32menuCode.GDmarker_9595objectObjects1= [];
gdjs.Main_32menuCode.GDmarker_9595objectObjects2= [];
gdjs.Main_32menuCode.GDmusicObjects1= [];
gdjs.Main_32menuCode.GDmusicObjects2= [];
gdjs.Main_32menuCode.GDsoundObjects1= [];
gdjs.Main_32menuCode.GDsoundObjects2= [];
gdjs.Main_32menuCode.GDmusic_9595sliderObjects1= [];
gdjs.Main_32menuCode.GDmusic_9595sliderObjects2= [];
gdjs.Main_32menuCode.GDsound_9595sliderObjects1= [];
gdjs.Main_32menuCode.GDsound_9595sliderObjects2= [];
gdjs.Main_32menuCode.GDbackObjects1= [];
gdjs.Main_32menuCode.GDbackObjects2= [];
gdjs.Main_32menuCode.GDsettingmarkerObjects1= [];
gdjs.Main_32menuCode.GDsettingmarkerObjects2= [];
gdjs.Main_32menuCode.GDNewTiledSprite3Objects1= [];
gdjs.Main_32menuCode.GDNewTiledSprite3Objects2= [];
gdjs.Main_32menuCode.GDPlay_9595button2Objects1= [];
gdjs.Main_32menuCode.GDPlay_9595button2Objects2= [];


gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17053428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "[ᴅᴀɴɪ.ʜᴢ] NewJeans (뉴진스) - Cookie (ver.lo-fi).mp3", 1, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.Main_32menuCode.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDPlay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDPlay_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDPlay_9595buttonObjects1[k] = gdjs.Main_32menuCode.GDPlay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDPlay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32menuCode.GDsettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDsettingsObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDsettingsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDsettingsObjects1[k] = gdjs.Main_32menuCode.GDsettingsObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDsettingsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "setting menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.Main_32menuCode.GDquitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDquitObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDquitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDquitObjects1[k] = gdjs.Main_32menuCode.GDquitObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDquitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("music_slider"), gdjs.Main_32menuCode.GDmusic_9595sliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("sound_slider"), gdjs.Main_32menuCode.GDsound_9595sliderObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.Main_32menuCode.GDmusic_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDmusic_9595sliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32menuCode.GDsound_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDsound_9595sliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Main_32menuCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDblue_9595rulerObjects1.length = 0;
gdjs.Main_32menuCode.GDblue_9595rulerObjects2.length = 0;
gdjs.Main_32menuCode.GDTitleObjects1.length = 0;
gdjs.Main_32menuCode.GDTitleObjects2.length = 0;
gdjs.Main_32menuCode.GDnew_9595titleObjects1.length = 0;
gdjs.Main_32menuCode.GDnew_9595titleObjects2.length = 0;
gdjs.Main_32menuCode.GDquitObjects1.length = 0;
gdjs.Main_32menuCode.GDquitObjects2.length = 0;
gdjs.Main_32menuCode.GDsettingsObjects1.length = 0;
gdjs.Main_32menuCode.GDsettingsObjects2.length = 0;
gdjs.Main_32menuCode.GDmarker_9595objectObjects1.length = 0;
gdjs.Main_32menuCode.GDmarker_9595objectObjects2.length = 0;
gdjs.Main_32menuCode.GDmusicObjects1.length = 0;
gdjs.Main_32menuCode.GDmusicObjects2.length = 0;
gdjs.Main_32menuCode.GDsoundObjects1.length = 0;
gdjs.Main_32menuCode.GDsoundObjects2.length = 0;
gdjs.Main_32menuCode.GDmusic_9595sliderObjects1.length = 0;
gdjs.Main_32menuCode.GDmusic_9595sliderObjects2.length = 0;
gdjs.Main_32menuCode.GDsound_9595sliderObjects1.length = 0;
gdjs.Main_32menuCode.GDsound_9595sliderObjects2.length = 0;
gdjs.Main_32menuCode.GDbackObjects1.length = 0;
gdjs.Main_32menuCode.GDbackObjects2.length = 0;
gdjs.Main_32menuCode.GDsettingmarkerObjects1.length = 0;
gdjs.Main_32menuCode.GDsettingmarkerObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.Main_32menuCode.GDPlay_9595button2Objects1.length = 0;
gdjs.Main_32menuCode.GDPlay_9595button2Objects2.length = 0;

gdjs.Main_32menuCode.eventsList0(runtimeScene);
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Main_32menuCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDblue_9595rulerObjects1.length = 0;
gdjs.Main_32menuCode.GDblue_9595rulerObjects2.length = 0;
gdjs.Main_32menuCode.GDTitleObjects1.length = 0;
gdjs.Main_32menuCode.GDTitleObjects2.length = 0;
gdjs.Main_32menuCode.GDnew_9595titleObjects1.length = 0;
gdjs.Main_32menuCode.GDnew_9595titleObjects2.length = 0;
gdjs.Main_32menuCode.GDquitObjects1.length = 0;
gdjs.Main_32menuCode.GDquitObjects2.length = 0;
gdjs.Main_32menuCode.GDsettingsObjects1.length = 0;
gdjs.Main_32menuCode.GDsettingsObjects2.length = 0;
gdjs.Main_32menuCode.GDmarker_9595objectObjects1.length = 0;
gdjs.Main_32menuCode.GDmarker_9595objectObjects2.length = 0;
gdjs.Main_32menuCode.GDmusicObjects1.length = 0;
gdjs.Main_32menuCode.GDmusicObjects2.length = 0;
gdjs.Main_32menuCode.GDsoundObjects1.length = 0;
gdjs.Main_32menuCode.GDsoundObjects2.length = 0;
gdjs.Main_32menuCode.GDmusic_9595sliderObjects1.length = 0;
gdjs.Main_32menuCode.GDmusic_9595sliderObjects2.length = 0;
gdjs.Main_32menuCode.GDsound_9595sliderObjects1.length = 0;
gdjs.Main_32menuCode.GDsound_9595sliderObjects2.length = 0;
gdjs.Main_32menuCode.GDbackObjects1.length = 0;
gdjs.Main_32menuCode.GDbackObjects2.length = 0;
gdjs.Main_32menuCode.GDsettingmarkerObjects1.length = 0;
gdjs.Main_32menuCode.GDsettingmarkerObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.Main_32menuCode.GDPlay_9595button2Objects1.length = 0;
gdjs.Main_32menuCode.GDPlay_9595button2Objects2.length = 0;


return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
