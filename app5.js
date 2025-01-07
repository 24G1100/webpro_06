const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '吉';
  else if( num==4 ) luck = '小吉';
  else if( num==5 ) luck = '末吉';
  else if( num==6 ) luck = '凶';

  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = req.query.win ? parseInt(req.query.win, 10) : 0;
  let total = req.query.total ? parseInt(req.query.total, 10) : 0;
  console.log({ hand, win, total });

  const num = Math.floor(Math.random() * 3 + 1); 
  let cpu = '';
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';

  let judgement = '勝ち';
  if ((num == 1 && hand == 'チョキ') || (num == 2 && hand == 'パー') || (num == 3 && hand == 'グー')) {
    judgement = '負け';
    total += 1;
  } else if (hand === cpu) {
    judgement = 'あいこ';
  } else {
    win += 1;
    total += 1;
  }

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };

  res.render('janken', display);
});


app.get("/quiz", (req, res) => {
  const value = req.query.radio;
  let resultMessage;

  if (value === undefined) 
    resultMessage = '';
  else{
    if (value == 4) {
      resultMessage = '正解です！';
    } else {
      resultMessage = '不正解です';
    }
  } 

  res.render('quiz', { result: resultMessage });
});

app.get("/yosen", (req, res) => {
  const value = req.query.button;
  let resultMessage = '';
  const num = Math.floor( Math.random() * 100 + 1 );
  if(num == 1)
    resultMessage = '予選敗退でーす。';
  else
    resultMessage = '生きてるだけで偉いのでみんな優勝でーす。';

  res.render('yosen', { result: resultMessage });

});

app.get("/quiz2", (req, res) => {
  let resultMessage = '';
  let count = req.query.count ? parseInt(req.query.count, 10) : 0;
  
  if(count>=1){  
    if (!req.query.test1 && !req.query.test2) {
      resultMessage = '沈黙！！それが正しい答えなんだ';
    } else {
      resultMessage = '通りな（不正解）＊魔獣に襲われました';
    }
  }

  res.render('quiz2', { result: resultMessage ,count: count + 1});
  
});

app.get("/quiz3", (req, res) => {
  const value = req.query.range;
  let resultMessage = '';
  if (value === undefined) 
    resultMessage = '';
  else{
    if(value<80 && value>76)
      resultMessage = '正解！夜ご飯前です。'
    else
      resultMessage = '不正解。夜ご飯前です。'
  }
  
  res.render('quiz3', { result: resultMessage });

});
app.listen(8080, () => console.log("Example app listening on port 8080!"));
