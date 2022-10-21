import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const style = {
  body: `bg-[#e3e3e3]`,
  wrapper: `bg-[e3e3e3]`,
  work: `bg-[fff] pt-24 pl-16 pr-16 pb-12 `,
  heading: `text-[#55198b] text-center mb-3`,
  row: `max-w-6xl mx-auto`,
  tagline: `text-center text-[#767779] text-xl mb-16`, // font-family: "Montserrat", sans-serif;
  workrow: `mb-20 max-w-6xl mx-auto`,
  imgRight: ``,
}
  

const Home: NextPage = () => {
  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <section className={style.work}>
          <h2 className={style.heading}>Websites Portfolio</h2>
          <div className={style.row}>
          <p className={style.tagline}>Here are few of my websites.</p>
          </div>
          <div className={style.workrow}>
            <div className={style.imgRight}>
              <Image src='' />
            </div>
            <div className=""></div>
          </div>
        </section>
      </div>
      <div className="mb-"></div>

    </div>
  )
}

export default Home
