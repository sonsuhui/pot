
//visual

var visu_imgwidth = 710;//배너이미지 크기
    var visu_isnum = 0; //클릭수
    function vi_rightBtn(){
        visu_isnum++ //0123456789.......
        if(visu_isnum > 3){
          visu_isnum =0;
        }
        //01234
        //배너움직이는 작업
        document.getElementById('visual-list').style.left=-(visu_imgwidth*visu_isnum)+'px';
    }

    function vi_leftBtn(){
      visu_isnum-- //43210
        if(visu_isnum < 0){
          visu_isnum =3;
        }
        //01234
        //배너움직이는 작업
        document.getElementById('visual-list').style.left=-(visu_imgwidth*visu_isnum)+'px';
    }



var currentNum=0;
var menuNum=0;
var liList;
var spanList;
var sid;
var stopBtn, playBtn, leftBtn, rightBtn


function init(){//사용자가 선택을 했을 때 번호
    liList=document.getElementById('visual_list').getElementsByTagName('li');
    spanList=document.getElementById('visualBtn').getElementsByTagName('span');//버튼 부분

    for(var i=0; i<spanList.length; i++){
        spanList[i].getElementsByTagName('a')[0].num=i;

        spanList[i].getElementsByTagName('a')[0].onmouseover=function(){
            clearInterval(sid)
            menuNum=this.num;
            selectMenu(menuNum)
        }
        spanList[i].getElementsByTagName('a')[0].onmouseout=function() {
            clearInterval(sid)
            sid=setInterval(rolling,2000)
        }
    }
   
        rightBtn=document.getElementsByClassName('btnNext')[0]
        leftBtn=document.getElementsByClassName('btnPrev')[0]
        playBtn=document.getElementsByClassName('btnplay')[0]
        stopBtn=document.getElementsByClassName('btnStop')[0]

        stopBtn.onclick=function(){//stopBtn 클릭을 했을 때 정지
            clearInterval(sid)
        }
        
        playBtn.onclick=function(){//playBtn 클릭을 했을 때
            clearInterval(sid)
            sid=setInterval(rolling,2000)
        }
        
        leftBtn.onclick=function(){//leftBtn 클릭을 했을 때
              menuNum--;
                if(menuNum < 0){
                    menuNum=spanList.length-1;
                }
                  selectMenu(menuNum)
        }
        
        rightBtn.onclick=function(){//rightBtn 클릭을 했을 때
        menuNum++;
        if(menuNum > spanList.length-1){
            menuNum=0;
        }
          selectMenu(menuNum)
    } 
}

function selectMenu(num){//동그라미 버튼이 바뀔곳
    if(currentNum !=num){//내가 보고 있는 것과 선택한 번호가 다르다면
        var btn1=spanList[currentNum].getElementsByTagName('img')[0]
        btn1.src=btn1.src.replace('_over.png','.png') //변경할거야 
       
        var btn2=spanList[num].getElementsByTagName('img')[0]
        btn2.src=btn2.src.replace('.png','_over.png') //변경할거야 
    
        liList[currentNum].className="";
        liList[num].className="on";
        currentNum = num
    }
}

function rolling(){//이미지 움직일 곳
    menuNum++;
    if(menuNum > spanList.length-1){
        menuNum=0;
    }
      selectMenu(menuNum)
}

sid=setInterval(rolling,2000)


window.onload=init;



//minwon servise



//footer site_link1
    function init(){
      var familySite=document.getElementById('site_link');
      var familySiteTitle=familySite.getElementsByTagName('h3')[0];
      var familySiteUl=familySite.getElementsByTagName('ul')[0];

      familySiteTitle.onmouseover = familySiteUl.onmouseover=function(){ //familySiteTitle에 마우스를 올렸을 때   =은 대입할 거야 
          familySiteTitle.className="on"; //화살표 바뀌는 작업
          familySiteUl.className=""
      }

      familySiteTitle.onmouseout = familySiteUl.onmouseout=function(){ //familySiteTitle에 마우스를 내렸을 때
          familySiteTitle.className=""; //화살표 바뀌는 작업
          familySiteUl.className="off" //마우스를 내렸을 때도 이 동작이 유지 되어야 한다.
      }
  
      var familySiteUlli = familySiteUl.getElementsByTagName('li')
      for(var i=0; i<familySiteUlli.length; i++){
          familySiteUlli[i].getElementsByTagName('a')[0].onmouseover=function(){
              this.className="on"
          }
          familySiteUlli[i].getElementsByTagName('a')[0].onmouseout=function(){
              this.className=""
          }
      }
    }
    window.onload=init;
