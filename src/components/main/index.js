import './style.scss'

function Main() {
    return (
      <div class="top_visual scroll_box">
        <div class="bg">
          <img src="https://newstate.gabia.io/asset/img/bg_top_m.jpg" alt="" class="show_mobile"/>
        </div>
        <div class="desc_box">
          <div class="contains">
            <p class="logo"><img src="https://newstate.gabia.io/asset/img/logo.png" alt=""/></p>
            <p class="title" data-langNum="main_top_tit">BEYOND BATTLE ROYALE</p>
            
            <div class="btn_box" >		
             	
              <div class="show_mobile">
                <a href="#" class="btn_normal bg_y btn_order btn_app btn_alert" data-langNum="main_top_btn1"><span>PRE-REGISTER</span></a>
                <a href="#" target="_blank" class="btn_normal bg_y btn_order btn_google" data-langNum="main_top_btn1"><span>PRE-REGISTER</span></a>
              </div>
             
            </div>
            
          </div>
        </div>
        <a href="#" onclick="fnMove('2')" class="btn_scroll">
          <img src="asset/img/ic_scroll_m.png" alt="" class="show_mobile"/>
          <img src="asset/img/ic_scroll.png" alt="" class="hide_mobile"/>
        </a>
      </div> 		
    );
  }

  export default Main;