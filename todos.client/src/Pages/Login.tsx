import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
function Login() {
  const labelClass =
    "after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-al after:absolute after:-bottom-1.5 after:bloc after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white";
  const inputClass =
    'peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-white';
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async () => {
    // Simulate an asynchronous action, like an API call
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.success('Message sent successfully!');
    navigate('/');
  };
  return (
    <div className='flex flex-col justify-center w-full p-5 md:p-0 h-full absolute'>
      <div className='rounded-xl mx-[20px] sm:mx-[20vw] lg:mx-[30vw] xl:w-[450px] h-min-[300px] xl:mx-auto pb-[20px] px-10 bg-gray-800 drop-shadow-2xl pt-4'>
        <h1 className='text-3xl font-bold text-center text-white pb-0 pt-2'>
          Login
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center w-full max-w-lg mx-auto p-5 md:p-0'
        >
          <div className='relative h-11 w-full'>
            <input
              {...register('username', { required: true })}
              className={inputClass}
              placeholder=' '
            />
            <label className={labelClass}>Username</label>
          </div>
          {!errors.username && <p className='py-3'> </p>}
          {errors.username && (
            <p className='text-red-400'>
              Username is required.
            </p>
          )}
          <div className='relative h-11 w-full'>
            <input
              {...register('password', { required: true })}
              className={inputClass}
              placeholder=' '
            />
            <label className={labelClass}>Password</label>
          </div>
          {!errors.password && <p className='py-3'> </p>}
          {errors.password && (
            <p className='text-red-400'>
              Password is required.
            </p>
          )}

          <div className='flex justify-center mt-5 w-[100%] gap-5 px-10 h-[48px] '>
            <button
              className={`w-full min-w-[100px] rounded-lg border-1 border max-w-[250px] border-accent-dark bg-accent-dark text-white relative ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <ClipLoader
                    color={'#fff'}
                    loading={isSubmitting}
                  />
                </div>
              )}
              {!isSubmitting ? 'Login' : null}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
