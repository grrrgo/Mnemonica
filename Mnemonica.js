var Mnemonica = new Array();
  Mnemonica[1] = "C4";
  Mnemonica[2] = "H2";
  Mnemonica[3] = "D7";
  Mnemonica[4] = "C3";
  Mnemonica[5] = "H4";
  Mnemonica[6] = "D6";
  Mnemonica[7] = "SA";
  Mnemonica[8] = "H5";
  Mnemonica[9] = "S9";
  Mnemonica[10] = "S2";
  Mnemonica[11] = "HQ";
  Mnemonica[12] = "D3";
  Mnemonica[13] = "CQ";
  Mnemonica[14] = "H8";
  Mnemonica[15] = "S5";
  Mnemonica[16] = "S6";
  Mnemonica[17] = "H9";
  Mnemonica[18] = "CK";
  Mnemonica[19] = "D2";
  Mnemonica[20] = "HJ";
  Mnemonica[21] = "S3";
  Mnemonica[22] = "S8";
  Mnemonica[23] = "H6";
  Mnemonica[24] = "C10";
  Mnemonica[25] = "D5";
  Mnemonica[26] = "DK";
  Mnemonica[27] = "C2";
  Mnemonica[28] = "H3";
  Mnemonica[29] = "D8";
  Mnemonica[30] = "C5";
  Mnemonica[31] = "SK";
  Mnemonica[32] = "DJ";
  Mnemonica[33] = "C8";
  Mnemonica[34] = "S10";
  Mnemonica[35] = "HK";
  Mnemonica[36] = "CJ";
  Mnemonica[37] = "S7";
  Mnemonica[38] = "H10";
  Mnemonica[39] = "DA";
  Mnemonica[40] = "S4";
  Mnemonica[41] = "H7";
  Mnemonica[42] = "D4";
  Mnemonica[43] = "CA";
  Mnemonica[44] = "C9";
  Mnemonica[45] = "SJ";
  Mnemonica[46] = "DQ";
  Mnemonica[47] = "C7";
  Mnemonica[48] = "SQ";
  Mnemonica[49] = "D10";
  Mnemonica[50] = "C6";
  Mnemonica[51] = "HA";
  Mnemonica[52] = "D9";
  $(document).on("pageinit",function(){
    $("body").on("swipe","#both",function(){
      var num = Math.floor(Math.random()*52+1);
      $("#order1").html(num);
      $("#face1").attr("src","img/"+Mnemonica[num]+".JPG");
    });
    $("body").on("swipe","#card",function(){
      var num = Math.floor(Math.random()*52+1);
      $("#order2").html("??");
      $("#order2").on("tap",function(){$("#order2").html(num);});
      $("#face2").attr("src","img/"+Mnemonica[num]+".JPG");
  });
    $("body").on("swipe","#number",function(){
      var num = Math.floor(Math.random()*52+1);
      $("#face3").attr("src","img/back.png");
      $("#face3").on("tap",function(){$("#face3").attr("src","img/"+Mnemonica[num]+".JPG");});
      $("#order3").html(num);
  });

});
$(document).on('deviceready', function () {
  $(document).on('backbutton', function () {
    exitApp();
  });
});

function exitApp() {
  navigator.notification.confirm(
    'Are you sure you want to quit?',
    function (buttonIndex) {
      if (buttonIndex === 1) {
        navigator.app.exitApp();
      }
    },
    'Exit'
  );
}
function takephoto(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
}
