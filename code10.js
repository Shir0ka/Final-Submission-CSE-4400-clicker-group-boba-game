gdjs.tutorialCode = {};
gdjs.tutorialCode.localVariables = [];
gdjs.tutorialCode.GDNewVideoObjects1= [];
gdjs.tutorialCode.GDNewVideoObjects2= [];
gdjs.tutorialCode.GDBlackDecoratedButtonObjects1= [];
gdjs.tutorialCode.GDBlackDecoratedButtonObjects2= [];
gdjs.tutorialCode.GDSquareWhiteSliderObjects1= [];
gdjs.tutorialCode.GDSquareWhiteSliderObjects2= [];
gdjs.tutorialCode.GDBlackDecoratedButton2Objects1= [];
gdjs.tutorialCode.GDBlackDecoratedButton2Objects2= [];


gdjs.tutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.tutorialCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.tutorialCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.tutorialCode.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.tutorialCode.GDBlackDecoratedButtonObjects1[k] = gdjs.tutorialCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.tutorialCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.tutorialCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewVideoObjects1[i].pause();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.tutorialCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewVideoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.tutorialCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.tutorialCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.tutorialCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.tutorialCode.GDSquareWhiteSliderObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.tutorialCode.GDSquareWhiteSliderObjects1[k] = gdjs.tutorialCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.tutorialCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.tutorialCode.GDNewVideoObjects1);
/* Reuse gdjs.tutorialCode.GDSquareWhiteSliderObjects1 */
{for(var i = 0, len = gdjs.tutorialCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewVideoObjects1[i].setVolume((( gdjs.tutorialCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.tutorialCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton2"), gdjs.tutorialCode.GDBlackDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.tutorialCode.GDBlackDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.tutorialCode.GDBlackDecoratedButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.tutorialCode.GDBlackDecoratedButton2Objects1[k] = gdjs.tutorialCode.GDBlackDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.tutorialCode.GDBlackDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level scene", false);
}}

}


};

gdjs.tutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tutorialCode.GDNewVideoObjects1.length = 0;
gdjs.tutorialCode.GDNewVideoObjects2.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.tutorialCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.tutorialCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButton2Objects2.length = 0;

gdjs.tutorialCode.eventsList0(runtimeScene);
gdjs.tutorialCode.GDNewVideoObjects1.length = 0;
gdjs.tutorialCode.GDNewVideoObjects2.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.tutorialCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.tutorialCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.tutorialCode.GDBlackDecoratedButton2Objects2.length = 0;


return;

}

gdjs['tutorialCode'] = gdjs.tutorialCode;
