import { useEffect, useState } from 'react'
import { Components } from './Components'
import { Config } from './Configuracion'
import './Container.css'
import { Desing } from './Desing'
import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable';

export const Container = () => {

  const [fieldsF, setFieldsF] = useState([])

  const fecthFields = async () => {
    try{
      const response = await fetch('http://localhost:3001/api/data')
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await response.json()
      setFieldsF(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fecthFields();
  }, [])

    // Componentes en el área de diseño
  const [designComponents, setDesignComponents] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleDragStart = (event) => {
    const { active } = event;
    const item = fieldsF.find(field => field[1] === active.id);
    if (item) {
      setActiveComponent(item);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    // Si se soltó sobre el área de diseño
    if (over?.id === 'design-area') {
      if (active.id && !designComponents.some(comp => comp[1] === active.id)) {
        const newComponent = fieldsF.find(field => field[1] === active.id);
        if (newComponent) {
          setDesignComponents([...designComponents, newComponent]);
        }
      }
    }
    
    setActiveComponent(null);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    
    if (!over || over.id === 'design-area') return;
    
    if (active.id !== over.id) {
      const oldIndex = designComponents.findIndex(comp => comp[1] === active.id);
      const newIndex = designComponents.findIndex(comp => comp[1] === over.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        setDesignComponents(arrayMove(designComponents, oldIndex, newIndex));
      }
    }
  };

  return (
    <div className="container">
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}>
      {/** Panel de Componentes */}
      <div className='components-panel'>
        <h3>Componentes</h3>
        <div className='components-list'>
          {
            fieldsF.map( field => {
              const {type, id} = field
              // console.log(type, id)
              return (
                <Components
                  key={id} // Preferentemente usar id de una BBDD
                  id = {id}
                  field={type}
                  typeField={id}
                  draggable
                />
              )
            })
          }
        </div>
      </div>

      {/** Panel de Diseño */}
      <div className='design-area'>
        <Desing designComponents = {designComponents}/>
      </div>

      {/* Overlay para el arrastre */}
      <DragOverlay>
          {activeComponent ? (
            <Components
              field={activeComponent[0]}
              typeField={activeComponent[1]}
            />
          ) : null}
        </DragOverlay>


      {/** Panel de configuración */}
      <div className='config-panel'>
        <h3>Configuración</h3>
        <Config/>
      </div>
      </DndContext>
    </div>
  )
}