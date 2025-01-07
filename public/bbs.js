"use strict";
// 投稿者IDをローカルストレージに保存
function getOrCreateUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        // ランダムなIDを生成（例: UUID形式の文字列）
        userId = 'user-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
    }
    return userId;
}

const userId = getOrCreateUserId(); // 投稿者IDを取得

let number = 0;
const bbs = document.querySelector('#bbs');

document.querySelector('#post').addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;


    if (!message.trim()) {
        return; // 処理を終了して、投稿を行わない
    }
    
    if (!name.trim()) {
        name = "風邪ひけば名無し";
    }

    const params = {  // URL Encode
        method: "POST",
        body: 'userId=' + userId + '&name=' + name + '&message=' + message,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const url = "/post";
    fetch(url, params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        document.querySelector('#message').value = "";
        loadPosts();  // 投稿が完了した後、投稿一覧を再読み込み
    });
});

document.querySelector('#check').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body: '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const url = "/check";
    fetch(url, params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        let value = response.number;
        if (number !== value) {
            const params = {
                method: "POST",
                body: 'start=' + number,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            const url = "/read";
            fetch(url, params)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then((response) => {
                number += response.messages.length;
                loadPosts();  // 投稿一覧を更新
            });
        }
    });
});

// 投稿一覧を読み込み、表示する関数
function loadPosts() {
    const params = {  // URL Encode
        method: "POST",
        body: '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const url = "/read";
    fetch(url, params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        bbs.innerHTML = ""; // 投稿一覧をクリア
        response.messages.forEach((mes) => {
            let cover = document.createElement('div');
            cover.className = 'cover';

            // 自分の投稿かどうかを判定
            if (mes.userId === userId) {
                cover.classList.add('my-post'); // 自分の投稿に特定のクラスを追加
            }

            // 投稿内容の表示
            let user_id_area = document.createElement('span');
            user_id_area.className = 'user-id';
            user_id_area.innerText = `投稿者ID: ${mes.userId}`;

            let name_area = document.createElement('span');
            name_area.className = 'name';
            name_area.innerText = mes.name;

            let mes_area = document.createElement('span');
            mes_area.className = 'mes';
            mes_area.innerText = mes.message;

            cover.appendChild(user_id_area);
            cover.appendChild(name_area);
            cover.appendChild(mes_area);
            bbs.appendChild(cover);
        });
    });
}

// 初回に投稿を読み込む
loadPosts();
