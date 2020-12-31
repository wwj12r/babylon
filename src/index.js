import * as BABYLON from 'babylonjs'; //全部引入
import { Engine, Scene } from 'babylonjs'; //只引入使用到的类
import 'babylonjs-loaders';
import 'pepjs'
// import 'handjs'
import VConsole from 'vconsole';
// BABYLON.WebXRMotionControllerManager.PrioritizeOnlineRepository = false;
// BABYLON.WebXRMotionControllerManager.UseOnlineRepository = false;
const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
  // new VConsole();
}

const IsPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  if (window.screen.width >= 768) {
    flag = true;
  }
  return flag;
}
var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
// var touch = new BABYLON.FreeCameraInputsManager();
// touch.removeMouse();
var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 1, new BABYLON.Vector3(20, 20, 20), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true, false);
// scene.activeCamera.panningSensibility = 0;
// camera.useFramingBehavior = true;
// let startX, startY;
// let xi = 0.05
// document.addEventListener('pointerdown', function (e) {
//   console.log(e)
//   startX = e.pageX
//   startY = e.pageY
// }, false)
// document.addEventListener('pointermove', function (e) {
//   if (startX && startY) {
//     const nowX = e.pageX
//     const nowY = e.pageY
//     const f = (nowX - startX) / 2 * xi
//     const o = (nowY - startY) / 2 * xi
//     let oFixed;
//     // console.log(o)
//     if (o < - Math.PI) {
//       oFixed = -Math.PI
//       // startY = nowY
//     } else if (o > Math.PI) {
//       oFixed = Math.PI
//     } else if (o > 0) {
//       oFixed = Math.PI - o
//     } else {
//       oFixed = o
//     }
//     console.log(oFixed)
//     camera.position = new BABYLON.Vector3(20 * Math.sin(oFixed) * Math.cos(f), 20 * Math.cos(oFixed), -20 * Math.sin(oFixed) * Math.sin(f))
//   }
// }, false)
// document.addEventListener('pointerup', function (res) {
//   startX = null
//   startY = null
// }, false)
// var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene);
var light = new BABYLON.DirectionalLight("pointLight", new BABYLON.Vector3(1, -6, -30), scene);
var light2 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(1, 1, 0), scene);
// light.specular = new BABYLON.Color3(0, 1, 0);
// var lightmap = new BABYLON.Texture("https://i.imgur.com/Q6i4ZiX.jpg", scene);
// var material = new BABYLON.StandardMaterial("material", scene);
// material.lightmapTexture = lightmap;
// light.lightmapMode = BABYLON.Light.LIGHTMAP_DEFAULT;

BABYLON.SceneLoader.ImportMesh('', "model3D/", "box.glb", scene, function (res) {
  scene.createDefaultCamera(true, true, true);

  // console.log(res)
  // console.log(res.materials)

  // var canMaterial = res.materials[0]
  // var canMaterial2 = new BABYLON.StandardMaterial("material", scene);
  // console.log(canMaterial2)
  // res.materials[0].albedoTexture = new BABY LON.DynamicTexture("https://i.imgur.com/Q6i4ZiX.jpg", scene)
  // let myKayak2 = res[1];
  // let mat = new BABYLON.Texture("https://img02.songzhaopian.cn/eg_oss/2020/12/15/2020/1608026052014aja225qxca4.jpg", scene);
  // // let mat = new BABYLON.Texture(window.location.href.split('?')[1].split('=')[1], scene);
  // mat.vScale = -1
  // myKayak2.material.albedoTexture = mat
  // myKayak2.material.wireframe = true

  // var startingPoint;
  // var currentMesh;
  // var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100 }, scene, false);
  // var getGroundPosition = function () {
  //   var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh == ground; });
  //   if (pickinfo.hit) {
  //     return pickinfo.pickedPoint;
  //   }

  //   return null;
  // }
  // var pointerDown = function (mesh) {
  //   currentMesh = mesh;
  //   startingPoint = getGroundPosition();
  //   if (startingPoint) { // we need to disconnect camera from canvas
  //     setTimeout(function () {
  //       camera.detachControl(canvas);
  //     }, 0);
  //   }
  // }

  // var pointerUp = function () {
  //   if (startingPoint) {
  //     camera.attachControl(canvas, true);
  //     startingPoint = null;
  //     return;
  //   }
  // }

  // var pointerMove = function () {
  //   if (!startingPoint) {
  //     return;
  //   }
  //   var current = getGroundPosition();
  //   if (!current) {
  //     return;
  //   }

  //   var diff = current.subtract(startingPoint);
  //   currentMesh.position.addInPlace(diff);

  //   startingPoint = current;

  // }

  // scene.onPointerObservable.add((pointerInfo) => {
  //   switch (pointerInfo.type) {
  //     case BABYLON.PointerEventTypes.POINTERDOWN:
  //       if (pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh != ground) {
  //         pointerDown(pointerInfo.pickInfo.pickedMesh)
  //       }
  //       break;
  //     case BABYLON.PointerEventTypes.POINTERUP:
  //       pointerUp();
  //       break;
  //     case BABYLON.PointerEventTypes.POINTERMOVE:
  //       pointerMove();
  //       break;
  //   }
  // });

  scene.registerBeforeRender(function () {
    // camera.radius += 0.1
    // myKayak2.y += 0.1;
  });


  // var faceColors = [];
  // faceColors[0] = new BABYLON.Color4(0.5, 0.5, 0.5, 1)

  // var can = BABYLON.MeshBuilder.CreateCylinder("can", { height: 1.16, faceUV: faceUV, faceColors: faceColors }, scene);
  // can.material = canMaterial;
});

engine.runRenderLoop(function () {
  scene.render();
});