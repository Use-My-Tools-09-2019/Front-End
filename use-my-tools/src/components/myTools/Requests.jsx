import React, { useCallback, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//styles
import * as color from "../../styles/color";
import { OptionButton } from "../styled-components/requests";

//redux
import { useDispatch } from "react-redux";
import { deleteRequest, getRequests } from "../../store/actions";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: `1px solid ${color.primary}`,
    padding: "20px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: color.primary,
    background: color.background,
    boxShadow: "none",
  },
}));

const buttonDiv = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

export default function Requests({ requests, handleModalClose }) {
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(getRequests());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const classes = useStyles();
  console.log(requests);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {requests.map((request) => (
          <>
            <Grid container item xs={12} spacing={1} key={request.id}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>{request.user_name}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  {request.request_length} Days
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>{request.tool_name}</Paper>
              </Grid>
              <div style={buttonDiv}>
                <OptionButton
                  accept='true'
                  onClick={() => {
                    dispatch(deleteRequest(request.id))
                    handleModalClose()
                  }}
                >
                  Accept
                </OptionButton>
                <OptionButton onClick={() => dispatch(deleteRequest(request.id))}>
                  Decline
                </OptionButton>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}
