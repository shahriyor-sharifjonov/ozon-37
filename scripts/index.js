$(function() {
  $('.ozon__item-with-img').click(function() {
    $('.ozon__item-with-img').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$(function() {
  $('.ozon__item').click(function() {
    $('.ozon__item').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})



$(function() {
  $('.pagination__text').click(function() {
    $('.pagination__text').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})


function dropdown500(val){
  var y = document.getElementsByClassName('dropdown500');
  var aNode = y[0].innerHTML=val;
}



function dropdownhed(val){
  var y = document.getElementsByClassName('header__dropdown__button1');
  var aNode = y[0].innerHTML=val;
}
function dropdown(val){
  var y = document.getElementsByClassName('yourdrop');
  var aNode = y[0].innerHTML=val;
}

function dropdown1(val){
  var y = document.getElementsByClassName('yourdrop1');
  var aNode = y[0].innerHTML=val;
}

function dropdown2(val){
  var y = document.getElementsByClassName('yourdrop2');
  var aNode = y[0].innerHTML=val;
}
function dropdown3(val){
  var y = document.getElementsByClassName('yourdrop3');
  var aNode = y[0].innerHTML=val;
}
function dropdown4(val){
  var y = document.getElementsByClassName('yourdrop4');
  var aNode = y[0].innerHTML=val;
}
function dropdown5(val){
  var y = document.getElementsByClassName('yourdrop5');
  var aNode = y[0].innerHTML=val;
}
function dropdown6(val){
  var y = document.getElementsByClassName('yourdrop6');
  var aNode = y[0].innerHTML=val;
}
function dropdown6(val){
  var y = document.getElementsByClassName('yourdrop6');
  var aNode = y[0].innerHTML=val;
}
function dropdown7(val){
  var y = document.getElementsByClassName('yourdrop7');
  var aNode = y[0].innerHTML=val;
}
function dropdown8(val){
  var y = document.getElementsByClassName('yourdrop8');
  var aNode = y[0].innerHTML=val;
}
function dropdown9(val){
  var y = document.getElementsByClassName('yourdrop9');
  var aNode = y[0].innerHTML=val;
}
function dropdown10(val){
  var y = document.getElementsByClassName('yourdrop10');
  var aNode = y[0].innerHTML=val;
}
function dropdown11(val){
  var y = document.getElementsByClassName('yourdrop11');
  var aNode = y[0].innerHTML=val;
}

notselected()

function notselected(){
  const sidebar = document.querySelector('.sidebar');
  const sidebarFooter = document.querySelector('.sidebar-footer');

  sidebar.innerHTML = `
          <h3 class="sidebar__title">Все источники парсинга</h3>
            <div class="sidebar__item sidebar__item_current">
              <div class="sidebar__item-header sidebar__item-header_current">
                <div class="sidebar__item-header__row">
                  <img src="images/ozon.png" class="sidebar__item-header__row__img">
                  <p class="sidebar__item-title">sitename</p>
                </div>
                <div class="sidebar__item-btns current"></div>
              </div>
              <div class="sidebar__item-body collapse show" id="collapse0" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header"> 
                <div class="sidebar__item-header__row">
                  <img src="images/ozon.png" class="sidebar__item-header__row__img">
                  <p class="sidebar__item-title">sitename</p>
                </div>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse1" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header"> 
                <div class="sidebar__item-header__row">
                  <img src="images/ozon.png" class="sidebar__item-header__row__img">
                  <p class="sidebar__item-title">sitename</p>
                </div>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse2" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header"> 
                <div class="sidebar__item-header__row">
                  <img src="images/ozon.png" class="sidebar__item-header__row__img">
                  <p class="sidebar__item-title">sitename</p>
                </div>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse3" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header">
                <div class="sidebar__item-header__row">
                  <img src="images/ozon.png" class="sidebar__item-header__row__img">
                  <p class="sidebar__item-title">sitename</p>
                </div>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse4" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
  `
}

registerSidebar()

function registerSidebar(){
  const btns = document.getElementsByClassName('sidebar__item-btns');
  for (let index = 0; index < btns.length; index++) {
    if(btns[index].classList.contains('current')){
      btns[index].innerHTML = `
      <button class="sidebar__item-btn sidebar__item-btn_blue">
        <svg width='20' height='15' viewbox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.90859 6.18157H5.15454L5.15549 6.17257C5.27954 5.53318 5.52232 4.92588 5.86989 4.38551C6.38713 3.58331 7.11263 2.95463 7.95989 2.57446C8.24679 2.44645 8.54604 2.34845 8.85099 2.28345C9.48359 2.14844 10.1355 2.14844 10.7681 2.28345C11.6772 2.47955 12.5114 2.95288 13.1668 3.64449L14.512 2.23245C13.9058 1.59407 13.1885 1.08445 12.3992 0.731399C11.9967 0.552023 11.5783 0.415343 11.15 0.323387C10.2663 0.134392 9.3556 0.134392 8.47194 0.323387C8.04335 0.415724 7.62455 0.552737 7.22174 0.732399C6.03475 1.26252 5.01863 2.14253 4.29574 3.26648C3.80924 4.02435 3.46902 4.87552 3.29444 5.77156C3.26784 5.90656 3.25359 6.04456 3.23459 6.18157H0.308594L4.10859 10.1817L7.90859 6.18157ZM11.7086 8.18163H14.4626L14.4617 8.18963C14.2135 9.47143 13.4958 10.5988 12.4638 11.3277C11.9507 11.6939 11.3737 11.9495 10.7662 12.0798C10.1339 12.2148 9.48232 12.2148 8.85004 12.0798C8.24265 11.9492 7.66573 11.6936 7.15239 11.3277C6.90028 11.1482 6.6649 10.944 6.44939 10.7177L5.10609 12.1318C5.71268 12.77 6.43032 13.2792 7.21984 13.6318C7.62264 13.8118 8.04349 13.9488 8.46909 14.0398C9.35242 14.2289 10.2629 14.2289 11.1462 14.0398C12.8491 13.6678 14.347 12.6112 15.3214 11.0947C15.8075 10.3374 16.1474 9.48694 16.3218 8.59164C16.3474 8.45664 16.3626 8.31863 16.3816 8.18163H19.3086L15.5086 4.18151L11.7086 8.18163Z'>
        </svg>
      </button>
      <button class="sidebar__item-btn sidebar__item-btn_green" onclick="deleteSidebarMenu(this)" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> 
        <svg width='18' height='18' viewbox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M13.5209 5.14297H12.387C12.1404 5.14297 11.9059 5.26185 11.7609 5.46564L7.96031 10.7544L6.23893 8.35747C6.09387 8.15611 5.86178 8.03481 5.61276 8.03481H4.47888C4.32173 8.03481 4.22986 8.21433 4.32173 8.34291L7.33413 12.5351C7.4053 12.6348 7.49911 12.716 7.6078 12.772C7.71648 12.828 7.83691 12.8573 7.9591 12.8573C8.08129 12.8573 8.20171 12.828 8.3104 12.772C8.41909 12.716 8.5129 12.6348 8.58406 12.5351L13.6757 5.45108C13.7699 5.3225 13.6781 5.14297 13.5209 5.14297Z'>
          <path d='M9 0C4.02991 0 0 4.02991 0 9C0 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 0 9 0ZM9 16.4732C4.87366 16.4732 1.52679 13.1263 1.52679 9C1.52679 4.87366 4.87366 1.52679 9 1.52679C13.1263 1.52679 16.4732 4.87366 16.4732 9C16.4732 13.1263 13.1263 16.4732 9 16.4732Z'>
        </svg>
      </button>
      `
    }else{
      btns[index].innerHTML = `
      <button onclick="addSidebarMenu(this)" class="sidebar__item-btn sidebar__item-btn_blue" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> 
        <svg width='20' height='20' viewbox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.1652 0.909318C10.8615 -0.303106 9.14028 -0.303106 8.83529 0.909318L8.74654 1.2668C8.69462 1.47454 8.58804 1.66461 8.43788 1.81727C8.28771 1.96993 8.09943 2.07963 7.89256 2.13498C7.6857 2.19033 7.46779 2.18932 7.26145 2.13204C7.05511 2.07477 6.86786 1.96332 6.71912 1.80926L6.46288 1.54553C5.59416 0.646835 4.10297 1.50803 4.44671 2.70921L4.5467 3.06418C4.60546 3.26985 4.60817 3.48749 4.55456 3.69456C4.50094 3.90163 4.39295 4.0906 4.24176 4.24192C4.09057 4.39323 3.90169 4.50138 3.69466 4.55516C3.48763 4.60895 3.26998 4.60642 3.06426 4.54784L2.70927 4.4466C1.50932 4.10287 0.64685 5.59403 1.54557 6.46272L1.80931 6.71896C1.96337 6.86769 2.07482 7.05494 2.13209 7.26127C2.18937 7.46761 2.19038 7.68551 2.13503 7.89237C2.07968 8.09923 1.96998 8.28751 1.81732 8.43767C1.66465 8.58783 1.47458 8.6944 1.26683 8.74633L0.90934 8.83507C-0.303113 9.1388 -0.303113 10.8599 0.90934 11.1649L1.26683 11.2537C1.47458 11.3056 1.66465 11.4122 1.81732 11.5623C1.96998 11.7125 2.07968 11.9008 2.13503 12.1076C2.19038 12.3145 2.18937 12.5324 2.13209 12.7387C2.07482 12.9451 1.96337 13.1323 1.80931 13.281L1.54557 13.5373C0.64685 14.406 1.50807 15.8971 2.70927 15.5534L3.06426 15.4534C3.27006 15.3945 3.48787 15.3918 3.69509 15.4455C3.90231 15.4991 4.0914 15.6072 4.24277 15.7586C4.39413 15.9099 4.50224 16.099 4.55591 16.3063C4.60957 16.5135 4.60682 16.7313 4.54795 16.9371L4.44671 17.2908C4.10297 18.4907 5.59416 19.3532 6.46288 18.4545L6.71912 18.1907C6.86786 18.0367 7.05511 17.9252 7.26145 17.868C7.46779 17.8107 7.6857 17.8097 7.89256 17.865C8.09943 17.9204 8.28771 18.0301 8.43788 18.1827C8.58804 18.3354 8.69462 18.5255 8.74654 18.7332L8.83529 19.0907C9.13903 20.3031 10.8602 20.3031 11.1652 19.0907L11.2539 18.7332C11.3059 18.5255 11.4124 18.3354 11.5626 18.1827C11.7128 18.0301 11.9011 17.9204 12.1079 17.865C12.3148 17.8097 12.5327 17.8107 12.739 17.868C12.9454 17.9252 13.1326 18.0367 13.2814 18.1907L13.5376 18.4545C14.4063 19.3532 15.8975 18.492 15.5538 17.2908L15.4538 16.9358C15.3949 16.73 15.3922 16.5122 15.4458 16.305C15.4995 16.0978 15.6076 15.9087 15.759 15.7573C15.9103 15.606 16.0994 15.4979 16.3067 15.4442C16.5139 15.3905 16.7317 15.3933 16.9375 15.4522L17.2912 15.5534C18.4912 15.8971 19.3536 14.406 18.4549 13.5373L18.1912 13.281C18.0371 13.1323 17.9257 12.9451 17.8684 12.7387C17.8111 12.5324 17.8101 12.3145 17.8655 12.1076C17.9208 11.9008 18.0305 11.7125 18.1832 11.5623C18.3358 11.4122 18.5259 11.3056 18.7337 11.2537L19.0911 11.1649C20.3036 10.8612 20.3036 9.14005 19.0911 8.83507L18.7337 8.74633C18.5259 8.6944 18.3358 8.58783 18.1832 8.43767C18.0305 8.28751 17.9208 8.09923 17.8655 7.89237C17.8101 7.68551 17.8111 7.46761 17.8684 7.26127C17.9257 7.05494 18.0371 6.86769 18.1912 6.71896L18.4549 6.46272C19.3536 5.59403 18.4924 4.10287 17.2912 4.4466L16.9362 4.54659C16.7306 4.60535 16.5129 4.60806 16.3058 4.55445C16.0988 4.50083 15.9098 4.39284 15.7585 4.24166C15.6072 4.09047 15.499 3.90159 15.4452 3.69457C15.3914 3.48754 15.394 3.2699 15.4525 3.06418L15.5538 2.70921C15.8975 1.50928 14.4063 0.646835 13.5376 1.54553L13.2814 1.80926C13.1326 1.96332 12.9454 2.07477 12.739 2.13204C12.5327 2.18932 12.3148 2.19033 12.1079 2.13498C11.9011 2.07963 11.7128 1.96993 11.5626 1.81727C11.4124 1.66461 11.3059 1.47454 11.2539 1.2668L11.1652 0.909318ZM10.0002 16.2459C9.17249 16.2576 8.35066 16.1046 7.58252 15.796C6.81438 15.4873 6.11525 15.0291 5.52575 14.4479C4.93626 13.8667 4.46815 13.1741 4.14865 12.4104C3.82915 11.6468 3.66462 10.8272 3.66462 9.99938C3.66462 9.17156 3.82915 8.35199 4.14865 7.58832C4.46815 6.82464 4.93626 6.13207 5.52575 5.55087C6.11525 4.96967 6.81438 4.51142 7.58252 4.20276C8.35066 3.8941 9.17249 3.74118 10.0002 3.75289C11.6571 3.75289 13.2461 4.41107 14.4177 5.58263C15.5893 6.75419 16.2475 8.34316 16.2475 10C16.2475 11.6568 15.5893 13.2458 14.4177 14.4174C13.2461 15.5889 11.6571 16.2471 10.0002 16.2471V16.2459Z'>
        </svg>
      </button>
      `
    }
  }
}

const btns = document.getElementsByClassName('sidebar__item-btns');
function deleteSidebarMenu(e){
  e.parentNode.classList.remove('current')
  registerSidebar()
}

function addSidebarMenu(e){
  for(let i = 0; i < btns.length; i++){
    btns[i].classList.remove('current')
  }
  e.parentNode.classList.add('current')
  registerSidebar()
}
