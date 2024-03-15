import React from 'react'
import '../style/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import TradingViewWidget from './TradingViewWidget'
function dashboard() {
    return (
        <>
            <div className='box-dashboard'>
                <div className='box'>
                    <div className='content1'>
                        ผู้ดูแลระบบ
                    </div>
                    <a href='#' className='linkto'>
                        <div >คลิกจัดการระบบ <FontAwesomeIcon icon={faArrowCircleRight} /></div>
                    </a>
                </div>
                <div className='box'>
                    <div className='content1'>
                        รายชื่อลูกค้า
                    </div>
                    <a href='#' className='linkto'>
                        <div >คลิกจัดการระบบ <FontAwesomeIcon icon={faArrowCircleRight} /></div>
                    </a>
                </div>
                <div className='box'>
                    <div className='content1'>
                        รายการสินค้า
                    </div>
                    <a href='#' className='linkto'>
                        <div >คลิกจัดการระบบ <FontAwesomeIcon icon={faArrowCircleRight} /></div>
                    </a>
                </div>
                <div className='box'>
                    <div className='content1'>
                        รายการสินค้า
                    </div>
                    <a href='#' className='linkto'>
                        <div >คลิกจัดการระบบ <FontAwesomeIcon icon={faArrowCircleRight} /></div>
                    </a>
                </div>
            </div>


            <div className='box-d2'>
                <div className='box2'>
                    <div className='content2'>
                        3,500 บาท
                    </div>
                    <div className='content3'>ยอดขายประจำวัน</div>
                    <span className='icon'><FontAwesomeIcon icon={faChartBar} /></span>
                </div>
                <div className='box2'>
                    <div className='content2'>
                        25,500 บาท
                    </div><div className='content3'>ยอดขาย 7 วันที่ผ่านมา</div>
                    <span className='icon'><FontAwesomeIcon icon={faSignal} /></span>
                </div>
                <div className='box2'>
                    <div className='content2'>
                        5 รายการ
                    </div><div className='content3'>ยอดคำสั่งซื้อประจำวัน</div>
                    <span className='icon'><FontAwesomeIcon icon={faCartArrowDown} /></span>
                </div>
                <div className='box2'>
                    <div className='content2'>
                        10 คน
                    </div><div className='content3'>ลูกค้าใหม่ในเดือนนี้</div>
                    <span className='icon'><FontAwesomeIcon icon={faUsers} /></span>
                </div>
            </div>


            <div className='box-d3'>
                <TradingViewWidget />
            </div>

        </>
    )
}

export default dashboard