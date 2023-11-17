import CenteredBox from "./CenteredBox";
import { Avatar, Button, Grid, Icon, Link, Typography } from "@mui/material";

const StatusQuery = ({ message, links = [], isError = false, closeFn }) => {
  const bgColor = !isError ? "success.main" : "error.main";
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar sx={{ width: 100, height: 100, bgcolor: bgColor }}>
          <Icon sx={{ fontSize: 50 }}>{!isError ? "check" : "cancel"}</Icon>
        </Avatar>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6">
          {!isError ? message : "Ha ocurrido un error"}
        </Typography>
      </Grid>

     {/*  {isError ? (
        <>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link href={"/"}>Volver al catálogo</Link>
          </Grid>
          <Button onClick={setStatus("ready")}>Intentar de nuevo</Button>
        </>
      ) : (
        links.map((link) => (
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link href={link.url}>{link.text}</Link>{" "}
          </Grid>
        ))
      )} */}
      <Button onClick={closeFn}>
        Volver
      </Button>
    </Grid>
  );
};

export default StatusQuery;
