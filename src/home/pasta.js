// URL2 DA API
URL2 = 'http://localhost:3000/pasta';

fetch(URL2)
    .then(res => res.json())
    .then(pastas => {
        let div = document.getElementById("arq")
        div.innerHTML = ''
        for(let i = 0; i < pastas.length; i++){
            div.innerHTML += `
            <div class="col-2">
                <div class="card h-100 btn btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#verPasta" style="background: rgba(255, 255, 255,.1);">
                    <div class="card-body d-flex justify-content-center text-center">
                        <a class="text-gray-800 text-hover-primary">
                            <div class="symbol symbol-50px">
                                <div class="d-flex justify-content-center" onclick="Documentos(${pastas[i].id})">
                                    <i class="fs-1 bi-archive-fill text-secondary"></i>
                                </div>
                            </div>
                            <h5 class="font-jedi">${pastas[i].nomePasta}</h5>
                        </a>
                    </div>
                </div>
            </div>`;
        }
    });

//CRIAR PASTA
function criarPasta(){
    fetch(`${URL2}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++){
            var id = data[i].id
            var idPasta = data[i].idPasta
        }
        id = parseInt(id) + 1
        idPasta = parseInt(idPasta) + 1
        const doc = {
            id: id,
            idPasta: idPasta,
            nomePasta: document.getElementById('nomePasta').value,
            categoria: document.getElementById('categoria').value,
        }

        fetch(`${URL2}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        }).then(res => res.json())
        .then((data) => {
              $('#addPasta').modal('hide')
              window.location.reload()
        })
    });
}