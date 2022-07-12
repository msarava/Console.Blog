import SignupForm from "@/components/SignupForm";


const signup = () => {
  return (
    <div>
      <SignupForm/>
    </div>
  );
}

export const getStaticProps = async (ctx) => {


  return {
    props:{
      data:null
    }
  }
}

export default signup;