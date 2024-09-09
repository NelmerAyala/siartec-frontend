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

    if (email !== "") {
      let resetPassword = await Request.post("/users/reset-password", {
        email,
      });

      if (resetPassword.hasOwnProperty("msg")) {
        setMessageError("");
        setMessageSuccess(resetPassword.msg);
      } else {
        setMessageSuccess("");
        setMessageError(resetPassword.data.msg);
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
          <h4 id="child-modal-title">Recuperación de Contraseña</h4>
          <br />
          <Box
            id="child-modal-description"
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
            >
              Enviar
            </Button>
          </Box>
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
        overflow: "scroll",
        display: "block",
        // top: "10%",
        // bottom: "10%",
        // left: "10%",
        // height: "100%",
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
