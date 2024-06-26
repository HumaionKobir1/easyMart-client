import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-hot-toast'
import signupImg from '../../assets/images/signup/signin.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { TbFidgetSpinner } from 'react-icons/tb';

const SignUp = () => {
  const { setLoading, loading, signInWithGoogle, createUser, updateUserData} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordError, setPasswordError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name)
    setPasswordError(' ')

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.')
          }
      
          // Capital letter check
          if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one capital letter.')
          }
      
          // Special character check
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError('Password must contain at least one special character.')
          }

    // Image Upload
    const image = form.image.files[0]
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imageData => {
     const imageUrl = (imageData.data.display_url)
      createUser(email, password)
      .then(result => {        
        console.log(result);
        updateUserData(result.user, name, imageUrl)
        .then(() => {
        const saveUser = {
                name: name,
                email: email,
                image: imageUrl,
                role: 'customer'
        }
        console.log(saveUser);
        // save user to db
      fetch('https://easymart-server.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(saveUser)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
            toast.success('Login successful')
        }
      })
        navigate(from, {replace: true});
    })
    .catch(error => {
        setLoading(false);
        toast.error(error.message);
        
    })
      })
      .catch(error => {
          console.log(error.message)
          toast.error(error.message);
          
      })

    })
    .catch(err => {
      setLoading(false);
      console.log(err.message)
      toast.error(err.message);
    })
    
  }


  // Handle Google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            image: loggedUser.photoURL,
            role: 'admin'
    }
    // save user to db
      fetch('https://easymart-server.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(saveUser)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
            toast.success('Login successful')
        }
      })
        navigate(from, {replace: true});
    })
    .catch(error => {
        setLoading(false);
        toast.error(error.message);
        
    })
}
  return (
    <div className='flex shadow-2xl bg-base-100 justify-center items-center min-h-screen'>
    <div className='w-[40%]'>
        <img className='w-full h-full' src={signupImg} alt="" />
    </div>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to EasyMart</p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
                {loading?<TbFidgetSpinner size={24} className='mx-auto animate-spin'></TbFidgetSpinner> : 'Continue'}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp