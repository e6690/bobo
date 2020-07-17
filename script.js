var btn = document.querySelector('#btn');
var quoteDiv = document.querySelector('#quote');

var quotes = [
    "Aikin banza tura agwagwa ruwa",
    "Ko yanzu kasuwa ta watse dan koli ya tchi riba",
    "A tambayi kaza hanyar rafi? A tambayi agwagwa a sha labari",
    "Alamar karfi tana ga mai kiba",
    "Ba girin-girin ba ta yi mai",
    "Daki-bari",
    "Hauka da nade-nade, danwake ya ga tubani",
    "Idan makaho ya ce a yi wasan jifa, to ya taka dutse",
    "Kai ka fada? Uwar sarki a kan doki",
    "Kowa yaga balbela, da farin ta ya gan ta",
    "Mai hakuri ya kan dafa dutse ya sha romonsa",
    "Rana bata karya sai dai uwar diya ta ji kumya",
    "Sabon shiga barawo da sanllama",
    "saki reshe kama ganye",
    "Zakaran da Allah ya nufa da cara, ana muzuru ana shaho sai ya yi"
]

btn.addEventListener('click', function() {
    var RandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerHTML = " '' " + RandomQuote + " '' ";
})