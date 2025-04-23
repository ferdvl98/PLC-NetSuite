
import './Footer.css'

export function Footer ({ filter }) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filter, null, 2)
      }
      <h4>Prueba técnica de React ⚛️ － <span>@ferdvl</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
