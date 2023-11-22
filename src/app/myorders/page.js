
import React from 'react';
import styles from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';
import NavBar from "./navbar/Navbar";
import Medicines from "./medicines/Medicine";
import OrderSummary from "./ordersummary/OrderSummary";
import box from "../../../public/images/box.png";
import circle from "../../../public/images/circle.png";


const page = () => {
  return (
    <div  style={{backgroundColor:"#002C4B"}}>
        <NavBar />

        
      {/* <div className={styles.mid}>
        <div className={styles.mid_1}>
          <Image src={box} alt="img" />
          <span>Place Order</span>
        </div>
        <div>
         <Link href="../Login"><Image src={circle} alt="img" /></Link>  
         <Link href="../Login"> <span>My Orders</span></Link>
        </div>
      </div> */}


        <div style={{height:"auto", backgroundColor: "#f6f3f3", padding: "1% 0 1% 0", marginTop: "3rem", marginBottom:"3.2rem" }} >
        <Medicines />
        <OrderSummary />
      </div>
      
    </div>
  )
}

export default page