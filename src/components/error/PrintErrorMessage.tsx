const PrintErrorMessage = (props: any) => {
  return (
    <div
      className="body warning"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {props.message}
    </div>
  );
};

export default PrintErrorMessage;
