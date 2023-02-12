"use client";

import type { FC } from "react";
import { ContentArea } from "src/components/ui/ContentArea";
import { TableOfContents } from "src/components/ui/TableOfContents";

/**
 * @package
 */
export const Main: FC = () => {
  return (
    <div>
      <div className="fixed top-0">
        <TableOfContents
          contents={["hoge", "piyo", "fuga"]}
          contentId="content"
        />
      </div>
      <ContentArea
        content={
          '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src="https://images.microcms-assets.io/assets/240a4c59d2c94994a9a49667c51cc14b/7cbb793b901b4cb7b654f68c0b86e7b4/blog-template-description1.png" alt=""><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src="https://images.microcms-assets.io/assets/240a4c59d2c94994a9a49667c51cc14b/6c4230ad3f2645788e2b5151bdbe76d1/blog-template-description2.png" alt=""><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src="https://images.microcms-assets.io/assets/240a4c59d2c94994a9a49667c51cc14b/f05f67347c5e4103a1e6a1c1d40cf356/blog-template-description3.png" alt=""></p><h2 id="h88398f2fb7"><br>次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer">JavaScript SDK</a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer">Nuxt SDK</a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer">Gatsby SDK</a></li></ul><p><br>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href="mailto:support@microcms.io" target="_blank" rel="noopener noreferrer">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge" target="_blank" rel="noopener noreferrer">https://help.microcms.io/ja/knowledge</a></p>'
        }
        id="content"
      />
    </div>
  );
};
