# webpro_06

## このプログラムについて

## ファイル一覧


ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
```javascripts
console.log('Hello');
```

## 使用方法

1.node app5.jsを起動する
1.Webブラウザでlocalhost:8080/public/janken.htmlにアクセスする
1.じゃんけんの自分の手を入力する

##　フローチャート

```mermaid
flowchart TD;
開始 --> 終了;
```
```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["勝ち"]
win+1["何勝目"]
loose["負け"]
loose+1["何負目"]

start --> if
if -->|yes| win
win --> win+1
win+1 -->end1
if -->|no| loose
loose --> loose+1
loose+1 --> end1
```