import React from "react";
import styles from "./Paragraph.module.css";

console.log(styles);

export default function Paragraph() {
  return (
    <div>
      <h2 className="heading2">Aluuu</h2>
      <p className={styles.paragraph}>
        Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở
        hữu cũ bán, nhóm không còn chất lượng vì có nhiều tin bán hàng, quảng
        cáo.
      </p>
    </div>
  );
}
