gdjs.setting_32menuCode = {};
gdjs.setting_32menuCode.localVariables = [];
gdjs.setting_32menuCode.GDNewTiledSpriteObjects1= [];
gdjs.setting_32menuCode.GDNewTiledSpriteObjects2= [];
gdjs.setting_32menuCode.GDMUSICObjects1= [];
gdjs.setting_32menuCode.GDMUSICObjects2= [];
gdjs.setting_32menuCode.GDNewTiledSprite2Objects1= [];
gdjs.setting_32menuCode.GDNewTiledSprite2Objects2= [];
gdjs.setting_32menuCode.GDmusic_9595sliderObjects1= [];
gdjs.setting_32menuCode.GDmusic_9595sliderObjects2= [];
gdjs.setting_32menuCode.GDsoundObjects1= [];
gdjs.setting_32menuCode.GDsoundObjects2= [];
gdjs.setting_32menuCode.GDsound_9595sliderObjects1= [];
gdjs.setting_32menuCode.GDsound_9595sliderObjects2= [];
gdjs.setting_32menuCode.GDbackObjects1= [];
gdjs.setting_32menuCode.GDbackObjects2= [];
gdjs.setting_32menuCode.GDnew_9595new_9595music_9595sliderObjects1= [];
gdjs.setting_32menuCode.GDnew_9595new_9595music_9595sliderObjects2= [];
gdjs.setting_32menuCode.GDSquareWhiteSliderObjects1= [];
gdjs.setting_32menuCode.GDSquareWhiteSliderObjects2= [];
gdjs.setting_32menuCode.GDSquareBlueToggleObjects1= [];
gdjs.setting_32menuCode.GDSquareBlueToggleObjects2= [];


gdjs.setting_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("music_slider"), gdjs.setting_32menuCode.GDmusic_9595sliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setting_32menuCode.GDmusic_9595sliderObjects1.length;i<l;++i) {
    if ( gdjs.setting_32menuCode.GDmusic_9595sliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.setting_32menuCode.GDmusic_9595sliderObjects1[k] = gdjs.setting_32menuCode.GDmusic_9595sliderObjects1[i];
        ++k;
    }
}
gdjs.setting_32menuCode.GDmusic_9595sliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.setting_32menuCode.GDmusic_9595sliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.setting_32menuCode.GDmusic_9595sliderObjects1.length === 0 ) ? 0 :gdjs.setting_32menuCode.GDmusic_9595sliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, (( gdjs.setting_32menuCode.GDmusic_9595sliderObjects1.length === 0 ) ? 0 :gdjs.setting_32menuCode.GDmusic_9595sliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sound_slider"), gdjs.setting_32menuCode.GDsound_9595sliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setting_32menuCode.GDsound_9595sliderObjects1.length;i<l;++i) {
    if ( gdjs.setting_32menuCode.GDsound_9595sliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.setting_32menuCode.GDsound_9595sliderObjects1[k] = gdjs.setting_32menuCode.GDsound_9595sliderObjects1[i];
        ++k;
    }
}
gdjs.setting_32menuCode.GDsound_9595sliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.setting_32menuCode.GDsound_9595sliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.setting_32menuCode.GDsound_9595sliderObjects1.length === 0 ) ? 0 :gdjs.setting_32menuCode.GDsound_9595sliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.setting_32menuCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setting_32menuCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.setting_32menuCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.setting_32menuCode.GDbackObjects1[k] = gdjs.setting_32menuCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.setting_32menuCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MUSIC"), gdjs.setting_32menuCode.GDMUSICObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setting_32menuCode.GDMUSICObjects1.length;i<l;++i) {
    if ( gdjs.setting_32menuCode.GDMUSICObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.setting_32menuCode.GDMUSICObjects1[k] = gdjs.setting_32menuCode.GDMUSICObjects1[i];
        ++k;
    }
}
gdjs.setting_32menuCode.GDMUSICObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.setting_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.setting_32menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.setting_32menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.setting_32menuCode.GDMUSICObjects1.length = 0;
gdjs.setting_32menuCode.GDMUSICObjects2.length = 0;
gdjs.setting_32menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.setting_32menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.setting_32menuCode.GDmusic_9595sliderObjects1.length = 0;
gdjs.setting_32menuCode.GDmusic_9595sliderObjects2.length = 0;
gdjs.setting_32menuCode.GDsoundObjects1.length = 0;
gdjs.setting_32menuCode.GDsoundObjects2.length = 0;
gdjs.setting_32menuCode.GDsound_9595sliderObjects1.length = 0;
gdjs.setting_32menuCode.GDsound_9595sliderObjects2.length = 0;
gdjs.setting_32menuCode.GDbackObjects1.length = 0;
gdjs.setting_32menuCode.GDbackObjects2.length = 0;
gdjs.setting_32menuCode.GDnew_9595new_9595music_9595sliderObjects1.length = 0;
gdjs.setting_32menuCode.GDnew_9595new_9595music_9595sliderObjects2.length = 0;
gdjs.setting_32menuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.setting_32menuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.setting_32menuCode.GDSquareBlueToggleObjects1.length = 0;
gdjs.setting_32menuCode.GDSquareBlueToggleObjects2.length = 0;

gdjs.setting_32menuCode.eventsList0(runtimeScene);
gdjs.setting_32menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.setting_32menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.setting_32menuCode.GDMUSICObjects1.length = 0;
gdjs.setting_32menuCode.GDMUSICObjects2.length = 0;
gdjs.setting_32menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.setting_32menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.setting_32menuCode.GDmusic_9595sliderObjects1.length = 0;
gdjs.setting_32menuCode.GDmusic_9595sliderObjects2.length = 0;
gdjs.setting_32menuCode.GDsoundObjects1.length = 0;
gdjs.setting_32menuCode.GDsoundObjects2.length = 0;
gdjs.setting_32menuCode.GDsound_9595sliderObjects1.length = 0;
gdjs.setting_32menuCode.GDsound_9595sliderObjects2.length = 0;
gdjs.setting_32menuCode.GDbackObjects1.length = 0;
gdjs.setting_32menuCode.GDbackObjects2.length = 0;
gdjs.setting_32menuCode.GDnew_9595new_9595music_9595sliderObjects1.length = 0;
gdjs.setting_32menuCode.GDnew_9595new_9595music_9595sliderObjects2.length = 0;
gdjs.setting_32menuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.setting_32menuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.setting_32menuCode.GDSquareBlueToggleObjects1.length = 0;
gdjs.setting_32menuCode.GDSquareBlueToggleObjects2.length = 0;


return;

}

gdjs['setting_32menuCode'] = gdjs.setting_32menuCode;
