const Contact=()=>{
    return(
        <div className="p-3 m-3 font-bold text-3xl">
            <h1>Contact Us via form</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2 " placeholder="name"/>
               <input type="text" className="border border-black m-2 p-2 " placeholder="Message/Query"/>
               <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg ">Submit</button>

            </form>
        </div>
    )
};
export default Contact;