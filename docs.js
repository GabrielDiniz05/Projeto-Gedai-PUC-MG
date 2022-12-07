// URL DA API
URL = 'http://localhost:3000/documentos';

var idPastaPai = ''
 
$("#modalDoc").click(function() {
    $('#doc-modal').modal('show');
});

$("#closeModal").click(function() {
    $('#DataTable').DataTable().clear();
});

// DELETE
const docDelete = document.getElementById('btn-delete');

docDelete.addEventListener('click', (e) => {

    let id = $('#doc-id').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());
});

// Recuperar dados da API
function getDoc(id){

    if(id == 0){
        $('#edit-doc-id').text("");
        $("#doc-id").prop("disabled", false);
        $('#doc-id').val("");
        $('#doc-nome').val("");
        $('#doc-valor').val("");
        $('#doc-qtd').val("");
    }else{
        $('#edit-doc-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())
        .then(data =>{
            $("#doc-id").prop("disabled", true);
            $('#doc-id').val(data.id);
            $('#doc-nome').val(data.nome);
            $('#doc-valor').val(data.valor);
            $('#doc-qtd').val(data.qtd);
        });
    }
}


const documentList = document.getElementById('document-list');

function Documentos(id){
    $('#DataTable').DataTable().destroy();
    idPastaPai = id
    fetch(`${URL}?idPasta=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then((data) => {
        $('#DataTable tbody').remove()
        $('#DataTable').append('<tbody></tbody>')
        var linhas = ''
        for(let i = 0; i < data.length; i++){
            linhas +=   "<tr>" +
                            "<td>" + data[i].id + "</td>" +
                            "<td>" + data[i].nome + "</td>" +
                            "<td>" + data[i].tipoArq + "</td>" +
                            "<td>" + data[i].descricao + "</td>" +
                            "<td>" + data[i].data + "</td>" +
                        "</tr>";
        }
        $('#DataTable>tbody').append(linhas)

        $('#DataTable').DataTable({
            destroy: true,
            pageLength: 5
        })     
    })
}

//Salvando Arquivo
function salvarDocumento(){

    const d = new Date();
    var dataHoje = d.toLocaleString();
    let dataForm = new FormData();

    var file = document.getElementById('formFile[]').files


    var arquivo = []

    for( let i = 0; i < file.length;i++){
        arquivo[i] = file[i].name
    }

    console.log(arquivo, 'arquivo')

    fetch(`${URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++){
            var id = data[i].id
        }
        id = parseInt(id) + 1

        const doc = {
            id: id,
            idPasta: idPastaPai,
            nome: document.getElementById('doc-nome').value,
            tipoArq: document.getElementById('doc-tipo').value,
            descricao: document.getElementById('doc-descricao').value,
            data: dataHoje,
            arquivo: arquivo,
        }

        if(!document.getElementById('doc-nome').value || !document.getElementById('doc-tipo').value || !document.getElementById('doc-descricao').value){
            Swal.fire({
                icon: 'warning',
                title: 'Favor preencher todos os campos',
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            fetch(`${URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(doc)
            }).then(res => res.json())
            .then((data) => {
                $('#doc-modal').modal('hide')
                Swal.fire({
                    icon: 'success',
                    title: 'Documento salvo com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  Documentos(idPastaPai)
            })
        }
    })
}


