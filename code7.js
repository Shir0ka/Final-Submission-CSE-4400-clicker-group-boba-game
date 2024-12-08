gdjs.story2Code = {};
gdjs.story2Code.localVariables = [];
gdjs.story2Code.GDNewSpriteObjects1= [];
gdjs.story2Code.GDNewSpriteObjects2= [];
gdjs.story2Code.GDNewSpriteObjects3= [];
gdjs.story2Code.GDNewSprite2Objects1= [];
gdjs.story2Code.GDNewSprite2Objects2= [];
gdjs.story2Code.GDNewSprite2Objects3= [];
gdjs.story2Code.GDNewSprite3Objects1= [];
gdjs.story2Code.GDNewSprite3Objects2= [];
gdjs.story2Code.GDNewSprite3Objects3= [];
gdjs.story2Code.GDnameObjects1= [];
gdjs.story2Code.GDnameObjects2= [];
gdjs.story2Code.GDnameObjects3= [];
gdjs.story2Code.GDdialogeBoxObjects1= [];
gdjs.story2Code.GDdialogeBoxObjects2= [];
gdjs.story2Code.GDdialogeBoxObjects3= [];
gdjs.story2Code.GDNameTextObjects1= [];
gdjs.story2Code.GDNameTextObjects2= [];
gdjs.story2Code.GDNameTextObjects3= [];
gdjs.story2Code.GDDialogueTextObjects1= [];
gdjs.story2Code.GDDialogueTextObjects2= [];
gdjs.story2Code.GDDialogueTextObjects3= [];
gdjs.story2Code.GDbackObjects1= [];
gdjs.story2Code.GDbackObjects2= [];
gdjs.story2Code.GDbackObjects3= [];
gdjs.story2Code.GDNewSprite4Objects1= [];
gdjs.story2Code.GDNewSprite4Objects2= [];
gdjs.story2Code.GDNewSprite4Objects3= [];
gdjs.story2Code.GDNewTiledSpriteObjects1= [];
gdjs.story2Code.GDNewTiledSpriteObjects2= [];
gdjs.story2Code.GDNewTiledSpriteObjects3= [];
gdjs.story2Code.GDBlackDecoratedButtonObjects1= [];
gdjs.story2Code.GDBlackDecoratedButtonObjects2= [];
gdjs.story2Code.GDBlackDecoratedButtonObjects3= [];
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects3= [];
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects3= [];


gdjs.story2Code.eventsList0 = function(runtimeScene) {

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


};gdjs.story2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}{gdjs.dialogueTree.startFrom("Begin");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueText"), gdjs.story2Code.GDDialogueTextObjects1);
{for(var i = 0, len = gdjs.story2Code.GDDialogueTextObjects1.length ;i < len;++i) {
    gdjs.story2Code.GDDialogueTextObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.story2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Hanni.T");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.story2Code.GDNameTextObjects1);
{for(var i = 0, len = gdjs.story2Code.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.story2Code.GDNameTextObjects1[i].setBBText("[b][color=#98FF98]Hanni.T[/color][/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("BoB.A");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.story2Code.GDNameTextObjects1);
{for(var i = 0, len = gdjs.story2Code.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.story2Code.GDNameTextObjects1[i].setBBText("[b][color=#FF0000]BoB.A[/color][/b]");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.story2Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.story2Code.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.story2Code.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.story2Code.GDbackObjects1[k] = gdjs.story2Code.GDbackObjects1[i];
        ++k;
    }
}
gdjs.story2Code.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.story2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.story2Code.GDNewSpriteObjects1.length = 0;
gdjs.story2Code.GDNewSpriteObjects2.length = 0;
gdjs.story2Code.GDNewSpriteObjects3.length = 0;
gdjs.story2Code.GDNewSprite2Objects1.length = 0;
gdjs.story2Code.GDNewSprite2Objects2.length = 0;
gdjs.story2Code.GDNewSprite2Objects3.length = 0;
gdjs.story2Code.GDNewSprite3Objects1.length = 0;
gdjs.story2Code.GDNewSprite3Objects2.length = 0;
gdjs.story2Code.GDNewSprite3Objects3.length = 0;
gdjs.story2Code.GDnameObjects1.length = 0;
gdjs.story2Code.GDnameObjects2.length = 0;
gdjs.story2Code.GDnameObjects3.length = 0;
gdjs.story2Code.GDdialogeBoxObjects1.length = 0;
gdjs.story2Code.GDdialogeBoxObjects2.length = 0;
gdjs.story2Code.GDdialogeBoxObjects3.length = 0;
gdjs.story2Code.GDNameTextObjects1.length = 0;
gdjs.story2Code.GDNameTextObjects2.length = 0;
gdjs.story2Code.GDNameTextObjects3.length = 0;
gdjs.story2Code.GDDialogueTextObjects1.length = 0;
gdjs.story2Code.GDDialogueTextObjects2.length = 0;
gdjs.story2Code.GDDialogueTextObjects3.length = 0;
gdjs.story2Code.GDbackObjects1.length = 0;
gdjs.story2Code.GDbackObjects2.length = 0;
gdjs.story2Code.GDbackObjects3.length = 0;
gdjs.story2Code.GDNewSprite4Objects1.length = 0;
gdjs.story2Code.GDNewSprite4Objects2.length = 0;
gdjs.story2Code.GDNewSprite4Objects3.length = 0;
gdjs.story2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.story2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.story2Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.story2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.story2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.story2Code.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects3.length = 0;

gdjs.story2Code.eventsList1(runtimeScene);
gdjs.story2Code.GDNewSpriteObjects1.length = 0;
gdjs.story2Code.GDNewSpriteObjects2.length = 0;
gdjs.story2Code.GDNewSpriteObjects3.length = 0;
gdjs.story2Code.GDNewSprite2Objects1.length = 0;
gdjs.story2Code.GDNewSprite2Objects2.length = 0;
gdjs.story2Code.GDNewSprite2Objects3.length = 0;
gdjs.story2Code.GDNewSprite3Objects1.length = 0;
gdjs.story2Code.GDNewSprite3Objects2.length = 0;
gdjs.story2Code.GDNewSprite3Objects3.length = 0;
gdjs.story2Code.GDnameObjects1.length = 0;
gdjs.story2Code.GDnameObjects2.length = 0;
gdjs.story2Code.GDnameObjects3.length = 0;
gdjs.story2Code.GDdialogeBoxObjects1.length = 0;
gdjs.story2Code.GDdialogeBoxObjects2.length = 0;
gdjs.story2Code.GDdialogeBoxObjects3.length = 0;
gdjs.story2Code.GDNameTextObjects1.length = 0;
gdjs.story2Code.GDNameTextObjects2.length = 0;
gdjs.story2Code.GDNameTextObjects3.length = 0;
gdjs.story2Code.GDDialogueTextObjects1.length = 0;
gdjs.story2Code.GDDialogueTextObjects2.length = 0;
gdjs.story2Code.GDDialogueTextObjects3.length = 0;
gdjs.story2Code.GDbackObjects1.length = 0;
gdjs.story2Code.GDbackObjects2.length = 0;
gdjs.story2Code.GDbackObjects3.length = 0;
gdjs.story2Code.GDNewSprite4Objects1.length = 0;
gdjs.story2Code.GDNewSprite4Objects2.length = 0;
gdjs.story2Code.GDNewSprite4Objects3.length = 0;
gdjs.story2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.story2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.story2Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.story2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.story2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.story2Code.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.story2Code.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.story2Code.GDTransparentButtonWithWhiteYellowBorderObjects3.length = 0;


return;

}

gdjs['story2Code'] = gdjs.story2Code;
