// API DO GOOGLE 
// https://developers.google.com/chart/infographics/docs/qr_codes

function gerarQRcode() {
    // AQUI SELECIONAMENTO O ELEMENTO E PEGAMOS O VALOR DIGITADO PELO USUÁRIO
    var inputUsuario = document.querySelector('textarea').value

    //cht=qr : AQUI DEFINIMOS QUE SERÁ UM QR CODE
    //chs: AQUI DEFINIMOS AS DIMENSÕES DO QR CODE, ALTURA E LARGURA
    //chl= AQUI DEFINIMOS O ESTÁ NO QR CODE O TEXTO (conteúdo), O DESTINO DA URL...
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl='

    // PRECISAMOS CONVERTER O inputUsuario PARA O FORMATO DE URL, SENDO ASSIM SEMPRE QUE O USUÁRIO DIGITAR ALGO QUE CONTENHA ESPAÇO
    // ESSA FUNÇÃO VAI SE ENCARREGAR DE CONVERTER O ESPAÇO EM FORMATO DE URL
    var conteudoQRcode = googleChartAPI + encodeURIComponent(inputUsuario);

    document.querySelector('#QRcodeImage').src = conteudoQRcode;
}