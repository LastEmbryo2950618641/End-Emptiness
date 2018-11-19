//创建一个函数用来添加元素，parent，是父元素，object是要添加的元素的属性类
function addMusic(parent,obj){

   //创建容器
   var musicCon = document.createElement("div");//创建容器元素
   $(musicCon).addClass("Nekoitem item");//添加样式类
   var musicA = document.createElement("a");
   $(musicA).attr({href:"#"});//添加属性
   musicCon.appendChild(musicA);//在容器中添加元素


  //创建时间元素
   var musicReleaseDiv = document.createElement("div");
   $(musicReleaseDiv).addClass("date");
   var iconSpan = document.createElement("span");
   $(iconSpan).addClass("glyphicon glyphicon-send");
   var testI = document.createElement("i");
   testI.textContent = obj.releasetime;
   musicReleaseDiv.appendChild(iconSpan);
   musicReleaseDiv.appendChild(testI);


   //创建标题
   var musicTitleDiv = document.createElement("div");
   $(musicTitleDiv).addClass("title");
   musicTitleDiv.textContent = obj.title;

   //创建描述
   var musicDescriptionDiv = document.createElement("div");
   $(musicDescriptionDiv).addClass("sim-con");
   musicDescriptionDiv.textContent = obj.description;


  //创建图像
   var musicReImageDiv = document.createElement("div");
   $(musicReImageDiv).addClass("sim-img");
   var img = document.createElement("img");
   $(img).attr({src:"./resources/images/Konachan.png"});
   musicReImageDiv.appendChild(img);

   //添加元素进容器
   musicA.appendChild(musicReleaseDiv);
   musicA.appendChild(musicTitleDiv);
   musicA.appendChild(musicDescriptionDiv);
   musicA.appendChild(musicReImageDiv);

   //将容器添加到父元素
   parent.appendChild(musicCon);
}

//获取和添加对象
function getAndAddObjectsByURL(requestURL)
{
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    var objectArray;
    request.onload = function() {
       var objectArray = (request.response).music;
       var i = 0;
      for (i in objectArray)
      {

        addMusic($("#music")[0],objectArray[i]);//添加元素

      }


     };

}

alert(1);
var reMusicURL = "https://yuanzhenwen.github.io/crossdomain/recommandJSON.json";

getAndAddObjectsByURL(reMusicURL);
