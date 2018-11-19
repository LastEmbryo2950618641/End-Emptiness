var pc = new PhotoClip('#image',{
   size:300,//截图区域大小
   outputSize:1000,
   file:'#file',
   view:'#preview',
   ok:'#clipBtn',
   loadStart: function() {
   console.log('开始读取照片');
 },
 loadComplete: function() {
   console.log('照片读取完成');
 },
 done: function(dataURL) {
   console.log(dataURL);
   $.ajax({
       url: 'http://nekonekolili.top/file/image', // 要上传的地址
       type: 'post',
       data: {
           'imgData': photo
       },
       dataType: 'json',
       success: function (data) {
           if (data.status == 0) {
          alert("111")
           } else {
               alert(data.info);
           }
       }
   });


 },
 fail: function(msg) {
   alert(msg);
 }

});


function isClip(){

  $("#preview-panl").css({
    "display":"grid"
  });
  $("#cover").css({
      "display":"block"
    });
}
function notClip(){
  $("#preview-panl").css({
    "display":"none"
  });
  $("#cover").css({
      "display":"none"
    });
}

$(document).ready(function(){
  $("#next1").click(function(){
   $(".body").empty();
    $(".input-name").css({
       "display":"block"
    });
  });
});
