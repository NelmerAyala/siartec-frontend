import { LoginWithGoogle } from "@/components/auth/auth-google"
import { Label } from "@mui/icons-material"
import { Button } from "@mui/material"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { FcGoogle } from "react-icons/fc";


export default function SignInForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-1/3 bg-white rounded shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6">Iniciar Sessiòn</h1>
        {/* <Button className="flex items-center w-full gap-4 px-12 mb-4 bg-transparent rounded-full" variant="outline"> */}
        {/* <FcGoogle />
           */}
        <LoginWithGoogle></LoginWithGoogle>
        {/* </Button> */}
        <div className="text-center pt-4 pb-4">
          <p className="text-grey-dark text-lg font-bold">
            o con
          </p>
        </div>
        <div></div>
        <form className="mb-4 md:flex md:flex-wrap md:justify-between">
          <div className="flex flex-col mb-4 md:w-full">
            <Label>
              Correo Electónico
            </Label>
            <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <Label >
              Contraseña
            </Label>
            <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full mt-6 bg-red-600 rounded-full hover:bg-red-700">
              Iniciar Sesión
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Olvidó su contraseña?
            </a>
          </div>
        </form>
        <div className="text-center">
          <p className="text-grey-dark text-sm">
            No tiene una cuenta?{" "}
            <a href="#" className="no-underline text-blue font-bold">
              Registrarse
            </a>
            .
          </p>
        </div>
      </div >
    </div >
  )
}