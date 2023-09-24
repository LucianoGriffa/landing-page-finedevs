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
  <section id='home' className="w-full h-screen flex min-xl:flex-row bg-finedevs-black p-0 m-0 min-xl:absolute">
    <svg xmlns="http://www.w3.org/2000/svg" width="519" height="536" viewBox="0 0 519 536" fill="none" className="w-full h-full bottom-0 left-0 relative max-lg:hidden">
      <g filter="url(#filter0_f_1_1133)">
        <path d="M-427.36 478.333C-434.015 335.481 -110.378 -5.17132 -103.393 233.257C-96.4088 471.685 -56.6122 204.766 242.019 300.972C540.649 397.178 248.385 703.145 -9.4666 715.158C-267.318 727.171 -420.704 621.185 -427.36 478.333Z" fill="#FF3434"/>
      </g>
      <defs>
        <filter id="filter0_f_1_1133" x="-577.461" y="0.861774" width="1095.59" height="865.225" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1_1133"/>
        </filter>
      </defs>
    </svg>
    <div className="w-full flex flex-col justify-center items-center gap-10 max-md:gap-6 text-center">
      <p className="font-extrabold text-white max-md:text-5xl max-sm:text-4xl text-7xl">Get <br /><span className="text-finedevs-red">Advanced<br /></span> Software<br /> Development<br /></p>
      <p className="w-4/6 lg:w-full font-normal text-finedevs-grey max-md:text-sm text-md">We stand out by using the best technologies in the market, ensuring outstanding performance and guaranteed results.</p>
      <form onSubmit={handleAlert} className="flex flex-row gap-4 max-md:flex-col max-md:gap-2 justify-center items-center">
        <input type="email" name="email" id="email" placeholder="Email" className="w-80 max-sm:w-11/12 p-3 pl-5 pr-5 rounded-3xl border border-white bg-transparent text-white placeholder-white" />      
        <button type="submit" disabled={state.submitting} className="font-extrabold text-finedevs-black uppercase rounded-3xl bg-white p-3 pl-5 pr-5 max-md:w-3/6 max-sm:w-4/6">send email</button>
      </form>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="587" viewBox="0 0 400 587" fill="none"  className="w-full h-full top-0 right-0 relative max-lg:hidden">
      <g filter="url(#filter0_f_1_1134)">
        <path d="M502 107.861C502 257.485 352.209 597.753 354.029 348.224C355.848 98.695 332.803 375.723 203.025 260.634C73.2469 145.545 208.483 -160 322.494 -160C436.505 -160 502 -41.7619 502 107.861Z" fill="#FF3434"/>
      </g>
      <defs>
        <filter id="filter0_f_1_1134" x="0" y="-310" width="652" height="897" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1_1134"/>
        </filter>
      </defs>
    </svg>
  </section>
  )
};
export default HomePage;