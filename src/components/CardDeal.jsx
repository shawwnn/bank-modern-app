import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Lorem ipsum dolor sit amet, <br className="sm:block hidden"/>consectetur adipisicing elit. Corporis.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat rem odio atque tempora ipsam, impedit tenetur ea quibusdam! Sint, vitae.</p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] "/>
    </div>

    
  </section>
)


export default CardDeal