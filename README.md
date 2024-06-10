# ServiceColorCode
よくあるサービスのカラーコードをコピーできるサイトを作った！

一人ではよくあるサービスを入れるのは困難だから、READMEmdとかに記述方法書いたから、PR出してくれれば、追加します。

## さーびすりすと
| サービス名 |
| --- |
|Discord|
|Twitter|
|Instagram|
|LINE|
|Facebook|
|Amazon|
|Google|
|Apple|
|Android|
|YouTube|
|Spotify|
|BeReal|
|Telegram|
|RiotGames|
|League Of Legends|
|VALORANT|
|Microsoft|

## サービスの追加について
```html
            <div class="content-item" id="サービス名（正式）" data-tag="サービス名（小文字）" style="background: linear-gradient(45deg, #xxxxxx, #xxxxxx);">
                <div class="item-icon">
                    <img src="img/サービス名（正式）.png" alt="service-icon">
                </div>
                <div class="item-details">
                    <h1><a href="サービスURL">サービス名（正式）</a></h1>
                    <p class="description">サービスの説明（一文）</p>
                </div>
                <div class="color-code-wrapper">
                    <p class="color-code">サービスカラーコード（#xxxxxx）</p>
                    <button class="copy-btn" onclick="copyColorCode('サービスカラーコード（#xxxxxx）')">カラーコード コピー</button>
                </div>
            </div>
```
ここは、グラデーションなんで、なんかカラーコード二個ある時とかに追加してください。
```html
style="background: linear-gradient(45deg, #xxxxxx, #xxxxxx)
```

## シフトを押すといいことあるよ
