import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[3] w-[50%] -left-1/2 h-[50%] top-0 white__gradient"/>
      <div className="absolute z-[3] w-[50%] -left-1/2 h-[50%] top-0 pink__gradient"/>

    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Lorem ipsum dolor sit <br className="sm:block hidden"/>amet consectetur.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quo. Doloremque consequatur dolores aut non qui placeat vitae dignissimos consequuntur! Facere obcaecati saepe architecto quos vel eligendi voluptatem consequatur autem!
      </p>
    </div>
  </section>
)

export default Billing