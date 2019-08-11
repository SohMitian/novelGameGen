(function () {
  // 文字入力の関数
  function inputSerif() {
    generateBtn.addEventListener("click", function () {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      init();
      context.fillStyle = "#111";
      context.fillText(serifText.value, 25, 245);
    });
  };
  // キャンバスの取得
  const canvas = document.getElementById("canvas");
  const canvasWidth = 400;
  const canvasHeight = 300;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  // コンテキスト取得
  const context = canvas.getContext("2d");
  // 画像のパス
  const directory = "../img/";
  const srcs = [
    "school1.jpg",
    "figure.png",
    "balloon.png",
    "name_balloon.png",
  ];
  const imageList = [];
  for (let i in srcs) {
    imageList[i] = new Image();
    imageList[i].src = directory + srcs[i];
  }
  let loadedCount = 1;
  for (let i in imageList) {
    imageList[i].onload = function () {
      if (loadedCount == imageList.length) {
        // 背景
        context.drawImage(imageList[0], 0, 0, imageList[0].width / 2, imageList[0].height / 2);
        // 人影
        context.drawImage(imageList[1], 130, 50, imageList[1].width / 1.5, imageList[1].height / 1.5);
        // 吹き出し
        context.drawImage(imageList[2], 10, canvas.height - 90, imageList[2].width / 2.5, imageList[2].height / 3);
        // 名前吹き出し
        context.drawImage(imageList[3], 10, canvas.height - 100, imageList[2].width / 9, imageList[2].height / 9);
        // 名前テキスト
        context.fillStyle = "#eee";
        context.font = "15px";
        context.fillText("名前", 25, 218);
        console.log("a");
      }
      loadedCount++;
    };  
  };
})();