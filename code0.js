gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDBlueButtonObjects1= [];
gdjs.LobbyCode.GDBlueButtonObjects2= [];
gdjs.LobbyCode.GDPoleznoeObjects1= [];
gdjs.LobbyCode.GDPoleznoeObjects2= [];
gdjs.LobbyCode.GDGreyButtonObjects1= [];
gdjs.LobbyCode.GDGreyButtonObjects2= [];
gdjs.LobbyCode.GDDTPObjects1= [];
gdjs.LobbyCode.GDDTPObjects2= [];
gdjs.LobbyCode.GDYellowButtonObjects1= [];
gdjs.LobbyCode.GDYellowButtonObjects2= [];
gdjs.LobbyCode.GDNewTiledSprite2Objects1= [];
gdjs.LobbyCode.GDNewTiledSprite2Objects2= [];
gdjs.LobbyCode.GDGreyButton2Objects1= [];
gdjs.LobbyCode.GDGreyButton2Objects2= [];
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_951072Objects1= [];
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_951072Objects2= [];
gdjs.LobbyCode.GDDolgotaObjects1= [];
gdjs.LobbyCode.GDDolgotaObjects2= [];
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1= [];
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects2= [];
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1= [];
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects2= [];
gdjs.LobbyCode.GDNavigatObjects1= [];
gdjs.LobbyCode.GDNavigatObjects2= [];
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1= [];
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects2= [];
gdjs.LobbyCode.GDNewPanelSpriteObjects1= [];
gdjs.LobbyCode.GDNewPanelSpriteObjects2= [];
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.LobbyCode.GDNewPanelSprite2Objects1= [];
gdjs.LobbyCode.GDNewPanelSprite2Objects2= [];


gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GD_9595951064_9595951080_9595951088_9595951086_9595951090_95959510722Objects1Objects = Hashtable.newFrom({"Широта2": gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects1});
gdjs.LobbyCode.userFunc0xccd9e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (window.Telegram?.WebApp?.openLink) {
  Telegram.WebApp.openLink('https://www.consultant.ru/document/cons_doc_LAW_34661/ddf872bbf0198a5ffe733c85ac8e65649ba9824d/');
} else {
  window.open('https://www.consultant.ru/document/cons_doc_LAW_34661/ddf872bbf0198a5ffe733c85ac8e65649ba9824d/', '_blank');
}
};
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


gdjs.LobbyCode.userFunc0xccd9e8(runtimeScene);

}


};gdjs.LobbyCode.userFunc0xcd2318 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (window.Telegram?.WebApp?.openLink) {
  Telegram.WebApp.openLink('https://www.drom.ru/pdd/pdd/');
} else {
  window.open('https://www.drom.ru/pdd/pdd/', '_blank');
}
};
gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

{


gdjs.LobbyCode.userFunc0xcd2318(runtimeScene);

}


};gdjs.LobbyCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("DTP"), gdjs.LobbyCode.GDDTPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDDTPObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDDTPObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDDTPObjects1[k] = gdjs.LobbyCode.GDDTPObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDDTPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DTP(AIUS)", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Poleznoe"), gdjs.LobbyCode.GDPoleznoeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDPoleznoeObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDPoleznoeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDPoleznoeObjects1[k] = gdjs.LobbyCode.GDPoleznoeObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDPoleznoeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Podder", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.LobbyCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDGreyButtonObjects1[k] = gdjs.LobbyCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Doroga", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.LobbyCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDYellowButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDYellowButtonObjects1[k] = gdjs.LobbyCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Calkul", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Квалификация"), gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1[k] = gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Kvalif", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Проверки"), gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1[k] = gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Proverki", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Широта2"), gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GD_9595951064_9595951080_9595951088_9595951086_9595951090_95959510722Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16956116);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SGU.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Фабулы"), gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1[k] = gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fabula", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.LobbyCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDBlueButtonObjects1[k] = gdjs.LobbyCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton2"), gdjs.LobbyCode.GDGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDGreyButton2Objects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDGreyButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDGreyButton2Objects1[k] = gdjs.LobbyCode.GDGreyButton2Objects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDGreyButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LobbyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDBlueButtonObjects1.length = 0;
gdjs.LobbyCode.GDBlueButtonObjects2.length = 0;
gdjs.LobbyCode.GDPoleznoeObjects1.length = 0;
gdjs.LobbyCode.GDPoleznoeObjects2.length = 0;
gdjs.LobbyCode.GDGreyButtonObjects1.length = 0;
gdjs.LobbyCode.GDGreyButtonObjects2.length = 0;
gdjs.LobbyCode.GDDTPObjects1.length = 0;
gdjs.LobbyCode.GDDTPObjects2.length = 0;
gdjs.LobbyCode.GDYellowButtonObjects1.length = 0;
gdjs.LobbyCode.GDYellowButtonObjects2.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.LobbyCode.GDGreyButton2Objects1.length = 0;
gdjs.LobbyCode.GDGreyButton2Objects2.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_951072Objects1.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_951072Objects2.length = 0;
gdjs.LobbyCode.GDDolgotaObjects1.length = 0;
gdjs.LobbyCode.GDDolgotaObjects2.length = 0;
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1.length = 0;
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects2.length = 0;
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1.length = 0;
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects2.length = 0;
gdjs.LobbyCode.GDNavigatObjects1.length = 0;
gdjs.LobbyCode.GDNavigatObjects2.length = 0;
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1.length = 0;
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects2.length = 0;
gdjs.LobbyCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.LobbyCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.LobbyCode.GDNewPanelSprite2Objects2.length = 0;

gdjs.LobbyCode.eventsList2(runtimeScene);
gdjs.LobbyCode.GDBlueButtonObjects1.length = 0;
gdjs.LobbyCode.GDBlueButtonObjects2.length = 0;
gdjs.LobbyCode.GDPoleznoeObjects1.length = 0;
gdjs.LobbyCode.GDPoleznoeObjects2.length = 0;
gdjs.LobbyCode.GDGreyButtonObjects1.length = 0;
gdjs.LobbyCode.GDGreyButtonObjects2.length = 0;
gdjs.LobbyCode.GDDTPObjects1.length = 0;
gdjs.LobbyCode.GDDTPObjects2.length = 0;
gdjs.LobbyCode.GDYellowButtonObjects1.length = 0;
gdjs.LobbyCode.GDYellowButtonObjects2.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.LobbyCode.GDGreyButton2Objects1.length = 0;
gdjs.LobbyCode.GDGreyButton2Objects2.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_951072Objects1.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_951072Objects2.length = 0;
gdjs.LobbyCode.GDDolgotaObjects1.length = 0;
gdjs.LobbyCode.GDDolgotaObjects2.length = 0;
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects1.length = 0;
gdjs.LobbyCode.GD_951050_951074_951072_951083_951080_951092_951080_951082_951072_951094_951080_951103Objects2.length = 0;
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects1.length = 0;
gdjs.LobbyCode.GD_951055_951088_951086_951074_951077_951088_951082_951080Objects2.length = 0;
gdjs.LobbyCode.GDNavigatObjects1.length = 0;
gdjs.LobbyCode.GDNavigatObjects2.length = 0;
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects1.length = 0;
gdjs.LobbyCode.GD_951060_951072_951073_951091_951083_951099Objects2.length = 0;
gdjs.LobbyCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.LobbyCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.LobbyCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.LobbyCode.GDNewPanelSprite2Objects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
