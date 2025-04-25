import { Components } from './Components';
import './Desing.css'

export const Desing = ({ designComponents }) => {
  return ( 
    <div className="preview-placeholder">
        {designComponents.map((component, index) => {
          const [type, id] = component;
          return (
            <Components
              key={id} // Preferentemente usar id de una BBDD
              id = {id}
              field={type}
              typeField={id}
            />
          );
        })}
  
      Arrastra componentes aquí para diseñar tu módulo.
    </div>
  )
}