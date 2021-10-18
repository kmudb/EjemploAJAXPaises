
var informacion = 'https://servicodados.ibge.gov.br/api/v1/paises';
    function cargar_banderas(){
        var fila = document.createElement("div");
    fila.className += "row";
    $.ajax({
      url: informacion ,
      method: 'GET'
    }).then(function(data) {
     
       
        data.forEach(function(item) {
            var leng=[];
            var celda=document.createElement("div");
            celda.className+="col-xs-6 col-md-3";
            var imagenbandera= document.createElement("img");
            imagenbandera.src='https://www.banderas-mundo.es/data/flags/w702/'+item.id['ISO-3166-1-ALPHA-2'].toLowerCase() +'.png';
            
            imagenbandera.width="250";
            imagenbandera.height="250";
            var nombre= document.createElement("h5");
            nombre.innerText=item.nome.abreviado;
            celda.appendChild(imagenbandera);
            celda.appendChild(nombre);
            celda.setAttribute("data-toggle","modal");
                for(i=0; i<item.linguas.length;i++){
                    leng[i]=item.linguas[i].nome;
                }
              //  console.log(item.nome.abreviado,item.localizacao.regiao.nome,leng);
            celda.onclick=function(){datos_modal(item.nome.abreviado,item.localizacao.regiao.nome,leng)};
            fila.appendChild(celda);
        });
            $("#paises").html(fila);
   
    });
    }

    function datos_modal(nombre,region,lenguaje){
        console.log(lenguaje);
        var body="";
            var title = nombre;
             body = "Región:"+region+"<br>"
            body += "Lenguajes:"+lenguaje.join();
            $("#MyPopup .modal-title").html(title);
            $("#MyPopup .modal-body").html(body);
            $("#MyPopup").modal("show");
    }

window.onload = cargar_banderas();    
