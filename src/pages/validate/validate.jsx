import "./validate.css";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validateNewUser } from "../../API/HTTP-protocols/http-protocols";
import Header from "../../elements/header/header";

function Validate() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  async function validate() {
    const r = await validateNewUser(params.get("token"));
    console.log(r);
    if (r.status === 200) {
      setTimeout(
        () => {
          navigate("/");
        },

        5000
      );
    }
  }

  useEffect(() => {
    validate();
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <section className="p-5 d-flex flex-column align-items-center">
        <p className="text-start">
          Gracias por registrarte. Queremos darte la bienvenida a la página de
          VIDEOGAMES, en breves momentos será redirigido a la página principal,
          donde podrá iniciar sesión y disfrutar de todo el contenido.
        </p>
        <p className="text-start">
          Si no eres redirigido en unos segundos, por favor, haz click en el
          siguiente botón.
        </p>
        <Button
          style={{
            width: "max-content",
          }}
          onClick={() => navigate("/")}
        >
          Redirigir
        </Button>
      </section>
    </React.Fragment>
  );
}

export default Validate;
