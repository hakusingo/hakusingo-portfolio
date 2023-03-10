import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>hakusingo about</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className='my-[2rem] flex justify-center'>
          <Image className="rounded-full w-[70%] h-auto aspect-[1/1] max-h-[400px] max-w-[400px] object-cover" width="300" height="300" src="/my-image.jpg" alt="image description"/>
        </div>
        <div className="w-3/4 mx-auto">
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            沖縄県うるま市具志川生まれ、具志川育ち。バスケットボール、読書、散歩、音楽（何でも聞く）プログラミング好きの1983年生まれ。<br />
            沖縄大学国際コミュニケーション学科卒業の後、上京。東京(新小岩・吉祥寺)に10年ほど住む、キッチン・ホールスタッフ・バーテンダーなど飲食店で１５年ほど働き、その後２年ほどお寺で働く。バーテンダーのころからプログラミングを独学でスタート。後に地元のウェブ系の会社で働く。</p>
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">2022年よりフリーランスに。ウェブサイト制作やアプリ開発・ウェブライティングなどITの知識を生かして、地元でお困りの方の手助けをするウェブ屋さん。</p>
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            Adobe AI, PS, XD, PremirePro, Lightroom Classic
          </p>
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            HTML,CSS/SCSS/TailWind/CssInJs,
          </p>
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            PHP/Laravel/WordPress, JavaScript/React/GatsbyJs/NextJs, Graphql
          </p>
        </div>
      </main>
    </Layout>
  )
}
