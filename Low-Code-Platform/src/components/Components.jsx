import './Components.css';
import {useDraggable} from '@dnd-kit/core';

export const Components = ({id, field, typeField, draggable = false}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: !draggable
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    opacity: 0.8,
    zIndex: 1000
  } : undefined;

  return (
    <div 
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      id={typeField} 
      className={`component-item ${draggable ? 'draggable' : ''}`}
    >{field}
    </div>
  )
}