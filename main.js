var xmlhttp = new XMLHttpRequest();
var url = "https://rickandmortyapi.com/api/character";
var elements = '';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        for (var i = 0; i < myArr.results.length; i++) {
            elements+= '<li class="lista-info">';
            elements+= '<img src="'+myArr.results[i].image+'" class="lista-imagem">';
            elements+= '<div><h1 class="lista-personagem">'+myArr.results[i].name+'</h1>';
            elements+= '<p class="lista-itens">Status: '+myArr.results[i].status+'</p>';
            elements+= '<p class="lista-itens">Species: '+myArr.results[i].species+'</p>';
            elements+= '<p class="lista-itens">Gender: '+myArr.results[i].gender+'</p>';
            elements+= '</div></li>';
        }

        document.getElementById('lista-nomes').innerHTML = elements;
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
