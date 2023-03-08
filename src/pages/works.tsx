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
      <main className="works">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">One Ocean</h3>
              <p className="my-4 font-light">沖縄ツアーガイド One-oceanのウェブサイト<br />ReactのフレームワークGatsbyJSを使用、CMSはWordPressをGraphqlを用いてヘッドレスで使用しています。CSSは主にTailWindCSSとSCSSを使用。デザインからコーディングまで担当。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://one-ocean.vercel.app/' className="text-sm font-light text-gray-500 dark:text-gray-400">OneOceanSite</a>
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
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ique</h3>
              <p className="my-4 font-light">WordPressを使用したウェブサイト。デザインからコーディングまで担当しました。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://ique.jp/' className="text-sm font-light text-gray-500 dark:text-gray-400">Ique</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ヤマシロ鍼灸整骨院</h3>
              <p className="my-4 font-light">WordPressを使用したウェブサイト,デザイン、記事等のコンテンツ作成も作成しました。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href="https://yamashiro-seikotuin.okinawa/" className="text-sm font-light text-gray-500 dark:text-gray-400">ヤマシロ鍼灸整骨院</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">うるま市議会議員 宮城カズトシ公式ウェブサイト</h3>
              <p className="my-4 font-light">WrodPressを使用したウェブサイト、デザインからSNS、ブログ等も作成。スプレッドシートを使用し、講演会の顧客名簿を管理するシステムも構築。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://miyagi-kazutoshi.com/' className="text-sm font-light text-gray-500 dark:text-gray-400">宮城カズトシ公式ウェブサイト</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">YouTube宮城カズトシチャンネル</h3>
              <p className="my-4 font-light">うるま市議会議員宮城カズトシのYouTubeチャンネルの撮影、編集、企画</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href="https://www.youtube.com/@user-gx3vi1dc3j" className="text-sm font-light text-gray-500 dark:text-gray-400">ヤマシロ鍼灸整骨院</a>
              </div>
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DTP作成</h3>
              <p className="my-4 font-light">名刺、パンフレット、チラシ等のDTP作成</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              {/* <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href='https://miyagi-kazutoshi.com/' className="text-sm font-light text-gray-500 dark:text-gray-400">宮城カズトシ公式ウェブサイト</a>
              </div> */}
            </figcaption>    
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ポータルサイトうるま市ポータル 取材・記事執筆</h3>
              <p className="my-4 font-light">取材アポ・取材・撮影・記事執筆・WordPressに入稿 新着順に１４記事担当しました。</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <a href="https://uruma-portal.okinawa/" className="text-sm font-light text-gray-500 dark:text-gray-400">うるま市ポータル</a>
              </div>
            </figcaption>    
          </figure>
        </div>
      </main>
    </Layout>
  )
}
