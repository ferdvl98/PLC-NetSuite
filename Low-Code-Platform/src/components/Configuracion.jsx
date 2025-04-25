import './Configuracion.css'

export const Config = () => {
  return (
    <>
      <div className="config-section">
        <label>ID del Campo:</label>
        <input type="text" placeholder="Ej: custpage_cliente"/>
      </div>
      <div className="config-section">
        <label>Etiqueta:</label>
        <input type="text" placeholder="Ej: Nombre del Cliente"/>
      </div>
      <div className="config-section">
        <label>
        Campo Obligatorio
          <input type="checkbox"/>
        </label>
      </div>
    </>
  )
}