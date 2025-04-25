import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Plataforma Low-Code NetSuite</h1>
      <div className='botons'>
        <button className="save-btn">Guardar</button>
        <button className="export-btn">Exportar a NetSuite</button>
      </div>
    </header>
  )
}