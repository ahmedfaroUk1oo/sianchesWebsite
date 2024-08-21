import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import Link from "next/link";

const StaggeredDropDown = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex items-center justify-center  ">
      <motion.div ref={dropdownRef} animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50   transition-colors"
        >
          <span className="font-medium text-[18px] max-xl:text-[12px]">{title}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col z-50 gap-2 p-2   rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-fit overflow-hidden"
        >
          {options?.map((item) => (
            <Link href={item.link} key={item.id}>
              <Option setOpen={setOpen} Icon={item.icon} text={item.title} />
            </Link>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen, Icon }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-[10px]   text-[16px] max-xl:text-[12px] font-medium whitespace-nowrap  text-black transition-colors cursor-pointer text-start w-[100px] px-4 mx-4 py-2 hover:bg-[#000] hover:text-white hover:rounded-md border-l-2 border-l-black "
    >
      <motion.span variants={actionIconVariants} className="">
        <p>{Icon}</p>
      </motion.span>
      <span className="flex-grow">{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};