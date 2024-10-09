async function api(endoint) {
   try {const resposta = await fetch(`http://localhost:3000/${endoint}`);
   //por padrao se ultiliza get, pparausar outo metodo coloque '{}' e o metodo ex.:{metode post}
   const dados = resposta.json();
   return dados} catch(error) {
    console.log(error)
    alert("Algo deu errado");
   }
}
export default api;
//module.exports n funciona no frontend