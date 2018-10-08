    $(document).ready(function(){

         $(".scim_btn").click(function(){
                
                var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.scale(1,1);
            var txt="我想买";
            var jg = $("#num").val() + $("#bzxz").val();
            var cp = $("#wantcp").val();
            var md = "# 极简汇率帮我买单吧！#";
            var dz = "我在:"+$("#dzxx").val();
            var fx = "扫描二维码，分享手信，";
            var fx2 = "获取免单机会";
            ctx.fillStyle = "#fff";
            ctx.fillRect(0,0,1000,2000)
            var img=new Image();
            img.src = $("#previewResult")[0].src;
            img.onload = function() {
            ctx.drawImage(img,48,45,900,900);
            }
        ctx.fillText("width:" + ctx.measureText(txt).width,48,200)
        ctx.font="60px Arial";   
        ctx.fillStyle = "#000";
        ctx.fillText(txt,48, 1050, 900);
        ctx.fillText(jg ,270, 1050,900);
        ctx.fillText(cp ,48, 1150, 900);
        ctx.font="70px STXihei";
        ctx.fillStyle = "#10aeff";
        ctx.fillText(md,48,1300,800);
        ctx.font="50px Arial";
        ctx.fillStyle = "#353535";
        ctx.fillText(dz,120,1450,900);
        var icon=new Image();
            icon.src = $("#icon_dz")[0].src;
        icon.onload = function() {
        ctx.drawImage(icon,48,1400,45,65);
        }
        ctx.font="40px Arial";
        ctx.fillStyle = "#cfd9df";
        ctx.fillText(fx,48,1750,900);
        ctx.fillText(fx2,48,1830,900);
        var ewm=new Image();
            ewm.src = $("#ewm")[0].src;
        ewm.onload = function() {
        ctx.drawImage(ewm,700,1700,210,210);
        }
         var oCan = $( '#myCanvas' ).get( 0 ).getContext( '2d' );
         /* 创建线性渐变方式 */
         var clg = oCan.createLinearGradient(1300,1300,1500,1500);    /* 参数 : 起始点 结束点坐标 */
         clg.addColorStop(0.4,'#e2ebf0');    /* 参数 : 起始点坐标 0-1 可多个 ,颜色值 */
         clg.addColorStop(0,'#fff');    /* 参数 : 起始点坐标 0-1 可多个 ,颜色值 */
         
         oCan.fillStyle = clg;    /* 填充方式为必备 */
         oCan.fillRect(500,1600,1000,500);
        ctx.stroke();
        ctx.fill();
        $(".loding").show();
        setTimeout(function(){
            var image = document.getElementById("canimg")
            image.src = c.toDataURL("image/png");
            $("#dow_btn").attr("href",image.src); 
            console.log("img ture");
            $(".loding").hide();
            $(".imgdow").show()
        },5000)
        })
   



   $("body").css({
    "height":"30rem",
    "overflow":"none"
     })         
});