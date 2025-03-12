import React, { useState } from "react";
 import PvlMemberList from "./components/PvlMemberList";
 import PvlMemberAdd from "./components/PvlMemberAdd";
 
 
 
 const PvlApp = () => {
   //khởi tạo thành viên
   const [members, setMembers] = useState([
     { id: "230001", fullname: "Phạm Văn Lực", username: "C", password: "123456" },
     { id: "230002", fullname: "Trần Văn Quân", username: "A", password: "abcdef" },
     { id: "230003", fullname: "Lê Quang Khải ", username: "D", password: "qwerty" },
   ]);
 //thêm mới
   const addMember = (member) => {
     setMembers([...members, member]);
   };
     // Hàm xóa thành viên theo ID
     const removeMember = (id) => {
       setMembers(members.filter(member => member.id !== id));
   };
 
   // Hàm cập nhật thông tin thành viên
   const updateMember = (updatedMember) => {
     setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
   };
 
 
   return (
     <div className="container mt-4">
       <h1 className="text-primary">Quản lý thành viên</h1>
       <PvlMemberList members={members} removeMember={removeMember} updateMember={updateMember}/>
       <PvlMemberAdd addMember={addMember}/>
       
     </div>
   );
 };
 
 export default PvlApp;