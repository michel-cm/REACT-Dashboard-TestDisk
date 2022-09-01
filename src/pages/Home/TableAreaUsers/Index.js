import * as C from "./Styled";

import IconDeleteB from "../../../assets/actions/deleteb.png";
import IconStarB from "../../../assets/actions/favoritob.png";
import IconSeeB from "../../../assets/actions/seeb.png";

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
              <div class="cell"></div>
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
              <div class="cell " data-title="Ações">
                <a href="#">
                  <img
                    className=" icon iconSee"
                    src={IconSeeB}
                    alt="icon see"
                  />{" "}
                </a>               
              </div>
              <div class="cell iconsLista" data-title="Ações">
                <a href="#">
                  <img
                    className=" icon iconSee"
                    src={IconDeleteB}
                    alt="icon see"
                  />{" "}
                </a>               
              </div>
              <div class="cell iconsLista" data-title="Ações">
                <a href="#">
                  <img
                    className=" icon iconSee"
                    src={IconStarB}
                    alt="icon see"
                  />{" "}
                </a>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </C.Container>
  );
};
