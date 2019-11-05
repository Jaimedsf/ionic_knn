import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ProblemasComponent } from '../app/problemas/problemas.component';
@Injectable({
  providedIn: 'root'
})
export class ProblemasService {
  // tslint:disable: variable-name

  /* Rótulos dos Problemas de Computador */

  /* Classe A - Componente com Defeito */
  a_01 = ['A1', 'Melancolia ', 3.1, 6];
  /*  Causas                          X     Y
      acorda de manhã cedo            5,5  5,6
      culpa excessiva/inapropriada    5,9   6
      Sentimentos de desesperança     3,8  3,1
      Distúrbios psicomotores         5,7  5,8
  */
  a_02 = ['A2', 'HD com Problema',          3.08, 11.37];
  /*  Causas                          X     Y
      Computador travando             2.70  6.26
      Tela Azul                       2.80  13.92
      Boot Failure                    3.30  13.39
      Arquivos Corrompidos            3.50  11.91
  */
  a_03 = ['A3', 'Fonte com Problema',       3.65, 6.80];
  /*  Causas                          X     Y
      Computador não liga             1.80  4.14
      Explodiu/Saiu Fumaça            4.70  8.38
      Chave de Voltagem Incorreta     4.00  5.78
      PC desligou repentinamente      4.10  8.87
  */
  a_04 = ['A4', 'Memoria RAM com Problema', 4.25, 10.95];
  /*  Causas                          X     Y
      Tela Azul                       2.80  13.92
      PC Travando                     2.70  6.26
      PC Liga mas não da Imagem       5.70  11.28
      Longos Bips Contínuos           5.80  12.32
  */

  /* Classe B - Problema com o S.O */
    b_01 = ['B1', 'Sistema Corrompido', 3.50, 8.96];
    /*  Causas                          X     Y
        Tela Azul                       2.80  13.92
        Boot Failure                    3.30  13.39
        S.O Trava na Logo               4.30  2.77
        Algumas Funções não Funcionam   3.60  5.74
    */
    b_02 = ['B2', 'Virus no Sistema', 3.35, 4.94];
    /*  Causas                          X     Y
        PC Travando                     2.70  6.26
        Mouse Mexendo Sozinho           4.60  2.60
        Antivirus Enlouqueceu           3.00  2.50
        Programas estranhos na tela     3.10  8.38
    */
    b_03 = ['B3', 'Programa Corrompido', '?', '?'];
    /*  Causas                                X     Y
        Programa não abre                     ?     ?
        Programa alega falta de componentes   ?     ?
        Programa não desinstala               ?     ?
        Algumas Funções dele não funcionam    ?     ?
    */
    b_04 = ['B4', 'Office ou Windows não ativado', '?', '?'];
    /*  Causas                                X     Y
        Programa não abre                     ?     ?
        Programa alega falta de componentes   ?     ?
        Programa não desinstala               ?     ?
        Algumas Funções dele não funcionam    ?     ?
    */

  /* Classe C - Problemas com a Internet */
    c_01 = ['C1', 'Problemas com Placa Wi-Fi', 'A definir', 'A definir'];
    /*  Causas                          X     Y
        Nenhuma Rede é Reconhecida      ?     ?
        Nenhuma Rede Wifi Conecta       ?     ?
        Conexão Indo e Voltando         5.10  2.04
        Sinal Muito Fraco               ?     ?
    */
    c_02 = ['C2', 'Problemas com o Roteador', 'A definir', 'A definir'];
    /*  Causas                          X     Y
        Sem Conexão com a Internet      5.00  5.89
        Rede não identificada           4.90  1.63
        Conexão Indo e Voltando         5.10  2.04
        Nenhuma Luz é emitida           ?     ?
    */
    c_03 = ['C3', 'Problema com a Internet', 5.78, 2.79];
    /*  Causas                          X     Y
        Downloads Lentos/Quebrados      5.90  2.24
        Videos não Carregam ou Demoram  6.00  2.04
        Páginas demoram a Carregar      6.10  4.84
        Conexão Indo e Voltando         5.10  2.04
    */
    c_04 = ['C4', 'Nome', 'X', 'Y'];
    /*  Causas                          X     Y
    */
  /* Classe D - Problema */
p_03 = ['Problema de Superaquecimento', 2.28, 2.66];
p_08 = ['Problema de Audio', 5.35, 3.58];
p_09 = ['Drivers não instalados', 4.63, 2.74];
p_10 = ['Cabo com Mau Contato', 3.38, 3.74];

  entrada_usuario_x = [];
  entrada_usuario_y = [];
  entrada_usuario = [];
  pagina = 1;
  url_problemas = 'https://5da3a504a6593f0014079fc9.mockapi.io/problemas/';
  url_sintomas = 'https://5da3a504a6593f0014079fc9.mockapi.io/sintomas/';

  constructor(private http: HttpClient) {}
  addEntradaUsuario(x, y) {
    this.entrada_usuario_x.push(x);
    this.entrada_usuario_y.push(y);
    this.entrada_usuario.push(x);
    this.entrada_usuario.push(y);
  }
  getEntrada() {
    return this.entrada_usuario;
  }
  getPagina() {
    return this.pagina;
  }
  addPagina() {
    return this.pagina++;
  }
  obterSintomas() {
    return this.http.get<[]>(this.url_sintomas);
  }
  obterSintomasByID(id) {
    return this.http.get<[]>(this.url_sintomas + id);
  }
  obterProblemas() {
    return this.http.get<[]>(this.url_problemas);
  }
  obterProblemasByID(id) {
    return this.http.get<[]>(this.url_problemas + id);
  }
  /*CarregarProblemas() {
    for (let id = 1; id <= 11; id++) {
      this.http.get<[]>(this.url_problemas + id)
      .subscribe(
        (resposta) => {
          this.a_problema = resposta;
          console.log(this.a_problema);
        },
        (erro) => console.log(erro)
      );
    }
    console.log(this.a_problema);
  }*/
}
