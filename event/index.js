function corp(no){

    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=600 height=600");
}

function event_click(){

if(f.event_user.value == '' ){
    alert('정확한 이름을 입력해 주세요');
}
else if(f.event_email.value==''|| f.event_email.value.indexOf('@')== -1){
     alert('정확한 이메일을 입력해 주세요')
}
else if(f.event_tel.value==''){
    alert('정확한 휴대폰 번호를 입력해 주세요')
}
else if(f.event_tel.value.indexOf('-')!= -1){
    alert('휴대폰 번호는"-"를 제외해서 입력해 주세요')
}
else if(f.event_number.value.length <8){
    alert('티켓번호 8자리를 입력해 주세요')
}
else if(f.event_check.value != 'yes'){
    alert('약관에 동의해 주세요')
}
else{
    f.submit();
}


}