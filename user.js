URL = 'http://localhost:3000/usuarios';

// Listagem
const userList = document.getElementById('user-list');

fetch(URL)
    .then(res => res.json())
    .then(usuarios => {
        let listar_usuarios = '';
        for(let i = 0; i< usuarios.length; i++){
            listar_usuarios +=  `
            <tr>
                <th>${usuarios[i].id}</th>
                <td>${usuarios[i].nome}</td>
                <td>${usuarios[i].sobrenome}</td>
                <td>${usuarios[i].email}</td>
                <td>${usuarios[i].cargo}</td>
                <td>${usuarios[i].permissao}</td>
                <td>${usuarios[i].tel}</td>
                <td>
                    <a onclick="getUser(${usuarios[i].id});"
                    class="btn btn-warning btn-sm"
                    data-bs-toggle="modal" data-bs-target="#user-modal">
                        <i class="fa fa-edit"></i> Editar
                    </a>

                    <a onclick="$('#user-id').text(${usuarios[i].id});" class="btn btn-danger btn-sm"
                    data-bs-toggle="modal" data-bs-target="#modal-delete">
                        <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            document.getElementById("user-list").innerHTML = listar_usuarios;
        }
    });

// DELETE
const userDelete = document.getElementById('btn-delete');


userDelete.addEventListener('click', (e) => {

    let id = $('#user-id').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());
});



// Recuperar dados da API
function getUser(id){

    if(id == 0){
        $('#edit-user-id').text("");
        $("#user-id").prop("disabled", false);
        $('#user-id').val("");
        $('#user-nome').val("");
        $('#user-sobrenome').val("");
        $('#user-email').val("");
        $('#user-cargo').val("");
        $('#user-permissao').val("");
        $('#user-tel').val("");
        $('#user-password').val("");
    }else{
        $('#edit-user-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())
        .then(data =>{
            $("#user-id").prop("disabled", true);
            $('#user-id').val(data.id);
            $('#user-nome').val(data.nome);
            $('#user-sobrenome').val(data.sobrenome);
            $('#user-email').val(data.email);
            $('#user-cargo').val(data.cargo);
            $('#user-permissao').val(data.permissao);
            $('#user-tel').val(data.tel);
            $('#user-password').val(data.password);
        });
    }
}

// Create ou Update
const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {
    // Recupera o ID
    let id = isNaN(parseInt($('#edit-doc-id').text())) ? 0 : parseInt($('#edit-user-id').text());
    
    // Recupera os dados do documento
    const user = JSON.stringify({
        id: document.getElementById('user-id').value,
        nome: document.getElementById('user-nome').value,
        sobrenome: document.getElementById('user-sobrenome').value,
        email: document.getElementById('user-email').value,
        cargo: document.getElementById('user-cargo').value,
        permissao: document.getElementById('user-permissao').value,
        tel: document.getElementById('user-tel').value,
        password: document.getElementById('user-password').value
    })
    
    if(id > 0){
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        })
        .then(res => res.json())
        .then(() => location.reload());
    }else{
        fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        })
        .then(res => res.json())
        .then(() => location.reload());
    }
    e.preventDefault();
})

//Salvando Usuário
function enviarUser(){

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
        const user = {
            id: id,
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            email: document.getElementById('email').value,
            cargo: document.getElementById('cargo').value,
            permissao: document.getElementById('permissao').value,
            tel: document.getElementById('tel').value,
            password: document.getElementById('password').value
        }

        fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        }).then(res => res.json())
        .then((data) => {
            Swal.fire({
                icon: 'success',
                title: 'Usuário salvo com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
              $('#addUser').modal('hide')
        })
    });
}