import React from "react";
import Image from "next/image";

export default function Renewableenergy(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: "1rem 0" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#4453a2" }}>Сэргээгдэх эрчим хүчний эх үүсвэрүүд</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "1rem", flexWrap: "wrap" }}>
          <div style={{ width: "20%", padding: 10 }}>
            <Image src="/renewable/bioenergy.jpg" alt="bioenergy" height={160} width={160} style={{ borderRadius: "50%" }} />
            <div style={{ marginTop: 10 }}>Био энерги</div>
          </div>
          <div style={{ width: "20%", padding: 10 }}>
            <Image src="/renewable/geothermal.png" alt="geothermal" height={160} width={160} style={{ borderRadius: "50%" }} />
            <div style={{ marginTop: 10 }}>Газрын гүний дулааны эрчим хүч</div>
          </div>
          <div style={{ width: "20%", padding: 10 }}>
            <Image src="/renewable/hydroenergy.png" alt="hydroenergy" height={160} width={160} style={{ borderRadius: "50%" }} />
            <div style={{ marginTop: 10 }}>Усны эрчим хүч</div>
          </div>
          <div style={{ width: "20%", padding: 10 }}>
            <Image src="/renewable/ocean.png" alt="ocean" height={160} width={160} style={{ borderRadius: "50%" }} />
            <div style={{ marginTop: 10 }}>Далайн эрчим хүч</div>
          </div>
          <div style={{ width: "20%", padding: 10 }}>
            <Image src="/renewable/solar.png" alt="solar" height={160} width={160} style={{ borderRadius: "50%" }} />
            <div style={{ marginTop: 10 }}>Нарны эрчим хүч</div>
          </div>
          <div style={{ width: "20%", padding: 10 }}>
            <Image src="/renewable/fan.png" alt="wind_fan" height={160} width={160} style={{ borderRadius: "50%" }} />
            <div style={{ marginTop: 10 }}>Салхины эрчим хүч</div>
          </div>
        </div>
      </div>
    </div>
  )

}
