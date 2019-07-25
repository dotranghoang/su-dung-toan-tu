let inputWidth;
let inputHeight;
inputWidth=parseFloat(prompt('Nhập Độ Dài','0'));
inputHeight=parseFloat(prompt('Nhập Độ Rộng','0'));
let area;
area=inputWidth*inputHeight;
document.write('Độ Dài : <br/> '+ inputWidth);
document.write('<br/>');
document.write('Độ Rộng : <br/>'+ inputHeight);
document.write('<br/>');

document.write('Chu Vi Là : ' + area);
