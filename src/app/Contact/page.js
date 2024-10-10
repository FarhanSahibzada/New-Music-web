import react from "react"
import { Meteors } from "@/Components/ui/meteors"
import { Input } from "postcss"
import { Button } from "@/Components/ui/moving-border"

function Page() {
  return (
    <div className='flex min-h-screen w-full justify-center items-center pt-28 dark:bg-black/[0.96] ' >
      <div className='px-6  max-w-2xl text-center mx-auto'>
        <h2 className='text-white font-bold text-4xl sm:text-7xl mb-8'> Contact US </h2>
        <p className='text-center text-teal-400 text-base  mb-8 font-semibold'>We&apos;re here to help with any questions about our courses. programs or events. Reach out and let
          us know how we can assist you in your musical journey
        </p>
        <div className="w-full mb-14 ">
          <input className='w-full border dark:border-white/[0.5] border-black/[0.5] rounded-lg py-2 
       px-4 text-base text-white  dark:bg-black  ' placeholder="Title" />
        </div>
        <div className="w-full h-[120px] ">
          <textarea className='w-full  h-full border dark:border-white/[0.5] border-black/[0.5] rounded-lg py-2 
       px-4 text-base  text-white  dark:bg-black  ' placeholder="Write your message" />
        </div>
        <div className="text-right mt-6">
          <Button
            type='submit'
            borderRadius="1.75rem"
            className="bg-white  dark:bg-black/[0.02] text-black text-xl align-bottom font-semibold dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Submit
          </Button>
        </div>
        <Meteors number={50} />
      </div>
    </div >
  )
}

export default Page