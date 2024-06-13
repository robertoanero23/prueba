
import '../index.css';




export default function SegundaVentana() {

    
    return(
        <div>
        <div className='bar-logo'>           
        <img className='logo' src="/Logo_Devoteam.png" alt="" />
        <div className='Nombres'>Roberto</div>
        <span className="avatar-status avatar-busy">
                            <img src="public/icon_gestion_cv.jpg" alt="avatar"  id="img-icono"/>
                        </span>       
        </div>
        <div id="headOfBodyContent">
                
                <div className="col-12 encabezadoBody breadcrumb breadcrumb-custom">
                    <a href="/Home/Index" className="breadcrumb__step breadcrumb__step--active "><i><img className="image-sidebar  iconEncabezadoBody" src="public/home_white.png"/></i></a>
                    
                                <a className="breadcrumb__step breadcrumb__step--active text-white">Grados de avance</a>
                                <a className="breadcrumb__step text-dark border-left-0 ">Grados de avance</a>
            
                </div>           
        </div>
       
       </div> 
       
    )
       
            
        
       

    
}
