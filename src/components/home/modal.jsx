import * as React from "react";
import Modal from "@mui/material/Modal";
import SignInOutContainer from "./tab-sign";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Alert, Grid, TextField } from "@mui/material";
import Request from "@/config/Request";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [email, setEmail] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [messageSuccess, setMessageSuccess] = React.useState("");

  const handleCloseChildren = () => {
    props.setOpenChildren(false);
    setMessageError("");
    setMessageSuccess("");
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let result;

    if (email !== "") {
      // result = await Request.post("/sendEmail", { email });
      result = { status: 200, message: "Correo de recuperación enviado." };

      if (result?.error && result.error !== null) {
        let message = "Error enviando mensaje";
        setMessageError(message);
        setMessageSuccess("");
      } else {
        setMessageSuccess(result.message);
        setMessageError("");
      }
    } else {
      setMessageError("Debe ingresar correo electrónico");
    }
  };

  return (
    <React.Fragment>
      <Modal
        open={props.openChildren}
        onClose={handleCloseChildren}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          {messageError !== "" ? (
            <Alert severity="error" hidden={false}>
              {messageError}
            </Alert>
          ) : (
            <></>
          )}
          {messageSuccess !== "" ? (
            <Alert severity="success" hidden={false}>
              {messageSuccess}
            </Alert>
          ) : (
            <></>
          )}
          <h2 id="child-modal-title">Recuperación de Contraseña</h2>
          <p id="child-modal-description">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mb: 2 },
              }}
              noValidate={false}
              onSubmit={handleOnSubmit}
            >
              <TextField
                color="secondary"
                label="Correo electrónico"
                placeholder="Ingrese correo electrónico"
                type="email"
                name="email"
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
                // onClick={() => handleSubmit()}
              >
                Enviar
              </Button>
            </Box>
          </p>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const SignInOutModal = (props) => {
  const router = useRouter();
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        position: "absolute",
        height: "100%",
        display: "block",
      }}
    >
      <>
        <SignInOutContainer
          openChildren={props.openChildren}
          setOpenChildren={props.setOpenChildren}
        />
        <ChildModal
          setOpenChildren={props.setOpenChildren}
          openChildren={props.openChildren}
        />
      </>
    </Modal>
  );
};

export default SignInOutModal;
