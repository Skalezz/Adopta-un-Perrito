export const PostCard = ({
    id,
    image_url,
    nombre, 
    descripcion,
    raza,
}) => {
  return ( 
        <>
            <div className="card" style={{width: '18rem'}}>
                <img 
                    className="card-img-top"
                    src={image_url}
                    alt="foto de la mascota a adoptar" 
                />
                <div className="card-body">
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                </div>
                <span class="badge text-bg-primary">{raza}</span>
            </div>
        </>
  )
};


