import { PerfilStyled } from "./style";
import { FaPencil } from "react-icons/fa6";
import { CgAdd } from "react-icons/cg";
import { Select } from "../../../select";

export const PerfilStyleEdit = () => {
  return (
    <PerfilStyled>
      <div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/109912589?v=4"
            alt="imgPerfil"
          />
          <span>Name</span>
          <span>Função</span>
          <button type="button">{<FaPencil size="16" />}</button>
        </div>

        <div>
          <div className="flexRow">
            <span>Telephone</span>
            <button className="buttonAdd" type="button">
              {<CgAdd size="25" />}
            </button>
          </div>

          <div className="flexRow">
            <span>71 9 9130-1551</span>
            <button type="button">{<FaPencil size="16" />}</button>
          </div>
        </div>

        <div className="flexRow">
          <Select
            label="Habilidades"
            listOption={["Opção 1", "Opção 2", "Opção 3", "Opção 4"]}
          />
        </div>

        <div>
          <div className="flexRow">
            <span>Endereço</span>
            <button className="buttonAdd" type="button">
              {<CgAdd size="25" />}
            </button>
          </div>

          <div className="flexRow">
            <span>71 9 9130-1551</span>
            <button type="button">{<FaPencil size="16" />}</button>
          </div>
        </div>

        <div>
          <div className="flexRow">
            <span>Educação</span>
            <button className="buttonAdd" type="button">
              {<CgAdd size="25" />}
            </button>
          </div>

          <div className="flexRow">
            <span>Desenvolvimento Full stack</span>
            <span>21/05/2020</span>
            <span>21/05/2023</span>
            <button type="button">{<FaPencil size="16" />}</button>
          </div>
        </div>

        <div>
          <div className="flexRow">
            <span>Experiência</span>
            <button type="button">{<CgAdd size="25" />}</button>
          </div>
          <div className="flexRow">
            <span>Operador de empilhadeira</span>
            <span>21/05/1990</span>
            <span>21/05/1990</span>
            <button type="button">{<FaPencil size="16" />}</button>
          </div>
        </div>
      </div>
    </PerfilStyled>
  );
};