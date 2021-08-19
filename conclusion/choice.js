document.getElementsByClassName('container')[0].style.display = 'none';

window.onload = event => {
  document.getElementsByClassName('container')[0].style.display = 'block';
  document.getElementById('loading').style.display = 'none';
};

function isMobileDevice() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

const imgsrc = 'https://sv1.picz.in.th/images/2021/08/19/2armtI.jpg';
const container = document.getElementsByClassName('container')[0];

document.getElementById('thanks').style.display = 'none';

if ((check = true)) {
  container.style.width = 'auto';
  container.style.height = '0';
  container.style.paddingBottom = '177.78%';
}

var result = document.getElementById('result');

ans.addEventListener('submit', e => {
  e.preventDefault();
  var txt = '';
  var add = 0;
  var g1 = document.getElementsByName('group1');
  var g2 = document.getElementsByName('group2');
  var g3 = document.getElementsByName('group3');
  var g4 = document.getElementsByName('group4');
  var g5 = document.getElementsByName('group5');
  var g6 = document.getElementsByName('group6');
  for (i = 0; i < g1.length; i++) {
    if (g1[i].checked) {
      add += parseInt(g1[i].value);
    }
  }
  for (i = 0; i < g2.length; i++) {
    if (g2[i].checked) {
      add += parseInt(g2[i].value);
    }
  }
  for (i = 0; i < g3.length; i++) {
    if (g3[i].checked) {
      add += parseInt(g3[i].value);
    }
  }
  for (i = 0; i < g4.length; i++) {
    if (g4[i].checked) {
      add += parseInt(g4[i].value);
    }
  }
  for (i = 0; i < g5.length; i++) {
    if (g5[i].checked) {
      add += parseInt(g5[i].value);
    }
  }
  for (i = 0; i < g5.length; i++) {
    if (g6[i].checked) {
      add += parseInt(g6[i].value);
    }
  }

  if (add <= 2) {
    txt = 'คุณโดนหลอกง่ายนะเนี่ย <br> ต้องเสพข่าวอย่างมีสติกว่านี้แล้วล่ะ';
  } else if (add > 2 && add <= 5) {
    txt = 'คุณอาจจะพลาดบางอย่างไป <br> ลองคิดดีๆ ก่อนจะเชื่อข่าวนะ!';
  } else if (add > 5) {
    txt = 'คุณเก่งมาก <br> มั่นใจได้เลยว่าจะไม่โดนหลอก!';
  }

  var percent = Math.round((add / 7) * 100);

  document.getElementById('head').style.display = 'none';
  result.innerHTML =
    '<br> <br> <br> <br>' +
    '<h3> คะแนนรวมของคุณคือ </h3>' +
    '<h1>' +
    percent +
    '%' +
    '</h1>' +
    txt;
  document.getElementsByClassName('container')[0].style.background =
    'url("https://sv1.picz.in.th/images/2021/08/19/2armtI.jpg")';
  document.getElementsByClassName('container')[0].style.backgroundSize =
    'contain';
  document.getElementById('ans').style.display = 'none';
  document.getElementById('thanks').style.display = 'block';

  return false;
});

var button = document.getElementById('next');

function CopyToClipboard() {
  var copyText = document.createElement('textarea');
  copyText.value =
    'ลองเล่นเกมทางเลือกในแบบของคุณ 👉 https://mildrrnt.github.io/vowels/';
  copyText.setAttribute('readonly', '');
  copyText.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand('copy');
  alert('Copied the text: ' + copyText.value);
  document.body.removeChild(copyText);
}

button.onclick = function() {
  CopyToClipboard();
};
