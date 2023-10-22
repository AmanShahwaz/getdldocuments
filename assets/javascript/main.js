var mail = prompt("Enter your mail ")
var sname = prompt("Enter your full name ")
var eventname = prompt("Enter complete event name ")
var date = prompt("Enter Date ")
var day = prompt("Enter Weekday ")
var month = prompt("Enter month ")
var timing = prompt("Enter timing (Format 9:30 AM to 4:30 PM)")
var randomNum = Math.floor(1000000000 + Math.random() * 9000000000);

document.getElementById('name').innerText=sname;
document.getElementById('email').innerText=mail;
document.getElementById('ticketid').innerText="#"+randomNum;
document.getElementById('event').innerText=eventname;
document.getElementById('tevent').innerText=eventname;
document.getElementById('tdate').innerText=date;
document.getElementById('tmonth').innerText=month;
document.getElementById('timing').innerText=timing;
document.getElementById('day').innerText=day;
document.getElementById('month').innerText=month;
document.getElementById('cdate').innerText=date;
document.getElementById('ctiming').innerText=timing;







