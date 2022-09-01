import * as C from "./Styled";

export const TableAreaUsers = () => {
  return (
    <C.Container>
      <div class="container-table100">
        <div class="wrap-table100">
          <div class="table">
            <div class="row header">
              <div class="cell">Nome</div>
              <div class="cell">E-mail</div>
              <div class="cell">Predominancia</div>
              <div class="cell">Data</div>
              <div class="cell"></div>
            </div>

            <div class="row">
              <div class="cell" data-title="Nome">
                Michel Corrêa Martins
              </div>
              <div class="cell" data-title="E-mail">
                michel-cm15@hotmail.com
              </div>
              <div class="cell" data-title="Predominancia">
                Condescendente
              </div>
              <div class="cell" data-title="Data">
                29/08/2022
              </div>
              <div class="cell iconsLista" data-title="Ações">
                <a href="#"> VER </a>
                <a href="#"> EXCLUIR </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </C.Container>
  );
};
