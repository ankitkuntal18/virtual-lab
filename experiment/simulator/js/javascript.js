<script type="text/javascript">
function multi()
{

 first=parseInt(myform.first.value);
 second=parseInt(myform.second.value);
 result= first * second;
myform.result.value=result;
}



function calc()
{

first=parseInt(myform.first.value);
second=parseInt(myform.second.value);

result=first^second; 
myform.result3.value=result;





}
function calc2()
{



result3=parseInt(myform.result3.value);
carry=parseInt(myform.carry.value);

result=result3^carry; 
myform.result2.value=result;


}
function calc3()
{

result2=parseInt(myform.result2.value);
result=parseInt(myform.result.value);

result1=result2+result; 
myform.result4.value=result1;


}
function calc4()
{

 first=parseInt(myform.first1.value);
 second=parseInt(myform.first2.value);
 sum= first + second;
 result9=(sum>>>0).toString(2)
myform.result5.value=result9;
}

</script>