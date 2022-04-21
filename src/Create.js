const Newtip = () => {
    return (  
       <div className="create">
           <h2>Add a New Tip</h2>
           <form> 
               <label>Title:</label>
               <input 
               type ="text"
               required/>
               <label>Body:</label>
               <textarea required
               ></textarea>
               <label>Author:</label>
               <select>
                   <option value=""></option>
                   <option value=""></option>
               </select>
               <button>Add a New Tip</button>
           </form>
       </div>
    );
}
 
export default Newtip;