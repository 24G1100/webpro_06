# webpro_06
## ファイルのGitでの管理
ファイルの編集履歴を編集履歴を管理するシステムであるバージョン管理システムは，変更履歴を記憶し，遡ることができる．そのためプログラム開発においておおくしようされる．バージョン管理システムには，分散リポジトリ（分散型）と単一リポジトリ（単一型）のに種類がある．分散型とは各自のパソコンにリポジトリを持ってきて変更などを加えるバージョン管理方法である．単一型とは一つのリポジトリにみんなで接続して使う方法である．本課題では分散型のバージョンアップ管理システムの一種であるGitを用いたwebサービスである「Github」を用いる．

### Githubでのバージョン管理
Githubでのファイルを自分のパソコンに持ってくるクローンは，ターミナルで以下の手順で行う．
1. 任意のディレクトリに移動する．
1. git cloneと入力する．
1. ⌘-vを押し，
リポジトリのURLが表示されたらEnterを押す.  

Githubへのファイル変更を反映させるプッシュは，ターミナルで以下の手順で行う．
1. プッシュしたいファイルのあるディレクトリへ移動する．
1. git add .　と入力する．
1. git commit -am 'コメント'　でコメントを設定する．
1. git push　と入力する．
1. Githubのアクセストークンを入力する．

## このプログラムについて

## ファイル一覧


ファイル名 | 説明
-|-
app5.js | プログラム本体
views/show.ejs | 挨拶の表示画面
views/icon.ejs | アップル社のロゴの表示画面
views/luck.ejs | おみくじの表示画面
views/janken.ejs | じゃんけんの開始画面
views/quiz.ejs | 一つ目のクイズの開始画面
views/quiz2.ejs | 二つ目のクイズの開始画面
views/quiz3.ejs | 三つ目のクイズの開始画面

## 機能説明
ここでは作成したquiz，quiz2，quiz3の機能について説明を行う．
### quiz
quizでは4択のクイズが出題される．クイズの回答にはラジオボタン属性を使用する．そのため4つの選択肢から1つのみ選択することができる．回答を選択した後，送信ボタンを押すことで，答えの判定が行われ，正解か，不正解か結果が表示される．

### quiz2
quiz2では2択のクイズが出題される．クイズの回答にはチェック属性を使用する．そのため２つの選択肢から複数選択することができる．回答を選択した後，送信ボタンを押すことで，答えの判定が行われ，正解か，不正解か結果が表示される．

### quiz3
quiz3では度合いを回答するクイズが出題される．クイズの回答にはレンジ属性を使用する．このメーターの位置で度合いを表す．回答を設定した後送信ボタンを押すことで，答えの判定が行われ，正解か，不正解か結果が表示される．

## 使用方法
### hello1
1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/hello1にアクセスする
1. 英語とフランス語で挨拶が表示される

### hello2
1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/hello2にアクセスする
1. 英語とフランス語で挨拶が表示される


### icon
1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/iconにアクセスする
1. アップル社のロゴが表示される
### luck
1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/luckにアクセスする
1. 大吉，中吉，吉，小吉，末吉，凶のいずれかが表示される

### janken
1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/jankenにアクセスする
1. 自分の手を入力する
1. 送信ボタンを押す

### quiz~quiz3

1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/quizにアクセスする
1. クイズの答えを選択し，送信ボタンを押す
1. 次の問題へのボタンを押す
1. クイズの答えを選択し，送信ボタンを押す
1. 次の問題へのボタンを押す
1. クイズの答を選択し，送信ボタンを押す


##　フローチャート
### hello1
```mermaid
flowchart TD;

start["開始"];
end1["終了"];
hello1["/hello1"];
message1["message1 = 'Hello world'"];
message2["message2 = 'Bon jour'"];
render["showページにgreet1とgreet2を渡す"];

start --> hello1;
hello1 --> message1;
message1 --> message2;
message2 --> render;
render --> end1;
```
### hello2
```mermaid
flowchart TD;

start["開始"];
end1["終了"];
hello2["/hello2"];
render["showページにgreet1とgreet2を渡す"];

start --> hello2;
hello2 --> render;
render --> end1;
```

### icon
```mermaid
flowchart TD;

start["開始"];
end1["終了"];
icon_route["/icon"];
render_icon["iconページにfilenameとaltを渡す"];

start --> icon_route;
icon_route --> render_icon;
render_icon --> end1;
```
### luck

```mermaid
flowchart TD;

start["開始"];
end1["終了"];
luck_route["/luck"];
generate_num["ランダムで1から6の数字を生成"];
check_luck{"numの値をチェック"};
set_luck["運勢を設定"];
render_luck["luckページにnumberとluckを渡す"];

start --> luck_route;
luck_route --> generate_num;
generate_num --> check_luck;
check_luck -->|num == 1| set_luck;
check_luck -->|num == 2| set_luck;
check_luck -->|num == 3| set_luck;
check_luck -->|num == 4| set_luck;
check_luck -->|num == 5| set_luck;
check_luck -->|num == 6| set_luck;
set_luck --> render_luck;
render_luck --> end1;
```


### janken
```mermaid
flowchart TD;
    start["開始"];
    get["hand,win,totalを取得"];
    generate_cpu["cpyの手をランダムに生成"];
    determine_winner["勝敗判定"];
    judgement_win["勝ち"];
    judgement_lose["負け"];
    judgement_draw["あいこ"];
    update_win["勝ち数（win）を更新"];
    update_total_win["総試合数（total）を更新（勝ち）"];
    update_total_lose["総試合数（total）を更新（負け）"];
    display_result["結果を表示"];
    end1["終了"];

    start --> get
    get --> generate_cpu
    generate_cpu --> determine_winner
    determine_winner -->|勝ち| judgement_win
    determine_winner -->|負け| judgement_lose
    determine_winner -->|あいこ| judgement_draw
    judgement_win --> update_win
    update_win --> update_total_win
    update_total_win --> display_result
    judgement_lose --> update_total_lose
    update_total_lose --> display_result
    judgement_draw --> display_result
    display_result --> end1

```

### Quiz 


```mermaid
flowchart TD;

start["開始"];
getRadio["ラジオボタンの値取得"];
setEmptyMessage["結果メッセージを空に設定"];
checkRadio{"ラジオの値は4か？"};
setCorrectMessage["正解メッセージを設定"];
setIncorrectMessage["不正解メッセージを設定"];
displayResult["結果を表示"];
end1["終了"];

start --> getRadio;
getRadio -->|Value is undefined| setEmptyMessage;
getRadio -->|Value is defined| checkRadio;

checkRadio -->|Yes| setCorrectMessage;
checkRadio -->|No| setIncorrectMessage;

setEmptyMessage --> displayResult;
setCorrectMessage --> displayResult;
setIncorrectMessage --> displayResult;

displayResult --> end1;
```

### Quiz2 

```mermaid
flowchart TD;

start["開始"];
countRetrieve["クエリパラメータcountの取得"];
countUnset["countを0に初期化"];
countSet["クエリパラメータcountを数値に変換"];
countCheck{"count >= 1か?"};
noResult["結果メッセージを空に設定"];
noSelection{"test1およびtest2が未選択か?"};
correct["結果メッセージを「沈黙！！それが正しい答えなんだ」に設定"];
incorrect["結果メッセージを「通りな（不正解）＊魔獣に襲われました」に設定"];
displayQuiz["countをインクリメントしてquiz2ページを表示"];
endNode["終了"];

start --> countRetrieve;
countRetrieve -->|count is undefind| countUnset;
countRetrieve -->|count is defind| countSet;
countUnset --> countCheck;
countSet --> countCheck;
countCheck -->|yes| noSelection;
countCheck -->|no| noResult;
noSelection -->|yes| correct;
noSelection -->|no| incorrect;
correct --> displayQuiz;
incorrect --> displayQuiz;
noResult --> displayQuiz;
displayQuiz --> endNode;
```
### Quiz3 
```mermaid
flowchart TD;

start["開始"];
valueRetrieve["クエリパラメータrangeの取得"];
checkValue{"valueがundefinedか?"};
emptyMessage["結果メッセージを空に設定"];
rangeCheck{"valueが76より大きく80未満か?"};
correctMessage["結果メッセージを「正解！夜ご飯前です。」に設定"];
incorrectMessage["結果メッセージを「不正解。夜ご飯前です。」に設定"];
renderQuiz3["quiz3ページを表示"];
endNode["終了"];

start --> valueRetrieve;
valueRetrieve --> checkValue;
checkValue -->|undefined| emptyMessage;
checkValue -->|defined| rangeCheck;
emptyMessage --> renderQuiz3;
rangeCheck -->|yes| correctMessage;
rangeCheck -->|no| incorrectMessage;
correctMessage --> renderQuiz3;
incorrectMessage --> renderQuiz3;
renderQuiz3 --> endNode;
```
