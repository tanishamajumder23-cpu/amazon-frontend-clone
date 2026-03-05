const imgs=document.querySelectorAll('.header-slider ul img');//provide the class name, ul and img: sleects all the images under ul, hence this imgs will have an array that stores all the array elements
const prev_btn=document.querySelector('.control_prev');//stores only 1 element in the previous button
const next_btn=document.querySelector('.control_next');//stores only 1 element in the next button

let n=0;//we are on the first image

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }//first selecting all images and then adding the style property none so all images will be hidden
    imgs[n].style.display='block';//select 1st image,2nd image...nth image
}
//we have to add js for prev and next button such that it'll decrease and increase the value of n accrodingly
changeSlide();


prev_btn.addEventListener('click',(e)=>{
    if (n > 0){
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});
next_btn.addEventListener('click',(e)=>{
    if (n <(imgs.length-1)){
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});
const scrollContainer= document.querySelectorAll('.products');
//select all div with this classname "products" where we can scroll the products with mouse
//for (const item of scrollContainer){
    //item.addEventListener('wheel',(evt)=>{
        //evt.preventDefault();
       // item.scrollLeft+=evt.deltaY;
    //});
//}
