export default function Commonbtn(props) {
  return (
    <>
      <button className="common_btn items-center sm:gap-5 gap-3 px-6 sm:py-3.5 py-3  rounded text-[#FDFDFF] bg-gradientbtn">
        {props.btnname}
      </button>
    </>
  );
}
