# ServiceColorCode
よくあるサービスのカラーコードをコピーできるサイトを作った！

一人ではよくあるサービスを入れるのは困難だから、READMEmdとかに記述方法書いたから、PR出してくれれば、追加します。

## さーびすりすと
| サービス名 | サイトURL |
| --- | --- |
|Discord| [https://discord.com](https://discord.com) |
|Twitter| [https://twitter.com](https://twitter.com) |
|Instagram| [https://www.instagram.com](https://www.instagram.com) |
|LINE| [https://line.me](https://line.me) |
|Facebook| [https://www.facebook.com](https://www.facebook.com) |
|Amazon| [https://www.amazon.com](https://www.amazon.com) |
|Google| [https://www.google.com](https://www.google.com) |
|Apple| [https://www.apple.com](https://www.apple.com) |
|Android| [https://www.android.com](https://www.android.com) |
|YouTube| [https://www.youtube.com](https://www.youtube.com) |
|Spotify| [https://www.spotify.com](https://www.spotify.com) |
|BeReal| [https://bere.al](https://bere.al) |
|Telegram| [https://telegram.org](https://telegram.org) |
|Riot Games| [https://www.riotgames.com](https://www.riotgames.com) |
|League of Legends| [https://www.leagueoflegends.com](https://www.leagueoflegends.com) |
|VALORANT| [https://playvalorant.com](https://playvalorant.com) |
|Microsoft| [https://www.microsoft.com](https://www.microsoft.com) |

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
