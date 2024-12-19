import React from 'react';
import "./HeatMapCalendar.css";
import HeatmapCalendar from './HeatMapCalendar'; 

const spendingData = [
  {date: "01/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "01/03/2024", description: "Zelle payment from TASNIN", amount: 50.00},
  {date: "01/03/2024", description: "Zelle payment to Dad", amount: -600.00},
  {date: "01/08/2024", description: "ATM WITHDRAWAL 002026 01/083818 BROA", amount: -100.00},
  {date: "01/09/2024", description: "Zelle payment from ARMAN", amount: 28.00},
  {date: "01/09/2024", description: "BQE CAFE BILLIARDS JACKSON HEIGH NY", amount: -112.60},
  {date: "01/12/2024", description: "AMZN Mktp US*RT02S9O Amzn.com/bill", amount: -74.17},
  {date: "01/16/2024", description: "Zelle payment to Dad", amount: -200.00},
  {date: "01/19/2024", description: "AKINO SUSHI 131-27305592 IL", amount: -131.91},
  {date: "01/19/2024", description: "MTA*NYCT PAYGO NEW YORK NY", amount: -2.90},
  {date: "01/22/2024", description: "Direct Pay", amount: 750.00},
  {date: "01/23/2024", description: "AMZN Mktp US*R82D66Q Amzn.com/bill", amount: -51.86},
  {date: "01/25/2024", description: "Refund", amount: 2.90},
  {date: "01/26/2024", description: "Donation", amount: -500.00},
  {date: "01/30/2024", description: "34TH STREET NY-H 110 W NEW YORK", amount: -50.00},
  {date: "01/31/2024", description: "MTA*NYCT PAYGO NEW YORK NY 01/30", amount: -2.90},
  {date: "01/31/2024", description: "MTA*NYCT PAYGO NEW YORK NY 01/30", amount: -2.90},
  {date: "01/31/2024", description: "MTA*NYCT PAYGO NEW YORK", amount: -2.90},
  {date: "01/31/2024", description: "CHIPOTLE", amount: -12.19},
  {date: "01/31/2024", description: "Zelle payment to Tahmid", amount: -55.00},
  {date: "02/01/2024", description: "Refund", amount: 2.90},
  {date: "02/01/2024", description: "Refund", amount: 2.90},
  {date: "02/01/2024", description: "34TH STREET NY-HCO.", amount: 88.94},
  {date: "02/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "02/05/2024", description: "Refund", amount: 2.90},
  {date: "02/05/2024", description: "AMZN Mktp US*RB6BE1Z Amzn.com/bill", amount: -58.59},
  {date: "02/06/2024", description: "CHIPOTLE", amount: -12.90},
  {date: "02/07/2024", description: "AMZN Mktp US Amzn.com/bill", amount: 35.92},
  {date: "02/20/2024", description: "Zelle payment to Dad", amount: -100.00},
  {date: "03/04/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "03/04/2024", description: "COSTCO WHSE", amount: -75.88},
  {date: "03/18/2024", description: "Zelle payment to Dad", amount: -100.00},
  {date: "03/20/2024", description: "AMZN Mktp US*RH6PN8E Amzn.com/bill", amount: -64.79},
  {date: "03/25/2024", description: "Zelle payment to Dad", amount: -1000.00},
  {date: "03/25/2024", description: "Zelle payment to DIGITAL ONE TRAVEL & MULTI SERVICES", amount: -500.00},
  {date: "03/26/2024", description: "Zelle payment from MOHAMMED", amount: 500.00},
  {date: "04/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "04/15/2024", description: "Zelle payment to Dad", amount: -190.00},
  {date: "04/16/2024", description: "Zelle payment to Noushin", amount: -535.00},
  {date: "04/17/2024", description: "APPLE.COM/US", amount: -869.91},
  {date: "05/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "05/08/2024", description: "MONTHLY SERVICE FEE", amount: -12.00},
  {date: "05/16/2024", description: "CHIPOTLE", amount: -12.36},
  {date: "05/20/2024", description: "CHEWY.COM", amount: -87.54},
  {date: "06/03/2024", description: "DIRECT PAY", amount: 200.00},
  {date: "06/03/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "06/10/2024", description: "Zelle payment to Dad", amount: -200.00},
  {date: "06/10/2024", description: "MONTHLY SERVICE FEE", amount: -12.00},
  {date: "06/18/2024", description: "ATM WITHDRAWAL", amount: -500.00},
  {date: "06/26/2024", description: "Zelle payment from TASNIN", amount: 45.00},
  {date: "07/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "07/05/2024", description: "BLINK MOTO", amount: -59.55},
  {date: "07/09/2024", description: "MONTHLY SERVICE FEE", amount: -12.00},
  {date: "07/15/2024", description: "Refund", amount: 2.90},
  {date: "07/16/2024", description: "Refund", amount: -2.90},
  {date: "07/30/2024", description: "Zelle payment from NOUSHIN", amount: 100.00},
  {date: "08/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "08/08/2024", description: "MONTHLY SERVICE FEE", amount: -12.00},
  {date: "08/26/2024", description: "Zelle payment from NOUSHIN", amount: 100.00},
  {date: "09/03/2024", description: "Zelle payment from TASNIN", amount: 40.00},
  {date: "09/03/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "09/10/2024", description: "MONTHLY SERVICE FEE", amount: -12.00},
  {date: "09/16/2024", description: "BLICK ART", amount: -48.95},
  {date: "09/16/2024", description: "BLICK ART", amount: -58.67},
  {date: "09/16/2024", description: "BLICK ART", amount: -8.72},
  {date: "09/25/2024", description: "DBC*BLICK ART", amount: -43.64},
  {date: "09/30/2024", description: "BLICK ART", amount: -67.39},
  {date: "10/02/2024", description: "BLINK MOTO", amount: -13.59},
  {date: "10/08/2024", description: "Zelle payment from TASNIN", amount: 100.00},
  {date: "10/08/2024", description: "MONTHLY SERVICE FEE", amount: -12.00},
  {date: "10/09/2024", description: "BLICK ART", amount: -22.39},
  {date: "10/11/2024", description: "Zelle payment from NOUSHIN", amount: 100.00}
];

function App() {
  return (
    <div className="App">
      <h1>Bank Purchases 2024</h1>
      <HeatmapCalendar purchaseData = {spendingData}/>
    </div>
  );
}

export default App;

