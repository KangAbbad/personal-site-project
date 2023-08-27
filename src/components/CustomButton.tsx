import { FaCircleArrowDown } from 'react-icons/fa6'

export const ScrollForMoreButton = () => {
  return (
    <button className="border border-white rounded-full flex items-center justify-center gap-2 overflow-hidden hover:bg-white/10 active:bg-white/20 w-[150px] text-white text-xs sm:text-sm py-2">
      Scroll for More <FaCircleArrowDown fontSize="16px" />
    </button>
  )
}
