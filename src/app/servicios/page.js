import AllServices from "../components/AllServices"
import styles from "../constants/style"

export const metadata = {
  alternates: {
    canonical: "https://merlintech.com.ar/servicios",
  },
}

function Servicios() {
  return (
    <div className={``}>
      <AllServices />
    </div>
  )
}

export default Servicios