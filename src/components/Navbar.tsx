
const Navbar = () => {
  return (
    <div className="flex w-full border-b-2">
        <div className="flex basis-[calc(100%/3)] py-12 px-8 gap-4 border-l-2 items-center content-start">logo</div>
        <div className="flex basis-[50%] py-12 px-8 gap-24 border-l-2 justify-center items-center">
            <div className="">ABOUT</div>
            <div className="">WORK</div>
        </div>
        <div className="flex py-12 px-8 gap-12 border-l-2 justify-center items-center">
            <div className="">1</div>
            <div className="">2</div>
            <div className="">3</div>
        </div>
        <div className="flex py-12 px-8 gap-4 border-l-2 justify-center items-center">GET IN TOUCH</div>
    </div>
  )
}

export default Navbar