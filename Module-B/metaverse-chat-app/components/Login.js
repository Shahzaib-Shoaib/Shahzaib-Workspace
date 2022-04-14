import { useMoralis } from 'react-moralis'
import Image from 'next/image'

function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black ">
      <h1>i am login</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4   ">
        <Image
          className="rounded-full object-cover"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />

        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
        >
          Login to the Metaverse
        </button>
      </div>

      <div className="h-[96.7vh] w-full">
        {' '}
        {/* h-screen in build */}
        <Image
          src="https://links.papareact.com/55n"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  )
}

export default Login
