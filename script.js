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

        // URLのqueryを更新
        const newUrl = new URL(window.location);
        if (searchTerm) {
            newUrl.searchParams.set('search_query', searchTerm);
        } else {
            newUrl.searchParams.delete('search_query');
        }
        history.pushState(null, '', newUrl);

        scrollToItem(searchTerm, contentItems);
    }
}

/* 過去作
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('search_query', searchTerm);
        history.pushState(null, '', newUrl);

        scrollToItem(searchTerm, contentItems);
    }
}
*/

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
                twitterName.innerHTML = '<a href="https://twitter.com/">Twitter</a>';
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
                twitterName.innerHTML = '<a href="https://x.com/">X</a>';
            }
            if (twitterDescription) {
                twitterDescription.textContent = 'ユーザーが短いメッセージを投稿し、フォロワーと共有することができるSNSです。';
            }
        }
    }
});

function toggleFlowerMenu() {
    const menuContent = document.querySelector('.menu-content');
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'flex';
    } else {
        menuContent.style.display = 'none';
    }
}

function scrollToItem(searchTerm, contentItems) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    for (const item of contentItems) {
        const tag = item.getAttribute('data-tag').toLowerCase();
        if (tag === lowerSearchTerm) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const itemPosition = item.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
            window.scrollTo({ top: itemPosition, behavior: 'smooth' });

            item.classList.add('flash-border');
            setTimeout(() => item.classList.remove('flash-border'), 2000);

            return;
        }
    }

    alert('該当するサービスが見つかりませんでした。');
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search_query');
    if (searchTerm) {
        const contentItems = document.querySelectorAll('.content-item');
        scrollToItem(searchTerm, contentItems);
    }
});