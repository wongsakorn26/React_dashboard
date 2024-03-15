import React from 'react'
import '../style/manager.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function member() {
  return (
    <>
        <div className='con-manager'>
        <br></br>
          <div className='main-top'>
            <FontAwesomeIcon icon={faUsers} /> ผู้ดูแลระบบ
            <br></br>
            <br></br>
            <button className='btn-adduser'><FontAwesomeIcon icon={faPlus} /> เพิ่มข้อมูล </button>
            </div>
            <br></br>
            <div className='table'>
            <table id="users">
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อผู้ใช้งาน</th>
                <th>ชื่อจริง</th>
                <th>นามสกุล</th>
                <th>อีเมล</th>
                <th>เบอร์โทรศัพท์</th>
                <th>ข้อมูลส่วนตัว</th>
                <th>จัดการ</th>
              </tr>
              <tr>
                <td>1</td>
                <td>addmin</td>
                <td>Wongsakorn</td>
                <td>Homsung</td>
                <td>wongsakorn@gmail.com</td>
                <td>0665412341</td>
                <td><button className='btn-info'><FontAwesomeIcon icon={faMagnifyingGlass} /> รายละเอียด</button></td>
                <td><button className='btn-edit'>แก้ไข</button>
                <button  className='btn-delete'>ลบ</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>addmin2</td>
                <td>Tee</td>
                <td>Tattoo</td>
                <td>Teetattooohm@gmail.com</td>
                <td>0898728134</td>
                <td><button className='btn-info'><FontAwesomeIcon icon={faMagnifyingGlass} /> รายละเอียด</button></td>
                <td><button className='btn-edit'>แก้ไข</button>
                <button  className='btn-delete'>ลบ</button></td>
              </tr>
            </table>
            </div>
            <br></br>
        </div>
    </>
    
  )
}

export default member