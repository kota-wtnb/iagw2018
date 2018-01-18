
$(function(){
  var height = window.innerHeight;
  var conceptPos = height;
  var infoPos = height * 2;
  var exhibitPos = height * 3;
  var oxPos = height * 4;
  var endPos = height * 5;
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    setAnimation($('#firstview'),scrollPos,-(height/2),height/4);
    setAnimation($('#about'),scrollPos,0,conceptPos);
    setAnimation($('#concept'),scrollPos,conceptPos,infoPos);
    setAnimation($('#info'),scrollPos,infoPos,exhibitPos);
    setAnimation($('#exhibitors'),scrollPos,exhibitPos,oxPos);
    setAnimation($('#other-exhibition'),scrollPos,oxPos,endPos);
    $('#nav').css({'top':scrollPos/height/5 * $('header').height()});
  });
  $('header a').click(function() {
    var speed = 1000;
    var target= $(this).attr("href");
    var position = 0;
    switch (target) {
      case "#about":
        position = 0;
        break;
      case "#concept":
        position = conceptPos + height * 2/3;
        break;
      case "#info":
        position = infoPos + height * 2/3;
        break;
      case "#exhibitors":
        position = exhibitPos + height * 2/3;
        break;
      case "#other-exhibition":
        position = oxPos + height * 2/3;
        break;
      default:
        position = 0;
    }
     //$('body,html').animate({scrollTop:position}, speed, 'swing');
     $('body,html').scrollTop(position);
     return false;
   });
   $('.studio').click(function(){
     var id = $(this).attr("id");
     studioInfo.forEach(function(s){
       if(id == s.id) {
        $('.studios-name').text(s.name);
        $('#studios-explain img').removeAttr("src");
        $('#studios-explain img').bind('load', function(){
          $('#studios-explain p').text(s.text);
          $('#studios-explain').css({'z-index':'3000','opacity':'1'});
        });
        $('#studios-explain img').attr("src","img/" + s.id + ".jpg");
        
       }
     });
   });
   $('.close').click(function(){
     $('#studios-explain').css({'z-index':'-1000','opacity':'0'});
   });
});

function setAnimation(element,pos,min,max){
  if(pos < min || max < pos){
    element.css({'transform':'scale(0)'});
  }else{
    var len = max - min;
    var p = pos - min;
    var scale = 0;
    var len = max - min;
    var opacity = 0;
    var showStartPos = len/3;
    var hideStartPos = len/3*2;
    if(p < showStartPos){
      opacity = p/showStartPos;
      scale = p/showStartPos;
    }else{
      if(p < hideStartPos){
        opacity = 1;
        scale = 1;
      }else{
        var delta = (p-hideStartPos)/(len/3);
        opacity = 1- delta;
        scale = 1 + delta;
      }
    }
    element.css({'transform':'scale(' + scale + ')'});
    element.css({'opacity': opacity });
  }
}
var studioInfo = [
  {
    "id":"tp",
    "name":"トランスポーテーションデザインスタジオ",
    "text":"トランスポーテーションデザインスタジオでは、自動車を中心としたトランスポーテーションのデザイン研究を行っています。乗り物の外形のデザインだけでなく、カラーデザインや内装デザインにおける素材や色の研究、自動車を取り巻く環境を考慮した新しい交通システムなど、トランスポーテーションデザインにおけるあらゆる要素についての研究・開発に取り組んでいます。"
  },
  {
    "id":"eq",
    "name":"製品サービスデザインスタジオ",
    "text":"造形芸術、科学技術、人文学などの幅広い分野と結びつく総合的な研究を指向し、これらと関連したモノづくりはもちろん、デザインの問題解決能力を備えることを目標とします。また、商品企画を始め、デザイン戦略、開発、生産に至るまでの全てのプロセスを理解、体験するなど意味のあるデザインイノベーション活動を通じ、モノの新しい価値を見つけ出すことを目指します。"
  },
  {
    "id":"if",
    "name":"インターフェースデザインスタジオ",
    "text":"インタフェーススタジオでは、ユーザとコンピュータの接点であるインタフェースに関する基礎・応用研究を行っています。現代生活において、私たちは常に機器を操作することを必要とされており、それらの操作方法にマウスやキーボードだけではない、マルチタッチあ画像処理、ジェスチャ認識や筋電位操作などの入力装置が利用されています。これら様々な入力装置を発案、実装、提案をすることで未来を切り開くデザインを生み出しています。"
  },
  {
    "id":"sp",
    "name":"空間デザインスタジオ",
    "text":"スペースデザインスタジオでは建築、アート、デザインを統合した新たな空間デザインの研究に取り組んでいます。単に造形美やデザイン性を求めるだけでなく、人々や環境に対応するインタラクティブな空間を生み出す方法を追求しています。"
  },
  {
    "id":"in",
    "name":"インテリアデザインスタジオ",
    "text":"商空間や住空間、展示空間などのデザインはもちろん、ランドスケープなどの規模の大きなものから、その空間で使う小さなプロダクトまでなんでもデザインする研究室です。「空間とモノ」「モノと人」との関係性を考えながら、生活を豊かにする様々なデザインの研究を行っています。"
  },
  {
    "id":"el",
    "name":"エルゴノミックデザインスタジオ",
    "text":"エルゴノミックデザインスタジオでは、人がモノやシステムをどのように使用するのか、こっこちよく使用するにはどのようなことが必要か、をユーザの行動・行為・気持ちを観察、調査することによりデザイン必要な役割を研究しています。データや知見からデザインのための共有・評価・意思決定のための情報の見える化手法を研究しています。つまり、根拠に基づいたデザイン、エビデンスベースドデザインを行っているスタジオです。"
  },
  {
    "id":"vi",
    "name":"ヴィジュアルコミュニケーションデザインスタジオ",
    "text":"アイデンティフィケーション、広告、パッケージ、プロダクト、空間・環境など、メディアの領域を超えて、ヴィジュアル・コミュニケーションの可能性をデザインします。現代社会においてデザインという知恵が、日々の生活を、社会を生き生きとさせるひとつの方法だと思います。だからこそ、分かりやすく、美しく、情報を伝えるために、きびしさと忍耐力をもって造形力を磨いていき、斬新で柔らかいクレイエイティブな発想力を鍛えています。"
  },
  {
    "id":"nw",
    "name":"ネットワークデザインスタジオ",
    "text":"社会に存在する課題を、情報デザインやネットワークデザインなどの様々な切り口から考え、「目的 →手法→検証→結果」のプロセスを軸に研究を行います。また、プロジェクトによってWebコンテンツを作成したり、アプリケーションの作成やワークショプの開催などWebだけにとらわれず広い視野で課題解決に向けて取り組みます。プログラミングのスキルやコンテンツ作成、プロジェクトマネジメントなどのスキルを身につけることができます。"
  },
  {
    "id":"ia",
    "name":"インタラクティブアートスタジオ",
    "text":"インタラクティブアートスタジオでは、新しい科学技術を用いた表現や新たなコミュニケーションの形について研究を行っています。デジタル技術を応用したインタラクティブアートやCGアニメーション、公共空間でのデジタル作品やユビキタスコンテンツの制作など、社会との関わりの中で表現を思考するメディアアート作品の制作・研究とデジタルメディア作品の制作を支援する基礎技術の開発をします。"
  },
  {
    "id":"sf",
    "name":"ソフトウェアデザインスタジオ",
    "text":"ソフトウエア開発は、大量の個別の機能を精緻に作りこむ技術力と、それらの機能を連携させ全体として 齟齬なく一つの動きをさせる構築力の両立によって実現します。まさに「システムをデザインする」というシステムデザインの精神を体現できるデザイン分野です。本スタジオでは、CAD、CG、ゲーム、アニメ、ネットワークなど、エンターテイメントからビジネスまで ソフトウエアの関わるあらゆる分野を対象としていますが、特に、視覚（CG）と聴覚（音響）に関する ソフトウエア研究開発を得意分野としています。"
  },
  {
    "id":"mo",
    "name":"映像デザインスタジオ",
    "text":"映像デザインスタジオでは、アニメーション、VFX映像、3D立体映像、モーションキャプチャの研究を行っています。実写の撮影から、コンピュータ上でつくるものまで、あらゆる映像を制作しています。"
  },
  {
    "id":"ed",
    "name":"エディティングデザインスタジオ",
    "text":"メディアにおけるコンテンツのエディティング（編集）の理論化と実践のための研究を行っています。誰もが情報の発信者となったいま編集はすでに日常生活のなかの技術であることを認識した上で、既存のソースの有効活用から新たな価値を創出する新しいエディティングの手法と、パブリックドメインやクリエイティブコモンズなど情報共有時代の新しい公共性のデザインが主要なテーマです。とくに電子書籍というディジタルな書物とフリーペーパーやzineなどフィジカルな書物を媒介としたコミュニケーションの創出をつなぐシステムの構築が必要だと考えます。"
  }
];
