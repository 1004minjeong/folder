let _wrapper; //sticky영역의 부모 (=main content)
let _sticky; //sticky공간
let children; //.section
let _length; //.section의 갯수
let headerVh = 6;
let contentVh; //영역계산
let start = 0;
let end = 0;



function floderScroll(wrapper, sticky) {
    _wrapper = wrapper; //부모의공간
    _sticky = sticky; //sticky공간
    children = document.querySelectorAll('.section')//배열
    _length = children.length;//4
    console.log(_length)

}

let mainContent = document.querySelector('.main-content')
let $sticky = document.querySelector('.sticky')
//floderScroll(wrapper,sticky)
floderScroll(mainCntent, $sticky)