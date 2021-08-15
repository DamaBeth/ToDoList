import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: "#242426",
    color: "#2EFF22"
  },
  input: {
    color: "#2EFF22"
  }
};

class colortypes extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#242426"
          }}
        >
          <TextField
            id="Password"
            variant="outlined"
            required
            label="Password"
            InputProps={{
              className: classes.input
            }}
            style={{ width: "150px", margin: "20px" }}
          />
          <Button
            style={{ width: "150px", margin: "20px" }}
            color="primary"
            variant="contained"
            onClick={() => console.log("OK")}
          >
            OK
          </Button>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(colortypes);