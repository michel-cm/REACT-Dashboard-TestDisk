import * as C from "./Styled";

import IconDeleteB from "../../../assets/actions/deleteb.png";
import IconStarB from "../../../assets/actions/favoritob.png";
import IconSeeB from "../../../assets/actions/seeb.png";

export const TableAreaUsers = () => {
  return (
    <C.Container>
      <div className="container-table100">
        <div className="wrap-table100">
          <div className="table">
            <div className="row header">
              <div className="cell">Nome</div>
              <div className="cell">E-mail</div>
              <div className="cell">Predominancia</div>
              <div className="cell">Data</div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>

            <div className="row">
              <div className="cell" >
                Michel Corrêa Martins
              </div>
              <div className="cell" >
                michel-cm15@hotmail.com
              </div>
              <div className="cell" >
                Condescendente
              </div>
              <div className="cell">
                29/08/2022
              </div>
              <div className="cell " >
                <a href="#">
                  <img
                    className=" icon iconSee"
                    src={IconSeeB}
                    alt="icon see"
                  />{" "}
                </a>               
              </div>
              <div className="cell iconsLista" >
                <a href="#">
                  <img
                    className=" icon iconSee"
                    src={IconDeleteB}
                    alt="icon see"
                  />{" "}
                </a>               
              </div>
              <div className="cell iconsLista" >
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
