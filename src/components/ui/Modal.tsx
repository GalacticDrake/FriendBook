import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#FFFFFF",
  textTransform: "none",
  fontFamily: '"Poppins", sans-serif',
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Modal = (props: any) => {
  const { viewModal, handleClose, children } = props || {};
  const { index, selectedIndex } = props || {};

  const showHideClassName =
    viewModal && index === selectedIndex
      ? "modal displayBlock"
      : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <div className="overlay" onClick={handleClose}></div>
      <section className="modalMain">
        {children}
        <CustomButton type="button" onClick={handleClose}>
          Close
        </CustomButton>
      </section>
    </div>
  );
};

export default Modal;
