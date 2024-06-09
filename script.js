function copyColorCode(code) {
    navigator.clipboard.writeText(code).then(function() {
        showNotification("✅ コピーしました。");
    }, function() {
        showNotification("❌ コピーに失敗しました。");
    });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const contentItems = document.querySelectorAll('.content-item');

        for (const item of contentItems) {
            const tag = item.getAttribute('data-tag').toLowerCase();
            if (tag === searchTerm) {
                item.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        alert('該当するサービスが見つかりませんでした。');
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
        const twitterItem = document.querySelector('#x');
        if (twitterItem) {
            const twitterIcon = twitterItem.querySelector('.item-icon img');
            const twitterName = twitterItem.querySelector('.item-details h1');
            const twitterDescription = twitterItem.querySelector('.item-details .description');

            if (twitterIcon) {
                twitterIcon.src = 'img/Twitter.svg';
            }
            if (twitterName) {
                twitterName.textContent = 'Twitter';
            }
            if (twitterDescription) {
                twitterDescription.textContent = 'ユーザーが短いメッセージ（ツイート）を投稿し、フォロワーと共有するSNSです。';
            }
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
        const twitterItem = document.querySelector('#x');
        if (twitterItem) {
            const twitterIcon = twitterItem.querySelector('.item-icon img');
            const twitterName = twitterItem.querySelector('.item-details h1');
            const twitterDescription = twitterItem.querySelector('.item-details .description');

            if (twitterIcon) {
                twitterIcon.src = 'img/X.png';
            }
            if (twitterName) {
                twitterName.textContent = 'X';
            }
            if (twitterDescription) {
                twitterDescription.textContent = 'ユーザーが短いメッセージを投稿し、フォロワーと共有することができるSNSです。';
            }
        }
    }
});
