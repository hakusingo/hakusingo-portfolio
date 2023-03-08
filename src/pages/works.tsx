import Head from 'next/head'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>hakusingo portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">One Ocean</h3>
              <p className="my-4 font-light">沖縄ツアーガイド One-oceanのウェブサイト<br />ReactのフレームワークGatsbyJSを使用、CMSはWordPressをGraphqlを用いてヘッドレスで使用しています。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://vercel.com/hakusingo/one-ocean/G8pmTNww2ED7xPRoFnfCUbuDr7RF' className="text-sm font-light text-gray-500 dark:text-gray-400">OneOceanSite</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Haku-webDesign</h3>
              <p className="my-4 font-light">フリーランスとして活動しているHakuウェブデザインのウェブサイト。<br />GatsbyJSを使用して爆速で動くSPAにしました。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://haku-design.net/' className="text-sm font-light text-gray-500 dark:text-gray-400">haku-design</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ique</h3>
              <p className="my-4 font-light">WordPressを使用したウェブサイト</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://ique.jp/' className="text-sm font-light text-gray-500 dark:text-gray-400">Ique</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ヤマシロ鍼灸整骨院</h3>
              <p className="my-4 font-light">WordPressを使用したウェブサイト,記事等のコンテンツも作成</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href="https://yamashiro-seikotuin.okinawa/" className="text-sm font-light text-gray-500 dark:text-gray-400">ヤマシロ鍼灸整骨院</a>
              </div>
            </figcaption>    
          </figure>
        </div>
      </main>
    </Layout>
  )
}
