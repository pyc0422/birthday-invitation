import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import emailjs from '@emailjs/browser';
const publicKey= "nJCnCKwLrwuEhtQn6";
const Guest = () => {

  const [guest, setGuest] = useState({name:'', email: '', adult:1, kids:1, msg:''});
  const [validated, setValidated] = useState(false);
  const [copy, setCopy] = useState(false)
  const copyText = (e:any) => {
    console.log(e.target.innerText)
    navigator.clipboard.writeText('1318 W 32nd St, Chicago, IL')
    setCopy(true);
  }
  const handleChange = (e:any) => {
    let tag = e.target.name;
    let value = e.target.value;
    setGuest({...guest, [tag]: value})
  }
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false)
      }, 2000)
    }
  }, [copy])

  const handleCount = (e:any, kind: any) => {
    e.preventDefault();
    let btn = e.target.innerText;
    if (btn === '-') {
      setGuest({...guest, [kind]: guest[kind] > 0 ? guest[kind]-1 : 0})
    } else if (btn === '+'){
      setGuest({...guest, [kind]: guest[kind] + 1})
    }
  }
  type Variables = {from_name: string, email: string, message: string}
  const sendMessage = (serviceId:string, templateId:string, variables: Variables) => {
    emailjs.send(serviceId, templateId, variables, publicKey)
    .then((res) => {
      console.log('send', res.text);
      alert('sucessfully')
      setGuest({name:'', email: '', adult:1, kids:1, msg:''})
      setTimeout(() => {
        setValidated(false);
      }, 3000)
    })
    .catch(err => console.error(err))

  }


  const handleSubmit = (e:any) => {
    e.preventDefault();
    const form1 = e.currentTarget;
    if (form1.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const templateId = "template_p7b8iej";
      const serviceId="service_pw9rij5";
      console.log('sended')
      sendMessage(serviceId, templateId, { from_name: guest.name, email:guest.email, message:`adult: ${guest.adult}, kids: ${guest.kids}, Msg: ${guest.msg}`})
    }

  }
  return (
    <form noValidate={validated} onSubmit={handleSubmit}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Guest information</h2>
        <div className="sm:col-span-4">
          <label htmlFor="name" className="mt-5 block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              required
              name="name"
              type="text"
              onChange={handleChange}
              value={guest.name}
              autoComplete="name"
              placeholder={`Kid's Name`}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={guest.email}
                required
                name="email"
                onChange={handleChange}
                type="email"
                autoComplete="email"
                placeholder='xxx@xxx.com'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="custom-number-input sm:col-span-3 h-10">
            <label htmlFor="adult" className="block text-sm font-medium leading-6 text-gray-900">
              Adults Number:
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 border-0 shadow-sm ring-1 ring-inset ring-gray-300">
              <button
                onClick={(e) => handleCount(e, 'adult')}
                className="text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rouned-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin w-50">-</span>
              </button>
              <div className="w-24 flex items-center justify-center">
              <span
                id="adult"
                className="text-gray-700"
              >
                {guest.adult}
              </span>

              </div>
              <button
                onClick={(e) => handleCount(e, 'adult')}
                className="text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rouned-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <div className="custom-number-input sm:col-span-3 h-10">
            <label htmlFor="adult" className="block text-sm font-medium leading-6 text-gray-900">
              Kids Number:
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 border-0 shadow-sm ring-1 ring-inset ring-gray-300">
              <button
                onClick={(e) => handleCount(e, 'kids')}
                className="text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rouned-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin w-50">-</span>
              </button>
              <div className="w-24 flex items-center justify-center">
              <span
                id="kids"
                className="text-gray-700"
              >
                {guest.kids}
              </span>
              </div>
              <button
                onClick={(e) => handleCount(e, 'kids')}
                className="text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rouned-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2">
              <textarea
                name="msg"
                id="msg"
                value={guest.msg}
                onChange={handleChange}
                autoComplete="message"
                placeholder='Any allergy? or anything the host need to know'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        </div>
        <p className="mt-5">Address</p>
        <div
          onClick={copyText}
          className="cursor-pointer w-full py-2 text-left flex items-center flex justify-center text-gray-600"
        >
           <Image src="/location.gif" alt="location" width={20} height={20} className="mr-4"/>
           <div className="group flex relative">
           <span className="font-normal hover:font-semibold">1318 W 32nd</span>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-700 px-1 text-sm text-gray-100 rounded-md absolute translate-x-5 translate-y-full  opacity-0">
              {copy? "Copied" : "Click to Copy"}
            </span>
           </div>

        </div>
        <button type="submit" className="mt-6 py-2 px-10 text-white shadow-sm rounded-full bg-indigo-400 hover:bg-indigo-300">Submit</button>
      </div>
    </form>

  )
}

export default Guest;