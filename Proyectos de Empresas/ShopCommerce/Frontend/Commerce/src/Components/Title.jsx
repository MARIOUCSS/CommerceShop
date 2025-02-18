function Title({ title, titleStyles }) {
  return (
    <div className={`${titleStyles} pb-20`}>
      <span className="after:rounded text-[25px] leading-tight md:text-[35px] md:leading-[1.3] mb-4 font-bold pb-1 relative after:w-2/3 after:bg-secondary after:absolute after:right-0">
        {title}
      </span>
    </div>
  );
}

export default Title;
