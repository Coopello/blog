// TODO: app 配下にnot-found.tsxを置くことで404ページを表示できないか試しているので、不要になったら削除する
// ドキュメント的にはこの方法が正しいとされている
export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
