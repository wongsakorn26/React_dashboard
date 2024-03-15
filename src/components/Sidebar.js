import React from 'react';
import '../style/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <span><img  style={{ height: '55px', width: '150px' }} src="../../logo.png" alt="Etrader" /></span>
        <hr></hr>
        <br></br>
        <span><FontAwesomeIcon icon={faUser} /> Firstname Lastname</span>
        <br></br>
        <hr></hr>
        <br></br>
        <a href='/dashboard'><FontAwesomeIcon icon={faTachometerAlt} />  หน้าหลัก</a>
        <a href='/manager'><FontAwesomeIcon icon={faUserCog} />  ผู้ดูแลระบบ</a>
        <a href='/member'><FontAwesomeIcon icon={faUsers} />  รายชื่อลูกค้า</a>
        <a href='/products'><FontAwesomeIcon icon={faShoppingCart} />  รายการสินค้า</a>
        <a href='/orders'><FontAwesomeIcon icon={faCartArrowDown} />  รายการสั่งซื้อ</a>
        <br></br>
        <hr></hr>
        <br></br>
        <span>บัญชีของเรา</span>
        <a href='#'><FontAwesomeIcon icon={faSignOutAlt} /> ออกจากระบบ</a>
      </div>
    </div>
  );
}

export default Sidebar;
