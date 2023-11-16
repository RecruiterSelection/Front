import axios from "axios";

export const ApiTalentHub = axios.create({
  baseURL: "http://locahost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.get('/endpoint')
//   .then(response => {
//     console.log('Resposta da API:', response.data);
//   })
//   .catch(error => {
//     console.error('Erro ao chamar a API:', error);
//   });
