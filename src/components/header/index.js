import './style.scss'

function Header() {
 
    return (
      <div className="header">
        <div className="gnb">
          <ul>
            <li className="show_mobile"><a href="#"><span><img src="https://newstate.gabia.io/asset/logo_m.png" alt="" /></span></a></li>
            <li className="gnb_main active"><a onclick="fnMove('1')"><span data-langNum="menu1">MAIN</span></a></li>
            <li className="gnb_preorder"><a onclick="fnMove('2')"><span data-langNum="menu2">PRE-REGISTER</span></a></li>
            <li className="gnb_trailer"><a onclick="fnMove('3')"><span data-langNum="menu3">TRAILER</span></a></li>
            <li className="gnb_media"><a onclick="fnMove('4')"><span data-langNum="menu4">SOCIAL MEDIA</span></a></li>

            <li className="show_mobile">
              
              <div className="btn_snslink btn_vk"><a  className=""></a></div>
              <div className="btn_snslink btn_facebook"><a  className=""></a></div>
              <div className="btn_snslink btn_twitter" data-langNum="sns_link_twitter"><a  className=""></a></div><br className="only_ru"/>
              <div className="btn_snslink btn_youtube"><a className=""></a></div>
              <div className="btn_snslink btn_insta"><a className=""></a></div>
              
            </li>
          </ul>
        </div>
        <a className="show_mobile btn_menu"></a>
        <a className="btn_menu_close"></a>

        <a className="hide_mobile top_logo"><img src="https://newstate.gabia.io/asset/hd_logo.png" alt="" /></a>
      </div>
    );
  }

  export default Header;

  
  const a = () => {
    return 'a';
  }