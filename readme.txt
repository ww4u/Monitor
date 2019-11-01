2019 10-22 16:31
close_saoma_tanchuang()
saoma_tanchuang(order_number)//扫码弹窗，5秒后自动关闭

close_bothside_tanchuang()  //关闭弹窗
left_side_tanchuang("A1235","黑糖玛奇朵",60);  //3个参数依次为订单编号，产品名，等待时间时间
right_side_tanchuang("A1235","黑糖玛奇朵",5);

paoma_deng(msg);//显示的字符串
close_paoma_deng();//关闭跑马灯
waiting_fetch_msg("00000--1;88888--1;");//代取杯订单00000表示订单号，1为取杯状态，0位buffer状态;

left_tanchuang("A1235;黑糖玛奇朵;",5); //(A1235;黑糖玛奇朵;):一个分号内容显示一行; 5是显示5秒关闭弹窗;
right_tanchuang("A1235;黑糖玛奇朵;",5);
close_left_tanchuang();
close_right_tanchuang();

left_qubei_tanchuang("A1235","黑糖玛奇朵");
right_qubei_tanchuang("","");
hide_order_msg();
order_msg(msg)