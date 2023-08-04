'use client';
import { useReducer } from 'react';
import { ChevronDownIcon, CheckCircledIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { useToast } from '@/components/ui/use-toast';

type reducerAction = {
  type: string;
  field: string;
  value: string;
};

export type initialState = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const initialState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phoneNumber: '',
  message: '',
};

function formReducer(state: initialState, action: reducerAction) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function Example() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      toast({
        description: (
          <p className='inline p-4 my-4 text-slate-600'>
            <EnvelopeClosedIcon className='h-4 w-4 text-sky-500 inline-block mr-2' />
            Sending Message...
          </p>
        ),
      });
      const sendEmail = fetch('http://localhost:3000/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });

      const data = await sendEmail;
      const response = await data.json();
      dispatch({ type: 'RESET', field: '', value: '' });
      toast({
        description: (
          <p className='inline p-4 my-4 text-slate-600'>
            <CheckCircledIcon className='h-4 w-4 text-green-300 inline-block mr-2' />
            Message Sent!
          </p>
        ),
      });
      // console.log(response);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div className='relative isolate  px-6  lg:px-8'>
      <h2 className='text-3xl font-bold text-slate-600 sm:text-4xl  mb-4 px-2'>
          Get in touch
        </h2>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-40 transform-gpu  blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <form
        action='#'
        method='POST'
        className='mx-auto  max-w-3xl '
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-semibold leading-6 text-primary'
            >
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='firstName'
                id='firstName'
                value={state.firstName}
                onChange={handleChange}
                autoComplete='given-name'
                className='bg-backgroundColor-glass  block w-full rounded-md border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-semibold leading-6 text-primary'
            >
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='lastName'
                value={state.lastName}
                onChange={handleChange}
                id='lastName'
                autoComplete='family-name'
                className='bg-backgroundColor-glass  block w-full rounded-md border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm font-semibold leading-6 text-primary'
            >
              Company
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='company'
                value={state.company}
                onChange={handleChange}
                id='company'
                autoComplete='organization'
                className='bg-backgroundColor-glass  block w-full rounded-md border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-primary'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
                id='email'
                autoComplete='email'
                className='bg-backgroundColor-glass  block w-full rounded-md border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='phoneNumber'
              className='block text-sm font-semibold leading-6 text-primary'
            >
              Phone number
            </label>
            <div className='relative mt-2.5'>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <label htmlFor='country' className='sr-only'>
                  Country
                </label>
                <select
                  id='country'
                  name='country'
                  className='h-full rounded-md border-0 bg-backgroundColor-glass  bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                  aria-hidden='true'
                />
              </div>
              <input
                type='tel'
                name='phoneNumber'
                id='phoneNumber'
                value={state.phoneNumber}
                onChange={handleChange}
                autoComplete='tel'
                className='bg-backgroundColor-glass  block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold leading-6 text-primary'
            >
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                name='message'
                id='message'
                rows={4}
                value={state.message}
                onChange={handleChange}
                className='block w-full rounded-md bg-backgroundColor-glass  border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md shadow-md transition-all hover:border-2 hover:border-indigo-500 duration-200 bg-slate-50 hover:text-indigo-500 hover:shadow-xl px-3.5 py-2.5 text-center text-sm font-semibold text-slate-600   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {`Let's talk`}
          </button>
        </div>
      </form>
    </div>
  );
}
