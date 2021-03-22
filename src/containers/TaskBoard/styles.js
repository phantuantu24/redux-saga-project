const styles = (theme) => ({
  taskboard: {
    display: "flex",
    alignItems: "center"
  },
  shape: {
    // backgroundColor: "red",
    // color: "white",
    // borderColor: "#cccccc",
    // borderRadius: 4,
    backgroundColor: theme.shape.backgroundColor,
    color: theme.shape.textColor,
    borderColor: theme.shape.border,
    borderRadius: theme.shape.borderRadius,
    padding: 20,
    margin: 10
  }
})

export default styles