import Panel from "../../components/panel/Panel";
import FieldSet from "../../components/fieldSet/FieldSet";
import Button from "../../components/button/Button";
import {
  LoginFormStyled,
  LoginSectionStyled,
  LoginTitleStyled,
} from "./LoginStyles";

function Login() {
  return (
    <LoginSectionStyled>
      <LoginTitleStyled>{"Unite a la comunidad pa...."}</LoginTitleStyled>
      <Panel>
        <LoginFormStyled>
          <FieldSet
            type="text"
            placeholder="Escribí tu username..."
            id="username"
            value=""
            name="username"
            label="User"
            maxLength={10}
          />

          <FieldSet
            type="password"
            placeholder="Escribí tu contraseña..."
            id="password"
            name="password"
            value=""
            label="Password"
            error="Este campo es requerido"
          />

          <Button
            primary
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Enviar!
          </Button>
        </LoginFormStyled>
      </Panel>
    </LoginSectionStyled>
  );
}

export default Login;
