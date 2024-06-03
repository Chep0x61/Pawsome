const Avatar = () => {
    return (
        <div className="flex gap-4">
  <div className="relative inline-flex my-4">
    <img
      src="/doggo.jpg"
      alt="avatar"
      className="border border-4 border-[#d89ca8] inline-block relative object-cover object-center rounded-full w-44 h-44 md:w-52 md:h-52"
    /><span
      className="absolute min-w-[18px] min-h-[18px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[14%] right-[14%] translate-x-2/4 -translate-y-2/4 bg-green-500 text-white border-2 border-white"
    ></span>
  </div>
</div>
    )
}

export default Avatar;