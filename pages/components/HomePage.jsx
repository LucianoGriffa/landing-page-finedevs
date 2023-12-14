import { useForm } from '@formspree/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const HomePage = () => {
  const [state, handleSubmit] = useForm("meqbergj");
  const [isAlertShown, setIsAlertShown] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  useEffect(() => {
    if (isAlertShown && state.succeeded) {
      Toast.fire({
        icon: 'success',
        title: '¡Email sent successfully!'
      })
      setIsAlertShown(false);
    } else if (isAlertShown && state.errors) {
      Toast.fire({
        icon: 'error',
        title: '¡Try to send again!'
      })
      setIsAlertShown(false);
    }
  }, [state.succeeded, state.errors, isAlertShown]);
  const handleAlert = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setIsAlertShown(true);
  };
  return (
    <section id='home' className="w-full h-screen flex min-xl:flex-row bg-finedevs-black p-0 m-0 min-xl:absolute z-50">
      <div className="w-full flex flex-col justify-center items-center gap-10 max-md:gap-6 text-center">
        <p className="font-extrabold text-white max-md:text-5xl max-sm:text-4xl text-7xl z-50">Get <br /><span className="text-finedevs-red">Advanced<br /></span> Software<br /> Development<br /></p>
        <form onSubmit={handleAlert} className="flex flex-row gap-4 max-md:flex-col max-md:gap-2 justify-center items-center">
          <input type="email" name="email" id="email" placeholder="Email" className="z-50 w-80 max-sm:w-11/12 p-3 pl-5 pr-5 rounded-3xl border border-white bg-transparent text-white placeholder-white" />      
          <button type="submit" disabled={state.submitting} className="z-50 font-extrabold text-finedevs-black uppercase rounded-3xl bg-white p-3 pl-5 pr-5 max-md:w-3/6 max-sm:w-4/6">send email</button>
        </form>
      </div>
    </section>
  )
};
export default HomePage;