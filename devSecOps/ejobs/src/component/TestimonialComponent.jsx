
function TestimonialComponent({customerName, customerTitle, customerTestimonial}) {
  return (
    <div className="w-full bg-slate-50 px-10 py-6 text-center">
        <h2 className="text-md font-bold text-base">{customerName}</h2>
        <h1 className="text-sm text-slate-400 my-3">{customerTitle}</h1>
        <p className="text-md text-lg">{customerTestimonial}</p>
    </div>
  )
}

export default TestimonialComponent