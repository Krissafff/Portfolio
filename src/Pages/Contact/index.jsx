
import git from '../../img/github.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';



export default function Contact(){
    return(
        <div class="container">
        <div class="row">
            <div class="formulario grid-12">
              <div>
               
              </div>
              
                <form  action="https://formsubmit.co/henrique_krf@outlook.com" method="POST" >
                  <label class="grid-6 mt-2">Name: <input type="text" name="name" placeholder="Name" class="form" required /></label>
                  <label class="grid-6 m-2">Email: <input type="email" name="email" placeholder="exemple@exe.com"/></label>
                  <label class="grid-4 m-2">Category: 
                  <select>
                    <option value="">Web Site</option>
                    <option value="">Mobile</option>
                    <option value="">Job</option>
                    <option value="">Suggestion</option>
                  </select>
                </label>
                  <label class="grid-4 mt-2">Number phone: <input type="tel" name="phone" placeholder="(xx) xxxxx-xxxx"/></label>
                  <label class="grid-12 mt-2">Description: 
                  <textarea name="message" rows="5" cols="33">
                  </textarea>
                  </label>
                  <input type="submit" value="Enviar" class="btn-form  grid-12"/>
                </form>
                
          </div>
          
        </div>
    </div>
    );
}