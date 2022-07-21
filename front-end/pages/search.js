import { TextField } from "@mui/material";

function search() {
  return (
    <div>
      <TextField />
    </div>
  );
}

export async function getStaticProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default search;