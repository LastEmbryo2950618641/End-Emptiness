

$(document).ready(function (){

       $(".atrr .audioPlay a span").click(function(){
         if($(this).hasClass("glyphicon-pause"))
         {
           $(this).removeClass();
           $(this).addClass("glyphicon glyphicon-play");
             this.parentNode.parentNode.parentNode.lastChild.previousSibling.pause();
         }
         else {
           $(".atrr .audioPlay a span").removeClass();
           $(".atrr .audioPlay a span").addClass("glyphicon glyphicon-play")
           $(this).addClass("glyphicon glyphicon-pause");


            $(".atrr").css({"color":"black"});
            $(".atrr").css({"background-color":"white"});
            $(this.parentNode.parentNode.parentNode).css({"color":"rgba(255,174,206,1)"});
            $(this.parentNode.parentNode.parentNode).css({"background-color":"rgba(100,240,240,.3)"});
          //  $(this.parentNode.parentNode.parentNode.firstChild.nextSibling.firstChild).css({"color":"red"});
            var i=0;
            for(i;i<$(".atrr .audioPlay a span").length;i++)
            {
              if(!($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.paused))
              {

               $(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.load();
               $(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.pause();
              }
            }
            $(this.parentNode.parentNode.parentNode.lastChild.previousSibling.previousSibling.previousSibling).attr({"href":this.parentNode.parentNode.parentNode.lastChild.previousSibling.currentSrc});
            alert(this.parentNode.parentNode.parentNode.lastChild.previousSibling.previousSibling.previousSibling);
            alert(this.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling);
            alert(this.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.className);
            alert( this.parentNode.parentNode.parentNode.lastChild.previousSibling.currentSrc);
            this.parentNode.parentNode.parentNode.lastChild.previousSibling.play();
            }
            e=function(){
              var i=0;
              for(i;i<$(".atrr .audioPlay a span").length;i++)
              {
                if(!($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.paused))
                {
                 $($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling).css({"width":Math.ceil(($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.currentTime/$(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.duration)*100)+"%"});
                 $($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling).html(seToM($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.currentTime)+"/"+seToM($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.lastChild.previousSibling.duration));
                }
                else {
                   $($(".atrr .audioPlay a span")[i].parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling).css({"width":0+"%"});
                }
              }

            }
            CycleEvents(e)
     });
});

function seToM(s)
{
  s = Math.floor(s);
  var m = Math.floor(s / 60);
  console.log("m="+s+"/60="+m);
  console.log("s1= "+s);
  var s = s - m * 60;
  console.log("s2= "+s);

  return m+":"+s;

}
function CycleEvents(e)
{
   e();
   setTimeout("CycleEvents(e)",1000);
}
