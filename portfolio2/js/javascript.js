
//하늘에서 본 가로림만
var imgwidth = 871;//배너이미지 크기
var isnum = 0; //클릭수
function prevBtn(){
    isnum++ //0123456789.......
    if(isnum > 3){
        isnum =0;
    }
    //01234
    //배너움직이는 작업
    document.getElementById('visual-zone').style.left=-(imgwidth*isnum)+'px';
                                //-(697x0) -(697x1)-(697x2)-(697x3)-(697x4)
}

function nextBtn(){
    isnum-- //43210
    if(isnum < 0){
        isnum =3;
    }
    //01234
    //배너움직이는 작업
    document.getElementById('visual-zone').style.left=-(imgwidth*isnum)+'px';
                                //(697x0) (697x1)(697x2)(697x3)(697x4)
}

//gnb
var currentNum=0;
var gnbList;

    function init(){
      gnbList=document.getElementById('gnb').getElementsByTagName('li')
      for(var i=0; i<gnbList.length; i++){
        gnbList[i].num=i;
        gnbList[i].onmouseenter = function(){
          selectMenu(this.num)
        }
        gnbList[i].onmouseleave =function(){
          gnbList[currentNum].childNodes[2].className="submenu"
          var removeTag= document.getElementById('header');
          removeTag.removeChild(removeTag.lastElementChild)
        }
      }
    }

    window.onload=init;


  //유튜버로 보는 가로림만
  $(document).ready(function(){
    $('m6_leftBtn').on('click',function(){ //li 안에 a를 클릭했을 때 실행해
        $('ul').append($('li:first'))
    })
    $('m6_rightBtn').on('click',function(){ //li 안에 a를 클릭했을 때 실행해
        $('ul').append($('li:first'))
    })
})