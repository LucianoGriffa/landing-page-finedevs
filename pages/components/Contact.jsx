import { useForm } from '@formspree/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const Contact = () => {
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
    <section id="contact" className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-3/4 flex flex-col text-center justify-center items-center border border-finedevs-white p-5 sm:p-10 md:p-20 lg:p-28 xl:p-36 rounded-3xl gap-6 z-50">
        <p className="font-extrabold text-white text-4xl md:text-5xl lg:text-5xl xl:text-6xl z-50">Let's discuss the <span className="text-finedevs-red">idea</span>.</p>
        <p className="w-5/6 xl:w-4/6 font-normal text-finedevs-gray z-50">Leave us your contact email, and we'll get in touch shortly to discuss your requirements and find the perfect solution for you.</p>
        <form onSubmit={handleAlert} className="flex flex-row gap-4 max-md:flex-col max-md:gap-2 justify-center items-center z-50">
          <input type="email" name="email" id="email" placeholder="Email" className="z-50 w-80 max-sm:w-11/12 p-3 pl-5 pr-5 rounded-3xl border border-white bg-transparent text-white placeholder-white" />
          <button type="submit" disabled={state.submitting} className="z-50 font-extrabold text-finedevs-black uppercase rounded-3xl bg-white p-3 pl-5 pr-5 max-md:w-3/6 max-sm:w-4/6">send email</button>
        </form>
      </div>
    </section>
  )
};
export default Contact;