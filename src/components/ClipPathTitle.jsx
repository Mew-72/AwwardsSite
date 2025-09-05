
const ClipPathTitle = ({title, color, bg, className, borderColor}) => {
  return (
      <div className="general-title">
        <div style={{
              borderColor: borderColor,
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        }} className={`${className} border-[.5vw] text-nowrap opacity-0`} >
              <div className="md:px-14 pb-3 px-3 md:pt-0" style={{backgroundColor: bg}}>
                  <h2 style={{color: color}}>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default ClipPathTitle