import { useState } from "react";
import "./bai02.css";

export default function Bai02() {
  const [soTienBanDau, setSoTienBanDau] = useState("");
  const [laiSuat, setLaiSuat] = useState("");
  const [soTienMongMuon, setSoTienMongMuon] = useState("");  
  const [duLieuBang, setDuLieuBang] = useState([]);

  function tinhLaiKep() {
    let tienGoc = parseFloat(soTienBanDau);
    let tyLeLai = parseFloat(laiSuat) / 100;
    let mucTieu = parseFloat(soTienMongMuon);
    let nam = 0;
    let duLieu = [];
    setDuLieuBang([]); 

    while (tienGoc < mucTieu) {
      let tienLai = tienGoc * tyLeLai;
      tienGoc += tienLai;
      nam++;
      duLieu.push({
        nam,
        soTien: tienGoc.toFixed(2),
        tyLeLai: `${(tyLeLai * 100).toFixed(2)}%`,
        tongTien: tienGoc.toFixed(2),
      });
    }

    setDuLieuBang(duLieu);
  }

  return (
    <div className="container">
      <h1 className="title">Bài tập 2 - Tính Lãi Kép</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập số tiền ban đầu (VNĐ)"
          value={soTienBanDau}
          onChange={(e) => setSoTienBanDau(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Nhập lãi suất (%)"
          value={laiSuat}
          onChange={(e) => setLaiSuat(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Nhập số tiền mong muốn (VNĐ)"
          value={soTienMongMuon}
          onChange={(e) => setSoTienMongMuon(e.target.value)}
          className="input-field"
        />
        <button onClick={tinhLaiKep} className="btn">Tính toán</button>
      </div>
      {duLieuBang.length > 0 && (
        <table className="result-table">
          <thead>
            <tr>
              <th>Năm</th>
              <th>Số tiền</th>
              <th>Tỷ lệ lãi</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {duLieuBang.map((dong, index) => (
              <tr key={index}>
                <td>{dong.nam}</td>
                <td>{dong.soTien}</td>
                <td>{dong.tyLeLai}</td>
                <td>{dong.tongTien}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}