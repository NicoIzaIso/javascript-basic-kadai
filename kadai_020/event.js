// HTMLから要素を取得
const btn = document.getElementById('btn'); // ボタン要素
const text = document.getElementById('text'); // テキストを表示する要素

// ボタンがクリックされた時の処理を関数として定義
function handleClick() {
  // テキスト要素のテキストを書き換える
  text.textContent = 'ボタンをクリックしました';
}

// ボタンにクリックイベントリスナーを追加
btn.addEventListener('click', handleClick);