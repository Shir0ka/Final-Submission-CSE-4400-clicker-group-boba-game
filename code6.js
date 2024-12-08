gdjs.storyCode = {};
gdjs.storyCode.localVariables = [];
gdjs.storyCode.GDNewSpriteObjects1= [];
gdjs.storyCode.GDNewSpriteObjects2= [];
gdjs.storyCode.GDNewSpriteObjects3= [];
gdjs.storyCode.GDNewSprite2Objects1= [];
gdjs.storyCode.GDNewSprite2Objects2= [];
gdjs.storyCode.GDNewSprite2Objects3= [];
gdjs.storyCode.GDNewSprite3Objects1= [];
gdjs.storyCode.GDNewSprite3Objects2= [];
gdjs.storyCode.GDNewSprite3Objects3= [];
gdjs.storyCode.GDnameObjects1= [];
gdjs.storyCode.GDnameObjects2= [];
gdjs.storyCode.GDnameObjects3= [];
gdjs.storyCode.GDdialogeBoxObjects1= [];
gdjs.storyCode.GDdialogeBoxObjects2= [];
gdjs.storyCode.GDdialogeBoxObjects3= [];
gdjs.storyCode.GDNameTextObjects1= [];
gdjs.storyCode.GDNameTextObjects2= [];
gdjs.storyCode.GDNameTextObjects3= [];
gdjs.storyCode.GDDialogueTextObjects1= [];
gdjs.storyCode.GDDialogueTextObjects2= [];
gdjs.storyCode.GDDialogueTextObjects3= [];
gdjs.storyCode.GDbackObjects1= [];
gdjs.storyCode.GDbackObjects2= [];
gdjs.storyCode.GDbackObjects3= [];
gdjs.storyCode.GDNewSprite4Objects1= [];
gdjs.storyCode.GDNewSprite4Objects2= [];
gdjs.storyCode.GDNewSprite4Objects3= [];
gdjs.storyCode.GDNewTiledSpriteObjects1= [];
gdjs.storyCode.GDNewTiledSpriteObjects2= [];
gdjs.storyCode.GDNewTiledSpriteObjects3= [];
gdjs.storyCode.GDBlackDecoratedButtonObjects1= [];
gdjs.storyCode.GDBlackDecoratedButtonObjects2= [];
gdjs.storyCode.GDBlackDecoratedButtonObjects3= [];
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects3= [];
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects3= [];
gdjs.storyCode.GDNewTiledSprite2Objects1= [];
gdjs.storyCode.GDNewTiledSprite2Objects2= [];
gdjs.storyCode.GDNewTiledSprite2Objects3= [];


gdjs.storyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "typewriter") >= 0.0001;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.storyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "DialogueData");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}{gdjs.dialogueTree.startFrom("Begin");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueText"), gdjs.storyCode.GDDialogueTextObjects1);
{for(var i = 0, len = gdjs.storyCode.GDDialogueTextObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDDialogueTextObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.storyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Hanni.T");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.storyCode.GDNameTextObjects1);
{for(var i = 0, len = gdjs.storyCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDNameTextObjects1[i].setBBText("[b][color=#98FF98]Hanni.T[/color][/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("BoB.A");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.storyCode.GDNameTextObjects1);
{for(var i = 0, len = gdjs.storyCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDNameTextObjects1[i].setBBText("[b][color=#FF0000]BoB.A[/color][/b]");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.storyCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.storyCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.storyCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.storyCode.GDbackObjects1[k] = gdjs.storyCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.storyCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.storyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.storyCode.GDNewSpriteObjects1.length = 0;
gdjs.storyCode.GDNewSpriteObjects2.length = 0;
gdjs.storyCode.GDNewSpriteObjects3.length = 0;
gdjs.storyCode.GDNewSprite2Objects1.length = 0;
gdjs.storyCode.GDNewSprite2Objects2.length = 0;
gdjs.storyCode.GDNewSprite2Objects3.length = 0;
gdjs.storyCode.GDNewSprite3Objects1.length = 0;
gdjs.storyCode.GDNewSprite3Objects2.length = 0;
gdjs.storyCode.GDNewSprite3Objects3.length = 0;
gdjs.storyCode.GDnameObjects1.length = 0;
gdjs.storyCode.GDnameObjects2.length = 0;
gdjs.storyCode.GDnameObjects3.length = 0;
gdjs.storyCode.GDdialogeBoxObjects1.length = 0;
gdjs.storyCode.GDdialogeBoxObjects2.length = 0;
gdjs.storyCode.GDdialogeBoxObjects3.length = 0;
gdjs.storyCode.GDNameTextObjects1.length = 0;
gdjs.storyCode.GDNameTextObjects2.length = 0;
gdjs.storyCode.GDNameTextObjects3.length = 0;
gdjs.storyCode.GDDialogueTextObjects1.length = 0;
gdjs.storyCode.GDDialogueTextObjects2.length = 0;
gdjs.storyCode.GDDialogueTextObjects3.length = 0;
gdjs.storyCode.GDbackObjects1.length = 0;
gdjs.storyCode.GDbackObjects2.length = 0;
gdjs.storyCode.GDbackObjects3.length = 0;
gdjs.storyCode.GDNewSprite4Objects1.length = 0;
gdjs.storyCode.GDNewSprite4Objects2.length = 0;
gdjs.storyCode.GDNewSprite4Objects3.length = 0;
gdjs.storyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.storyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.storyCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.storyCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.storyCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.storyCode.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects3.length = 0;
gdjs.storyCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.storyCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.storyCode.GDNewTiledSprite2Objects3.length = 0;

gdjs.storyCode.eventsList1(runtimeScene);
gdjs.storyCode.GDNewSpriteObjects1.length = 0;
gdjs.storyCode.GDNewSpriteObjects2.length = 0;
gdjs.storyCode.GDNewSpriteObjects3.length = 0;
gdjs.storyCode.GDNewSprite2Objects1.length = 0;
gdjs.storyCode.GDNewSprite2Objects2.length = 0;
gdjs.storyCode.GDNewSprite2Objects3.length = 0;
gdjs.storyCode.GDNewSprite3Objects1.length = 0;
gdjs.storyCode.GDNewSprite3Objects2.length = 0;
gdjs.storyCode.GDNewSprite3Objects3.length = 0;
gdjs.storyCode.GDnameObjects1.length = 0;
gdjs.storyCode.GDnameObjects2.length = 0;
gdjs.storyCode.GDnameObjects3.length = 0;
gdjs.storyCode.GDdialogeBoxObjects1.length = 0;
gdjs.storyCode.GDdialogeBoxObjects2.length = 0;
gdjs.storyCode.GDdialogeBoxObjects3.length = 0;
gdjs.storyCode.GDNameTextObjects1.length = 0;
gdjs.storyCode.GDNameTextObjects2.length = 0;
gdjs.storyCode.GDNameTextObjects3.length = 0;
gdjs.storyCode.GDDialogueTextObjects1.length = 0;
gdjs.storyCode.GDDialogueTextObjects2.length = 0;
gdjs.storyCode.GDDialogueTextObjects3.length = 0;
gdjs.storyCode.GDbackObjects1.length = 0;
gdjs.storyCode.GDbackObjects2.length = 0;
gdjs.storyCode.GDbackObjects3.length = 0;
gdjs.storyCode.GDNewSprite4Objects1.length = 0;
gdjs.storyCode.GDNewSprite4Objects2.length = 0;
gdjs.storyCode.GDNewSprite4Objects3.length = 0;
gdjs.storyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.storyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.storyCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.storyCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.storyCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.storyCode.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.storyCode.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.storyCode.GDTransparentButtonWithWhiteYellowBorderObjects3.length = 0;
gdjs.storyCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.storyCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.storyCode.GDNewTiledSprite2Objects3.length = 0;


return;

}

gdjs['storyCode'] = gdjs.storyCode;
