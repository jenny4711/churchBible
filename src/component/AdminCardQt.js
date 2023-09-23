import React from "react";
import Table from "react-bootstrap/Table";
import "../CSS/AdminCard.css";

const AdminCardQt = ({ item }) => {
  return (
    <div className="AdminCard">
      <h2>{item.userId.name}</h2>
      <Table className="MyAdmin-tbody" key={item._id} responsive>
        <tbody>
          <tr>
            <td className="name">date</td>
            <td className="content">{item.date}</td>
          </tr>
          <tr>
            <td className="name">본문구절</td>
            <td className="content">{item.main}</td>
          </tr>
          <tr>
            <td className="name">본문내용</td>
            <td className="textArea">{item.meditContent}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminCardQt;
