const btn = document.querySelector('.btn');
const nome = document.querySelector('#primeironome');
const ultimonome = document.querySelector('#ultimonome');
const formulario = document.querySelector('.formulario');
const senha = document.querySelector('#senha');


let valido = false;

btn.addEventListener('click', () => {
   let nomes = nome.value;
   let ultimo = ultimonome.value;
   let email = document.querySelector('#email').value;
   let getSenha = senha.value;

    
 

  let nomeValido = validarNome(nomes, nome);
   let ultimoValido = validarNome(ultimo, ultimonome);
   let emailValido = validaremail(email);
   let senhaValida = validarSenha(getSenha);
   
   nomeValido = validarNome(nomes, nome);

if (nomeValido && ultimoValido && emailValido && senhaValida) {
   nomeValido = validarNome(nomes, nome);
   

   setTimeout(() => {
      apagarcampos();
      alert('Formulário enviado com sucesso');
   }, 100);
   
   
}

});


function apagarcampos() {
   nome.value = "";
   ultimonome.value = "";
   email.value = "";
   senha.value = "";
}


function validarNome(valorPego, elemento) {
   if (valorPego.length > 3) {
      let span = elemento.nextElementSibling;
      span.style.display = 'none';
      elemento.classList.remove('error');
      // elemento.value = "";
      elemento.setAttribute('placeholder', 'First name');
      let inter = span.nextElementSibling;
      inter.style.display = 'none';
      return true;

   } else {
      elemento.classList.add('error');
      elemento.setAttribute('placeholder', 'Enter your first name')
      let span = elemento.nextElementSibling;
      span.innerHTML = 'Fist name cannot be empty';
      span.style.display = 'block';
      let inter = span.nextElementSibling;
      inter.style.display = 'block';
      return false;
   }
}


function validaremail(email) {
   let regex = /^[\w\.]+@[a-z]+\.[a-z]{2,}$/;

   let elemento = document.querySelector('#email');
   let span = elemento.nextElementSibling;

   if (regex.test(email)) {

      elemento.classList.remove('error');
      span.style.display = 'none';
      let inter = span.nextElementSibling;
      inter.style.display = 'none';
      return true;
   } else {

      elemento.classList.add('error');
      span.style.display = 'block';
      span.innerHTML = 'Enter a valid email';
      let inter = span.nextElementSibling;
      inter.style.display = 'block';
      return false;
   }
}

function validarSenha(senhas) {
   let span = senha.nextElementSibling;
      if (senhas.trim().length > 6) {
         senha.classList.remove('error');
         span.style.display = 'none';
         let inter = span.nextElementSibling;
      inter.style.display = 'none';
         return true;
      } else {
         senha.classList.add('error');
         span.style.display = 'block';
         let inter = span.nextElementSibling;
      inter.style.display = 'block';
         if(senha.value === ''){
            span.innerHTML = 'Password cannot be empty';
           
         } else{
            span.innerHTML = 'Password must be at least 6 characters';
         } 
         
         return false;
      }
}

