function msg(msgstr)
{
	switch (msgstr)
	{
		case "1111":
		break;
		case "1111":
		break;
		case "1111":
		break;
		default:break;
	}
}

Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}  

var timerId2 = setInterval(function(){
	
		document.getElementById('nowtime').innerHTML = new Date().format("hh:mm");
		
	},1000);

var timerpaomadeng ;
function paoma_deng(msg)
{
	if(timerpaomadeng!=undefined)clearInterval(timerpaomadeng);
	document.getElementById('affiche_text').innerHTML = "";
	document.getElementById('affiche_text').innerHTML = msg;
	//document.getElementById('affiche_text').innerHTML = msg + "，即将取杯！";
	var div_style = 'background:#000;';

	document.getElementById('affiche_text').style.cssText = div_style;

	marquee();
}
function close_paoma_deng()
{
	$(".affiche_text").stop(true);
	if(timerpaomadeng!=undefined)clearInterval(timerpaomadeng);
	document.getElementById('affiche_text').innerHTML = "";
}
function marquee() {
	    var count = 0;
        var scrollWidth = $('#affiche').width();
        var textWidth = $('.affiche_text').width();
        var i = scrollWidth - textWidth;
        timerpaomadeng = setInterval(function() {
            i--;
            if(i < -textWidth ) {
                i = scrollWidth - textWidth;
            }
            $('.affiche_text').animate({'left': i+'px'}, 20);
        }, 20);
}


	

var show_video_flag = 0;	
var	video_show = document.getElementById('video_show');
var button_show = document.getElementById('showtb');
var button_hide = document.getElementById('hidetb');
var hide_arrows = document.getElementById('hide_arrows');

var hide_wait_tb = document.getElementById('hide_wait_tb');

var order_table = document.getElementById('tb_order_show');
var button_delete = document.getElementById('delete_order');
var button_add = document.getElementById('add_order');
var button_add_fetch = document.getElementById('add_fetch_order');
var button_add_startpaomadeng = document.getElementById('add_startpaomadeng');
var button_add_stoppaomadeng = document.getElementById('add_stoppaomadeng');

var order_messege_input = document.getElementById('order_messege_input');


var div_order_show = document.getElementById('div_order_show');
var div_fetch_show = document.getElementById('div_fetch_show');
var inner_left_footer = document.getElementById('inner_left_footer');
var fetch_table = document.getElementById('tb_fetch_show');
var tmpwidth = div_order_show.offsetWidth;
var tmphight = div_order_show.offsetHeight - 40;
var div_style = 'font-size:32px; width:' + tmpwidth + 'px; height:' + tmphight + 'px;margin-top:10px;';

order_table.style.cssText = div_style;


div_style = 'font-size:32px; width:' + div_fetch_show.offsetWidth + 'px; height:' + tmphight + 'px;margin-top:10px;';


fetch_table.style.cssText = div_style;

//setTimeout(show_video,3000);

function updatemsg(msg)
{
	order_messege_input.value = msg;
}

function show() {
	div_order_show.style.display = "none";
	document.getElementById('div_video_show').style.display = "block";
	order_table.innerHTML = "";
	
}

function hide_order_msg(){
	div_order_show.style.display = "none";
	order_table.style.display = "none";
}

function order_msg(msg)
{
			html_str ="";
			var words = msg.split(";");
			var line_count = words.length-1;
			
			if(line_count==0)
			{
				 
				for(i=line_count;i<6;i++)
				{
					if(i==0){
						html_str = "<tr style='background:#F4E9DB;font-size:26px;font-weight:300;letter-spacing:6px;'><th align='center' style='border:none;'>订单编号</th><th align='center' style='border:none;'>杯数</th> <th align='center' style='border:none;'>状态</th> <th align='center' style='border:none;'>预计出品</th> </tr>";
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  </tr>";
					}else
					{
						if(i==5){
							html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
						  <td align='center' >&nbsp;</td>\
						  <td align='center' >&nbsp;</td>\
						  <td align='center' >&nbsp;</td>\
						  <td align='center' >&nbsp;</td>\
						  </tr>";
						}else{
							html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
						  </tr>";
						}
					
					}
					
				}
				if(show_video_flag==0){
					order_table.innerHTML = html_str;
							//div_order_show.style.display = "block";
							//tmpwidth = div_order_show.offsetWidth;
							//tmphight = div_order_show.offsetHeight - 40;
							
							div_style = 'font-size:32px;width:' + tmpwidth + 'px; height:' + tmphight + 'px;margin-top:10px;';

							order_table.style.cssText = div_style;
							//div_style = 'width:' + tmpwidth + 'px; height:' + tmphight + 'px;margin-top:30px;';
							//div_order_show.style.cssText = div_style;
							
							order_table.style.display = "table";
							div_order_show.style.display = "block";
					
				}else{
					hide_order_msg();
				}

							
				return;
			}
			if(line_count>=6)
			{
				line_count=6;
				show_left_arrows();
			}else{
				hide_left_arrows();
			}
			for(i=0;i<line_count;i++)
			{
				var words1 = words[i].split("--");
				if(words1[2]=="制作中")
				{
					words1[2] = '<div class="subdiv_allinline" style="margin-bottom:10px; 	width:9.2px;height:9.2px;border-radius:50%;background-color:#FE5858;"></div>\
					<div class="subdiv_allinline" style="color:#FE5858;">制作中</div>';
					
				}
				if(i==0){
					html_str = "<tr style='background:#F4E9DB;font-size:26px;font-weight:300;letter-spacing:6px;'><th align='center' style='border:none;'>订单编号</th><th align='center' style='border:none;'>杯数</th> <th align='center' style='border:none;'>状态</th> <th align='center' style='border:none;'>预计出品</th> </tr>";
					html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>" + words1[0] + "</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>" + words1[1] + "</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>" + words1[2] + "</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>" + words1[3] + "</td>\
					  </tr>";
				}else
				{
					if(i==5){
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
					  <td align='center' >&nbsp;" + words1[0] + "</td>\
					  <td align='center' >&nbsp;" + words1[1] + "</td>\
					  <td align='center' >&nbsp;" + words1[2] + "</td>\
					  <td align='center' >&nbsp;" + words1[3] + "</td>\
					  </tr>";
					}else{
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;" + words1[0] + "</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;" + words1[1] + "</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;" + words1[2] + "</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;" + words1[3] + "</td>\
					  </tr>";
					}
					
				}
		
			}
			
			for(i=line_count;i<6;i++)
			{
				if(i==5){
				html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
					  <td align='center' >&nbsp;</td>\
					  <td align='center' >&nbsp;</td>\
					  <td align='center' >&nbsp;</td>\
					  <td align='center' >&nbsp;</td>\
					  </tr>";
				}else{
					html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'> \
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
					  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
					  </tr>";
				}
					  
			}
		
			order_table.innerHTML = html_str;
			//div_order_show.style.display = "block";
			//tmpwidth = div_order_show.offsetWidth;
			//tmphight = div_order_show.offsetHeight - 40;
			
			div_style = 'font-size:32px;width:' + tmpwidth + 'px; height:' + tmphight + 'px;margin-top:10px;';

			order_table.style.cssText = div_style;
			//div_style = 'width:' + tmpwidth + 'px; height:' + tmphight + 'px;margin-top:30px;';
			//div_order_show.style.cssText = div_style;
			
			order_table.style.display = "table";
			div_order_show.style.display = "block";
}
			
		
function waiting_fetch_msg(msg)
{
			html_str ="";
			var words = msg.split(";");
			
			var line_count = words.length-1;
			if(line_count==0)
			{
				//无内容
				
				hide_right_arrows();
				line_count = 6;
				for(i=0;i<line_count;i++)
				{
					
					if(i==0){
						html_str = "<tr style='background:#F4E9DB;color:#333333;font-size:28px;font-weight:100;letter-spacing:6px;'>\
									<th align='center' style='border:none;'>待取编号</th>\
									</tr>";
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'>\
											  <td align='center'>&nbsp;</td>\
											  </tr>";
									
					}else
					{
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'>\
											  <td align='center' >&nbsp;</td>\
											  </tr>";
					}
			
				}
				
				tb_fetch_show.innerHTML = html_str;
				//div_fetch_show.style.display = "block";
				tmpwidth1 = div_fetch_show.offsetWidth;
				//tmphight1 = div_fetch_show.offsetHeight - 40;
				//div_style = 'font-size:32px; width:' + div_fetch_show.offsetWidth + 'px; height:' + tmphight + 'px;margin-top:10px;';

				
				div_style1 = 'font-size:32px; width:' + tmpwidth1 + 'px; height:' + tmphight + 'px;margin-top:10px;';

				tb_fetch_show.style.cssText = div_style1;
				//div_style1 = 'font-size:32px; width:' + tmpwidth1 + 'px; height:' + tmphight1 + ';margin-top:30px;';
				//div_fetch_show.style.cssText = div_style1;
				
				tb_fetch_show.style.display = "table";
				return;
			}else{
				//有内容
				if(line_count>=6)
				{
					line_count=6;
					show_right_arrows();
				}else{
					hide_right_arrows();
				}
				for(i=0;i<line_count;i++)
				{
					var words1 = words[i].split("--");
					if(words1[1]=="1")
					{
						words1[0] = '<div class="subdiv_allinline" style="color:#FE5858;font-size:42px;font-weight:1000;">' + words1[0] + '</div>';
					}
					if(i==0){
						html_str = "<tr style='background:#F4E9DB;color:#333333;font-size:28px;font-weight:100;letter-spacing:6px;'>\
									<th align='center' style='border:none;'>待取编号</th>\
									</tr>";
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'>\
											  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>" + words1[0] + "</td>\
											  </tr>";
									
					}else
					{
						html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'>\
											  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>" + words1[0] + "</td>\
											  </tr>";
					}
			
				}
				for(i=line_count;i<6;i++)
				{
					html_str = html_str + "<tr style='color:#49382C;background:#FFFFFF;font-size:36px;font-weight:500;letter-spacing:6px;'>\
											  <td align='center' style='border-bottom:#F4E9DB dotted 3px;'>&nbsp;</td>\
											  </tr>";
				}
				tb_fetch_show.innerHTML = html_str;
				//div_fetch_show.style.display = "block";
				tmpwidth1 = div_fetch_show.offsetWidth;
				//tmphight1 = div_fetch_show.offsetHeight - 40;
				//div_style = 'font-size:32px; width:' + div_fetch_show.offsetWidth + 'px; height:' + tmphight + 'px;margin-top:10px;';

				
				div_style1 = 'font-size:32px; width:' + tmpwidth1 + 'px; height:' + tmphight + 'px;margin-top:10px;';

				tb_fetch_show.style.cssText = div_style1;
				//div_style1 = 'font-size:32px; width:' + tmpwidth1 + 'px; height:' + tmphight1 + ';margin-top:30px;';
				//div_fetch_show.style.cssText = div_style1;
				
				tb_fetch_show.style.display = "table";
				
			}
			
			//div_fetch_show.style.display = "block";
			//fetch_table.style.display = "block";
}
		
function tan_chuang_waiting_fetch(msg)
{
			order_messege_input.value = msg;
}
function tan_chuang_fetch(msg)
{
			order_messege_input.value = msg;
}
		
function order_count(msg)
{
			cup_count.innerHTML = msg;
			if(msg<=0)
			{
				//show_video();
			}else{
				
			}
}

function selectTime2() {

	var timer;
    var times = 1000;

	timer = setInterval(function() {
		//order_messege_input.value = "";
	}, times);
}
var leftContent  = document.querySelector(".left-content");
var rightContent  = document.querySelector(".right-content");
var textCircle   = document.querySelector(".text-circle");

function wait_qubei_tanchuang(order_number,rest_time) {

	
	var tmpdiv= "<br><br>\
				<font id='h2_title' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>待取杯：</font><br>\
				<font id='h3_title' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" + order_number + "</font> \
				<p style='opacity:0.5;font-size:26px;font-weight:400;color:#333333;letter-spacing:6px;' id='p3_content'>请稍后，正在为您安排取杯!</p>";
					
	document.getElementById('div_tanchuang').innerHTML = tmpdiv;
	div.style.display = "block";
	var angle = 0;
	var time_number = rest_time;
	current_number = 0;
	initPercent(time_number);
	var timerId = setInterval(function(){
		current_number++;
		angle = (current_number/time_number)*360;
		if(angle > 360){
			clearInterval(timerId);
			close_tanchuang();
		}else{
			if(angle > 180){
				leftContent.setAttribute('style', 'transform: rotate(180deg)');
				rightContent.setAttribute('style', 'transform: rotate('+(angle-180)+'deg)');
			}else{
				leftContent.setAttribute('style', 'transform: rotate('+angle+'deg)');
			}
			
			setPercent(current_number);
			
		}
	},1000);
	
}
function close_left_tanchuang() {
	background_left_fetch.style.display = "none";
}
function close_right_tanchuang() {
	background_right_fetch.style.display = "none";
}
function left_tanchuang(left_order_number,delay_times) {
	var tmpdiv="";
	var current_number =0;
	
	if(left_order_number==""){
		
	}else{
		var words = left_order_number.split(";");
			var line_count = words.length-1;
			
			if(line_count==0)
			{
				return;
			}
			for(i=0;i<line_count;i++)
			{
				tmpdiv= tmpdiv + "<br><br>\
				<font id='order_number' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  words[i] +"</font>";
			}
			
		document.getElementById('div_lefty_fetch').innerHTML = tmpdiv;
		var timerId = setInterval(function(){
		current_number++;
		if(current_number > delay_times-1){
			clearInterval(timerId);
			background_left_fetch.style.display = "none";
			
		}
	},1000);
	}
	
	background_left_fetch.style.display = "block";
	
}

function right_tanchuang(right_order_number,delay_times) {
	var tmpdiv="";
	var current_number =0;
	
	if(right_order_number==""){
		
	}else{
		var words = right_order_number.split(";");
			var line_count = words.length-1;
			
			if(line_count==0)
			{
				return;
			}
			for(i=0;i<line_count;i++)
			{
				tmpdiv= tmpdiv + "<br><br>\
				<font id='order_number' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  words[i] +"</font>";
			}
		
		document.getElementById('div_righty_fetch').innerHTML = tmpdiv;
		var timerId = setInterval(function(){
		current_number++;
		if(current_number > delay_times-1){
			clearInterval(timerId);
			background_right_fetch.style.display = "none";
			
		}
	},1000);
	}
	
	background_right_fetch.style.display = "block";
	
	
}


function left_qubei_tanchuang(left_order_number,left_product_name) {
	var tmpdiv="";
	if(left_order_number==""){
		tmpdiv= "<br><br><br><br>\
				<font id='h2_title' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>&nbsp;</font><br><br>\
				<font id='order_number' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  left_order_number +"</font>\
				<br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>" + left_product_name + "</font>\
				";

		document.getElementById('div_left_fetch').innerHTML = tmpdiv;
	}else{
		tmpdiv= "<br><br><br><br>\
				<img src='pic/left2.png' width='50px' height='50px'></img><img src='pic/left2.png' width='50px' height='50px'></img></img><img src='pic/left2.png' width='50px' height='50px'></img><br><br>\
				<font id='order_number' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  left_order_number +"</font>\
				<br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>" + left_product_name + "</font>\
				";

		document.getElementById('div_left_fetch').innerHTML = tmpdiv;
	}
	
	div.style.display = "block";
	
}

function right_qubei_tanchuang(right_order_number,right_product_name) {
	var tmpdiv="";
	
	if(right_order_number==""){
		tmpdiv= "<br><br><br><br>\
				<font id='h2_title' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>&nbsp;</font><br><br>\
				<font id='order_number' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  right_order_number +"</font><br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>" + right_product_name + "</font>\
				";
		document.getElementById('div_right_fetch').innerHTML = tmpdiv;
	}else{
		tmpdiv= "<br><br><br><br>\
				<img src='pic/right2.png' width='50px' height='50px'><img src='pic/right2.png' width='50px' height='50px'></img><img src='pic/right2.png' width='50px' height='50px'></img><br><br>\
				<font id='order_number' style='font-size:52px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  right_order_number +"</font><br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>" + right_product_name + "</font>\
				";
		document.getElementById('div_right_fetch').innerHTML = tmpdiv;
	}
	
	div.style.display = "block";
	
}


var timerIdsaoma;
function saoma_tanchuang(order_number) {
	var tmpdiv="";

		if(order_number==""){
		tmpdiv= "<br><br><br><br><br><br>\
				<font id='h2_title' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>&nbsp;</font><br><br>\
				<font id='order_number' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>" +  order_number +"</font><br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'></font>\
				";
		document.getElementById('div_left_fetch2').innerHTML = tmpdiv;
	}else{
		tmpdiv= "<br><br><br><br><br><br><font id='order_number' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>扫码成功，即将为您取杯</font><br><br>\
				<font id='order_number' style='font-size:48px;font-weight:bold;color:red;letter-spacing:6px;'>" +  order_number +"</font>\
				<br><br><font id='product_name' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>请耐心等待...</font>";
		document.getElementById('div_left_fetch2').innerHTML = tmpdiv;
	}

	var current_number = 5;
	if(timerIdsaoma!=undefined)clearInterval(timerIdsaoma);
	    timerIdsaoma = setInterval(function(){
			current_number--;
			if(current_number <= 0){
				document.getElementById('background2').style.display = "none";
				clearInterval(timerIdsaoma);
			}
		},1000);
	
	document.getElementById('background2').style.display = "block";
	
}

function close_saoma_tanchuang() {
	document.getElementById('background2').style.display = "none";
}

function left_side_tanchuang(left_order_number,left_product_name,wait_time) {
	var tmpdiv="";

		if(left_order_number==""){
		tmpdiv= "<br><br><br><br><br><br>\
				<font id='h2_title' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>&nbsp;</font><br><br>\
				<font id='order_number' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>" +  left_order_number +"</font><br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>" + left_product_name + "</font>\
				";
		document.getElementById('div_left_fetch2').innerHTML = tmpdiv;
	}else{
		tmpdiv= "<br><br><br><br><br><br><font id='order_number' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>正在执行任务</font><br><br>\
				<font id='order_number' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>" +  left_order_number +"</font><br><br><font id='product_name' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>" + left_product_name + "</font>\
				<br><br><font id='product_name' style='font-size:36px;font-weight:bold;color:#808A87;letter-spacing:6px;'>预计还需<span style='color:red;'>" + wait_time + "</span>秒完成</font>";
		document.getElementById('div_left_fetch2').innerHTML = tmpdiv;
	}


	
	document.getElementById('background2').style.display = "block";
	
}

function right_side_tanchuang(right_order_number,right_product_name,wait_time) {
	var tmpdiv="";
	
	if(right_order_number==""){
		tmpdiv= "<br><br><br><br><br><br>\
				<font id='h2_title' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>&nbsp;</font><br><br>\
				<font id='order_number' style='font-size:36px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  right_order_number +"</font><br><br><font id='product_name' style='font-size:32px;font-weight:400;color:#333333;letter-spacing:6px;'>" + right_product_name + "</font>\
				";
		//document.getElementById('div_right_fetch2').innerHTML = tmpdiv;
	}else{
		tmpdiv= "<br><br><br><br><br><br><font id='order_number' style='font-size:36px;font-weight:bold;color:#49382C;letter-spacing:6px;'>取杯</font><br><br>\
				<font id='order_number' style='font-size:36px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" +  right_order_number +"</font><br><br><font id='product_name' style='font-size:36px;font-weight:bold;color:#49382C;letter-spacing:6px;'>" + right_product_name + "</font>\
				<br><br><font id='product_name' style='font-size:36px;font-weight:bold;color:#49382C;letter-spacing:6px;'>请等待<span style='color:red;' id='wait_time'>" + wait_time + "</span>秒...</font>";
		//document.getElementById('div_right_fetch2').innerHTML = tmpdiv;
		var current_number = wait_time;
		var timerId = setInterval(function(){
			current_number--;
			document.getElementById('wait_time').innerHTML = current_number;
			if(current_number <= 0){
				clearInterval(timerId);
			}
		},1000);
	}
	
	document.getElementById('background2').style.display = "block";
	
}

function close_bothside_tanchuang(){
	document.getElementById('background2').style.display = "none";
}

function show_video(){
	show_video_flag = 1;
	hide_order_msg();
	div_order_show.style.display = "none";
	
	order_table.style.display = "none";
	document.getElementById('div_video_show').style.display = "block";
	
	//tmpwidth1 = document.getElementById('div_video_show').offsetWidth;
	//tmphight1 = document.getElementById('div_video_show').offsetHeight;
	
	//document.getElementById('video1').style.display = 'width:' + tmpwidth + 'px; height:' + tmphight + 'px;';
	document.getElementById('video1').load();
	document.getElementById('video1').play();
	
	//document.getElementById('video1').loop();
}

function hide_video(){
	show_video_flag = 0;
	document.getElementById('div_video_show').style.display = "none";
	document.getElementById('video1').pause();

}

function close_tanchuang() {
	div.style.display = "none";
}

function initPercent(tmptime){
	textCircle.innerHTML = parseInt(tmptime) +'s';
}
function setPercent(angle){
	var tmptime = time_number-angle;
	if(tmptime>0)
	{
		textCircle.innerHTML = parseInt(tmptime) +'s';
	}else{
		textCircle.innerHTML = '0s';
	}
}
function show_left_arrows(){
	
	document.getElementById('left_jiantou_pic').style.visibility  = "visible";

}

function show_right_arrows(){
	
	document.getElementById('right_jiantou_pic').style.visibility  = "visible";
	
}

function hide_left_arrows(){
	
	document.getElementById('left_jiantou_pic').style.visibility  = "hidden";
	
}

function hide_right_arrows(){
	
	document.getElementById('right_jiantou_pic').style.visibility  = "hidden";
	
}

order_messege_input.onchange = function show() {
			//waiting_fetch_msg("000000--1;8888--0;");
			//order_msg(order_messege_input.value);
			order_count(0);
			selectTime2();
}
show_arrows.onclick = function show_arrows()
{
	document.getElementById('left_jiantou_pic').style.visibility  = "visible";
	document.getElementById('right_jiantou_pic').style.visibility  = "visible";
}

hide_arrows.onclick = function hide_arrows()
{
	
	document.getElementById('left_jiantou_pic').style.visibility  = "hidden";
	document.getElementById('right_jiantou_pic').style.visibility  = "hidden";
}

video_show.onclick = function changediv()
{
	show_video();
	
}
function changediv1()
{
	hide_video();
	
}


button_hide.onclick = function show() {
	
	hide_order_msg();
}
hide_wait_tb.onclick = function show() {
	div_fetch_show.style.display = "none";
	fetch_table.style.display = "none";
}
button_show.onclick = function show() {
	div_order_show.style.display = "block";
	div_style = 'font-size:36px; width:' + tmpwidth + 'px; height:' + tmphight + 'px;margin-top:10px;';
	order_table.innerHTML = order_table.innerHTML;
	
	order_table.style.cssText = div_style;
	order_table.style.display = "table";
	//document.getElementById('div_video_show').style.display = "none";
}
button_add.onclick = function test_order_msg()
{
	
	order_msg("");
	//order_msg("A1234--2/2--制作中--15:23;A1234--2/2--制作中--15:23;A1234--2/2--制作--15:23;A1234--2/2--制作--15:23;A1234--2/2--制作--15:23;A1234--2/2--制作--15:23;");
	//div_order_show.style.cssText = div_style;
	//inner_left_footer.style.cssText = ;
}
button_add_fetch.onclick = function test_order_msg()
{
	
	waiting_fetch_msg("00000--1;88888--1;");
}
button_add_startpaomadeng.onclick = function test_order_msg()
{
	//paoma_deng("");
	paoma_deng("A1234，焦糖玛奇朵");
}
button_add_stoppaomadeng.onclick = function test_order_msg()
{
	close_paoma_deng();
	
}
var btn = document.getElementById('open_btn');
var open_left = document.getElementById('open_left');
var open_right = document.getElementById('open_right');
var background_left_fetch = document.getElementById('background_left_fetch');
var background_right_fetch = document.getElementById('background_right_fetch');
var div = document.getElementById('background');
var div2 = document.getElementById('div2');
var close = document.getElementById('close-button');

		
btn.onclick = function show() {
	
	
	left_qubei_tanchuang("A1235","黑糖玛奇朵");
	right_qubei_tanchuang("","");
	
}
open_left.onclick = function show() {
	
	saoma_tanchuang("A1235");
	
}
open_right.onclick = function show() {
	left_side_tanchuang("A1235","黑糖玛奇朵",60);
	right_side_tanchuang("A1235","黑糖玛奇朵",5);
	
}
window.onclick = function close(e) {
	if (e.target == div) {
		div.style.display = "none";
	}
}

//定时执行检测变量
