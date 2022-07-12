import LoginForm from "@/components/LoginForm";

function login() {
  return (
    <div>
    <LoginForm />
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

export default login;